import type { Stats } from "node:fs";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";

import type { CannedFailurePolicy, DirectoryTransferFailureContext, FailurePolicy } from "./types";

/**
 * Weighted semaphore with a soft concurrency limit.
 * Allows a job to start if in-flight weight is below the limit, even if
 * that job pushes the total over. New jobs are paused until it drops back.
 *
 * @internal
 */
export class Semaphore {
  private inFlightRequests = 0;
  private waiters: Array<() => void> = [];

  public constructor(private readonly limit: number) {}

  public async acquire(count = 1): Promise<void> {
    if (this.inFlightRequests < this.limit) {
      this.inFlightRequests += count;
      return;
    }
    await new Promise<void>((resolve) => this.waiters.push(resolve));
    this.inFlightRequests += count;
  }

  public release(count = 1): void {
    this.inFlightRequests -= count;
    while (this.waiters.length > 0 && this.inFlightRequests < this.limit) {
      const next = this.waiters.shift();
      if (next) {
        next();
      }
    }
  }
}

/**
 * Validates that a path exists and is a directory.
 * Resolves to absolute path.
 *
 * @param dirPath - The directory path to validate.
 *
 * @throws Error - If the path does not exist.
 * @throws Error - If the path is not a directory.
 *
 * @internal
 */
export async function validateDirectory(dirPath: string): Promise<string> {
  const absolutePath = resolve(dirPath);
  let stats: Stats;
  try {
    stats = await stat(absolutePath);
  } catch (error: any) {
    throw new Error(`Cannot access directory at: ${absolutePath}, ${error.message}`);
  }
  if (!stats.isDirectory()) {
    throw new Error(`Path is not a directory: ${absolutePath}`);
  }
  return absolutePath;
}

/**
 * Executes the failure policy for a failed transfer (upload or download).
 *
 * @param policy - The failure policy to execute (canned or custom callback).
 * @param context - The failure context containing the directory request, failed object request, and error.
 * @param abortController - Controller to signal abort to all in-flight operations on terminate.
 *
 * @internal
 */
export async function handleFailure(
  policy: FailurePolicy,
  context: DirectoryTransferFailureContext,
  abortController: AbortController
): Promise<CannedFailurePolicy> {
  if (policy === "terminate") {
    abortController.abort();
    return "terminate";
  }
  if (policy === "continue") {
    return "continue";
  }
  try {
    const result = await policy(context);
    if (result === "terminate") {
      abortController.abort();
    }
    return result;
  } catch {
    abortController.abort();
    return "terminate";
  }
}
