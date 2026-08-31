// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const UploadStatus = {
  ATTACHMENT_NOT_READY: "attachment-not-ready",
  ATTACHMENT_READY: "attachment-ready",
  FAILED: "failed",
} as const;
/**
 * @public
 */
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];
