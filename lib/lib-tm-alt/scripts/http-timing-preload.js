/**
 * Preload script (use with --require) that instruments node:https and node:http
 * to capture per-request metrics:
 *   - timestamp of start (ms since process start)
 *   - duration (ms)
 *   - bytes transferred (Content-Length of request body)
 *   - throughput (MB/s)
 *
 * Works in both main thread and worker threads.
 *
 * Usage:
 *   node --require ./http-timing-preload.js ./benchmark-upload-timed.js
 *   node --require ./http-timing-preload.js ./benchmark-upload-alt-timed.js
 */
"use strict";

const https = require("node:https");
const http = require("node:http");
const fs = require("node:fs");
const { isMainThread, threadId } = require("node:worker_threads");

const outFile = `/tmp/http-timing-${process.pid}-t${threadId}.jsonl`;

// Clear any stale file from a previous run.
try {
  fs.unlinkSync(outFile);
} catch {
  /* ignore */
}

let nextId = 0;

const socketIds = new WeakMap();
let nextSocketId = 1;
function getSocketId(socket) {
  if (!socketIds.has(socket)) {
    socketIds.set(socket, `${threadId}:${nextSocketId++}`);
  }
  return socketIds.get(socket);
}

const originalHttpsRequest = https.request;
const originalHttpRequest = http.request;

function patchRequest(originalFn, mod) {
  return function patchedRequest(...args) {
    const req = originalFn.apply(mod, args);

    // Extract options from arguments (same logic as Node internals).
    let options = args[0];
    if (typeof options === "string") {
      options = args[1] || {};
    } else if (args[1] && typeof args[1] === "object" && typeof args[1] !== "function") {
      options = { ...args[0], ...args[1] };
    }

    const headers = options.headers || {};
    const contentLength = parseInt(headers["content-length"] || headers["Content-Length"] || "0", 10);
    const path = options.path || req.path || "?";
    const method = (options.method || "GET").toUpperCase();

    const id = nextId++;
    const fireMs = performance.now();

    // Capture the type and actual bytes written to the request body.
    let bodyType = null;
    let bytesWritten = 0;
    let chunkCount = 0;
    let minChunk = Infinity;
    let maxChunk = 0;
    const origWrite = req.write;
    const origEnd = req.end;
    req.write = function (chunk, ...rest) {
      if (chunk != null) {
        if (!bodyType) bodyType = chunk.constructor ? chunk.constructor.name : typeof chunk;
        const len = chunk.byteLength || chunk.length || 0;
        bytesWritten += len;
        chunkCount++;
        if (len < minChunk) minChunk = len;
        if (len > maxChunk) maxChunk = len;
      }
      return origWrite.call(this, chunk, ...rest);
    };
    req.end = function (chunk, ...rest) {
      if (chunk != null) {
        if (!bodyType) bodyType = chunk.constructor ? chunk.constructor.name : typeof chunk;
        const len = chunk.byteLength || chunk.length || 0;
        bytesWritten += len;
        chunkCount++;
        if (len < minChunk) minChunk = len;
        if (len > maxChunk) maxChunk = len;
      }
      return origEnd.call(this, chunk, ...rest);
    };

    // Check if a Readable is piped into the request.
    req.on("pipe", (src) => {
      if (!bodyType) {
        bodyType = src && src.constructor ? src.constructor.name : "piped";
      }
    });

    // Track socket identity for connection reuse analysis.
    let socketId = 0;
    req.on("socket", (socket) => {
      socketId = getSocketId(socket);
    });

    req.on("response", (res) => {
      res.on("end", () => {
        const doneMs = performance.now();
        const durMs = doneMs - fireMs;
        const durSec = durMs / 1000;
        const bytes = bytesWritten || contentLength;
        const mbps = durSec > 0 ? bytes / 1024 / 1024 / durSec : 0;
        const entry = {
          id,
          t: threadId,
          sock: socketId,
          fire: +fireMs.toFixed(1),
          done: +doneMs.toFixed(1),
          dur: +durMs.toFixed(1),
          bytes,
          mbps: +mbps.toFixed(2),
          chunks: chunkCount,
          minChunk: chunkCount > 0 ? minChunk : 0,
          maxChunk,
          method,
          path,
          bodyType: bodyType || "unknown",
        };
        try {
          fs.appendFileSync(outFile, JSON.stringify(entry) + "\n");
        } catch {
          /* ignore */
        }
      });
      // Ensure response is consumed so 'end' fires.
      res.resume();
    });

    req.on("error", () => {
      const doneMs = performance.now();
      const durMs = doneMs - fireMs;
      const bytes = bytesWritten || contentLength;
      const entry = {
        id,
        t: threadId,
        sock: socketId,
        fire: +fireMs.toFixed(1),
        done: +doneMs.toFixed(1),
        dur: +durMs.toFixed(1),
        bytes,
        mbps: 0,
        chunks: chunkCount,
        minChunk: chunkCount > 0 ? minChunk : 0,
        maxChunk,
        method,
        path,
        bodyType: bodyType || "unknown",
        error: true,
      };
      try {
        fs.appendFileSync(outFile, JSON.stringify(entry) + "\n");
      } catch {
        /* ignore */
      }
    });

    return req;
  };
}

