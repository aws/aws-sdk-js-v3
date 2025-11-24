// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MigrationWorkflowStatusEnum = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
  PAUSING_FAILED: "PAUSING_FAILED",
  STARTING: "STARTING",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
  WORKFLOW_FAILED: "WORKFLOW_FAILED",
} as const;
/**
 * @public
 */
export type MigrationWorkflowStatusEnum =
  (typeof MigrationWorkflowStatusEnum)[keyof typeof MigrationWorkflowStatusEnum];

/**
 * @public
 * @enum
 */
export const DataType = {
  INTEGER: "INTEGER",
  STRING: "STRING",
  STRINGLIST: "STRINGLIST",
  STRINGMAP: "STRINGMAP",
} as const;
/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * @public
 * @enum
 */
export const TemplateStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  PENDING_CREATION: "PENDING_CREATION",
  READY: "READY",
} as const;
/**
 * @public
 */
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

/**
 * @public
 * @enum
 */
export const PluginHealth = {
  PLUGIN_HEALTHY: "HEALTHY",
  PLUGIN_UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type PluginHealth = (typeof PluginHealth)[keyof typeof PluginHealth];

/**
 * @public
 * @enum
 */
export const StepActionType = {
  AUTOMATED: "AUTOMATED",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type StepActionType = (typeof StepActionType)[keyof typeof StepActionType];

/**
 * @public
 * @enum
 */
export const RunEnvironment = {
  AWS: "AWS",
  ONPREMISE: "ONPREMISE",
} as const;
/**
 * @public
 */
export type RunEnvironment = (typeof RunEnvironment)[keyof typeof RunEnvironment];

/**
 * @public
 * @enum
 */
export const TargetType = {
  ALL: "ALL",
  NONE: "NONE",
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const Owner = {
  AWSManaged: "AWS_MANAGED",
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type Owner = (typeof Owner)[keyof typeof Owner];

/**
 * @public
 * @enum
 */
export const StepGroupStatus = {
  AWAITING_DEPENDENCIES: "AWAITING_DEPENDENCIES",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
  READY: "READY",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
} as const;
/**
 * @public
 */
export type StepGroupStatus = (typeof StepGroupStatus)[keyof typeof StepGroupStatus];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  AWAITING_DEPENDENCIES: "AWAITING_DEPENDENCIES",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
  READY: "READY",
  SKIPPED: "SKIPPED",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];
