import { destroyStreams, joinStreams } from "./join-streams";
import { bindS3TransferManager } from "./S3TransferManager";
import { createEmptyReadable, defaultWorkerCount, WorkerHttpHandler } from "./worker-http-handler";

/**
 * Binds the Node.js implementations of the environment-specific runtime
 * dependencies (worker-thread HTTP handler and Node.js stream join/destroy
 * helpers) into the shared transfer manager implementation via
 * {@link bindS3TransferManager}.
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
