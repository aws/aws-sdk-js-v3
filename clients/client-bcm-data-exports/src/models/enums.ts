// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CompressionOption = {
  GZIP: "GZIP",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type CompressionOption = (typeof CompressionOption)[keyof typeof CompressionOption];

/**
 * @public
 * @enum
 */
export const FormatOption = {
  PARQUET: "PARQUET",
  TEXT_OR_CSV: "TEXT_OR_CSV",
} as const;
/**
 * @public
 */
export type FormatOption = (typeof FormatOption)[keyof typeof FormatOption];

/**
 * @public
 * @enum
 */
export const S3OutputType = {
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type S3OutputType = (typeof S3OutputType)[keyof typeof S3OutputType];

/**
 * @public
 * @enum
 */
export const OverwriteOption = {
  CREATE_NEW_REPORT: "CREATE_NEW_REPORT",
  OVERWRITE_REPORT: "OVERWRITE_REPORT",
} as const;
/**
 * @public
 */
export type OverwriteOption = (typeof OverwriteOption)[keyof typeof OverwriteOption];

/**
 * @public
 * @enum
 */
export const FrequencyOption = {
  SYNCHRONOUS: "SYNCHRONOUS",
} as const;
/**
 * @public
 */
export type FrequencyOption = (typeof FrequencyOption)[keyof typeof FrequencyOption];

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
export const ExecutionStatusCode = {
  DELIVERY_FAILURE: "DELIVERY_FAILURE",
  DELIVERY_IN_PROCESS: "DELIVERY_IN_PROCESS",
  DELIVERY_SUCCESS: "DELIVERY_SUCCESS",
  INITIATION_IN_PROCESS: "INITIATION_IN_PROCESS",
  QUERY_FAILURE: "QUERY_FAILURE",
  QUERY_IN_PROCESS: "QUERY_IN_PROCESS",
  QUERY_QUEUED: "QUERY_QUEUED",
} as const;
/**
 * @public
 */
export type ExecutionStatusCode = (typeof ExecutionStatusCode)[keyof typeof ExecutionStatusCode];

/**
 * @public
 * @enum
 */
export const ExecutionStatusReason = {
  BILL_OWNER_CHANGED: "BILL_OWNER_CHANGED",
  INSUFFICIENT_PERMISSION: "INSUFFICIENT_PERMISSION",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;
/**
 * @public
 */
export type ExecutionStatusReason = (typeof ExecutionStatusReason)[keyof typeof ExecutionStatusReason];

/**
 * @public
 * @enum
 */
export const ExportStatusCode = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type ExportStatusCode = (typeof ExportStatusCode)[keyof typeof ExportStatusCode];
