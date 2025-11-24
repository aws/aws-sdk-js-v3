// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  ASSOCIATE_NETWORK_RECOVERY: "ASSOCIATE_NETWORK_RECOVERY",
  CREATE_NETWORK_RECOVERY: "CREATE_NETWORK_RECOVERY",
  DIAGNOSTIC: "DIAGNOSTIC",
  FAILBACK: "FAILBACK",
  START_DRILL: "START_DRILL",
  START_RECOVERY: "START_RECOVERY",
  TARGET_ACCOUNT: "TARGET_ACCOUNT",
  TERMINATE_RECOVERY_INSTANCES: "TERMINATE_RECOVERY_INSTANCES",
  UPDATE_NETWORK_RECOVERY: "UPDATE_NETWORK_RECOVERY",
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
export const LaunchActionCategory = {
  CONFIGURATION: "CONFIGURATION",
  MONITORING: "MONITORING",
  OTHER: "OTHER",
  SECURITY: "SECURITY",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type LaunchActionCategory = (typeof LaunchActionCategory)[keyof typeof LaunchActionCategory];

/**
 * @public
 * @enum
 */
export const LaunchActionParameterType = {
  DYNAMIC: "DYNAMIC",
  SSM_STORE: "SSM_STORE",
} as const;
/**
 * @public
 */
export type LaunchActionParameterType = (typeof LaunchActionParameterType)[keyof typeof LaunchActionParameterType];

/**
 * @public
 * @enum
 */
export const LaunchActionType = {
  SSM_AUTOMATION: "SSM_AUTOMATION",
  SSM_COMMAND: "SSM_COMMAND",
} as const;
/**
 * @public
 */
export type LaunchActionType = (typeof LaunchActionType)[keyof typeof LaunchActionType];

/**
 * @public
 * @enum
 */
export const LaunchActionRunStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LaunchActionRunStatus = (typeof LaunchActionRunStatus)[keyof typeof LaunchActionRunStatus];

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
  CREATE_CONVERTED_SNAPSHOT: "CREATE_CONVERTED_SNAPSHOT",
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
export const ProductCodeMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ProductCodeMode = (typeof ProductCodeMode)[keyof typeof ProductCodeMode];

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
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
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
  RESCAN: "RESCAN",
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
export const VolumeStatus = {
  CONTAINS_MARKETPLACE_PRODUCT_CODES: "CONTAINS_MARKETPLACE_PRODUCT_CODES",
  MISSING_VOLUME_ATTRIBUTES: "MISSING_VOLUME_ATTRIBUTES",
  MISSING_VOLUME_ATTRIBUTES_AND_PRECHECK_UNAVAILABLE: "MISSING_VOLUME_ATTRIBUTES_AND_PRECHECK_UNAVAILABLE",
  PENDING: "PENDING",
  REGULAR: "REGULAR",
} as const;
/**
 * @public
 */
export type VolumeStatus = (typeof VolumeStatus)[keyof typeof VolumeStatus];

/**
 * @public
 * @enum
 */
export const LastLaunchResult = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LastLaunchResult = (typeof LastLaunchResult)[keyof typeof LastLaunchResult];

/**
 * @public
 * @enum
 */
export const LastLaunchType = {
  DRILL: "DRILL",
  RECOVERY: "RECOVERY",
} as const;
/**
 * @public
 */
export type LastLaunchType = (typeof LastLaunchType)[keyof typeof LastLaunchType];

/**
 * @public
 * @enum
 */
export const ReplicationDirection = {
  FAILBACK: "FAILBACK",
  FAILOVER: "FAILOVER",
} as const;
/**
 * @public
 */
export type ReplicationDirection = (typeof ReplicationDirection)[keyof typeof ReplicationDirection];

/**
 * @public
 * @enum
 */
export const ExtensionStatus = {
  EXTENDED: "EXTENDED",
  EXTENSION_ERROR: "EXTENSION_ERROR",
  NOT_EXTENDED: "NOT_EXTENDED",
} as const;
/**
 * @public
 */
export type ExtensionStatus = (typeof ExtensionStatus)[keyof typeof ExtensionStatus];

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
export const TargetInstanceTypeRightSizingMethod = {
  BASIC: "BASIC",
  IN_AWS: "IN_AWS",
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
  AUTO: "AUTO",
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
  NONE: "NONE",
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
export const PITPolicyRuleUnits = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
} as const;
/**
 * @public
 */
export type PITPolicyRuleUnits = (typeof PITPolicyRuleUnits)[keyof typeof PITPolicyRuleUnits];

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
  DEPLOY_NETWORK_CONFIGURATION_END: "DEPLOY_NETWORK_CONFIGURATION_END",
  DEPLOY_NETWORK_CONFIGURATION_FAILED: "DEPLOY_NETWORK_CONFIGURATION_FAILED",
  DEPLOY_NETWORK_CONFIGURATION_START: "DEPLOY_NETWORK_CONFIGURATION_START",
  JOB_CANCEL: "JOB_CANCEL",
  JOB_END: "JOB_END",
  JOB_START: "JOB_START",
  LAUNCH_FAILED: "LAUNCH_FAILED",
  LAUNCH_START: "LAUNCH_START",
  NETWORK_RECOVERY_FAIL: "NETWORK_RECOVERY_FAIL",
  SERVER_SKIPPED: "SERVER_SKIPPED",
  SNAPSHOT_END: "SNAPSHOT_END",
  SNAPSHOT_FAIL: "SNAPSHOT_FAIL",
  SNAPSHOT_START: "SNAPSHOT_START",
  UPDATE_LAUNCH_TEMPLATE_END: "UPDATE_LAUNCH_TEMPLATE_END",
  UPDATE_LAUNCH_TEMPLATE_FAILED: "UPDATE_LAUNCH_TEMPLATE_FAILED",
  UPDATE_LAUNCH_TEMPLATE_START: "UPDATE_LAUNCH_TEMPLATE_START",
  UPDATE_NETWORK_CONFIGURATION_END: "UPDATE_NETWORK_CONFIGURATION_END",
  UPDATE_NETWORK_CONFIGURATION_FAILED: "UPDATE_NETWORK_CONFIGURATION_FAILED",
  UPDATE_NETWORK_CONFIGURATION_START: "UPDATE_NETWORK_CONFIGURATION_START",
  USING_PREVIOUS_SNAPSHOT: "USING_PREVIOUS_SNAPSHOT",
  USING_PREVIOUS_SNAPSHOT_FAILED: "USING_PREVIOUS_SNAPSHOT_FAILED",
} as const;
/**
 * @public
 */
