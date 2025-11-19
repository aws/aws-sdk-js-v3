// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchLoadDataFormat = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type BatchLoadDataFormat = (typeof BatchLoadDataFormat)[keyof typeof BatchLoadDataFormat];

/**
 * @public
 * @enum
 */
export const BatchLoadStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_RESUME: "PENDING_RESUME",
  PROGRESS_STOPPED: "PROGRESS_STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BatchLoadStatus = (typeof BatchLoadStatus)[keyof typeof BatchLoadStatus];

/**
 * @public
 * @enum
 */
export const MeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  MULTI: "MULTI",
  TIMESTAMP: "TIMESTAMP",
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
export const TimeUnit = {
  MICROSECONDS: "MICROSECONDS",
  MILLISECONDS: "MILLISECONDS",
  NANOSECONDS: "NANOSECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

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
export const PartitionKeyEnforcementLevel = {
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type PartitionKeyEnforcementLevel =
  (typeof PartitionKeyEnforcementLevel)[keyof typeof PartitionKeyEnforcementLevel];

/**
 * @public
 * @enum
 */
export const PartitionKeyType = {
  DIMENSION: "DIMENSION",
  MEASURE: "MEASURE",
} as const;
/**
 * @public
 */
export type PartitionKeyType = (typeof PartitionKeyType)[keyof typeof PartitionKeyType];

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  RESTORING: "RESTORING",
} as const;
/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

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
