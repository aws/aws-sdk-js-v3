// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BaselineOperationType = {
  DISABLE_BASELINE: "DISABLE_BASELINE",
  ENABLE_BASELINE: "ENABLE_BASELINE",
  RESET_ENABLED_BASELINE: "RESET_ENABLED_BASELINE",
  UPDATE_ENABLED_BASELINE: "UPDATE_ENABLED_BASELINE",
} as const;
/**
 * @public
 */
export type BaselineOperationType = (typeof BaselineOperationType)[keyof typeof BaselineOperationType];

/**
 * @public
 * @enum
 */
export const BaselineOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BaselineOperationStatus = (typeof BaselineOperationStatus)[keyof typeof BaselineOperationStatus];

/**
 * @public
 * @enum
 */
export const ControlOperationType = {
  DISABLE_CONTROL: "DISABLE_CONTROL",
  ENABLE_CONTROL: "ENABLE_CONTROL",
  RESET_ENABLED_CONTROL: "RESET_ENABLED_CONTROL",
  UPDATE_ENABLED_CONTROL: "UPDATE_ENABLED_CONTROL",
} as const;
/**
 * @public
 */
export type ControlOperationType = (typeof ControlOperationType)[keyof typeof ControlOperationType];

/**
 * @public
 * @enum
 */
export const ControlOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ControlOperationStatus = (typeof ControlOperationStatus)[keyof typeof ControlOperationStatus];

/**
 * @public
 * @enum
 */
export const EnabledBaselineDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
} as const;
/**
 * @public
 */
export type EnabledBaselineDriftStatus = (typeof EnabledBaselineDriftStatus)[keyof typeof EnabledBaselineDriftStatus];

/**
 * @public
 * @enum
 */
export const EnablementStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;
/**
 * @public
 */
export type EnablementStatus = (typeof EnablementStatus)[keyof typeof EnablementStatus];

/**
 * @public
 * @enum
 */
export const DriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKING: "NOT_CHECKING",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type DriftStatus = (typeof DriftStatus)[keyof typeof DriftStatus];

/**
 * @public
 * @enum
 */
export const LandingZoneOperationType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  RESET: "RESET",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type LandingZoneOperationType = (typeof LandingZoneOperationType)[keyof typeof LandingZoneOperationType];

/**
 * @public
 * @enum
 */
export const LandingZoneOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LandingZoneOperationStatus = (typeof LandingZoneOperationStatus)[keyof typeof LandingZoneOperationStatus];

/**
 * @public
 * @enum
 */
export const RemediationType = {
  INHERITANCE_DRIFT: "INHERITANCE_DRIFT",
} as const;
/**
 * @public
 */
export type RemediationType = (typeof RemediationType)[keyof typeof RemediationType];

/**
 * @public
 * @enum
 */
export const LandingZoneDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
} as const;
/**
 * @public
 */
export type LandingZoneDriftStatus = (typeof LandingZoneDriftStatus)[keyof typeof LandingZoneDriftStatus];

/**
 * @public
 * @enum
 */
export const LandingZoneStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type LandingZoneStatus = (typeof LandingZoneStatus)[keyof typeof LandingZoneStatus];
