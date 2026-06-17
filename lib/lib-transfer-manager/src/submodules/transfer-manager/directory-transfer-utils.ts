import { type Stats } from "node:fs";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";

import type {  DirectoryTransferFailureContext, FailurePolicy } from "./types";

/**
 * Simple counting semaphore for bounding concurrency.
 * @internal
 */
export class Semaphore {
  private slots: number;
  private queue: Array<() => void> = [];

  constructor(slots: number) {
    this.slots = slots;
  }

  async acquire(): Promise<void> {
    if (this.slots > 0) {
      this.slots--;
      return;
    }
    return new Promise((resolve) => this.queue.push(resolve));
  }

  release(): void {
    const next = this.queue.shift();
    if (next) {
      next();
    } else {
      this.slots++;
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
    throw new Error(`Directory does not exist at: ${absolutePath}`);
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
): Promise<"continue" | "terminate"> {
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
