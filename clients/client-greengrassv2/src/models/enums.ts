// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CloudComponentState = {
  DEPLOYABLE: "DEPLOYABLE",
  DEPRECATED: "DEPRECATED",
  FAILED: "FAILED",
  INITIATED: "INITIATED",
  REQUESTED: "REQUESTED",
} as const;
/**
 * @public
 */
export type CloudComponentState = (typeof CloudComponentState)[keyof typeof CloudComponentState];

/**
 * @public
 * @enum
 */
export const VendorGuidance = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISCONTINUED: "DISCONTINUED",
} as const;
/**
 * @public
 */
export type VendorGuidance = (typeof VendorGuidance)[keyof typeof VendorGuidance];

/**
 * @public
 * @enum
 */
export const ComponentDependencyType = {
  HARD: "HARD",
  SOFT: "SOFT",
} as const;
/**
 * @public
 */
export type ComponentDependencyType = (typeof ComponentDependencyType)[keyof typeof ComponentDependencyType];

/**
 * @public
 * @enum
 */
export const ComponentVisibilityScope = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type ComponentVisibilityScope = (typeof ComponentVisibilityScope)[keyof typeof ComponentVisibilityScope];

/**
 * @public
 * @enum
 */
export const CoreDeviceStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type CoreDeviceStatus = (typeof CoreDeviceStatus)[keyof typeof CoreDeviceStatus];

/**
 * @public
 * @enum
 */
export const LambdaEventSourceType = {
  IOT_CORE: "IOT_CORE",
  PUB_SUB: "PUB_SUB",
} as const;
/**
 * @public
 */
export type LambdaEventSourceType = (typeof LambdaEventSourceType)[keyof typeof LambdaEventSourceType];

/**
 * @public
 * @enum
 */
export const LambdaInputPayloadEncodingType = {
  BINARY: "binary",
  JSON: "json",
} as const;
/**
 * @public
 */
export type LambdaInputPayloadEncodingType =
  (typeof LambdaInputPayloadEncodingType)[keyof typeof LambdaInputPayloadEncodingType];

/**
 * @public
 * @enum
 */
export const LambdaFilesystemPermission = {
  RO: "ro",
  RW: "rw",
} as const;
/**
 * @public
 */
export type LambdaFilesystemPermission = (typeof LambdaFilesystemPermission)[keyof typeof LambdaFilesystemPermission];

/**
 * @public
 * @enum
 */
export const LambdaIsolationMode = {
  GREENGRASS_CONTAINER: "GreengrassContainer",
  NO_CONTAINER: "NoContainer",
} as const;
/**
 * @public
 */
export type LambdaIsolationMode = (typeof LambdaIsolationMode)[keyof typeof LambdaIsolationMode];

/**
 * @public
 * @enum
 */
export const DeploymentComponentUpdatePolicyAction = {
  NOTIFY_COMPONENTS: "NOTIFY_COMPONENTS",
  SKIP_NOTIFY_COMPONENTS: "SKIP_NOTIFY_COMPONENTS",
} as const;
/**
 * @public
 */
export type DeploymentComponentUpdatePolicyAction =
  (typeof DeploymentComponentUpdatePolicyAction)[keyof typeof DeploymentComponentUpdatePolicyAction];

/**
 * @public
 * @enum
 */
export const DeploymentFailureHandlingPolicy = {
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type DeploymentFailureHandlingPolicy =
  (typeof DeploymentFailureHandlingPolicy)[keyof typeof DeploymentFailureHandlingPolicy];

/**
 * @public
 * @enum
 */
export const IoTJobAbortAction = {
  CANCEL: "CANCEL",
} as const;
/**
 * @public
 */
export type IoTJobAbortAction = (typeof IoTJobAbortAction)[keyof typeof IoTJobAbortAction];

/**
 * @public
 * @enum
 */
export const IoTJobExecutionFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type IoTJobExecutionFailureType = (typeof IoTJobExecutionFailureType)[keyof typeof IoTJobExecutionFailureType];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const DeploymentHistoryFilter = {
  ALL: "ALL",
  LATEST_ONLY: "LATEST_ONLY",
} as const;
/**
 * @public
 */
export type DeploymentHistoryFilter = (typeof DeploymentHistoryFilter)[keyof typeof DeploymentHistoryFilter];

/**
 * @public
 * @enum
 */
export const EffectiveDeploymentExecutionStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type EffectiveDeploymentExecutionStatus =
  (typeof EffectiveDeploymentExecutionStatus)[keyof typeof EffectiveDeploymentExecutionStatus];

/**
 * @public
 * @enum
 */
export const RecipeOutputFormat = {
  JSON: "JSON",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type RecipeOutputFormat = (typeof RecipeOutputFormat)[keyof typeof RecipeOutputFormat];

/**
 * @public
 * @enum
 */
export const IotEndpointType = {
  fips: "fips",
  standard: "standard",
} as const;
/**
 * @public
 */
export type IotEndpointType = (typeof IotEndpointType)[keyof typeof IotEndpointType];

/**
 * @public
 * @enum
 */
export const S3EndpointType = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type S3EndpointType = (typeof S3EndpointType)[keyof typeof S3EndpointType];

/**
 * @public
 * @enum
 */
export const InstalledComponentTopologyFilter = {
  ALL: "ALL",
  ROOT: "ROOT",
} as const;
/**
 * @public
 */
export type InstalledComponentTopologyFilter =
  (typeof InstalledComponentTopologyFilter)[keyof typeof InstalledComponentTopologyFilter];

/**
 * @public
 * @enum
 */
export const InstalledComponentLifecycleState = {
  BROKEN: "BROKEN",
  ERRORED: "ERRORED",
  FINISHED: "FINISHED",
  INSTALLED: "INSTALLED",
  NEW: "NEW",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type InstalledComponentLifecycleState =
  (typeof InstalledComponentLifecycleState)[keyof typeof InstalledComponentLifecycleState];
