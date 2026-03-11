// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const S3SseAlgorithm = {
  AES256: "AES256",
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type S3SseAlgorithm = (typeof S3SseAlgorithm)[keyof typeof S3SseAlgorithm];
