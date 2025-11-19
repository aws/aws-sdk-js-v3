// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EngineType = {
  ACTIVEMQ: "ACTIVEMQ",
  RABBITMQ: "RABBITMQ",
} as const;
/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 * @enum
 */
export const BrokerStorageType = {
  EBS: "EBS",
  EFS: "EFS",
} as const;
/**
 * @public
 */
export type BrokerStorageType = (typeof BrokerStorageType)[keyof typeof BrokerStorageType];

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  ACTIVE_STANDBY_MULTI_AZ: "ACTIVE_STANDBY_MULTI_AZ",
  CLUSTER_MULTI_AZ: "CLUSTER_MULTI_AZ",
  SINGLE_INSTANCE: "SINGLE_INSTANCE",
} as const;
/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

/**
 * @public
 * @enum
 */
export const BrokerState = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CRITICAL_ACTION_REQUIRED: "CRITICAL_ACTION_REQUIRED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  REBOOT_IN_PROGRESS: "REBOOT_IN_PROGRESS",
  REPLICA: "REPLICA",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type BrokerState = (typeof BrokerState)[keyof typeof BrokerState];

/**
 * @public
 * @enum
 */
export const AuthenticationStrategy = {
  CONFIG_MANAGED: "CONFIG_MANAGED",
  LDAP: "LDAP",
  SIMPLE: "SIMPLE",
} as const;
/**
 * @public
 */
export type AuthenticationStrategy = (typeof AuthenticationStrategy)[keyof typeof AuthenticationStrategy];

/**
 * @public
 * @enum
 */
export const SanitizationWarningReason = {
  DISALLOWED_ATTRIBUTE_REMOVED: "DISALLOWED_ATTRIBUTE_REMOVED",
  DISALLOWED_ELEMENT_REMOVED: "DISALLOWED_ELEMENT_REMOVED",
  INVALID_ATTRIBUTE_VALUE_REMOVED: "INVALID_ATTRIBUTE_VALUE_REMOVED",
} as const;
/**
 * @public
 */
export type SanitizationWarningReason = (typeof SanitizationWarningReason)[keyof typeof SanitizationWarningReason];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const DataReplicationMode = {
  CRDR: "CRDR",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type DataReplicationMode = (typeof DataReplicationMode)[keyof typeof DataReplicationMode];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const PromoteMode = {
  FAILOVER: "FAILOVER",
  SWITCHOVER: "SWITCHOVER",
} as const;
/**
 * @public
 */
export type PromoteMode = (typeof PromoteMode)[keyof typeof PromoteMode];
