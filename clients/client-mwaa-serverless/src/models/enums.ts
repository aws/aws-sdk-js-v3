// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const TaskInstanceStatus = {
  CANCELLED: "CANCELLED",
  DEFERRED: "DEFERRED",
  FAILED: "FAILED",
  NONE: "NONE",
  QUEUED: "QUEUED",
  REMOVED: "REMOVED",
  RESTARTING: "RESTARTING",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  SUCCESS: "SUCCESS",
  TIMEOUT: "TIMEOUT",
  UPSTREAM_FAILED: "UPSTREAM_FAILED",
  UP_FOR_RESCHEDULE: "UP_FOR_RESCHEDULE",
  UP_FOR_RETRY: "UP_FOR_RETRY",
} as const;
/**
 * @public
 */
export type TaskInstanceStatus = (typeof TaskInstanceStatus)[keyof typeof TaskInstanceStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_MANAGED_KEY: "AWS_MANAGED_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

export enum EngineVersion {
  ONE = 1,
}

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  DELETING: "DELETING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 * @enum
 */
export const WorkflowRunStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCESS: "SUCCESS",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];

/**
 * @public
 * @enum
 */
export const RunType = {
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type RunType = (typeof RunType)[keyof typeof RunType];
