// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AsyncJobStatus = {
  CANCELED: "CANCELED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  IN_PROGRESS_INITIALIZING: "IN_PROGRESS_INITIALIZING",
} as const;
/**
 * @public
 */
export type AsyncJobStatus = (typeof AsyncJobStatus)[keyof typeof AsyncJobStatus];

/**
 * @public
 * @enum
 */
export const DataSource = {
  EVENT: "EVENT",
  EXTERNAL_MODEL_SCORE: "EXTERNAL_MODEL_SCORE",
  MODEL_SCORE: "MODEL_SCORE",
} as const;
/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * @public
 * @enum
 */
export const DataType = {
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * @public
 * @enum
 */
export const ModelTypeEnum = {
  ACCOUNT_TAKEOVER_INSIGHTS: "ACCOUNT_TAKEOVER_INSIGHTS",
  ONLINE_FRAUD_INSIGHTS: "ONLINE_FRAUD_INSIGHTS",
  TRANSACTION_FRAUD_INSIGHTS: "TRANSACTION_FRAUD_INSIGHTS",
} as const;
/**
 * @public
 */
export type ModelTypeEnum = (typeof ModelTypeEnum)[keyof typeof ModelTypeEnum];

/**
 * @public
 * @enum
 */
export const RuleExecutionMode = {
  ALL_MATCHED: "ALL_MATCHED",
  FIRST_MATCHED: "FIRST_MATCHED",
} as const;
/**
 * @public
 */
export type RuleExecutionMode = (typeof RuleExecutionMode)[keyof typeof RuleExecutionMode];

/**
 * @public
 * @enum
 */
export const DetectorVersionStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type DetectorVersionStatus = (typeof DetectorVersionStatus)[keyof typeof DetectorVersionStatus];

/**
 * @public
 * @enum
 */
export const UnlabeledEventsTreatment = {
  AUTO: "AUTO",
  FRAUD: "FRAUD",
  IGNORE: "IGNORE",
  LEGIT: "LEGIT",
} as const;
/**
 * @public
 */
export type UnlabeledEventsTreatment = (typeof UnlabeledEventsTreatment)[keyof typeof UnlabeledEventsTreatment];

/**
 * @public
 * @enum
 */
export const TrainingDataSourceEnum = {
  EXTERNAL_EVENTS: "EXTERNAL_EVENTS",
  INGESTED_EVENTS: "INGESTED_EVENTS",
} as const;
/**
 * @public
 */
export type TrainingDataSourceEnum = (typeof TrainingDataSourceEnum)[keyof typeof TrainingDataSourceEnum];

/**
 * @public
 * @enum
 */
export const Language = {
  DETECTORPL: "DETECTORPL",
} as const;
/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

/**
 * @public
 * @enum
 */
export const ModelSource = {
  SAGEMAKER: "SAGEMAKER",
} as const;
/**
 * @public
 */
export type ModelSource = (typeof ModelSource)[keyof typeof ModelSource];

/**
 * @public
 * @enum
 */
export const EventIngestion = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EventIngestion = (typeof EventIngestion)[keyof typeof EventIngestion];

/**
 * @public
 * @enum
 */
export const ModelInputDataFormat = {
  CSV: "TEXT_CSV",
  JSON: "APPLICATION_JSON",
} as const;
/**
 * @public
 */
export type ModelInputDataFormat = (typeof ModelInputDataFormat)[keyof typeof ModelInputDataFormat];

/**
 * @public
 * @enum
 */
export const ModelEndpointStatus = {
  ASSOCIATED: "ASSOCIATED",
  DISSOCIATED: "DISSOCIATED",
} as const;
/**
 * @public
 */
export type ModelEndpointStatus = (typeof ModelEndpointStatus)[keyof typeof ModelEndpointStatus];

/**
 * @public
 * @enum
 */
export const ModelOutputDataFormat = {
  CSV: "TEXT_CSV",
  JSONLINES: "APPLICATION_JSONLINES",
} as const;
/**
 * @public
 */
export type ModelOutputDataFormat = (typeof ModelOutputDataFormat)[keyof typeof ModelOutputDataFormat];

/**
 * @public
 * @enum
 */
export const ListUpdateMode = {
  APPEND: "APPEND",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type ListUpdateMode = (typeof ListUpdateMode)[keyof typeof ListUpdateMode];

/**
 * @public
 * @enum
 */
export const ModelVersionStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  TRAINING_CANCELLED: "TRAINING_CANCELLED",
} as const;
/**
 * @public
 */
export type ModelVersionStatus = (typeof ModelVersionStatus)[keyof typeof ModelVersionStatus];
