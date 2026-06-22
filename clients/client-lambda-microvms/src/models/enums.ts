// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM_64: "ARM_64",
} as const;
/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * @public
 * @enum
 */
export const BuildState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type BuildState = (typeof BuildState)[keyof typeof BuildState];

/**
 * @public
 * @enum
 */
export const Capability = {
  /**
   * The application is granted all available OS capabilities
   */
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 * @enum
 */
export const Chipset = {
  GRAVITON: "GRAVITON",
} as const;
/**
 * @public
 */
export type Chipset = (typeof Chipset)[keyof typeof Chipset];

/**
 * @public
 * @enum
 */
export const HookState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HookState = (typeof HookState)[keyof typeof HookState];

/**
 * @public
 * @enum
 */
export const MicrovmImageState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type MicrovmImageState = (typeof MicrovmImageState)[keyof typeof MicrovmImageState];

/**
 * @public
 * @enum
 */
export const MicrovmImageVersionState = {
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type MicrovmImageVersionState = (typeof MicrovmImageVersionState)[keyof typeof MicrovmImageVersionState];

/**
 * @public
 * @enum
 */
export const MicrovmState = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type MicrovmState = (typeof MicrovmState)[keyof typeof MicrovmState];

/**
 * @public
 * @enum
 */
export const MicrovmImageVersionStatus = {
  /**
   * Customer image version is active and can be used
   */
  ACTIVE: "ACTIVE",
  /**
   * Customer image version is inactive and should not be used
   */
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type MicrovmImageVersionStatus = (typeof MicrovmImageVersionStatus)[keyof typeof MicrovmImageVersionStatus];
