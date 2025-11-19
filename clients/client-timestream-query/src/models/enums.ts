// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ScalarType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DATE: "DATE",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  INTERVAL_DAY_TO_SECOND: "INTERVAL_DAY_TO_SECOND",
  INTERVAL_YEAR_TO_MONTH: "INTERVAL_YEAR_TO_MONTH",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  UNKNOWN: "UNKNOWN",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type ScalarType = (typeof ScalarType)[keyof typeof ScalarType];

/**
 * @public
 * @enum
 */
export const ComputeMode = {
  ON_DEMAND: "ON_DEMAND",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type ComputeMode = (typeof ComputeMode)[keyof typeof ComputeMode];

/**
 * @public
 * @enum
 */
export const S3EncryptionOption = {
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;
/**
 * @public
 */
export type S3EncryptionOption = (typeof S3EncryptionOption)[keyof typeof S3EncryptionOption];

/**
 * @public
 * @enum
 */
export const DimensionValueType = {
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type DimensionValueType = (typeof DimensionValueType)[keyof typeof DimensionValueType];

/**
 * @public
 * @enum
 */
export const MeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  MULTI: "MULTI",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type MeasureValueType = (typeof MeasureValueType)[keyof typeof MeasureValueType];

/**
 * @public
 * @enum
 */
export const ScalarMeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  TIMESTAMP: "TIMESTAMP",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type ScalarMeasureValueType = (typeof ScalarMeasureValueType)[keyof typeof ScalarMeasureValueType];

/**
 * @public
 * @enum
 */
export const LastUpdateStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LastUpdateStatus = (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];

/**
 * @public
 * @enum
 */
export const QueryPricingModel = {
  BYTES_SCANNED: "BYTES_SCANNED",
  COMPUTE_UNITS: "COMPUTE_UNITS",
} as const;
/**
 * @public
 */
export type QueryPricingModel = (typeof QueryPricingModel)[keyof typeof QueryPricingModel];

/**
 * @public
 * @enum
 */
export const ScheduledQueryRunStatus = {
  AUTO_TRIGGER_FAILURE: "AUTO_TRIGGER_FAILURE",
  AUTO_TRIGGER_SUCCESS: "AUTO_TRIGGER_SUCCESS",
  MANUAL_TRIGGER_FAILURE: "MANUAL_TRIGGER_FAILURE",
  MANUAL_TRIGGER_SUCCESS: "MANUAL_TRIGGER_SUCCESS",
} as const;
/**
 * @public
 */
export type ScheduledQueryRunStatus = (typeof ScheduledQueryRunStatus)[keyof typeof ScheduledQueryRunStatus];

/**
 * @public
 * @enum
 */
export const ScheduledQueryState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ScheduledQueryState = (typeof ScheduledQueryState)[keyof typeof ScheduledQueryState];

/**
 * @public
 * @enum
 */
export const ScheduledQueryInsightsMode = {
  DISABLED: "DISABLED",
  ENABLED_WITH_RATE_CONTROL: "ENABLED_WITH_RATE_CONTROL",
} as const;
/**
 * @public
 */
export type ScheduledQueryInsightsMode = (typeof ScheduledQueryInsightsMode)[keyof typeof ScheduledQueryInsightsMode];

/**
 * @public
 * @enum
 */
export const QueryInsightsMode = {
  DISABLED: "DISABLED",
  ENABLED_WITH_RATE_CONTROL: "ENABLED_WITH_RATE_CONTROL",
} as const;
/**
 * @public
 */
export type QueryInsightsMode = (typeof QueryInsightsMode)[keyof typeof QueryInsightsMode];
