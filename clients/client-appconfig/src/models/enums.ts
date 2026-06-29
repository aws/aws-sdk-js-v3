// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionPoint = {
  AT_DEPLOYMENT_TICK: "AT_DEPLOYMENT_TICK",
  ON_DEPLOYMENT_BAKING: "ON_DEPLOYMENT_BAKING",
  ON_DEPLOYMENT_COMPLETE: "ON_DEPLOYMENT_COMPLETE",
  ON_DEPLOYMENT_ROLLED_BACK: "ON_DEPLOYMENT_ROLLED_BACK",
  ON_DEPLOYMENT_START: "ON_DEPLOYMENT_START",
  ON_DEPLOYMENT_STEP: "ON_DEPLOYMENT_STEP",
  PRE_CREATE_HOSTED_CONFIGURATION_VERSION: "PRE_CREATE_HOSTED_CONFIGURATION_VERSION",
  PRE_START_DEPLOYMENT: "PRE_START_DEPLOYMENT",
} as const;
/**
 * @public
 */
export type ActionPoint = (typeof ActionPoint)[keyof typeof ActionPoint];

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  INVALID_CONFIGURATION: "InvalidConfiguration",
} as const;
/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * @public
 * @enum
 */
export const ValidatorType = {
  JSON_SCHEMA: "JSON_SCHEMA",
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type ValidatorType = (typeof ValidatorType)[keyof typeof ValidatorType];

/**
 * @public
 * @enum
 */
export const GrowthType = {
  EXPONENTIAL: "EXPONENTIAL",
  LINEAR: "LINEAR",
} as const;
/**
 * @public
 */
export type GrowthType = (typeof GrowthType)[keyof typeof GrowthType];

/**
 * @public
 * @enum
 */
export const ReplicateTo = {
  NONE: "NONE",
  SSM_DOCUMENT: "SSM_DOCUMENT",
} as const;
/**
 * @public
 */
export type ReplicateTo = (typeof ReplicateTo)[keyof typeof ReplicateTo];

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  DEPLOYING: "DEPLOYING",
  READY_FOR_DEPLOYMENT: "READY_FOR_DEPLOYMENT",
  REVERTED: "REVERTED",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
} as const;
/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * @public
 * @enum
 */
export const ExperimentDefinitionStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  IDLE: "IDLE",
} as const;
/**
 * @public
 */
export type ExperimentDefinitionStatus = (typeof ExperimentDefinitionStatus)[keyof typeof ExperimentDefinitionStatus];

/**
 * @public
 * @enum
 */
export const BytesMeasure = {
  KILOBYTES: "KILOBYTES",
} as const;
/**
 * @public
 */
export type BytesMeasure = (typeof BytesMeasure)[keyof typeof BytesMeasure];

/**
 * @public
 * @enum
 */
export const DeletionProtectionCheck = {
  ACCOUNT_DEFAULT: "ACCOUNT_DEFAULT",
  APPLY: "APPLY",
  BYPASS: "BYPASS",
} as const;
/**
 * @public
 */
export type DeletionProtectionCheck = (typeof DeletionProtectionCheck)[keyof typeof DeletionProtectionCheck];

/**
 * @public
 * @enum
 */
export const DeleteType = {
  ARCHIVE: "ARCHIVE",
  DESTROY: "DESTROY",
} as const;
/**
 * @public
 */
export type DeleteType = (typeof DeleteType)[keyof typeof DeleteType];

/**
 * @public
 * @enum
 */
export const DeploymentEventType = {
  BAKE_TIME_STARTED: "BAKE_TIME_STARTED",
  DEPLOYMENT_COMPLETED: "DEPLOYMENT_COMPLETED",
  DEPLOYMENT_STARTED: "DEPLOYMENT_STARTED",
  PERCENTAGE_UPDATED: "PERCENTAGE_UPDATED",
  REVERT_COMPLETED: "REVERT_COMPLETED",
  ROLLBACK_COMPLETED: "ROLLBACK_COMPLETED",
  ROLLBACK_STARTED: "ROLLBACK_STARTED",
} as const;
/**
 * @public
 */
export type DeploymentEventType = (typeof DeploymentEventType)[keyof typeof DeploymentEventType];

/**
 * @public
 * @enum
 */
export const TriggeredBy = {
  APPCONFIG: "APPCONFIG",
  CLOUDWATCH_ALARM: "CLOUDWATCH_ALARM",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  USER: "USER",
} as const;
/**
 * @public
 */
export type TriggeredBy = (typeof TriggeredBy)[keyof typeof TriggeredBy];

/**
 * @public
 * @enum
 */
export const DeploymentState = {
  BAKING: "BAKING",
  COMPLETE: "COMPLETE",
  DEPLOYING: "DEPLOYING",
  REVERTED: "REVERTED",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

/**
 * @public
 * @enum
 */
export const ExperimentRunStatus = {
  DONE: "DONE",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ExperimentRunStatus = (typeof ExperimentRunStatus)[keyof typeof ExperimentRunStatus];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  MANAGED: "MANAGED",
  USER: "USER",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const ExperimentRunEventType = {
  EXPOSURE_UPDATED: "EXPOSURE_UPDATED",
  OVERRIDES_UPDATED: "OVERRIDES_UPDATED",
  RUN_STARTED: "RUN_STARTED",
  RUN_STOPPED: "RUN_STOPPED",
} as const;
/**
 * @public
 */
export type ExperimentRunEventType = (typeof ExperimentRunEventType)[keyof typeof ExperimentRunEventType];
