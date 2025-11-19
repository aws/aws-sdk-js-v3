// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActivityStreamMode = {
  async: "async",
  sync: "sync",
} as const;
/**
 * @public
 */
export type ActivityStreamMode = (typeof ActivityStreamMode)[keyof typeof ActivityStreamMode];

/**
 * @public
 * @enum
 */
export const ActivityStreamPolicyStatus = {
  locked: "locked",
  locking_policy: "locking-policy",
  unlocked: "unlocked",
  unlocking_policy: "unlocking-policy",
} as const;
/**
 * @public
 */
export type ActivityStreamPolicyStatus = (typeof ActivityStreamPolicyStatus)[keyof typeof ActivityStreamPolicyStatus];

/**
 * @public
 * @enum
 */
export const ActivityStreamStatus = {
  started: "started",
  starting: "starting",
  stopped: "stopped",
  stopping: "stopping",
} as const;
/**
 * @public
 */
export type ActivityStreamStatus = (typeof ActivityStreamStatus)[keyof typeof ActivityStreamStatus];

/**
 * @public
 * @enum
 */
export const ExportSourceType = {
  CLUSTER: "CLUSTER",
  SNAPSHOT: "SNAPSHOT",
} as const;
/**
 * @public
 */
export type ExportSourceType = (typeof ExportSourceType)[keyof typeof ExportSourceType];

/**
 * @public
 * @enum
 */
export const ClusterScalabilityType = {
  LIMITLESS: "limitless",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type ClusterScalabilityType = (typeof ClusterScalabilityType)[keyof typeof ClusterScalabilityType];

/**
 * @public
 * @enum
 */
export const DatabaseInsightsMode = {
  ADVANCED: "advanced",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type DatabaseInsightsMode = (typeof DatabaseInsightsMode)[keyof typeof DatabaseInsightsMode];

/**
 * @public
 * @enum
 */
export const MasterUserAuthenticationType = {
  IAM_DB_AUTH: "iam-db-auth",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type MasterUserAuthenticationType =
  (typeof MasterUserAuthenticationType)[keyof typeof MasterUserAuthenticationType];

/**
 * @public
 * @enum
 */
export const ReplicaMode = {
  MOUNTED: "mounted",
  OPEN_READ_ONLY: "open-read-only",
} as const;
/**
 * @public
 */
export type ReplicaMode = (typeof ReplicaMode)[keyof typeof ReplicaMode];

/**
 * @public
 * @enum
 */
export const WriteForwardingStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  UNKNOWN: "unknown",
} as const;
/**
 * @public
 */
export type WriteForwardingStatus = (typeof WriteForwardingStatus)[keyof typeof WriteForwardingStatus];

/**
 * @public
 * @enum
 */
export const LimitlessDatabaseStatus = {
  ACTIVE: "active",
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  ERROR: "error",
  MODIFYING_MAX_CAPACITY: "modifying-max-capacity",
  NOT_IN_USE: "not-in-use",
} as const;
/**
 * @public
 */
export type LimitlessDatabaseStatus = (typeof LimitlessDatabaseStatus)[keyof typeof LimitlessDatabaseStatus];

/**
 * @public
 * @enum
 */
export const LocalWriteForwardingStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  REQUESTED: "requested",
} as const;
/**
 * @public
 */
export type LocalWriteForwardingStatus = (typeof LocalWriteForwardingStatus)[keyof typeof LocalWriteForwardingStatus];

/**
 * @public
 * @enum
 */
export const AutomationMode = {
  ALL_PAUSED: "all-paused",
  FULL: "full",
} as const;
/**
 * @public
 */
export type AutomationMode = (typeof AutomationMode)[keyof typeof AutomationMode];

/**
 * @public
 * @enum
 */
export const AuthScheme = {
  SECRETS: "SECRETS",
} as const;
/**
 * @public
 */
export type AuthScheme = (typeof AuthScheme)[keyof typeof AuthScheme];

/**
 * @public
 * @enum
 */
export const ClientPasswordAuthType = {
  MYSQL_CACHING_SHA2_PASSWORD: "MYSQL_CACHING_SHA2_PASSWORD",
  MYSQL_NATIVE_PASSWORD: "MYSQL_NATIVE_PASSWORD",
  POSTGRES_MD5: "POSTGRES_MD5",
  POSTGRES_SCRAM_SHA_256: "POSTGRES_SCRAM_SHA_256",
  SQL_SERVER_AUTHENTICATION: "SQL_SERVER_AUTHENTICATION",
} as const;
/**
 * @public
 */
export type ClientPasswordAuthType = (typeof ClientPasswordAuthType)[keyof typeof ClientPasswordAuthType];

/**
 * @public
 * @enum
 */
export const IAMAuthMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type IAMAuthMode = (typeof IAMAuthMode)[keyof typeof IAMAuthMode];

/**
 * @public
 * @enum
 */
export const DefaultAuthScheme = {
  IAM_AUTH: "IAM_AUTH",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type DefaultAuthScheme = (typeof DefaultAuthScheme)[keyof typeof DefaultAuthScheme];

/**
 * @public
 * @enum
 */
export const EndpointNetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type EndpointNetworkType = (typeof EndpointNetworkType)[keyof typeof EndpointNetworkType];

/**
 * @public
 * @enum
 */
export const EngineFamily = {
  MYSQL: "MYSQL",
  POSTGRESQL: "POSTGRESQL",
  SQLSERVER: "SQLSERVER",
} as const;
/**
 * @public
 */
export type EngineFamily = (typeof EngineFamily)[keyof typeof EngineFamily];

/**
 * @public
 * @enum
 */
export const TargetConnectionNetworkType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type TargetConnectionNetworkType =
  (typeof TargetConnectionNetworkType)[keyof typeof TargetConnectionNetworkType];

/**
 * @public
 * @enum
 */
export const DBProxyStatus = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETING: "deleting",
  INCOMPATIBLE_NETWORK: "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS: "insufficient-resource-limits",
  MODIFYING: "modifying",
  REACTIVATING: "reactivating",
  SUSPENDED: "suspended",
  SUSPENDING: "suspending",
} as const;
/**
 * @public
 */
export type DBProxyStatus = (typeof DBProxyStatus)[keyof typeof DBProxyStatus];

/**
 * @public
 * @enum
 */
export const DBProxyEndpointTargetRole = {
  READ_ONLY: "READ_ONLY",
  READ_WRITE: "READ_WRITE",
} as const;
/**
 * @public
 */
export type DBProxyEndpointTargetRole = (typeof DBProxyEndpointTargetRole)[keyof typeof DBProxyEndpointTargetRole];

/**
 * @public
 * @enum
 */
export const DBProxyEndpointStatus = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETING: "deleting",
  INCOMPATIBLE_NETWORK: "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS: "insufficient-resource-limits",
  MODIFYING: "modifying",
} as const;
/**
 * @public
 */
