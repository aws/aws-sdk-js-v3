// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FEATURE_NOT_AVAILABLE: "featureNotAvailable",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
  UNSUPPORTED_ENGINE_VERSION: "unsupportedEngineVersion",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const EngineType = {
  BLUAGE: "bluage",
  MICROFOCUS: "microfocus",
} as const;
/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 * @enum
 */
export const DeploymentLifecycle = {
  DEPLOYING: "Deploying",
  DEPLOY_UPDATE: "Updating Deployment",
  FAILED: "Failed",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type DeploymentLifecycle = (typeof DeploymentLifecycle)[keyof typeof DeploymentLifecycle];

/**
 * @public
 * @enum
 */
export const ApplicationVersionLifecycle = {
  AVAILABLE: "Available",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type ApplicationVersionLifecycle =
  (typeof ApplicationVersionLifecycle)[keyof typeof ApplicationVersionLifecycle];

/**
 * @public
 * @enum
 */
export const ApplicationLifecycle = {
  AVAILABLE: "Available",
  CREATED: "Created",
  CREATING: "Creating",
  DELETING: "Deleting",
  DELETING_FROM_ENVIRONMENT: "Deleting From Environment",
  FAILED: "Failed",
  READY: "Ready",
  RUNNING: "Running",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type ApplicationLifecycle = (typeof ApplicationLifecycle)[keyof typeof ApplicationLifecycle];

/**
 * @public
 * @enum
 */
export const BatchJobType = {
  JES2: "JES2",
  JES3: "JES3",
  VSE: "VSE",
} as const;
/**
 * @public
 */
export type BatchJobType = (typeof BatchJobType)[keyof typeof BatchJobType];

/**
 * @public
 * @enum
 */
export const BatchJobExecutionStatus = {
  CANCELLED: "Cancelled",
  CANCELLING: "Cancelling",
  DISPATCH: "Dispatching",
  FAILED: "Failed",
  HOLDING: "Holding",
  PURGED: "Purged",
  RUNNING: "Running",
  SUBMITTING: "Submitting",
  SUCCEEDED: "Succeeded",
  SUCCEEDED_WITH_WARNING: "Succeeded With Warning",
} as const;
/**
 * @public
 */
export type BatchJobExecutionStatus = (typeof BatchJobExecutionStatus)[keyof typeof BatchJobExecutionStatus];

/**
 * @public
 * @enum
 */
export const DataSetTaskLifecycle = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  FAILED: "Failed",
  RUNNING: "Running",
} as const;
/**
 * @public
 */
export type DataSetTaskLifecycle = (typeof DataSetTaskLifecycle)[keyof typeof DataSetTaskLifecycle];

/**
 * @public
 * @enum
 */
export const ApplicationDeploymentLifecycle = {
  DEPLOYED: "Deployed",
  DEPLOYING: "Deploying",
} as const;
/**
 * @public
 */
export type ApplicationDeploymentLifecycle =
  (typeof ApplicationDeploymentLifecycle)[keyof typeof ApplicationDeploymentLifecycle];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL: "dual",
  IPV4: "ipv4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const EnvironmentLifecycle = {
  AVAILABLE: "Available",
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  UNHEALTHY: "UnHealthy",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type EnvironmentLifecycle = (typeof EnvironmentLifecycle)[keyof typeof EnvironmentLifecycle];
