// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Status = {
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  NONE: "NONE",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const StatusType = {
  ASYNC_EXECUTIONS: "AsyncExecutions",
  DEPLOYMENT: "Deployment",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];