https.request = patchRequest(originalHttpsRequest, https);
http.request = patchRequest(originalHttpRequest, http);

// --- Report function (called from main thread after benchmark completes) ---
if (isMainThread) {
  global.__httpTimingReport = function printReport() {
    // Read all timing files for this process.
    const prefix = `http-timing-${process.pid}-t`;
    const files = fs.readdirSync("/tmp").filter((f) => f.startsWith(prefix) && f.endsWith(".jsonl"));

    const all = [];
    for (const f of files) {
      const lines = fs.readFileSync(`/tmp/${f}`, "utf8").trim().split("\n");
      for (const line of lines) {
        if (line) {
          try {
            all.push(JSON.parse(line));
          } catch {
            /* ignore */
          }
        }
      }
    }

    // Sort by fire time.
    all.sort((a, b) => a.fire - b.fire);

    // Separate UploadPart from others.
    const uploadParts = all.filter((r) => r.path && r.path.includes("partNumber"));
    const others = all.filter((r) => !r.path || !r.path.includes("partNumber"));

    console.log(`\n${"=".repeat(72)}`);
    console.log(`  HTTP Request Timing Report (node:https instrumentation)`);
    console.log(`${"=".repeat(72)}`);
    console.log(`  Total requests: ${all.length} (${uploadParts.length} UploadPart, ${others.length} other)`);
    console.log(`  Threads observed: ${[...new Set(all.map((r) => r.t))].sort((a, b) => a - b).join(", ")}`);

    if (uploadParts.length > 0) {
      const firstFire = uploadParts[0].fire;
      const lastDone = Math.max(...uploadParts.map((r) => r.done));
      const wallMs = lastDone - firstFire;
      const durations = uploadParts.map((r) => r.dur).sort((a, b) => a - b);
      const speeds = uploadParts.map((r) => r.mbps).sort((a, b) => a - b);
      const totalBytes = uploadParts.reduce((s, r) => s + r.bytes, 0);
      const avgDur = durations.reduce((s, d) => s + d, 0) / durations.length;
      const avgMbps = speeds.reduce((s, d) => s + d, 0) / speeds.length;

      const pctl = (arr, p) => arr[Math.floor(arr.length * p)];

      console.log(`\n  --- UploadPart Summary ---`);
      console.log(`  Body types:              ${[...new Set(uploadParts.map((r) => r.bodyType))].join(", ")}`);
      console.log(`  Unique sockets:          ${new Set(uploadParts.map((r) => r.sock)).size}`);
      console.log(`  First request fired:     +${firstFire.toFixed(1)} ms`);
      console.log(`  Last response done:      +${lastDone.toFixed(1)} ms`);
      console.log(`  Wall time (fire→done):   ${wallMs.toFixed(1)} ms (${(wallMs / 1000).toFixed(2)} s)`);
      console.log(`  Total bytes uploaded:    ${totalBytes} (${(totalBytes / 1024 / 1024).toFixed(1)} MB)`);
      console.log(`  Aggregate throughput:    ${(totalBytes / 1024 / 1024 / (wallMs / 1000)).toFixed(2)} MB/s`);
      console.log(``);
      console.log(`  Per-request duration (ms):`);
      console.log(
        `    avg=${avgDur.toFixed(1)}  min=${durations[0].toFixed(1)}  p50=${pctl(durations, 0.5).toFixed(1)}  p90=${pctl(durations, 0.9).toFixed(1)}  p99=${pctl(durations, 0.99).toFixed(1)}  max=${durations[durations.length - 1].toFixed(1)}`
      );
      console.log(`  Per-request throughput (MB/s):`);
      console.log(
        `    avg=${avgMbps.toFixed(2)}  min=${speeds[0].toFixed(2)}  p50=${pctl(speeds, 0.5).toFixed(2)}  p90=${pctl(speeds, 0.9).toFixed(2)}  p99=${pctl(speeds, 0.99).toFixed(2)}  max=${speeds[speeds.length - 1].toFixed(2)}`
      );

      // Per-request detail table.
      console.log(`\n  --- UploadPart Detail (sorted by fire time) ---`);
      console.log(
        `  ${"#".padStart(4)} ${"Thr".padStart(3)} ${"Sock".padStart(5)} ${"Start(ms)".padStart(10)} ${"Dur(ms)".padStart(9)} ${"Bytes".padStart(10)} ${"MB/s".padStart(8)} ${"Chunks".padStart(6)} ${"MinChk".padStart(8)} ${"MaxChk".padStart(8)}  BodyType`
      );
      console.log(
        `  ${"-".repeat(4)} ${"-".repeat(3)} ${"-".repeat(5)} ${"-".repeat(10)} ${"-".repeat(9)} ${"-".repeat(10)} ${"-".repeat(8)} ${"-".repeat(6)} ${"-".repeat(8)} ${"-".repeat(8)}  ${"-".repeat(12)}`
      );
      for (const r of uploadParts) {
        console.log(
          `  ${String(r.id).padStart(4)} ${String(r.t).padStart(3)} ${String(r.sock).padStart(5)} ${r.fire.toFixed(1).padStart(10)} ${r.dur.toFixed(1).padStart(9)} ${String(r.bytes).padStart(10)} ${r.mbps.toFixed(2).padStart(8)} ${String(r.chunks).padStart(6)} ${String(r.minChunk).padStart(8)} ${String(r.maxChunk).padStart(8)}  ${r.bodyType || "?"}`
        );
      }
    }

    if (others.length > 0) {
      console.log(`\n  --- Other Requests (CreateMPU, CompleteMPU, etc.) ---`);
      console.log(
        `  ${"#".padStart(4)} ${"Thr".padStart(3)} ${"Start(ms)".padStart(10)} ${"Dur(ms)".padStart(9)} ${"Method".padStart(6)}  Path`
      );
      console.log(
        `  ${"-".repeat(4)} ${"-".repeat(3)} ${"-".repeat(10)} ${"-".repeat(9)} ${"-".repeat(6)}  ${"-".repeat(40)}`
      );
      for (const r of others) {
        console.log(
          `  ${String(r.id).padStart(4)} ${String(r.t).padStart(3)} ${r.fire.toFixed(1).padStart(10)} ${r.dur.toFixed(1).padStart(9)} ${r.method.padStart(6)}  ${r.path.substring(0, 80)}`
        );
      }
    }

    console.log(`\n${"=".repeat(72)}\n`);

    // Cleanup temp files.
    for (const f of files) {
      try {
        fs.unlinkSync(`/tmp/${f}`);
      } catch {
        /* ignore */
      }
    }
  };
}