export type DBProxyEndpointStatus = (typeof DBProxyEndpointStatus)[keyof typeof DBProxyEndpointStatus];

/**
 * @public
 * @enum
 */
export const FailoverStatus = {
  CANCELLING: "cancelling",
  FAILING_OVER: "failing-over",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type FailoverStatus = (typeof FailoverStatus)[keyof typeof FailoverStatus];

/**
 * @public
 * @enum
 */
export const GlobalClusterMemberSynchronizationStatus = {
  CONNECTED: "connected",
  PENDING_RESYNC: "pending-resync",
} as const;
/**
 * @public
 */
export type GlobalClusterMemberSynchronizationStatus =
  (typeof GlobalClusterMemberSynchronizationStatus)[keyof typeof GlobalClusterMemberSynchronizationStatus];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "active",
  CREATING: "creating",
  DELETING: "deleting",
  FAILED: "failed",
  MODIFYING: "modifying",
  NEEDS_ATTENTION: "needs_attention",
  SYNCING: "syncing",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const ApplyMethod = {
  immediate: "immediate",
  pending_reboot: "pending-reboot",
} as const;
/**
 * @public
 */
export type ApplyMethod = (typeof ApplyMethod)[keyof typeof ApplyMethod];

/**
 * @public
 * @enum
 */
export const LifecycleSupportName = {
  OPEN_SOURCE_RDS_EXTENDED_SUPPORT: "open-source-rds-extended-support",
  OPEN_SOURCE_RDS_STANDARD_SUPPORT: "open-source-rds-standard-support",
} as const;
/**
 * @public
 */
export type LifecycleSupportName = (typeof LifecycleSupportName)[keyof typeof LifecycleSupportName];

/**
 * @public
 * @enum
 */
export const TargetRole = {
  READ_ONLY: "READ_ONLY",
  READ_WRITE: "READ_WRITE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type TargetRole = (typeof TargetRole)[keyof typeof TargetRole];

/**
 * @public
 * @enum
 */
export const TargetHealthReason = {
  AUTH_FAILURE: "AUTH_FAILURE",
  CONNECTION_FAILED: "CONNECTION_FAILED",
  INVALID_REPLICATION_STATE: "INVALID_REPLICATION_STATE",
  PENDING_PROXY_CAPACITY: "PENDING_PROXY_CAPACITY",
  PROMOTED: "PROMOTED",
  UNREACHABLE: "UNREACHABLE",
} as const;
/**
 * @public
 */
export type TargetHealthReason = (typeof TargetHealthReason)[keyof typeof TargetHealthReason];

/**
 * @public
 * @enum
 */
export const TargetState = {
  available: "AVAILABLE",
  registering: "REGISTERING",
  unavailable: "UNAVAILABLE",
  unused: "UNUSED",
} as const;
/**
 * @public
 */
export type TargetState = (typeof TargetState)[keyof typeof TargetState];

/**
 * @public
 * @enum
 */
export const TargetType = {
  RDS_INSTANCE: "RDS_INSTANCE",
  RDS_SERVERLESS_ENDPOINT: "RDS_SERVERLESS_ENDPOINT",
  TRACKED_CLUSTER: "TRACKED_CLUSTER",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  blue_green_deployment: "blue-green-deployment",
  custom_engine_version: "custom-engine-version",
  db_cluster: "db-cluster",
  db_cluster_snapshot: "db-cluster-snapshot",
  db_instance: "db-instance",
  db_parameter_group: "db-parameter-group",
  db_proxy: "db-proxy",
  db_security_group: "db-security-group",
  db_shard_group: "db-shard-group",
  db_snapshot: "db-snapshot",
  zero_etl: "zero-etl",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const AuditPolicyState = {
  LOCKED_POLICY: "locked",
  UNLOCKED_POLICY: "unlocked",
} as const;
/**
 * @public
 */
export type AuditPolicyState = (typeof AuditPolicyState)[keyof typeof AuditPolicyState];

/**
 * @public
 * @enum
 */
export const CustomEngineVersionStatus = {
  available: "available",
  inactive: "inactive",
  inactive_except_restore: "inactive-except-restore",
} as const;
/**
 * @public
 */
export type CustomEngineVersionStatus = (typeof CustomEngineVersionStatus)[keyof typeof CustomEngineVersionStatus];
