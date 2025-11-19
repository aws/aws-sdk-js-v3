// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BackupState = {
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  PENDING_DELETION: "PENDING_DELETION",
  READY: "READY",
} as const;
/**
 * @public
 */
export type BackupState = (typeof BackupState)[keyof typeof BackupState];

/**
 * @public
 * @enum
 */
export const ClusterMode = {
  FIPS: "FIPS",
  NON_FIPS: "NON_FIPS",
} as const;
/**
 * @public
 */
export type ClusterMode = (typeof ClusterMode)[keyof typeof ClusterMode];

/**
 * @public
 * @enum
 */
export const BackupPolicy = {
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type BackupPolicy = (typeof BackupPolicy)[keyof typeof BackupPolicy];

/**
 * @public
 * @enum
 */
export const BackupRetentionType = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type BackupRetentionType = (typeof BackupRetentionType)[keyof typeof BackupRetentionType];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const HsmState = {
  ACTIVE: "ACTIVE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DEGRADED: "DEGRADED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type HsmState = (typeof HsmState)[keyof typeof HsmState];

/**
 * @public
 * @enum
 */
export const ClusterState = {
  ACTIVE: "ACTIVE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DEGRADED: "DEGRADED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INITIALIZED: "INITIALIZED",
  INITIALIZE_IN_PROGRESS: "INITIALIZE_IN_PROGRESS",
  MODIFY_IN_PROGRESS: "MODIFY_IN_PROGRESS",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UNINITIALIZED: "UNINITIALIZED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];
