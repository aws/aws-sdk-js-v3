// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;
/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 * @enum
 */
export const ApplicationState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type ApplicationState = (typeof ApplicationState)[keyof typeof ApplicationState];

/**
 * @public
 * @enum
 */
export const JobRunMode = {
  BATCH: "BATCH",
  STREAMING: "STREAMING",
} as const;
/**
 * @public
 */
export type JobRunMode = (typeof JobRunMode)[keyof typeof JobRunMode];

/**
 * @public
 * @enum
 */
export const JobRunState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];
