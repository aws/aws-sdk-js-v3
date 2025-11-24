// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ChangeDirectionEnum = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
} as const;
/**
 * @public
 */
export type ChangeDirectionEnum = (typeof ChangeDirectionEnum)[keyof typeof ChangeDirectionEnum];

/**
 * @public
 * @enum
 */
export const ExperimentStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ExperimentStatus = (typeof ExperimentStatus)[keyof typeof ExperimentStatus];

/**
 * @public
 * @enum
 */
export const ExperimentType = {
  ONLINE_AB_EXPERIMENT: "aws.evidently.onlineab",
} as const;
/**
 * @public
 */
export type ExperimentType = (typeof ExperimentType)[keyof typeof ExperimentType];

/**
 * @public
 * @enum
 */
export const FeatureEvaluationStrategy = {
  ALL_RULES: "ALL_RULES",
  DEFAULT_VARIATION: "DEFAULT_VARIATION",
} as const;
/**
 * @public
 */
export type FeatureEvaluationStrategy = (typeof FeatureEvaluationStrategy)[keyof typeof FeatureEvaluationStrategy];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const VariationValueType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type VariationValueType = (typeof VariationValueType)[keyof typeof VariationValueType];

/**
 * @public
 * @enum
 */
export const LaunchStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus];

/**
 * @public
 * @enum
 */
export const LaunchType = {
  SCHEDULED_SPLITS_LAUNCH: "aws.evidently.splits",
} as const;
/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  AVAILABLE: "AVAILABLE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  CUSTOM: "aws.evidently.custom",
  EVALUATION: "aws.evidently.evaluation",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const ExperimentBaseStat = {
  MEAN: "Mean",
} as const;
/**
 * @public
 */
export type ExperimentBaseStat = (typeof ExperimentBaseStat)[keyof typeof ExperimentBaseStat];

/**
 * @public
 * @enum
 */
export const ExperimentReportName = {
  BAYESIAN_INFERENCE: "BayesianInference",
} as const;
/**
 * @public
 */
export type ExperimentReportName = (typeof ExperimentReportName)[keyof typeof ExperimentReportName];

/**
 * @public
 * @enum
 */
export const ExperimentResultRequestType = {
  BASE_STAT: "BaseStat",
  CONFIDENCE_INTERVAL: "ConfidenceInterval",
  P_VALUE: "PValue",
  TREATMENT_EFFECT: "TreatmentEffect",
} as const;
/**
 * @public
 */
export type ExperimentResultRequestType =
  (typeof ExperimentResultRequestType)[keyof typeof ExperimentResultRequestType];

/**
 * @public
 * @enum
 */
export const ExperimentResultResponseType = {
  CONFIDENCE_INTERVAL_LOWERBOUND: "ConfidenceIntervalLowerBound",
  CONFIDENCE_INTERVAL_UPPERBOUND: "ConfidenceIntervalUpperBound",
  MEAN: "Mean",
  P_VALUE: "PValue",
  TREATMENT_EFFECT: "TreatmentEffect",
} as const;
/**
 * @public
 */
export type ExperimentResultResponseType =
  (typeof ExperimentResultResponseType)[keyof typeof ExperimentResultResponseType];

/**
 * @public
 * @enum
 */
export const ExperimentStopDesiredState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
} as const;
/**
 * @public
 */
export type ExperimentStopDesiredState = (typeof ExperimentStopDesiredState)[keyof typeof ExperimentStopDesiredState];

/**
 * @public
 * @enum
 */
export const LaunchStopDesiredState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
} as const;
/**
 * @public
 */
export type LaunchStopDesiredState = (typeof LaunchStopDesiredState)[keyof typeof LaunchStopDesiredState];

/**
 * @public
 * @enum
 */
export const SegmentReferenceResourceType = {
  EXPERIMENT: "EXPERIMENT",
  LAUNCH: "LAUNCH",
} as const;
/**
 * @public
 */
export type SegmentReferenceResourceType =
  (typeof SegmentReferenceResourceType)[keyof typeof SegmentReferenceResourceType];
