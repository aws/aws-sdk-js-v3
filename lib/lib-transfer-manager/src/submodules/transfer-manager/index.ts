import { destroyStreams, joinStreams } from "./join-streams";
import { bindS3TransferManager } from "./S3TransferManager";
import { createEmptyReadable, defaultWorkerCount, WorkerHttpHandler } from "./worker-http-handler";

/**
 * Node.js version of the TransferManager, providing high-level upload and download
 * operations for Amazon S3 with multipart parallelism and worker-based multi-threading.
 *
 * @alpha
 */
export class S3TransferManager extends bindS3TransferManager({
  joinStreams,
  destroyStreams,
  WorkerHttpHandler,
  createEmptyReadable,
  defaultWorkerCount,
}) {}

export type { DownloadToFileRequest, DownloadToFileResponse, IS3TransferManager } from "./types";