export type JobLogEvent = (typeof JobLogEvent)[keyof typeof JobLogEvent];

/**
 * @public
 * @enum
 */
export const FailbackReplicationError = {
  AGENT_NOT_SEEN: "AGENT_NOT_SEEN",
  FAILBACK_CLIENT_NOT_SEEN: "FAILBACK_CLIENT_NOT_SEEN",
  FAILED_GETTING_REPLICATION_STATE: "FAILED_GETTING_REPLICATION_STATE",
  FAILED_TO_ATTACH_STAGING_DISKS: "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE: "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER: "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE: "FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER: "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP: "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS: "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE: "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT:
    "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION:
    "FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION: "FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  FAILED_TO_LAUNCH_REPLICATION_SERVER: "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE: "FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT: "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER: "FAILED_TO_START_DATA_TRANSFER",
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
} as const;
/**
 * @public
 */
export type FailbackReplicationError = (typeof FailbackReplicationError)[keyof typeof FailbackReplicationError];

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationInitiationStepName = {
  ATTACH_STAGING_DISKS: "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE: "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER: "BOOT_REPLICATION_SERVER",
  COMPLETE_VOLUME_MAPPING: "COMPLETE_VOLUME_MAPPING",
  CONFIGURE_REPLICATION_SOFTWARE: "CONFIGURE_REPLICATION_SOFTWARE",
  CONNECT_AGENT_TO_REPLICATION_SERVER: "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP: "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS: "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE: "DOWNLOAD_REPLICATION_SOFTWARE",
  DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT: "DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT",
  ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION: "ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION",
  ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION: "ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION",
  LAUNCH_REPLICATION_SERVER: "LAUNCH_REPLICATION_SERVER",
  LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE: "LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE",
  PAIR_AGENT_WITH_REPLICATION_SOFTWARE: "PAIR_AGENT_WITH_REPLICATION_SOFTWARE",
  PAIR_REPLICATION_SERVER_WITH_AGENT: "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER: "START_DATA_TRANSFER",
  WAIT: "WAIT",
} as const;
/**
 * @public
 */
