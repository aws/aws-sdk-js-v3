// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const UpdateActionStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLICABLE: "not-applicable",
  NOT_APPLIED: "not-applied",
  SCHEDULED: "scheduled",
  SCHEDULING: "scheduling",
  STOPPED: "stopped",
  STOPPING: "stopping",
  WAITING_TO_START: "waiting-to-start",
} as const;
/**
 * @public
 */
export type UpdateActionStatus = (typeof UpdateActionStatus)[keyof typeof UpdateActionStatus];

/**
 * @public
 * @enum
 */
export const AutomaticFailoverStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
} as const;
/**
 * @public
 */
export type AutomaticFailoverStatus = (typeof AutomaticFailoverStatus)[keyof typeof AutomaticFailoverStatus];

/**
 * @public
 * @enum
 */
export const ClusterMode = {
  COMPATIBLE: "compatible",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type ClusterMode = (typeof ClusterMode)[keyof typeof ClusterMode];

/**
 * @public
 * @enum
 */
export const DataTieringStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type DataTieringStatus = (typeof DataTieringStatus)[keyof typeof DataTieringStatus];

/**
 * @public
 * @enum
 */
export const IpDiscovery = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type IpDiscovery = (typeof IpDiscovery)[keyof typeof IpDiscovery];

/**
 * @public
 * @enum
 */
export const DestinationType = {
  CloudWatchLogs: "cloudwatch-logs",
  KinesisFirehose: "kinesis-firehose",
} as const;
/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const LogFormat = {
  JSON: "json",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];

/**
 * @public
 * @enum
 */
export const LogType = {
  ENGINE_LOG: "engine-log",
  SLOW_LOG: "slow-log",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const LogDeliveryConfigurationStatus = {
  ACTIVE: "active",
  DISABLING: "disabling",
  ENABLING: "enabling",
  ERROR: "error",
  MODIFYING: "modifying",
} as const;
/**
 * @public
 */
export type LogDeliveryConfigurationStatus =
  (typeof LogDeliveryConfigurationStatus)[keyof typeof LogDeliveryConfigurationStatus];

/**
 * @public
 * @enum
 */
export const MultiAZStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type MultiAZStatus = (typeof MultiAZStatus)[keyof typeof MultiAZStatus];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "dual_stack",
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const AuthTokenUpdateStatus = {
  ROTATING: "ROTATING",
  SETTING: "SETTING",
} as const;
/**
 * @public
 */
export type AuthTokenUpdateStatus = (typeof AuthTokenUpdateStatus)[keyof typeof AuthTokenUpdateStatus];

/**
 * @public
 * @enum
 */
export const PendingAutomaticFailoverStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type PendingAutomaticFailoverStatus =
  (typeof PendingAutomaticFailoverStatus)[keyof typeof PendingAutomaticFailoverStatus];

/**
 * @public
 * @enum
 */
export const TransitEncryptionMode = {
  PREFERRED: "preferred",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type TransitEncryptionMode = (typeof TransitEncryptionMode)[keyof typeof TransitEncryptionMode];

/**
 * @public
 * @enum
 */
export const AZMode = {
  CROSS_AZ: "cross-az",
  SINGLE_AZ: "single-az",
} as const;
/**
 * @public
 */
export type AZMode = (typeof AZMode)[keyof typeof AZMode];

/**
 * @public
 * @enum
 */
export const OutpostMode = {
  CROSS_OUTPOST: "cross-outpost",
  SINGLE_OUTPOST: "single-outpost",
} as const;
/**
 * @public
 */
export type OutpostMode = (typeof OutpostMode)[keyof typeof OutpostMode];

/**
 * @public
 * @enum
 */
export const DataStorageUnit = {
  GB: "GB",
} as const;
/**
 * @public
 */
export type DataStorageUnit = (typeof DataStorageUnit)[keyof typeof DataStorageUnit];

/**
 * @public
 * @enum
 */
export const InputAuthenticationType = {
  IAM: "iam",
  NO_PASSWORD: "no-password-required",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type InputAuthenticationType = (typeof InputAuthenticationType)[keyof typeof InputAuthenticationType];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  IAM: "iam",
  NO_PASSWORD: "no-password",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  immediate: "immediate",
  requires_reboot: "requires-reboot",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  cache_cluster: "cache-cluster",
  cache_parameter_group: "cache-parameter-group",
  cache_security_group: "cache-security-group",
  cache_subnet_group: "cache-subnet-group",
  replication_group: "replication-group",
  serverless_cache: "serverless-cache",
  serverless_cache_snapshot: "serverless-cache-snapshot",
  user: "user",
  user_group: "user-group",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const ServiceUpdateStatus = {
  AVAILABLE: "available",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
} as const;
/**
 * @public
 */
export type ServiceUpdateStatus = (typeof ServiceUpdateStatus)[keyof typeof ServiceUpdateStatus];

/**
 * @public
 * @enum
 */
export const ServiceUpdateSeverity = {
  CRITICAL: "critical",
  IMPORTANT: "important",
  LOW: "low",
  MEDIUM: "medium",
} as const;
/**
 * @public
 */
export type ServiceUpdateSeverity = (typeof ServiceUpdateSeverity)[keyof typeof ServiceUpdateSeverity];

/**
 * @public
 * @enum
 */
export const ServiceUpdateType = {
  SECURITY_UPDATE: "security-update",
} as const;
/**
 * @public
 */
export type ServiceUpdateType = (typeof ServiceUpdateType)[keyof typeof ServiceUpdateType];

/**
 * @public
 * @enum
 */
export const NodeUpdateInitiatedBy = {
  CUSTOMER: "customer",
  SYSTEM: "system",
} as const;
/**
 * @public
 */
export type NodeUpdateInitiatedBy = (typeof NodeUpdateInitiatedBy)[keyof typeof NodeUpdateInitiatedBy];

/**
 * @public
 * @enum
 */
export const NodeUpdateStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLIED: "not-applied",
  STOPPED: "stopped",
  STOPPING: "stopping",
  WAITING_TO_START: "waiting-to-start",
} as const;
/**
 * @public
 */
export type NodeUpdateStatus = (typeof NodeUpdateStatus)[keyof typeof NodeUpdateStatus];

/**
 * @public
 * @enum
 */
export const SlaMet = {
  NA: "n/a",
  NO: "no",
  YES: "yes",
} as const;
/**
 * @public
 */
export type SlaMet = (typeof SlaMet)[keyof typeof SlaMet];

/**
 * @public
 * @enum
 */
export const AuthTokenUpdateStrategyType = {
  DELETE: "DELETE",
  ROTATE: "ROTATE",
  SET: "SET",
} as const;
/**
 * @public
 */
export type AuthTokenUpdateStrategyType =
  (typeof AuthTokenUpdateStrategyType)[keyof typeof AuthTokenUpdateStrategyType];
