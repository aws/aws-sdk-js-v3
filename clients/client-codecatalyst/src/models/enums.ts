// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OperationType = {
  MUTATION: "MUTATION",
  READONLY: "READONLY",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const UserType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
  UNKNOWN: "UNKNOWN",
  USER: "USER",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  DEV_STANDARD1_LARGE: "dev.standard1.large",
  DEV_STANDARD1_MEDIUM: "dev.standard1.medium",
  DEV_STANDARD1_SMALL: "dev.standard1.small",
  DEV_STANDARD1_XLARGE: "dev.standard1.xlarge",
} as const;
/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const DevEnvironmentStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type DevEnvironmentStatus = (typeof DevEnvironmentStatus)[keyof typeof DevEnvironmentStatus];

/**
 * @public
 * @enum
 */
export const DevEnvironmentSessionType = {
  SSH: "SSH",
  SSM: "SSM",
} as const;
/**
 * @public
 */
export type DevEnvironmentSessionType = (typeof DevEnvironmentSessionType)[keyof typeof DevEnvironmentSessionType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  EQUALS: "EQ",
  GREATER_THAN: "GT",
  GREATER_THAN_OR_EQUALS: "GE",
  LESS_THAN: "LT",
  LESS_THAN_OR_EQUALS: "LE",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const FilterKey = {
  HAS_ACCESS_TO: "hasAccessTo",
  NAME: "name",
} as const;
/**
 * @public
 */
export type FilterKey = (typeof FilterKey)[keyof typeof FilterKey];

/**
 * @public
 * @enum
 */
export const WorkflowRunMode = {
  PARALLEL: "PARALLEL",
  QUEUED: "QUEUED",
  SUPERSEDED: "SUPERSEDED",
} as const;
/**
 * @public
 */
export type WorkflowRunMode = (typeof WorkflowRunMode)[keyof typeof WorkflowRunMode];

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  ACTIVE: "ACTIVE",
  INVALID: "INVALID",
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
  ABANDONED: "ABANDONED",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_RUN: "NOT_RUN",
  PROVISIONING: "PROVISIONING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  SUPERSEDED: "SUPERSEDED",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];
