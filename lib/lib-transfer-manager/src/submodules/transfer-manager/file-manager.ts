import { randomBytes } from "node:crypto";
import { unlinkSync } from "node:fs";
import { open, rename, unlink } from "node:fs/promises";

/**
 * Utility class responsible for temp-file lifecycle management during downloadToFile.
 * Handles creation, pre-allocation, atomic rename, and cleanup of temp files.
 *
 * @internal
 */
export class FileManager {
  private cleanupHandlers = new Map<string, { exitHandler: () => void }>();

  /**
   * Creates a temporary file for the download with a unique identifier.
   * Sets the file length to `totalSize` up front via truncate so concurrent
   * part writes can target their offsets without coordination.
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
   * Deletes the temp file and unregisters any associated cleanup handlers.
   *
   * @param tempFilePath - Path to the temp file to delete.
   */
  public async deleteTempFile(tempFilePath: string): Promise<void> {
    this.unregisterCleanupHandler(tempFilePath);
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
        /* File may already be deleted by normal cleanup, and errors are
         * unrecoverable since the process is exiting, so ignore the error.
         */
      }
    };

    // The `exit` event covers SIGINT and SIGTERM — both trigger process
    // termination by default, which fires `exit` before the process ends.
    process.on("exit", exitHandler);

    this.cleanupHandlers.set(tempFilePath, { exitHandler });
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
