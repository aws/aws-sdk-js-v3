// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AutoPromotionResult = {
  MODEL_NOT_PROMOTED: "MODEL_NOT_PROMOTED",
  MODEL_PROMOTED: "MODEL_PROMOTED",
  RETRAINING_CANCELLED: "RETRAINING_CANCELLED",
  RETRAINING_CUSTOMER_ERROR: "RETRAINING_CUSTOMER_ERROR",
  RETRAINING_INTERNAL_ERROR: "RETRAINING_INTERNAL_ERROR",
} as const;
/**
 * @public
 */
export type AutoPromotionResult = (typeof AutoPromotionResult)[keyof typeof AutoPromotionResult];

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  INGESTION_IN_PROGRESS: "INGESTION_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const DataUploadFrequency = {
  PT10M: "PT10M",
  PT15M: "PT15M",
  PT1H: "PT1H",
  PT30M: "PT30M",
  PT5M: "PT5M",
} as const;
/**
 * @public
 */
export type DataUploadFrequency = (typeof DataUploadFrequency)[keyof typeof DataUploadFrequency];

/**
 * @public
 * @enum
 */
export const ModelQuality = {
  CANNOT_DETERMINE_QUALITY: "CANNOT_DETERMINE_QUALITY",
  POOR_QUALITY_DETECTED: "POOR_QUALITY_DETECTED",
  QUALITY_THRESHOLD_MET: "QUALITY_THRESHOLD_MET",
} as const;
/**
 * @public
 */
export type ModelQuality = (typeof ModelQuality)[keyof typeof ModelQuality];

/**
 * @public
 * @enum
 */
export const InferenceSchedulerStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type InferenceSchedulerStatus = (typeof InferenceSchedulerStatus)[keyof typeof InferenceSchedulerStatus];

/**
 * @public
 * @enum
 */
export const LabelRating = {
  ANOMALY: "ANOMALY",
  NEUTRAL: "NEUTRAL",
  NO_ANOMALY: "NO_ANOMALY",
} as const;
/**
 * @public
 */
export type LabelRating = (typeof LabelRating)[keyof typeof LabelRating];

/**
 * @public
 * @enum
 */
export const TargetSamplingRate = {
  PT10M: "PT10M",
  PT10S: "PT10S",
  PT15M: "PT15M",
  PT15S: "PT15S",
  PT1H: "PT1H",
  PT1M: "PT1M",
  PT1S: "PT1S",
  PT30M: "PT30M",
  PT30S: "PT30S",
  PT5M: "PT5M",
  PT5S: "PT5S",
} as const;
/**
 * @public
 */
export type TargetSamplingRate = (typeof TargetSamplingRate)[keyof typeof TargetSamplingRate];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const ModelPromoteMode = {
  MANAGED: "MANAGED",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type ModelPromoteMode = (typeof ModelPromoteMode)[keyof typeof ModelPromoteMode];

/**
 * @public
 * @enum
 */
export const RetrainingSchedulerStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type RetrainingSchedulerStatus = (typeof RetrainingSchedulerStatus)[keyof typeof RetrainingSchedulerStatus];

/**
 * @public
 * @enum
 */
export const IngestionJobStatus = {
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * @public
 * @enum
 */
export const LatestInferenceResult = {
  ANOMALOUS: "ANOMALOUS",
  NORMAL: "NORMAL",
} as const;
/**
 * @public
 */
export type LatestInferenceResult = (typeof LatestInferenceResult)[keyof typeof LatestInferenceResult];

/**
 * @public
 * @enum
 */
export const ModelVersionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ModelVersionStatus = (typeof ModelVersionStatus)[keyof typeof ModelVersionStatus];

/**
 * @public
 * @enum
 */
export const ModelVersionSourceType = {
  IMPORT: "IMPORT",
  RETRAINING: "RETRAINING",
  TRAINING: "TRAINING",
} as const;
/**
 * @public
 */
export type ModelVersionSourceType = (typeof ModelVersionSourceType)[keyof typeof ModelVersionSourceType];

/**
 * @public
 * @enum
 */
export const InferenceDataImportStrategy = {
  ADD_WHEN_EMPTY: "ADD_WHEN_EMPTY",
  NO_IMPORT: "NO_IMPORT",
  OVERWRITE: "OVERWRITE",
} as const;
/**
 * @public
 */
export type InferenceDataImportStrategy =
  (typeof InferenceDataImportStrategy)[keyof typeof InferenceDataImportStrategy];

/**
 * @public
 * @enum
 */
export const InferenceExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type InferenceExecutionStatus = (typeof InferenceExecutionStatus)[keyof typeof InferenceExecutionStatus];

/**
 * @public
 * @enum
 */
export const StatisticalIssueStatus = {
  NO_ISSUE_DETECTED: "NO_ISSUE_DETECTED",
  POTENTIAL_ISSUE_DETECTED: "POTENTIAL_ISSUE_DETECTED",
} as const;
/**
 * @public
 */
export type StatisticalIssueStatus = (typeof StatisticalIssueStatus)[keyof typeof StatisticalIssueStatus];

/**
 * @public
 * @enum
 */
export const Monotonicity = {
  DECREASING: "DECREASING",
  INCREASING: "INCREASING",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type Monotonicity = (typeof Monotonicity)[keyof typeof Monotonicity];
