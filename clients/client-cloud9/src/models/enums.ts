// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectionType = {
  CONNECT_SSH: "CONNECT_SSH",
  CONNECT_SSM: "CONNECT_SSM",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const MemberPermissions = {
  READ_ONLY: "read-only",
  READ_WRITE: "read-write",
} as const;
/**
 * @public
 */
export type MemberPermissions = (typeof MemberPermissions)[keyof typeof MemberPermissions];

/**
 * @public
 * @enum
 */
export const Permissions = {
  OWNER: "owner",
  READ_ONLY: "read-only",
  READ_WRITE: "read-write",
} as const;
/**
 * @public
 */
export type Permissions = (typeof Permissions)[keyof typeof Permissions];

/**
 * @public
 * @enum
 */
export const EnvironmentLifecycleStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type EnvironmentLifecycleStatus = (typeof EnvironmentLifecycleStatus)[keyof typeof EnvironmentLifecycleStatus];

/**
 * @public
 * @enum
 */
export const ManagedCredentialsStatus = {
  DISABLED_BY_COLLABORATOR: "DISABLED_BY_COLLABORATOR",
  DISABLED_BY_DEFAULT: "DISABLED_BY_DEFAULT",
  DISABLED_BY_OWNER: "DISABLED_BY_OWNER",
  ENABLED_BY_OWNER: "ENABLED_BY_OWNER",
  ENABLED_ON_CREATE: "ENABLED_ON_CREATE",
  FAILED_REMOVAL_BY_COLLABORATOR: "FAILED_REMOVAL_BY_COLLABORATOR",
  FAILED_REMOVAL_BY_OWNER: "FAILED_REMOVAL_BY_OWNER",
  PENDING_REMOVAL_BY_COLLABORATOR: "PENDING_REMOVAL_BY_COLLABORATOR",
  PENDING_REMOVAL_BY_OWNER: "PENDING_REMOVAL_BY_OWNER",
  PENDING_START_REMOVAL_BY_COLLABORATOR: "PENDING_START_REMOVAL_BY_COLLABORATOR",
  PENDING_START_REMOVAL_BY_OWNER: "PENDING_START_REMOVAL_BY_OWNER",
} as const;
/**
 * @public
 */
export type ManagedCredentialsStatus = (typeof ManagedCredentialsStatus)[keyof typeof ManagedCredentialsStatus];

/**
 * @public
 * @enum
 */
export const EnvironmentType = {
  EC2: "ec2",
  SSH: "ssh",
} as const;
/**
 * @public
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  CONNECTING: "connecting",
  CREATING: "creating",
  DELETING: "deleting",
  ERROR: "error",
  READY: "ready",
  STOPPED: "stopped",
  STOPPING: "stopping",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const ManagedCredentialsAction = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type ManagedCredentialsAction = (typeof ManagedCredentialsAction)[keyof typeof ManagedCredentialsAction];
