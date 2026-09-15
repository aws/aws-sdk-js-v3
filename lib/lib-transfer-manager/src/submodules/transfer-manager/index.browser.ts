import { destroyStreams, joinStreams } from "./join-streams.browser";
import { bindS3TransferManager } from "./S3TransferManager";
import { createEmptyReadable, defaultWorkerCount, WorkerHttpHandler } from "./worker-http-handler.browser";

/**
 * Binds the browser implementations of the environment-specific runtime
 * dependencies into the shared transfer manager via {@link bindS3TransferManager}.
 * Worker threads are unavailable in the browser, so `defaultWorkerCount()`
 * returns 1 and the worker handler is an inert stub that is never invoked.
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
