import type { _Object as S3Object } from "@aws-sdk/client-s3";
import type { Stats } from "node:fs";
import { existsSync } from "node:fs";
import { mkdir, stat, realpath } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";

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

/**
 * Prepares the destination directory for a directory download.
 *
 * If the path does not exist, it is created along with any missing parent
 * directories, using the runtime's default file-creation permissions.
 *
 * @param dirPath - The destination directory path.
 * @returns The resolved absolute path of the destination directory.
 *
 * @throws Error - If the path exists but is not a directory.
 *
 * @internal
 */
export async function createDestinationDirectory(dirPath: string): Promise<string> {
  const absolutePath = resolve(dirPath);
  if (existsSync(absolutePath)) {
    // Already exists, validate if the path is a directory.
    return validateDirectory(absolutePath);
  }
  // If it does not exist, create the destination and any missing parent directories.
  await mkdir(absolutePath, { recursive: true });
  return absolutePath;
}

/**
 * Determines whether an S3 object represents a folder placeholder rather than a
 * file. Objects whose key ends with "/" and whose size is zero.
 *
 * @param object - The S3 object to check.
 * @returns true if the object is a folder placeholder.
 *
 * @internal
 */
export function isFolderObject(object: S3Object): boolean {
  return (object.Key?.endsWith("/") ?? false) && (object.Size ?? 0) === 0;
}

/**
 * Derives the local absolute file path for an S3 object key, relative to the
 * destination directory.
 *
 *
 * @param destination - The resolved absolute destination directory.
 * @param key - The S3 object key. Callers must pass a non-empty key.
 * @returns The resolved absolute local file path.
 *
 * @throws Error - If the key is absolute, or resolves outside the destination directory.
 *
 * @internal
 */
export function deriveLocalPath(destination: string, key: string): string {
  // normalize the key separators to the local file separator.
  const normalizedKey = sep === "/" ? key : key.split("/").join(sep);

  // An absolute key would ignore the destination, reject it.
  if (isAbsolute(normalizedKey)) {
    throw new Error(`Object key resolves to an absolute path and would escape the destination directory: ${key}`);
  }

  // combine with the destination and reject paths that escape it.
  const fullPath = resolve(destination, normalizedKey);
  const destinationWithSep = destination.endsWith(sep) ? destination : destination + sep;

  if (fullPath !== destination && !fullPath.startsWith(destinationWithSep)) {
    throw new Error(
      `Object key "${key}" resolves to a path outside the destination directory. Path traversal is not allowed.`
    );
  }

  return fullPath;
}

/**
 * Creates the parent directories for a local download path, verifying each
 * component's canonical (symlink-resolved) location stays within the
 * destination. 
 *
 * @param destination - The resolved absolute destination directory.
 * @param localPath - The resolved absolute local file path (from deriveLocalPath).
 *
 * @throws Error - If any parent component resolves outside the destination.
 *
 * @internal
 */
export async function createLocalParentDirectories(destination: string, localPath: string): Promise<void> {
  const canonicalDestination = await realpath(destination);
  const relativeParent = relative(destination, dirname(localPath));
  let currentDirectory = destination;

  for (const segment of relativeParent.split(sep)) {
    if (!segment || segment === ".") {
      continue;
    }

    currentDirectory = join(currentDirectory, segment);
    await mkdir(currentDirectory, { recursive: true });

    const canonicalDirectory = await realpath(currentDirectory);
    const canonicalRelative = relative(canonicalDestination, canonicalDirectory);
    if (canonicalRelative === ".." || canonicalRelative.startsWith(`..${sep}`) || isAbsolute(canonicalRelative)) {
      throw new Error("Symbolic links outside the destination are not allowed.");
    }
  }
}
