// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LifeCycleState = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETED: "deleted",
  DELETING: "deleting",
  ERROR: "error",
  UPDATING: "updating",
} as const;
/**
 * @public
 */
export type LifeCycleState = (typeof LifeCycleState)[keyof typeof LifeCycleState];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const PerformanceMode = {
  GENERAL_PURPOSE: "generalPurpose",
  MAX_IO: "maxIO",
} as const;
/**
 * @public
 */
export type PerformanceMode = (typeof PerformanceMode)[keyof typeof PerformanceMode];

/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  BURSTING: "bursting",
  ELASTIC: "elastic",
  PROVISIONED: "provisioned",
} as const;
/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * @public
 * @enum
 */
export const ReplicationOverwriteProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  REPLICATING: "REPLICATING",
} as const;
/**
 * @public
 */
export type ReplicationOverwriteProtection =
  (typeof ReplicationOverwriteProtection)[keyof typeof ReplicationOverwriteProtection];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4_ONLY: "IPV4_ONLY",
  IPV6_ONLY: "IPV6_ONLY",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  DELETING: "DELETING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  ERROR: "ERROR",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
} as const;
/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * @enum
 */
export const DeletionMode = {
  ALL_CONFIGURATIONS: "ALL_CONFIGURATIONS",
  LOCAL_CONFIGURATION_ONLY: "LOCAL_CONFIGURATION_ONLY",
} as const;
/**
 * @public
 */
export type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];

/**
 * @public
 * @enum
 */
export const ResourceIdType = {
  LongId: "LONG_ID",
  ShortId: "SHORT_ID",
} as const;
/**
 * @public
 */
export type ResourceIdType = (typeof ResourceIdType)[keyof typeof ResourceIdType];

/**
 * @public
 * @enum
 */
export const Resource = {
  FileSystem: "FILE_SYSTEM",
  MountTarget: "MOUNT_TARGET",
} as const;
/**
 * @public
 */
export type Resource = (typeof Resource)[keyof typeof Resource];

/**
 * @public
 * @enum
 */
export const TransitionToArchiveRules = {
  AFTER_14_DAYS: "AFTER_14_DAYS",
  AFTER_180_DAYS: "AFTER_180_DAYS",
  AFTER_1_DAY: "AFTER_1_DAY",
  AFTER_270_DAYS: "AFTER_270_DAYS",
  AFTER_30_DAYS: "AFTER_30_DAYS",
  AFTER_365_DAYS: "AFTER_365_DAYS",
  AFTER_60_DAYS: "AFTER_60_DAYS",
  AFTER_7_DAYS: "AFTER_7_DAYS",
  AFTER_90_DAYS: "AFTER_90_DAYS",
} as const;
/**
 * @public
 */
export type TransitionToArchiveRules = (typeof TransitionToArchiveRules)[keyof typeof TransitionToArchiveRules];

/**
 * @public
 * @enum
 */
export const TransitionToIARules = {
  AFTER_14_DAYS: "AFTER_14_DAYS",
  AFTER_180_DAYS: "AFTER_180_DAYS",
  AFTER_1_DAY: "AFTER_1_DAY",
  AFTER_270_DAYS: "AFTER_270_DAYS",
  AFTER_30_DAYS: "AFTER_30_DAYS",
  AFTER_365_DAYS: "AFTER_365_DAYS",
  AFTER_60_DAYS: "AFTER_60_DAYS",
  AFTER_7_DAYS: "AFTER_7_DAYS",
  AFTER_90_DAYS: "AFTER_90_DAYS",
} as const;
/**
 * @public
 */
export type TransitionToIARules = (typeof TransitionToIARules)[keyof typeof TransitionToIARules];

/**
 * @public
 * @enum
 */
export const TransitionToPrimaryStorageClassRules = {
  AFTER_1_ACCESS: "AFTER_1_ACCESS",
} as const;
/**
 * @public
 */
export type TransitionToPrimaryStorageClassRules =
  (typeof TransitionToPrimaryStorageClassRules)[keyof typeof TransitionToPrimaryStorageClassRules];
