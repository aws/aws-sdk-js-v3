// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncryptionMode = {
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;
/**
 * @public
 */
export type EncryptionMode = (typeof EncryptionMode)[keyof typeof EncryptionMode];

/**
 * @public
 * @enum
 */
export const BrowserType = {
  CHROME: "CHROME",
  FIREFOX: "FIREFOX",
} as const;
/**
 * @public
 */
export type BrowserType = (typeof BrowserType)[keyof typeof BrowserType];

/**
 * @public
 * @enum
 */
export const DependencyType = {
  LambdaLayer: "LambdaLayer",
} as const;
/**
 * @public
 */
export type DependencyType = (typeof DependencyType)[keyof typeof DependencyType];

/**
 * @public
 * @enum
 */
export const ProvisionedResourceCleanupSetting = {
  AUTOMATIC: "AUTOMATIC",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type ProvisionedResourceCleanupSetting =
  (typeof ProvisionedResourceCleanupSetting)[keyof typeof ProvisionedResourceCleanupSetting];

/**
 * @public
 * @enum
 */
export const CanaryState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  ERROR: "ERROR",
  READY: "READY",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CanaryState = (typeof CanaryState)[keyof typeof CanaryState];

/**
 * @public
 * @enum
 */
export const CanaryStateReasonCode = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  SYNC_DELETE_IN_PROGRESS: "SYNC_DELETE_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;
/**
 * @public
 */
export type CanaryStateReasonCode = (typeof CanaryStateReasonCode)[keyof typeof CanaryStateReasonCode];

/**
 * @public
 * @enum
 */
export const CanaryRunState = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type CanaryRunState = (typeof CanaryRunState)[keyof typeof CanaryRunState];

/**
 * @public
 * @enum
 */
export const CanaryRunStateReasonCode = {
  CANARY_FAILURE: "CANARY_FAILURE",
  EXECUTION_FAILURE: "EXECUTION_FAILURE",
} as const;
/**
 * @public
 */
export type CanaryRunStateReasonCode = (typeof CanaryRunStateReasonCode)[keyof typeof CanaryRunStateReasonCode];

/**
 * @public
 * @enum
 */
export const CanaryRunTestResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type CanaryRunTestResult = (typeof CanaryRunTestResult)[keyof typeof CanaryRunTestResult];

/**
 * @public
 * @enum
 */
export const ResourceToTag = {
  LAMBDA_FUNCTION: "lambda-function",
} as const;
/**
 * @public
 */
export type ResourceToTag = (typeof ResourceToTag)[keyof typeof ResourceToTag];

/**
 * @public
 * @enum
 */
export const RunType = {
  CANARY_RUN: "CANARY_RUN",
  DRY_RUN: "DRY_RUN",
} as const;
/**
 * @public
 */
export type RunType = (typeof RunType)[keyof typeof RunType];
