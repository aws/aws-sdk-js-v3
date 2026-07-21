// @ts-nocheck
/**
 * Tracks per-connection throughput grouped by remote S3 IP, so we can tell whether
 * connections to some front-end IPs are consistently faster than others.
 *
 * For each socket we record its connect time and read its wire-byte counter
 * (`bytesRead` for downloads, `bytesWritten` for uploads). At snapshot time (once
 * per iteration, just before the client is destroyed) we compute, per IP, the
 * summed bytes and summed connection-milliseconds across its sockets. The main
 * thread turns that into an average per-connection throughput for the IP.
 */

import { appendFileSync, mkdirSync } from "node:fs";
import path from "node:path";

export class IpThroughputTracker {
  byteCounter: (socket: any) => number;
  registry: Map<any, { ip: string; connectMs: number }>;

  constructor(byteCounter: (socket: any) => number) {
    this.byteCounter = byteCounter;
    this.registry = new Map();
  }

  register(socket: any, ip: string): void {
    this.registry.set(socket, { ip, connectMs: performance.now() });
    socket.on("close", () => this.registry.delete(socket));
  }

  /** Per-IP totals as [[ip, { bytes, ms, conns }], ...]. Call before destroy(). */
  snapshot(): Array<[string, { bytes: number; ms: number; conns: number }]> {
    const now = performance.now();
    const ips = new Map<string, { bytes: number; ms: number; conns: number }>();
    for (const [socket, { ip, connectMs }] of this.registry) {
      const bytes = this.byteCounter(socket) || 0;
      const ms = now - connectMs;
      const e = ips.get(ip) || { bytes: 0, ms: 0, conns: 0 };
      e.bytes += bytes;
      e.ms += ms;
      e.conns += 1;
      ips.set(ip, e);
    }
    return [...ips];
  }
}

/** Merge one worker's [[ip,{bytes,ms,conns}]] into a per-iteration Map. */
export function mergeIpThroughput(
  target: Map<string, { bytes: number; ms: number; conns: number }>,
  arr: Array<[string, { bytes: number; ms: number; conns: number }]> | null
): void {
  if (!arr) {
    return;
  }
  for (const [ip, v] of arr) {
    const e = target.get(ip) || { bytes: 0, ms: 0, conns: 0 };
    e.bytes += v.bytes;
    e.ms += v.ms;
    e.conns += v.conns;
    target.set(ip, e);
  }
}

/** Per-IP average per-connection throughput (Gbps) for one iteration. */
export function ipIterationGbps(
  map: Map<string, { bytes: number; ms: number; conns: number }>
): Map<string, { gbps: number; conns: number }> {
  const out = new Map<string, { gbps: number; conns: number }>();
  for (const [ip, v] of map) {
    out.set(ip, { gbps: v.ms > 0 ? (v.bytes * 8) / (v.ms * 1e6) : 0, conns: v.conns });
  }
  return out;
}

/** Append this iteration's per-IP Gbps into a history Map (ip -> {samples, conns}). */
export function accumulateIpSamples(
  history: Map<string, { samples: number[]; conns: number }>,
  iterGbps: Map<string, { gbps: number; conns: number }>
): void {
  for (const [ip, { gbps, conns }] of iterGbps) {
    const e = history.get(ip) || { samples: [], conns: 0 };
    e.samples.push(gbps);
    e.conns = Math.max(e.conns, conns);
    history.set(ip, e);
  }
}

/** Reduce the history into sorted per-IP rows (fastest median first). */
export function summarizeIpHistory(
  history: Map<string, { samples: number[]; conns: number }>
): Array<{ ip: string; conns: number; medianGbps: number; minGbps: number; maxGbps: number; samples: number[] }> {
  const rows: Array<{
    ip: string;
    conns: number;
    medianGbps: number;
    minGbps: number;
    maxGbps: number;
    samples: number[];
  }> = [];
  for (const [ip, { samples, conns }] of history) {
    const s = [...samples].sort((a, b) => a - b);
    rows.push({
      ip,
      conns,
      medianGbps: s[Math.floor(s.length / 2)],
      minGbps: s[0],
      maxGbps: s[s.length - 1],
      samples: samples.map((x) => +x.toFixed(3)),
    });
  }
  rows.sort((a, b) => b.medianGbps - a.medianGbps);
  return rows;
}

export function printIpThroughput(
  label: string,
  rows: Array<{ ip: string; conns: number; medianGbps: number; minGbps: number; maxGbps: number; samples: number[] }>
): void {
  if (!rows || !rows.length) {
    return;
  }
  console.log(`per-IP throughput (${label}, per-connection avg over ${rows[0].samples.length} iter):`);
  for (const r of rows) {
    console.log(
      `  ${String(r.ip).padEnd(16)} med ${r.medianGbps.toFixed(3)} Gbps  ` +
        `(min ${r.minGbps.toFixed(3)} / max ${r.maxGbps.toFixed(3)}, ${r.conns} conn)`
    );
  }
  console.log("");
}

/** Append one JSON line to the ongoing per-IP history file. */
export function appendIpRecord(file: string, record: any): void {
  mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
  appendFileSync(file, JSON.stringify(record) + "\n");
}
