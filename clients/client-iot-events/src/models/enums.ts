// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PayloadType = {
  JSON: "JSON",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * @public
 * @enum
 */
export const AlarmModelVersionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AlarmModelVersionStatus = (typeof AlarmModelVersionStatus)[keyof typeof AlarmModelVersionStatus];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESS: "LESS",
  LESS_OR_EQUAL: "LESS_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const AnalysisResultLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type AnalysisResultLevel = (typeof AnalysisResultLevel)[keyof typeof AnalysisResultLevel];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * @enum
 */
export const EvaluationMethod = {
  BATCH: "BATCH",
  SERIAL: "SERIAL",
} as const;
/**
 * @public
 */
export type EvaluationMethod = (typeof EvaluationMethod)[keyof typeof EvaluationMethod];

/**
 * @public
 * @enum
 */
export const DetectorModelVersionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type DetectorModelVersionStatus = (typeof DetectorModelVersionStatus)[keyof typeof DetectorModelVersionStatus];

/**
 * @public
 * @enum
 */
export const InputStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type InputStatus = (typeof InputStatus)[keyof typeof InputStatus];

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
} as const;
/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];
