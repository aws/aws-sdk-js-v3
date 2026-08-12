import { randomBytes } from "node:crypto";
import { unlinkSync } from "node:fs";
import { open, rename, unlink } from "node:fs/promises";

/**
 * Utility class responsible for temp-file lifecycle management during downloads.
 * Handles creation, pre-allocation, atomic rename, and cleanup of temp files.
 *
 * @internal
 */
export class FileManager {
  private cleanupHandlers = new Map<string, { exitHandler: () => void; sigintHandler: () => void }>();

  /**
   * Creates a temporary file for the download with a unique identifier.
   *
   * The file is sized to `totalSize` up front so its final length is fixed
   * regardless of the order in which parts complete. This is a sparse file:
   * it records the length without allocating disk blocks, so it does not
   * reserve space, and it is not required for concurrent writes to succeed
   * (writes at an explicit offset extend a file on their own).
   *
   * @param destination - The final destination file path.
   * @param totalSize - Total byte size to set as the file length.
   * @returns The path to the created temp file.
   */
  public async createTempFile(destination: string, totalSize: number): Promise<string> {
    const tempFilePath = `${destination}.s3tmp.${this.generateUniqueId()}`;

    // "wx" creates the file exclusively, so a name collision with a concurrent
    // download to the same destination fails with EEXIST rather than truncating
    // the other download's temp file.
    const fd = await open(tempFilePath, "wx");
    try {
      await fd.truncate(totalSize);
    } finally {
      await fd.close();
    }

    return tempFilePath;
  }

  /**
   * Renames the temp file to the destination atomically.
   * On platforms where rename doesn't overwrite, falls back to
   * deleting the destination first.
   *
   * @param tempFilePath - Path to the temp file.
   * @param destination - Final destination path.
   */
  public async atomicRename(tempFilePath: string, destination: string): Promise<void> {
    try {
      await rename(tempFilePath, destination);
    } catch (renameError: any) {
      // Fallback for platforms where rename doesn't overwrite an existing file.
      if (renameError.code === "EEXIST" || renameError.code === "EPERM") {
        try {
          await unlink(destination);
          await rename(tempFilePath, destination);
        } catch (fallbackError: any) {
          await this.deleteTempFile(tempFilePath);
          throw new Error(`Failed to rename temp file to destination: ${fallbackError.message || fallbackError.code}`);
        }
      } else {
        await this.deleteTempFile(tempFilePath);
        throw new Error(`Failed to rename temp file to destination: ${renameError.message || renameError.code}`);
      }
    }
  }

  /**
   * Deletes the temp file. Idempotent — no-op if the file doesn't exist.
   *
   * @param tempFilePath - Path to the temp file to delete.
   */
  public async deleteTempFile(tempFilePath: string): Promise<void> {
    try {
      await unlink(tempFilePath);
    } catch (error: any) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }

  /**
   * Registers process-level cleanup handlers that remove the temp file
   * if the process terminates unexpectedly.
   *
   * @param tempFilePath - Path to the temp file to clean up.
   */
  public registerCleanupHandler(tempFilePath: string): void {
    const exitHandler = () => {
      try {
        unlinkSync(tempFilePath);
      } catch {
        // Ignore errors during cleanup (file may already be removed).
      }
    };

    const sigintHandler = () => {
      try {
        unlinkSync(tempFilePath);
      } catch {
        // Ignore errors during cleanup.
      }
      process.exit(1);
    };

    process.on("exit", exitHandler);
    process.on("SIGINT", sigintHandler);

    this.cleanupHandlers.set(tempFilePath, { exitHandler, sigintHandler });
  }

  /**
   * Removes the registered cleanup handlers for the given temp file.
   *
   * @param tempFilePath - Path to the temp file whose handlers should be removed.
   */
  public unregisterCleanupHandler(tempFilePath: string): void {
    const handlers = this.cleanupHandlers.get(tempFilePath);
    if (handlers) {
      process.removeListener("exit", handlers.exitHandler);
      process.removeListener("SIGINT", handlers.sigintHandler);
      this.cleanupHandlers.delete(tempFilePath);
    }
  }

  /**
   * Generates a unique identifier of at most 8 alphanumeric characters.
   */
  private generateUniqueId(): string {
    return randomBytes(4).toString("hex");
  }
}
