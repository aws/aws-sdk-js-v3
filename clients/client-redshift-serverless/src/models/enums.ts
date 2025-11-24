// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  AVAILABLE: "AVAILABLE",
  CANCELLED: "CANCELLED",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETED: "DELETED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * @enum
 */
export const LogExport = {
  CONNECTION_LOG: "connectionlog",
  USER_ACTIVITY_LOG: "useractivitylog",
  USER_LOG: "userlog",
} as const;
/**
 * @public
 */
export type LogExport = (typeof LogExport)[keyof typeof LogExport];

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
} as const;
/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 * @enum
 */
export const OfferingType = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
} as const;
/**
 * @public
 */
export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const UsageLimitBreachAction = {
  DEACTIVATE: "deactivate",
  EMIT_METRIC: "emit-metric",
  LOG: "log",
} as const;
/**
 * @public
 */
export type UsageLimitBreachAction = (typeof UsageLimitBreachAction)[keyof typeof UsageLimitBreachAction];

/**
 * @public
 * @enum
 */
export const UsageLimitPeriod = {
  DAILY: "daily",
  MONTHLY: "monthly",
  WEEKLY: "weekly",
} as const;
/**
 * @public
 */
export type UsageLimitPeriod = (typeof UsageLimitPeriod)[keyof typeof UsageLimitPeriod];

/**
 * @public
 * @enum
 */
export const UsageLimitUsageType = {
  CROSS_REGION_DATASHARING: "cross-region-datasharing",
  SERVERLESS_COMPUTE: "serverless-compute",
} as const;
/**
 * @public
 */
export type UsageLimitUsageType = (typeof UsageLimitUsageType)[keyof typeof UsageLimitUsageType];

/**
 * @public
 * @enum
 */
export const PerformanceTargetStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PerformanceTargetStatus = (typeof PerformanceTargetStatus)[keyof typeof PerformanceTargetStatus];

/**
 * @public
 * @enum
 */
export const WorkgroupStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
} as const;
/**
 * @public
 */
export type WorkgroupStatus = (typeof WorkgroupStatus)[keyof typeof WorkgroupStatus];

/**
 * @public
 * @enum
 */
export const LakehouseIdcRegistration = {
  ASSOCIATE: "Associate",
  DISASSOCIATE: "Disassociate",
} as const;
/**
 * @public
 */
export type LakehouseIdcRegistration = (typeof LakehouseIdcRegistration)[keyof typeof LakehouseIdcRegistration];

/**
 * @public
 * @enum
 */
export const LakehouseRegistration = {
  DEREGISTER: "Deregister",
  REGISTER: "Register",
} as const;
/**
 * @public
 */
export type LakehouseRegistration = (typeof LakehouseRegistration)[keyof typeof LakehouseRegistration];

/**
 * @public
 * @enum
 */
export const ManagedWorkgroupStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type ManagedWorkgroupStatus = (typeof ManagedWorkgroupStatus)[keyof typeof ManagedWorkgroupStatus];
