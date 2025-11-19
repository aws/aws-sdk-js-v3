// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionHistoryStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type ActionHistoryStatus = (typeof ActionHistoryStatus)[keyof typeof ActionHistoryStatus];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  Pending: "Pending",
  Running: "Running",
  Scheduled: "Scheduled",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const ActionType = {
  InstanceRefresh: "InstanceRefresh",
  PlatformUpdate: "PlatformUpdate",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const SourceRepository = {
  CodeCommit: "CodeCommit",
  S3: "S3",
} as const;
/**
 * @public
 */
export type SourceRepository = (typeof SourceRepository)[keyof typeof SourceRepository];

/**
 * @public
 * @enum
 */
export const SourceType = {
  Git: "Git",
  Zip: "Zip",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const ApplicationVersionStatus = {
  Building: "Building",
  Failed: "Failed",
  Processed: "Processed",
  Processing: "Processing",
  Unprocessed: "Unprocessed",
} as const;
/**
 * @public
 */
export type ApplicationVersionStatus = (typeof ApplicationVersionStatus)[keyof typeof ApplicationVersionStatus];

/**
 * @public
 * @enum
 */
export const EnvironmentHealth = {
  Green: "Green",
  Grey: "Grey",
  Red: "Red",
  Yellow: "Yellow",
} as const;
/**
 * @public
 */
export type EnvironmentHealth = (typeof EnvironmentHealth)[keyof typeof EnvironmentHealth];

/**
 * @public
 * @enum
 */
export const EnvironmentHealthStatus = {
  Degraded: "Degraded",
  Info: "Info",
  NoData: "NoData",
  Ok: "Ok",
  Pending: "Pending",
  Severe: "Severe",
  Suspended: "Suspended",
  Unknown: "Unknown",
  Warning: "Warning",
} as const;
/**
 * @public
 */
export type EnvironmentHealthStatus = (typeof EnvironmentHealthStatus)[keyof typeof EnvironmentHealthStatus];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  Aborting: "Aborting",
  Launching: "Launching",
  LinkingFrom: "LinkingFrom",
  LinkingTo: "LinkingTo",
  Ready: "Ready",
  Terminated: "Terminated",
  Terminating: "Terminating",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const ComputeType = {
  BUILD_GENERAL1_LARGE: "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM: "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL: "BUILD_GENERAL1_SMALL",
} as const;
/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * @public
 * @enum
 */
export const ConfigurationDeploymentStatus = {
  deployed: "deployed",
  failed: "failed",
  pending: "pending",
} as const;
/**
 * @public
 */
export type ConfigurationDeploymentStatus =
  (typeof ConfigurationDeploymentStatus)[keyof typeof ConfigurationDeploymentStatus];

/**
 * @public
 * @enum
 */
export const PlatformStatus = {
  Creating: "Creating",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Failed: "Failed",
  Ready: "Ready",
} as const;
/**
 * @public
 */
export type PlatformStatus = (typeof PlatformStatus)[keyof typeof PlatformStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationOptionValueType = {
  List: "List",
  Scalar: "Scalar",
} as const;
/**
 * @public
 */
export type ConfigurationOptionValueType =
  (typeof ConfigurationOptionValueType)[keyof typeof ConfigurationOptionValueType];

/**
 * @public
 * @enum
 */
export const EnvironmentHealthAttribute = {
  All: "All",
  ApplicationMetrics: "ApplicationMetrics",
  Causes: "Causes",
  Color: "Color",
  HealthStatus: "HealthStatus",
  InstancesHealth: "InstancesHealth",
  RefreshedAt: "RefreshedAt",
  Status: "Status",
} as const;
/**
 * @public
 */
export type EnvironmentHealthAttribute = (typeof EnvironmentHealthAttribute)[keyof typeof EnvironmentHealthAttribute];

/**
 * @public
 * @enum
 */
export const FailureType = {
  CancellationFailed: "CancellationFailed",
  InternalFailure: "InternalFailure",
  InvalidEnvironmentState: "InvalidEnvironmentState",
  PermissionsError: "PermissionsError",
  RollbackFailed: "RollbackFailed",
  RollbackSuccessful: "RollbackSuccessful",
  UpdateCancelled: "UpdateCancelled",
} as const;
/**
 * @public
 */
export type FailureType = (typeof FailureType)[keyof typeof FailureType];

/**
 * @public
 * @enum
 */
export const EventSeverity = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  TRACE: "TRACE",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type EventSeverity = (typeof EventSeverity)[keyof typeof EventSeverity];

/**
 * @public
 * @enum
 */
export const InstancesHealthAttribute = {
  All: "All",
  ApplicationMetrics: "ApplicationMetrics",
  AvailabilityZone: "AvailabilityZone",
  Causes: "Causes",
  Color: "Color",
  Deployment: "Deployment",
  HealthStatus: "HealthStatus",
  InstanceType: "InstanceType",
  LaunchedAt: "LaunchedAt",
  RefreshedAt: "RefreshedAt",
  System: "System",
} as const;
/**
 * @public
 */
export type InstancesHealthAttribute = (typeof InstancesHealthAttribute)[keyof typeof InstancesHealthAttribute];

/**
 * @public
 * @enum
 */
export const EnvironmentInfoType = {
  bundle: "bundle",
  tail: "tail",
} as const;
/**
 * @public
 */
export type EnvironmentInfoType = (typeof EnvironmentInfoType)[keyof typeof EnvironmentInfoType];

/**
 * @public
 * @enum
 */
export const ValidationSeverity = {
  error: "error",
  warning: "warning",
} as const;
/**
 * @public
 */
export type ValidationSeverity = (typeof ValidationSeverity)[keyof typeof ValidationSeverity];