export type RecoveryInstanceDataReplicationInitiationStepName =
  (typeof RecoveryInstanceDataReplicationInitiationStepName)[keyof typeof RecoveryInstanceDataReplicationInitiationStepName];

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationInitiationStepStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type RecoveryInstanceDataReplicationInitiationStepStatus =
  (typeof RecoveryInstanceDataReplicationInitiationStepStatus)[keyof typeof RecoveryInstanceDataReplicationInitiationStepStatus];

/**
 * @public
 * @enum
 */
export const RecoveryInstanceDataReplicationState = {
  BACKLOG: "BACKLOG",
  CONTINUOUS: "CONTINUOUS",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DISCONNECTED: "DISCONNECTED",
  INITIAL_SYNC: "INITIAL_SYNC",
  INITIATING: "INITIATING",
  NOT_STARTED: "NOT_STARTED",
  PAUSED: "PAUSED",
  REPLICATION_STATE_NOT_AVAILABLE: "REPLICATION_STATE_NOT_AVAILABLE",
  RESCAN: "RESCAN",
  STALLED: "STALLED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type RecoveryInstanceDataReplicationState =
  (typeof RecoveryInstanceDataReplicationState)[keyof typeof RecoveryInstanceDataReplicationState];

/**
 * @public
 * @enum
 */
export const EC2InstanceState = {
  NOT_FOUND: "NOT_FOUND",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING-DOWN",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type EC2InstanceState = (typeof EC2InstanceState)[keyof typeof EC2InstanceState];

/**
 * @public
 * @enum
 */
export const FailbackLaunchType = {
  DRILL: "DRILL",
  RECOVERY: "RECOVERY",
} as const;
/**
 * @public
 */
export type FailbackLaunchType = (typeof FailbackLaunchType)[keyof typeof FailbackLaunchType];

/**
 * @public
 * @enum
 */
export const FailbackState = {
  FAILBACK_COMPLETED: "FAILBACK_COMPLETED",
  FAILBACK_ERROR: "FAILBACK_ERROR",
  FAILBACK_IN_PROGRESS: "FAILBACK_IN_PROGRESS",
  FAILBACK_LAUNCH_STATE_NOT_AVAILABLE: "FAILBACK_LAUNCH_STATE_NOT_AVAILABLE",
  FAILBACK_NOT_READY_FOR_LAUNCH: "FAILBACK_NOT_READY_FOR_LAUNCH",
  FAILBACK_NOT_STARTED: "FAILBACK_NOT_STARTED",
  FAILBACK_READY_FOR_LAUNCH: "FAILBACK_READY_FOR_LAUNCH",
} as const;
/**
 * @public
 */
export type FailbackState = (typeof FailbackState)[keyof typeof FailbackState];

/**
 * @public
 * @enum
 */
export const OriginEnvironment = {
  AWS: "AWS",
  ON_PREMISES: "ON_PREMISES",
} as const;
/**
 * @public
 */
export type OriginEnvironment = (typeof OriginEnvironment)[keyof typeof OriginEnvironment];

/**
 * @public
 * @enum
 */
export const RecoverySnapshotsOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type RecoverySnapshotsOrder = (typeof RecoverySnapshotsOrder)[keyof typeof RecoverySnapshotsOrder];

/**
 * @public
 * @enum
 */
export const RecoveryResult = {
  ASSOCIATE_FAIL: "ASSOCIATE_FAIL",
  ASSOCIATE_SUCCESS: "ASSOCIATE_SUCCESS",
  FAIL: "FAIL",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type RecoveryResult = (typeof RecoveryResult)[keyof typeof RecoveryResult];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  PROTECTED: "PROTECTED",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationReplicatedDiskStagingDiskType = {
  AUTO: "AUTO",
  GP2: "GP2",
  GP3: "GP3",
  IO1: "IO1",
  SC1: "SC1",
  ST1: "ST1",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ReplicationConfigurationReplicatedDiskStagingDiskType =
  (typeof ReplicationConfigurationReplicatedDiskStagingDiskType)[keyof typeof ReplicationConfigurationReplicatedDiskStagingDiskType];
