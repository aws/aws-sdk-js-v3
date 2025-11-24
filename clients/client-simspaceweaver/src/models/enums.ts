// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClockStatus = {
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ClockStatus = (typeof ClockStatus)[keyof typeof ClockStatus];

/**
 * @public
 * @enum
 */
export const ClockTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ClockTargetStatus = (typeof ClockTargetStatus)[keyof typeof ClockTargetStatus];

/**
 * @public
 * @enum
 */
export const SimulationAppStatus = {
  ERROR: "ERROR",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type SimulationAppStatus = (typeof SimulationAppStatus)[keyof typeof SimulationAppStatus];

/**
 * @public
 * @enum
 */
export const SimulationAppTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type SimulationAppTargetStatus = (typeof SimulationAppTargetStatus)[keyof typeof SimulationAppTargetStatus];

/**
 * @public
 * @enum
 */
export const LifecycleManagementStrategy = {
  ByRequest: "ByRequest",
  BySpatialSubdivision: "BySpatialSubdivision",
  PerWorker: "PerWorker",
  Unknown: "Unknown",
} as const;
/**
 * @public
 */
export type LifecycleManagementStrategy =
  (typeof LifecycleManagementStrategy)[keyof typeof LifecycleManagementStrategy];

/**
 * @public
 * @enum
 */
export const SimulationStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  SNAPSHOT_IN_PROGRESS: "SNAPSHOT_IN_PROGRESS",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type SimulationStatus = (typeof SimulationStatus)[keyof typeof SimulationStatus];

/**
 * @public
 * @enum
 */
export const SimulationTargetStatus = {
  DELETED: "DELETED",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type SimulationTargetStatus = (typeof SimulationTargetStatus)[keyof typeof SimulationTargetStatus];
