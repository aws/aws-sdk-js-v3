// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_INITIATING: "DELETE_INITIATING",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const EventStatus = {
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/**
 * @public
 * @enum
 */
export const DeploymentFilterKey = {
  DEPLOYMENT_STATUS: "DEPLOYMENT_STATUS",
  WORKLOAD_NAME: "WORKLOAD_NAME",
} as const;
/**
 * @public
 */
export type DeploymentFilterKey = (typeof DeploymentFilterKey)[keyof typeof DeploymentFilterKey];

/**
 * @public
 * @enum
 */
export const WorkloadStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type WorkloadStatus = (typeof WorkloadStatus)[keyof typeof WorkloadStatus];

/**
 * @public
 * @enum
 */
export const WorkloadDeploymentPatternStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type WorkloadDeploymentPatternStatus =
  (typeof WorkloadDeploymentPatternStatus)[keyof typeof WorkloadDeploymentPatternStatus];
