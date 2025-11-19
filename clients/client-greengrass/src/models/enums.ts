// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncodingType = {
  binary: "binary",
  json: "json",
} as const;
/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 * @enum
 */
export const FunctionIsolationMode = {
  GreengrassContainer: "GreengrassContainer",
  NoContainer: "NoContainer",
} as const;
/**
 * @public
 */
export type FunctionIsolationMode = (typeof FunctionIsolationMode)[keyof typeof FunctionIsolationMode];

/**
 * @public
 * @enum
 */
export const Permission = {
  ro: "ro",
  rw: "rw",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const LoggerComponent = {
  GreengrassSystem: "GreengrassSystem",
  Lambda: "Lambda",
} as const;
/**
 * @public
 */
export type LoggerComponent = (typeof LoggerComponent)[keyof typeof LoggerComponent];

/**
 * @public
 * @enum
 */
export const LoggerLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type LoggerLevel = (typeof LoggerLevel)[keyof typeof LoggerLevel];

/**
 * @public
 * @enum
 */
export const LoggerType = {
  AWSCloudWatch: "AWSCloudWatch",
  FileSystem: "FileSystem",
} as const;
/**
 * @public
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  ForceResetDeployment: "ForceResetDeployment",
  NewDeployment: "NewDeployment",
  Redeployment: "Redeployment",
  ResetDeployment: "ResetDeployment",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const BulkDeploymentStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Initializing: "Initializing",
  Running: "Running",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;
/**
 * @public
 */
export type BulkDeploymentStatus = (typeof BulkDeploymentStatus)[keyof typeof BulkDeploymentStatus];

/**
 * @public
 * @enum
 */
export const ConfigurationSyncStatus = {
  InSync: "InSync",
  OutOfSync: "OutOfSync",
} as const;
/**
 * @public
 */
export type ConfigurationSyncStatus = (typeof ConfigurationSyncStatus)[keyof typeof ConfigurationSyncStatus];

/**
 * @public
 * @enum
 */
export const SoftwareToUpdate = {
  core: "core",
  ota_agent: "ota_agent",
} as const;
/**
 * @public
 */
export type SoftwareToUpdate = (typeof SoftwareToUpdate)[keyof typeof SoftwareToUpdate];

/**
 * @public
 * @enum
 */
export const UpdateAgentLogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  FATAL: "FATAL",
  INFO: "INFO",
  NONE: "NONE",
  TRACE: "TRACE",
  VERBOSE: "VERBOSE",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type UpdateAgentLogLevel = (typeof UpdateAgentLogLevel)[keyof typeof UpdateAgentLogLevel];

/**
 * @public
 * @enum
 */
export const UpdateTargetsArchitecture = {
  aarch64: "aarch64",
  armv6l: "armv6l",
  armv7l: "armv7l",
  x86_64: "x86_64",
} as const;
/**
 * @public
 */
export type UpdateTargetsArchitecture = (typeof UpdateTargetsArchitecture)[keyof typeof UpdateTargetsArchitecture];

/**
 * @public
 * @enum
 */
export const UpdateTargetsOperatingSystem = {
  amazon_linux: "amazon_linux",
  openwrt: "openwrt",
  raspbian: "raspbian",
  ubuntu: "ubuntu",
} as const;
/**
 * @public
 */
export type UpdateTargetsOperatingSystem =
  (typeof UpdateTargetsOperatingSystem)[keyof typeof UpdateTargetsOperatingSystem];

/**
 * @public
 * @enum
 */
export const Telemetry = {
  Off: "Off",
  On: "On",
} as const;
/**
 * @public
 */
export type Telemetry = (typeof Telemetry)[keyof typeof Telemetry];
