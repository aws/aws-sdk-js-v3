import { S3Client } from "@aws-sdk/client-s3";
  import { S3TransferManager } from "@aws-sdk/lib-transfer-manager/transfer-manager";
  import { performance } from "node:perf_hooks";
  import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
  import { randomBytes } from "node:crypto";
  import * as path from "node:path";
  import * as os from "node:os";
  
  const [, , BUCKET, KEY, REGION, DEST, MAX = "256", RUNS = "3"] = process.argv;
  if (!BUCKET || !KEY || !REGION || !DEST) {
    console.error(
      "usage: node index.mjs BUCKET KEY[,KEY2,...] REGION DEST_PATH [MAX_CONCURRENCY] [RUNS]\n" +
      "  KEY may be a single object key, or a comma-separated list of keys to\n" +
      "  download in parallel within each run (e.g. 5x1TiB)."
    );
    process.exit(2);
  }

  // One or more object keys. A comma-separated KEY downloads all listed objects
  // in parallel within each run; a single key behaves exactly as before.
  const KEYS = KEY.split(",").map((k) => k.trim()).filter(Boolean);

  const maxConcurrency = parseInt(MAX, 10);
  const runs = parseInt(RUNS, 10);
  const partSize = 8 * 1024 * 1024; // 8 MiB
  const oDirectRequested = process.env.TM_O_DIRECT === "1";
  const uvPool = process.env.UV_THREADPOOL_SIZE ?? "default(4)";
  
  // setup for run id + results dir
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
  
  // Retrieve instance metadata information
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
  // Downloads every key in KEYS in parallel within this run. The sampler sees
  // the aggregate transferred bytes across all concurrent transfers.
  async function doRun(run, destFor) {
    const s3 = new S3Client({ region: REGION });
    const tm = new S3TransferManager({
      s3,
      multipartDownloadType: "RANGE", // required for O_DIRECT's aligned offsets
      targetPartSizeBytes: partSize,
      maxConcurrentDownloads: maxConcurrency, // actually applied
      useODirect: oDirectRequested, // wire TM_O_DIRECT=1 through to worker writes
    });

    // Per-transfer progress is keyed by the request so concurrent downloads
    // don't clobber each other; the sampler reads the summed totals.
    const perKeyBytes = new Map(); // key -> transferredBytes
    const perKeyTotal = new Map(); // key -> totalBytes
    const sumBytes = () => {
      let s = 0;
      for (const v of perKeyBytes.values()) s += v;
      return s;
    };
    const sumTotal = () => {
      let s = 0;
      for (const v of perKeyTotal.values()) s += v;
      return s;
    };
    let latest = 0; // aggregate cumulative transferredBytes
    let total = 0; // aggregate total object size
    tm.addEventListener("transferInitiated", (e) => {
      const k = e.request?.Key;
      if (k != null) perKeyTotal.set(k, e.snapshot?.totalBytes ?? 0);
      total = sumTotal();
    });
    tm.addEventListener("bytesTransferred", (e) => {
      const k = e.request?.Key;
      if (k != null) perKeyBytes.set(k, e.snapshot?.transferredBytes ?? perKeyBytes.get(k) ?? 0);
      latest = sumBytes();
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
        progress(`  [run ${run}] ${(latest / 2 ** 30).toFixed(1)} GiB (${pct}%)  ~${gbps.toFixed(1)} Gbps  (${KEYS.length} obj)`);
        lastLog = t; lastBytes = latest; lastT = t;
      }
    }, 200);

    let ok = true, bytes = 0, errMsg;
    try {
      // Download all keys in parallel; sum bytesWritten across them.
      const outcomes = await Promise.all(
        KEYS.map((k) =>
          tm.downloadToFile({ Bucket: BUCKET, Key: k, destination: destFor(k) })
        )
      );
      bytes = outcomes.reduce((s, res) => s + (res.bytesWritten ?? 0), 0);
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
  log(`  Workload:   ${BUCKET}/${KEYS.length === 1 ? KEYS[0] : `{${KEYS.join(", ")}}`} (download, disk, ${KEYS.length} obj parallel)`);
  log(
    `  Mode:       ${oDirectRequested ? "O_DIRECT (TM_O_DIRECT=1)" : "buffered"}  ` +
    `concurrency=${maxConcurrency}  partSize=${partSize / 2 ** 20}MiB  uvpool=${uvPool}  cores=${os.cpus().length}`
  );
  log(`  Dest:       ${DEST}\n`);
  
  log("  Iter      Steady St.            Peak       Effective    Duration    Peak Mem     Avg CPU");
  
  const results = [];
  for (let run = 1; run <= runs; run++) {
    // Each key gets its own destination file so parallel downloads don't
    // collide. With multiple keys the file name is derived from the key's
    // basename; with multiple runs a .runN suffix keeps runs separate.
    const runSuffix = runs > 1 ? `.run${run}` : "";
    const destFor = (k) => {
      if (KEYS.length === 1) return `${DEST}${runSuffix}`;
      const base = k.split("/").pop() || k;
      return `${DEST}/${base}${runSuffix}`;
    };
    if (KEYS.length > 1) mkdirSync(DEST, { recursive: true });
    progress(`=== RUN ${run}/${runs} -> ${KEYS.length === 1 ? destFor(KEYS[0]) : DEST + "/*"} (${KEYS.length} obj) ===`);
    const r = await doRun(run, destFor);
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
        workload: `${BUCKET}/${KEYS.length === 1 ? KEYS[0] : `{${KEYS.join(",")}}`}`,
        keys: KEYS,
        objectCount: KEYS.length,
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
