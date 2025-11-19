// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BulkPublishStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BulkPublishStatus = (typeof BulkPublishStatus)[keyof typeof BulkPublishStatus];

/**
 * @public
 * @enum
 */
export const StreamingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type StreamingStatus = (typeof StreamingStatus)[keyof typeof StreamingStatus];

/**
 * @public
 * @enum
 */
export const Platform = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const Operation = {
  remove: "remove",
  replace: "replace",
} as const;
/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];
