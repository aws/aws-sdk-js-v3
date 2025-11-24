// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionCategory = {
  BACKUP: "BACKUP",
  CONFIGURATION: "CONFIGURATION",
  DISASTER_RECOVERY: "DISASTER_RECOVERY",
  LICENSE_AND_SUBSCRIPTION: "LICENSE_AND_SUBSCRIPTION",
  NETWORKING: "NETWORKING",
  OBSERVABILITY: "OBSERVABILITY",
  OPERATING_SYSTEM: "OPERATING_SYSTEM",
  OTHER: "OTHER",
  REFACTORING: "REFACTORING",
  SECURITY: "SECURITY",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type ActionCategory = (typeof ActionCategory)[keyof typeof ActionCategory];

/**
 * @public
 * @enum
 */
export const ApplicationHealthStatus = {
  ERROR: "ERROR",
  HEALTHY: "HEALTHY",
  LAGGING: "LAGGING",
} as const;
/**
 * @public
 */
export type ApplicationHealthStatus = (typeof ApplicationHealthStatus)[keyof typeof ApplicationHealthStatus];

/**
 * @public
 * @enum
 */
export const ApplicationProgressStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type ApplicationProgressStatus = (typeof ApplicationProgressStatus)[keyof typeof ApplicationProgressStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STARTED: "STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * @enum
 */
export const ImportErrorType = {
  PROCESSING_ERROR: "PROCESSING_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type ImportErrorType = (typeof ImportErrorType)[keyof typeof ImportErrorType];

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STARTED: "STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const JobLogEvent = {
  CLEANUP_END: "CLEANUP_END",
  CLEANUP_FAIL: "CLEANUP_FAIL",
  CLEANUP_START: "CLEANUP_START",
  CONVERSION_END: "CONVERSION_END",
  CONVERSION_FAIL: "CONVERSION_FAIL",
  CONVERSION_START: "CONVERSION_START",
  JOB_CANCEL: "JOB_CANCEL",
  JOB_END: "JOB_END",
  JOB_START: "JOB_START",
  LAUNCH_FAILED: "LAUNCH_FAILED",
  LAUNCH_START: "LAUNCH_START",
  SERVER_SKIPPED: "SERVER_SKIPPED",
  SNAPSHOT_END: "SNAPSHOT_END",
  SNAPSHOT_FAIL: "SNAPSHOT_FAIL",
  SNAPSHOT_START: "SNAPSHOT_START",
  USING_PREVIOUS_SNAPSHOT: "USING_PREVIOUS_SNAPSHOT",
} as const;
/**
 * @public
 */
export type JobLogEvent = (typeof JobLogEvent)[keyof typeof JobLogEvent];

/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  DIAGNOSTIC: "DIAGNOSTIC",
  START_CUTOVER: "START_CUTOVER",
  START_TEST: "START_TEST",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

/**
 * @public
 * @enum
 */
export const LaunchStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  LAUNCHED: "LAUNCHED",
  PENDING: "PENDING",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus];

/**
 * @public
 * @enum
 */
export const PostLaunchActionExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type PostLaunchActionExecutionStatus =
  (typeof PostLaunchActionExecutionStatus)[keyof typeof PostLaunchActionExecutionStatus];

/**
 * @public
 * @enum
 */
export const SsmParameterStoreParameterType = {
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type SsmParameterStoreParameterType =
  (typeof SsmParameterStoreParameterType)[keyof typeof SsmParameterStoreParameterType];

/**
 * @public
 * @enum
 */
export const SsmDocumentType = {
  AUTOMATION: "AUTOMATION",
  COMMAND: "COMMAND",
} as const;
/**
 * @public
 */
export type SsmDocumentType = (typeof SsmDocumentType)[keyof typeof SsmDocumentType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  STARTED: "STARTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  LAUNCH: "LAUNCH",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const BootMode = {
  LEGACY_BIOS: "LEGACY_BIOS",
  UEFI: "UEFI",
  USE_SOURCE: "USE_SOURCE",
} as const;
/**
 * @public
 */
export type BootMode = (typeof BootMode)[keyof typeof BootMode];

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  io2: "io2",
  sc1: "sc1",
  st1: "st1",
  standard: "standard",
} as const;
/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * @enum
 */
export const LaunchDisposition = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type LaunchDisposition = (typeof LaunchDisposition)[keyof typeof LaunchDisposition];

/**
 * @public
 * @enum
 */
export const PostLaunchActionsDeploymentType = {
  CUTOVER_ONLY: "CUTOVER_ONLY",
  TEST_AND_CUTOVER: "TEST_AND_CUTOVER",
  TEST_ONLY: "TEST_ONLY",
} as const;
/**
 * @public
 */
export type PostLaunchActionsDeploymentType =
  (typeof PostLaunchActionsDeploymentType)[keyof typeof PostLaunchActionsDeploymentType];

/**
 * @public
 * @enum
 */
