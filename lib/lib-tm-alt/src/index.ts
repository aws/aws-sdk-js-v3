// @ts-nocheck
/**
 * @aws-sdk/lib-tm-alt
 *
 * Ad hoc high-throughput multipart S3 transfer manager using worker threads.
 * Supports parallel download (ranged GET by PartNumber) and upload (multipart)
 * with connection spreading, stall retry, buffer recycling, and more.
 *
 * @internal
 */

export { S3TransferManager } from "./transfer-manager";
export type { S3TransferManagerConfig } from "./transfer-manager";

export { S3UploadManager } from "./upload-manager";
export type { S3UploadManagerConfig, UploadResult } from "./upload-manager";

export { makeClient } from "./s3";
export type { MakeClientOptions } from "./s3";

export { computeParts, parseSize, resolveCiphers, formatBytes, throughput } from "./config";
export type { PartDescriptor } from "./config";

export { newProgressBuffer, bumpProgress, progressView, ProgressReporter } from "./progress";

export {
  IpThroughputTracker,
  mergeIpThroughput,
  ipIterationGbps,
  accumulateIpSamples,
  summarizeIpHistory,
  printIpThroughput,
  appendIpRecord,
} from "./ip-throughput";

export { installNativeCrc32 } from "./crc32-native";
