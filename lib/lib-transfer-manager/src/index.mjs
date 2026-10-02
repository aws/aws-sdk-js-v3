import { S3Client } from "@aws-sdk/client-s3";
  import { S3TransferManager } from "@aws-sdk/lib-transfer-manager/transfer-manager";
  import { performance } from "node:perf_hooks";
  import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
  import { randomBytes } from "node:crypto";
  import * as path from "node:path";
  import * as os from "node:os";
  
  const [, , BUCKET, KEY, REGION, DEST, MAX = "256", RUNS = "3"] = process.argv;
  if (!BUCKET || !KEY || !REGION || !DEST) {
    console.error("usage: node index.mjs BUCKET KEY REGION DEST_PATH [MAX_CONCURRENCY] [RUNS]");
    process.exit(2);
  }
  
  const maxConcurrency = parseInt(MAX, 10);
  const runs = parseInt(RUNS, 10);
  const partSize = 8 * 1024 * 1024; // 8 MiB
  const oDirectRequested = process.env.TM_O_DIRECT === "1";
  const uvPool = process.env.UV_THREADPOOL_SIZE ?? "default(4)";
  
  // ---- run id + results dir ------------------------------------------------
  const pad = (n) => String(n).padStart(2, "0");
  const d = new Date();
  const stamp =
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}`;
  const runId = `${stamp}-${randomBytes(3).toString("hex")}`;
  const outDir = path.resolve("results", runId);
  mkdirSync(outDir, { recursive: true });
  const summaryPath = path.join(outDir, "summary.txt");
  const jsonPath = path.join(outDir, "metrics.json");
  
  // log() -> stdout + summary.txt ; progress() -> stderr only (live, not persisted)
  const log = (line = "") => {
    console.log(line);
    appendFileSync(summaryPath, line + "\n");
  };
  const progress = (line) => console.error(line);
  
  const median = (arr) => {
    if (!arr.length) return 0;
    const s = [...arr].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  };
  
  // ---- best-effort instance metadata (IMDSv2), non-fatal -------------------
  async function imds() {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 500);
      const tok = await fetch("http://169.254.169.254/latest/api/token", {
        method: "PUT",
        headers: { "X-aws-ec2-metadata-token-ttl-seconds": "60" },
        signal: ctrl.signal,
      }).then((r) => r.text());
      const get = (p) =>
        fetch(`http://169.254.169.254/latest/meta-data/${p}`, {
          headers: { "X-aws-ec2-metadata-token": tok },
          signal: ctrl.signal,
        }).then((r) => r.text());
      const [type, az] = await Promise.all([get("instance-type"), get("placement/availability-zone")]);
      clearTimeout(t);
      return { type, az };
    } catch {
      return { type: "unknown", az: "unknown" };
    }
  }
  
  // ---- single run: fresh client + TM (=> fresh worker & socket pool) -------
  async function doRun(run, dest) {
    const s3 = new S3Client({ region: REGION });
    const tm = new S3TransferManager({
      s3,
      multipartDownloadType: "RANGE",
      targetPartSizeBytes: partSize,
      maxConcurrentDownloads: maxConcurrency, // actually applied
    });
  
    let latest = 0; // cumulative transferredBytes (from snapshot)
    let total = 0; // total object size (from transferInitiated)
    tm.addEventListener("transferInitiated", (e) => {
      total = e.snapshot?.totalBytes ?? 0;
    });
    tm.addEventListener("bytesTransferred", (e) => {
      latest = e.snapshot?.transferredBytes ?? latest;
    });
  
    const samples = []; // { t(ms), bytes, rss }
    const t0 = performance.now();
    const cpu0 = process.cpuUsage();
  
    // sampler: 200ms resolution for metrics; 5s live heartbeat for visibility
    let lastLog = 0, lastBytes = 0, lastT = 0;
    const sampler = setInterval(() => {
      const t = performance.now() - t0;
      samples.push({ t, bytes: latest, rss: process.memoryUsage().rss });
      if (t - lastLog >= 5000) {
        const dt = (t - lastT) / 1000;
        const gbps = dt > 0 ? ((latest - lastBytes) * 8) / 1e9 / dt : 0;
        const pct = total ? ((latest / total) * 100).toFixed(1) : "?";
        progress(`  [run ${run}] ${(latest / 2 ** 30).toFixed(1)} GiB (${pct}%)  ~${gbps.toFixed(1)} Gbps`);
        lastLog = t; lastBytes = latest; lastT = t;
      }
    }, 200);
  
    let ok = true, bytes = 0, errMsg;
    try {
      const res = await tm.downloadToFile({ Bucket: BUCKET, Key: KEY, destination: dest });
      bytes = res.bytesWritten ?? 0;
    } catch (err) {
      ok = false;
      errMsg = err?.message ?? String(err);
    } finally {
      clearInterval(sampler);
    }
  
    const secs = (performance.now() - t0) / 1000;
    const cpu = process.cpuUsage(cpu0);
    const avgCpuPct = secs > 0 ? ((cpu.user + cpu.system) / (secs * 1e6)) * 100 : 0;
    const peakMem = samples.reduce((m, s) => Math.max(m, s.rss), 0);
  
    // instantaneous rates between samples
    const rates = [];
    for (let i = 1; i < samples.length; i++) {
      const dt = (samples[i].t - samples[i - 1].t) / 1000;
      const db = samples[i].bytes - samples[i - 1].bytes;
      if (dt > 0 && db >= 0) rates.push({ gbps: (db * 8) / 1e9 / dt, mid: (samples[i].t + samples[i - 1].t) / 2 });
    }
    const span = samples.length ? samples[samples.length - 1].t : 0;
    const lo = span * 0.15, hi = span * 0.95; // drop ramp + drain
    const steadyRates = rates.filter((r) => r.mid >= lo && r.mid <= hi && r.gbps > 0).map((r) => r.gbps);
    const peakGbps = rates.reduce((m, r) => Math.max(m, r.gbps), 0);
    const effectiveGbps = secs > 0 ? (bytes * 8) / 1e9 / secs : 0;
    const steadyGbps = steadyRates.length ? median(steadyRates) : effectiveGbps;
    const writeGBs = secs > 0 ? bytes / 1e9 / secs : 0;
  
    // fresh sockets next run: destroy() cascades to the worker pool
    try { s3.destroy(); } catch { /* ignore */ }
    await new Promise((r) => setTimeout(r, 250)); // let workers exit
  
    return { run, ok, errMsg, bytes, secs, steadyGbps, peakGbps, effectiveGbps, peakMem, avgCpuPct, writeGBs };
  }
  
  // ---- main ----------------------------------------------------------------
  const meta = await imds();
  log(`Run: ${runId}\n`);
  log(`  Engine:     js-tm  node ${process.version}`);
  log(`  Instance:   ${meta.type} (${meta.az})`);
  log(`  Workload:   ${BUCKET}/${KEY} (download, disk)`);
  log(
    `  Mode:       ${oDirectRequested ? "O_DIRECT (TM_O_DIRECT=1)" : "buffered"}  ` +
    `concurrency=${maxConcurrency}  partSize=${partSize / 2 ** 20}MiB  uvpool=${uvPool}  cores=${os.cpus().length}`
  );
  log(`  Dest:       ${DEST}\n`);
  
  log("  Iter      Steady St.            Peak       Effective    Duration    Peak Mem     Avg CPU");
  
  const results = [];
  for (let run = 1; run <= runs; run++) {
    const dest = runs > 1 ? `${DEST}.run${run}` : DEST;
    progress(`=== RUN ${run}/${runs} -> ${dest} ===`);
    const r = await doRun(run, dest);
    results.push(r);
  
    // print THIS run's row as soon as it finishes
    if (!r.ok) {
      log(`  ${String(r.run).padStart(4)}   FAILED: ${r.errMsg}`);
    } else {
      log(
        `  ${String(r.run).padStart(4)}   ` +
        `${r.steadyGbps.toFixed(2).padStart(7)} Gbps   ` +
        `${r.peakGbps.toFixed(2).padStart(8)} Gbps   ` +
        `${r.effectiveGbps.toFixed(2).padStart(7)} Gbps   ` +
        `${r.secs.toFixed(2).padStart(7)}s   ` +
        `${(r.peakMem / 2 ** 30).toFixed(1).padStart(5)} GiB   ` +
        `${r.avgCpuPct.toFixed(0).padStart(5)}%`
      );
    }
  }
  
  // ---- summary -------------------------------------------------------------
  const good = results.filter((r) => r.ok);
  if (good.length) {
    const warm = good.slice(1).length ? good.slice(1) : good; // runs 2..N if present
    log("\n  Throughput:");
    log(`    Median steady state: ${median(good.map((r) => r.steadyGbps)).toFixed(2)} Gbps`);
    log(`    Median peak:         ${median(good.map((r) => r.peakGbps)).toFixed(2)} Gbps`);
    log(`    Median effective:    ${median(warm.map((r) => r.effectiveGbps)).toFixed(2)} Gbps  [bytes/duration]`);
    log(`    Cold iteration 1:    ${good[0].effectiveGbps.toFixed(2)} Gbps effective, ${good[0].secs.toFixed(2)}s`);
    log("\n  Disk I/O:");
    log(`    Write:  ${(good.reduce((s, r) => s + r.writeGBs, 0) / good.length).toFixed(2)} GB/s (mean)`);
  }
  
  writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        runId,
        engine: `js-tm ${process.version}`,
        instance: meta,
        workload: `${BUCKET}/${KEY}`,
        mode: oDirectRequested ? "o_direct" : "buffered",
        concurrency: maxConcurrency,
        partSize,
        uvThreadpoolSize: process.env.UV_THREADPOOL_SIZE ?? null,
        cores: os.cpus().length,
        iterations: results,
      },
      null,
      2
    )
  );
  
  log(`\n  Results: ${outDir}`);
  process.exit(good.length === results.length ? 0 : 1);
 
 
 
 // import { S3Client } from "@aws-sdk/client-s3";
  // import { S3TransferManager } from "@aws-sdk/lib-transfer-manager/transfer-manager";
  // import { performance } from "node:perf_hooks";
  
  // const [, , BUCKET, KEY, REGION, DEST, MAX = "1024", RUNS = "2"] = process.argv;
  // if (!BUCKET || !KEY || !REGION || !DEST) {
  //   console.error("usage: node dl-tm.mjs BUCKET KEY REGION DEST_PATH [MAX_CONCURRENCY] [RUNS]");
  //   process.exit(2);
  // }
  
  // const maxConcurrency = parseInt(MAX, 10);
  // const runs = parseInt(RUNS, 10);
  
  // // --- ADDED: surface the write mode. The pure-JS O_DIRECT path in the worker is
  // // gated by TM_O_DIRECT=1 (Linux + a filesystem that accepts O_DIRECT, e.g. the
  // // RAID0 stripe). There is no library log confirming it engaged, so echo intent.
  // const oDirectRequested = process.env.TM_O_DIRECT === "1";
  // console.error(
  //   `mode: ${oDirectRequested ? "O_DIRECT requested (TM_O_DIRECT=1)" : "buffered (TM_O_DIRECT unset)"}` +
  //     `  platform=${process.platform}  dest=${DEST}`
  // );
  // // -------------------------------------------------------------------------
  
  // const s3 = new S3Client({ region: REGION });
  
  // // Create the transfer manager ONCE. Its worker pool + socket pool are created
  // // lazily on first use and then reused across every run below — this is what
  // // makes runs 2..N measure steady-state throughput without startup costs.
  // const tm = new S3TransferManager({
  //   s3,
  //   multipartDownloadType: "RANGE",
  //   targetPartSizeBytes: 16 * 1024 * 1024,
  //   maxConcurrentDownloads: 1024,
  // });
  
  // // --- per-run counters (reset before each run) ----------------------------
  // let partCount = 0;
  // let totalObserved = 0;
  // let sizeHistogram = new Map(); // partBytes -> count
  
  // tm.addEventListener("transferInitiated", (e) => {
  //   console.error(`[transferInitiated] totalBytes=${e.snapshot?.totalBytes ?? "?"}`);
  // });
  
  // tm.addEventListener("bytesTransferred", (e) => {
  //   const bytes = e.snapshot?.transferredBytes ?? 0;
  //   const range = e.request?.Range ?? (e.request?.PartNumber != null ? `part#${e.request.PartNumber}` : "?");
  //   partCount++;
  //   totalObserved += bytes;
  //   sizeHistogram.set(bytes, (sizeHistogram.get(bytes) ?? 0) + 1);
  //   if (partCount <= 5 || partCount % 1000 === 0) {
  //     console.error(`[part ${partCount}] ${bytes} bytes  range=${range}  cumulative=${totalObserved}`);
  //   }
  // });
  
  // tm.addEventListener("transferComplete", (e) => {
  //   console.error(`[transferComplete] final totalBytes=${e.snapshot?.totalBytes ?? "?"}`);
  // });
  // // -------------------------------------------------------------------------
  
  // const results = [];
  
  // for (let run = 1; run <= runs; run++) {
  //   // reset per-run counters
  //   partCount = 0;
  //   totalObserved = 0;
  //   sizeHistogram = new Map();
  
  //   // distinct destination per run so a run doesn't overwrite/rename another's temp
  //   const dest = runs > 1 ? `${DEST}.run${run}` : DEST;
  
  //   console.error(`\n=== RUN ${run}/${runs} (maxConcurrency=${maxConcurrency}) -> ${dest} ===`);
  
  //   const start = performance.now();
  //   const res = await tm.downloadToFile({ Bucket: BUCKET, Key: KEY, destination: dest });
  //   const secs = (performance.now() - start) / 1000;
  
  //   const bytes = res.bytesWritten ?? 0;
  //   const gbps = (bytes * 8) / 1e9 / secs;
  
  //   console.error("part-size histogram (bytes -> count):");
  //   for (const [sz, cnt] of [...sizeHistogram.entries()].sort((a, b) => a[0] - b[0])) {
  //     console.error(`  ${sz} bytes  x${cnt}`);
  //   }
  //   console.error(`observed ${partCount} parts, ${totalObserved} bytes via events`);
  
  //   console.log(`run ${run}: downloadToFile ${bytes} bytes -> ${dest} in ${secs.toFixed(2)}s = ${gbps.toFixed(2)} Gb/s`);
  //   results.push({ run, bytes, secs, gbps });
  // }
  
  // // --- summary --------------------------------------------------------------
  // console.log("\n=== SUMMARY ===");
  // console.log(`  mode: ${oDirectRequested ? "O_DIRECT (TM_O_DIRECT=1)" : "buffered"}`);  // ADDED
  // for (const r of results) {
  //   console.log(`  run ${r.run}: ${r.gbps.toFixed(2)} Gb/s  (${r.secs.toFixed(2)}s)`);
  // }
  // if (results.length > 1) {
  //   // steady-state = mean of runs 2..N (exclude the cold first run)
  //   const warm = results.slice(1);
  //   const mean = warm.reduce((s, r) => s + r.gbps, 0) / warm.length;
  //   const best = Math.max(...results.map((r) => r.gbps));
  //   console.log(`  steady-state mean (runs 2..${results.length}): ${mean.toFixed(2)} Gb/s`);
  //   console.log(`  best: ${best.toFixed(2)} Gb/s`);
  // }
  
  // process.exit(0);