// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TaggableResourceType = {
  BATCH_PREDICTION: "BatchPrediction",
  DATASOURCE: "DataSource",
  EVALUATION: "Evaluation",
  ML_MODEL: "MLModel",
} as const;
/**
 * @public
 */
export type TaggableResourceType = (typeof TaggableResourceType)[keyof typeof TaggableResourceType];

/**
 * @public
 * @enum
 */
export const Algorithm = {
  SGD: "sgd",
} as const;
/**
 * @public
 */
export type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];

/**
 * @public
 * @enum
 */
export const MLModelType = {
  BINARY: "BINARY",
  MULTICLASS: "MULTICLASS",
  REGRESSION: "REGRESSION",
} as const;
/**
 * @public
 */
export type MLModelType = (typeof MLModelType)[keyof typeof MLModelType];

/**
 * @public
 * @enum
 */
export const RealtimeEndpointStatus = {
  FAILED: "FAILED",
  NONE: "NONE",
  READY: "READY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RealtimeEndpointStatus = (typeof RealtimeEndpointStatus)[keyof typeof RealtimeEndpointStatus];

/**
 * @public
 * @enum
 */
export const BatchPredictionFilterVariable = {
  CREATED_AT: "CreatedAt",
  DATASOURCE_ID: "DataSourceId",
  DATA_URI: "DataURI",
  IAM_USER: "IAMUser",
  LAST_UPDATED_AT: "LastUpdatedAt",
  ML_MODEL_ID: "MLModelId",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type BatchPredictionFilterVariable =
  (typeof BatchPredictionFilterVariable)[keyof typeof BatchPredictionFilterVariable];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "asc",
  DSC: "dsc",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const EntityStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INPROGRESS: "INPROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type EntityStatus = (typeof EntityStatus)[keyof typeof EntityStatus];

/**
 * @public
 * @enum
 */
export const DataSourceFilterVariable = {
  CREATED_AT: "CreatedAt",
  DATA_URI: "DataLocationS3",
  IAM_USER: "IAMUser",
  LAST_UPDATED_AT: "LastUpdatedAt",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type DataSourceFilterVariable = (typeof DataSourceFilterVariable)[keyof typeof DataSourceFilterVariable];

/**
 * @public
 * @enum
 */
export const EvaluationFilterVariable = {
  CREATED_AT: "CreatedAt",
  DATASOURCE_ID: "DataSourceId",
  DATA_URI: "DataURI",
  IAM_USER: "IAMUser",
  LAST_UPDATED_AT: "LastUpdatedAt",
  ML_MODEL_ID: "MLModelId",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type EvaluationFilterVariable = (typeof EvaluationFilterVariable)[keyof typeof EvaluationFilterVariable];

/**
 * @public
 * @enum
 */
export const MLModelFilterVariable = {
  ALGORITHM: "Algorithm",
  CREATED_AT: "CreatedAt",
  IAM_USER: "IAMUser",
  LAST_UPDATED_AT: "LastUpdatedAt",
  ML_MODEL_TYPE: "MLModelType",
  NAME: "Name",
  REAL_TIME_ENDPOINT_STATUS: "RealtimeEndpointStatus",
  STATUS: "Status",
  TRAINING_DATASOURCE_ID: "TrainingDataSourceId",
  TRAINING_DATA_URI: "TrainingDataURI",
} as const;
/**
 * @public
 */
export type MLModelFilterVariable = (typeof MLModelFilterVariable)[keyof typeof MLModelFilterVariable];

/**
 * @public
 * @enum
 */
export const DetailsAttributes = {
  ALGORITHM: "Algorithm",
  PREDICTIVE_MODEL_TYPE: "PredictiveModelType",
} as const;
/**
 * @public
 */
export type DetailsAttributes = (typeof DetailsAttributes)[keyof typeof DetailsAttributes];
