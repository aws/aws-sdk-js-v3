// @ts-nocheck
/**
 * Live progress indicator for download/upload runs.
 *
 * A single 64-bit counter in a SharedArrayBuffer is bumped by every worker
 * (Atomics.add, one per part — negligible cost) as bytes complete. The main
 * thread samples it on an interval and prints elapsed / %, instantaneous and
 * average throughput, and an ETA to stderr.
 */

const GIB = 1024 ** 3;

/** Allocate the shared byte counter to pass to workers (via workerData). */
export function newProgressBuffer(): SharedArrayBuffer {
  return new SharedArrayBuffer(8); // one BigInt64 (bytes completed)
}

/** Worker-side: add `n` completed bytes to the shared counter (no-op if disabled). */
export function bumpProgress(view: BigInt64Array | null, n: number): void {
  if (view) {
    Atomics.add(view, 0, BigInt(n));
  }
}

/** Worker-side: wrap a progress SharedArrayBuffer as a BigInt64Array view. */
export function progressView(buf: SharedArrayBuffer | null): BigInt64Array | null {
  return buf ? new BigInt64Array(buf) : null;
}

/**
 * Main-thread reporter. Construct with the shared buffer + the run's total bytes,
 * then start()/stop() around the measured transfer. Prints one line per interval.
 */
export class ProgressReporter {
  view: BigInt64Array;
  total: number;
  label: string;
  intervalMs: number;
  timer: ReturnType<typeof setInterval> | null;
  startNs: bigint;
  lastNs: bigint;
  lastBytes: number;
  stopped: boolean;

  constructor(buf: SharedArrayBuffer, totalBytes: number, { label = "", intervalMs = 1000 } = {}) {
    this.view = new BigInt64Array(buf);
    this.total = totalBytes;
    this.label = label;
    this.intervalMs = intervalMs;
    this.timer = null;
    this.startNs = 0n;
    this.lastNs = 0n;
    this.lastBytes = 0;
    this.stopped = false;
  }

  start(): void {
    Atomics.store(this.view, 0, 0n); // reset for this iteration
    this.startNs = process.hrtime.bigint();
    this.lastNs = this.startNs;
    this.lastBytes = 0;
    this.timer = setInterval(() => this.tick(), this.intervalMs);
    (this.timer as any).unref?.();
  }

  tick(): void {
    const now = process.hrtime.bigint();
    const done = Number(Atomics.load(this.view, 0));
    const elapsedS = Number(now - this.startNs) / 1e9;
    const dS = Number(now - this.lastNs) / 1e9;
    const curGbps = dS > 0 ? ((done - this.lastBytes) * 8) / dS / 1e9 : 0;
    const avgGbps = elapsedS > 0 ? (done * 8) / elapsedS / 1e9 : 0;
    this.lastNs = now;
    this.lastBytes = done;
    const pct = this.total > 0 ? Math.min(100, (done / this.total) * 100) : 0;
    const eta = avgGbps > 0 && this.total > done ? ((this.total - done) * 8) / (avgGbps * 1e9) : 0;
    process.stderr.write(
      `[progress]${this.label ? " " + this.label : ""} ` +
        `${(done / GIB).toFixed(2)}/${(this.total / GIB).toFixed(2)} GiB (${pct.toFixed(0)}%)  ` +
        `cur ${curGbps.toFixed(1)} Gbps  avg ${avgGbps.toFixed(1)} Gbps  ` +
        `elapsed ${elapsedS.toFixed(1)}s${eta > 0 ? `  eta ${eta.toFixed(1)}s` : ""}\n`
    );
  }

  stop(): void {
    if (this.stopped) {
      return;
    }
    this.stopped = true;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.tick(); // final snapshot
  }
}