export const TargetInstanceTypeRightSizingMethod = {
  BASIC: "BASIC",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type TargetInstanceTypeRightSizingMethod =
  (typeof TargetInstanceTypeRightSizingMethod)[keyof typeof TargetInstanceTypeRightSizingMethod];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDataPlaneRouting = {
  PRIVATE_IP: "PRIVATE_IP",
  PUBLIC_IP: "PUBLIC_IP",
} as const;
/**
 * @public
 */
export type ReplicationConfigurationDataPlaneRouting =
  (typeof ReplicationConfigurationDataPlaneRouting)[keyof typeof ReplicationConfigurationDataPlaneRouting];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDefaultLargeStagingDiskType = {
  GP2: "GP2",
  GP3: "GP3",
  ST1: "ST1",
} as const;
/**
 * @public
 */
export type ReplicationConfigurationDefaultLargeStagingDiskType =
  (typeof ReplicationConfigurationDefaultLargeStagingDiskType)[keyof typeof ReplicationConfigurationDefaultLargeStagingDiskType];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationEbsEncryption = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type ReplicationConfigurationEbsEncryption =
  (typeof ReplicationConfigurationEbsEncryption)[keyof typeof ReplicationConfigurationEbsEncryption];

/**
 * @public
 * @enum
 */
export const ChangeServerLifeCycleStateSourceServerLifecycleState = {
  CUTOVER: "CUTOVER",
  READY_FOR_CUTOVER: "READY_FOR_CUTOVER",
  READY_FOR_TEST: "READY_FOR_TEST",
} as const;
/**
 * @public
 */
export type ChangeServerLifeCycleStateSourceServerLifecycleState =
  (typeof ChangeServerLifeCycleStateSourceServerLifecycleState)[keyof typeof ChangeServerLifeCycleStateSourceServerLifecycleState];

/**
 * @public
 * @enum
 */
export const DataReplicationErrorString = {
  AGENT_NOT_SEEN: "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS: "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE: "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER: "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER: "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP: "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS: "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE: "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER: "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT: "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER: "FAILED_TO_START_DATA_TRANSFER",
  LAST_SNAPSHOT_JOB_FAILED: "LAST_SNAPSHOT_JOB_FAILED",
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
  UNSUPPORTED_VM_CONFIGURATION: "UNSUPPORTED_VM_CONFIGURATION",
} as const;
/**
 * @public
 */
export type DataReplicationErrorString = (typeof DataReplicationErrorString)[keyof typeof DataReplicationErrorString];

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepName = {
  ATTACH_STAGING_DISKS: "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE: "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER: "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER: "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP: "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS: "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE: "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER: "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT: "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER: "START_DATA_TRANSFER",
  WAIT: "WAIT",
} as const;
/**
 * @public
 */
export type DataReplicationInitiationStepName =
  (typeof DataReplicationInitiationStepName)[keyof typeof DataReplicationInitiationStepName];

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DataReplicationInitiationStepStatus =
  (typeof DataReplicationInitiationStepStatus)[keyof typeof DataReplicationInitiationStepStatus];

/**
 * @public
 * @enum
 */
export const DataReplicationState = {
  BACKLOG: "BACKLOG",
  CONTINUOUS: "CONTINUOUS",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DISCONNECTED: "DISCONNECTED",
  INITIAL_SYNC: "INITIAL_SYNC",
  INITIATING: "INITIATING",
  PAUSED: "PAUSED",
  PENDING_SNAPSHOT_SHIPPING: "PENDING_SNAPSHOT_SHIPPING",
  RESCAN: "RESCAN",
  SHIPPING_SNAPSHOT: "SHIPPING_SNAPSHOT",
  STALLED: "STALLED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DataReplicationState = (typeof DataReplicationState)[keyof typeof DataReplicationState];

/**
 * @public
 * @enum
 */
export const FirstBoot = {
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  UNKNOWN: "UNKNOWN",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type FirstBoot = (typeof FirstBoot)[keyof typeof FirstBoot];

/**
 * @public
 * @enum
 */
export const LifeCycleState = {
  CUTOVER: "CUTOVER",
  CUTTING_OVER: "CUTTING_OVER",
  DISCONNECTED: "DISCONNECTED",
  DISCOVERED: "DISCOVERED",
  NOT_READY: "NOT_READY",
  PENDING_INSTALLATION: "PENDING_INSTALLATION",
  READY_FOR_CUTOVER: "READY_FOR_CUTOVER",
  READY_FOR_TEST: "READY_FOR_TEST",
  STOPPED: "STOPPED",
  TESTING: "TESTING",
} as const;
/**
 * @public
 */
export type LifeCycleState = (typeof LifeCycleState)[keyof typeof LifeCycleState];

/**
 * @public
 * @enum
 */
export const ReplicationType = {
  AGENT_BASED: "AGENT_BASED",
  SNAPSHOT_SHIPPING: "SNAPSHOT_SHIPPING",
} as const;
/**
 * @public
 */
export type ReplicationType = (typeof ReplicationType)[keyof typeof ReplicationType];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationReplicatedDiskStagingDiskType = {
  AUTO: "AUTO",
  GP2: "GP2",
  GP3: "GP3",
  IO1: "IO1",
  IO2: "IO2",
  SC1: "SC1",
  ST1: "ST1",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ReplicationConfigurationReplicatedDiskStagingDiskType =
  (typeof ReplicationConfigurationReplicatedDiskStagingDiskType)[keyof typeof ReplicationConfigurationReplicatedDiskStagingDiskType];

/**
 * @public
 * @enum
 */
export const WaveHealthStatus = {
  ERROR: "ERROR",
  HEALTHY: "HEALTHY",
  LAGGING: "LAGGING",
} as const;
/**
 * @public
 */
export type WaveHealthStatus = (typeof WaveHealthStatus)[keyof typeof WaveHealthStatus];

/**
 * @public
 * @enum
 */
export const WaveProgressStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type WaveProgressStatus = (typeof WaveProgressStatus)[keyof typeof WaveProgressStatus];
