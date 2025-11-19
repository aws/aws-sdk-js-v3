// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountTargeting = {
  MULTI_ACCOUNT: "multi-account",
  SINGLE_ACCOUNT: "single-account",
} as const;
/**
 * @public
 */
export type AccountTargeting = (typeof AccountTargeting)[keyof typeof AccountTargeting];

/**
 * @public
 * @enum
 */
export const ActionsMode = {
  RUN_ALL: "run-all",
  SKIP_ALL: "skip-all",
} as const;
/**
 * @public
 */
export type ActionsMode = (typeof ActionsMode)[keyof typeof ActionsMode];

/**
 * @public
 * @enum
 */
export const EmptyTargetResolutionMode = {
  FAIL: "fail",
  SKIP: "skip",
} as const;
/**
 * @public
 */
export type EmptyTargetResolutionMode = (typeof EmptyTargetResolutionMode)[keyof typeof EmptyTargetResolutionMode];

/**
 * @public
 * @enum
 */
export const ExperimentActionStatus = {
  cancelled: "cancelled",
  completed: "completed",
  failed: "failed",
  initiating: "initiating",
  pending: "pending",
  running: "running",
  skipped: "skipped",
  stopped: "stopped",
  stopping: "stopping",
} as const;
/**
 * @public
 */
export type ExperimentActionStatus = (typeof ExperimentActionStatus)[keyof typeof ExperimentActionStatus];

/**
 * @public
 * @enum
 */
export const ExperimentReportStatus = {
  cancelled: "cancelled",
  completed: "completed",
  failed: "failed",
  pending: "pending",
  running: "running",
} as const;
/**
 * @public
 */
export type ExperimentReportStatus = (typeof ExperimentReportStatus)[keyof typeof ExperimentReportStatus];

/**
 * @public
 * @enum
 */
export const ExperimentStatus = {
  cancelled: "cancelled",
  completed: "completed",
  failed: "failed",
  initiating: "initiating",
  pending: "pending",
  running: "running",
  stopped: "stopped",
  stopping: "stopping",
} as const;
/**
 * @public
 */
export type ExperimentStatus = (typeof ExperimentStatus)[keyof typeof ExperimentStatus];

/**
 * @public
 * @enum
 */
export const SafetyLeverStatus = {
  DISENGAGED: "disengaged",
  ENGAGED: "engaged",
  ENGAGING: "engaging",
} as const;
/**
 * @public
 */
export type SafetyLeverStatus = (typeof SafetyLeverStatus)[keyof typeof SafetyLeverStatus];

/**
 * @public
 * @enum
 */
export const SafetyLeverStatusInput = {
  DISENGAGED: "disengaged",
  ENGAGED: "engaged",
} as const;
/**
 * @public
 */
export type SafetyLeverStatusInput = (typeof SafetyLeverStatusInput)[keyof typeof SafetyLeverStatusInput];
