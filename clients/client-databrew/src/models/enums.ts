// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AnalyticsMode = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type AnalyticsMode = (typeof AnalyticsMode)[keyof typeof AnalyticsMode];

/**
 * @public
 * @enum
 */
export const InputFormat = {
  CSV: "CSV",
  EXCEL: "EXCEL",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const OrderedBy = {
  LAST_MODIFIED_DATE: "LAST_MODIFIED_DATE",
} as const;
/**
 * @public
 */
export type OrderedBy = (typeof OrderedBy)[keyof typeof OrderedBy];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  Datetime: "Datetime",
  Number: "Number",
  String: "String",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const EncryptionMode = {
  SSEKMS: "SSE-KMS",
  SSES3: "SSE-S3",
} as const;
/**
 * @public
 */
export type EncryptionMode = (typeof EncryptionMode)[keyof typeof EncryptionMode];

/**
 * @public
 * @enum
 */
export const SampleMode = {
  CUSTOM_ROWS: "CUSTOM_ROWS",
  FULL_DATASET: "FULL_DATASET",
} as const;
/**
 * @public
 */
export type SampleMode = (typeof SampleMode)[keyof typeof SampleMode];

/**
 * @public
 * @enum
 */
export const LogSubscription = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type LogSubscription = (typeof LogSubscription)[keyof typeof LogSubscription];

/**
 * @public
 * @enum
 */
export const ValidationMode = {
  CHECK_ALL: "CHECK_ALL",
} as const;
/**
 * @public
 */
export type ValidationMode = (typeof ValidationMode)[keyof typeof ValidationMode];

/**
 * @public
 * @enum
 */
export const SampleType = {
  FIRST_N: "FIRST_N",
  LAST_N: "LAST_N",
  RANDOM: "RANDOM",
} as const;
/**
 * @public
 */
export type SampleType = (typeof SampleType)[keyof typeof SampleType];

/**
 * @public
 * @enum
 */
export const DatabaseOutputMode = {
  NEW_TABLE: "NEW_TABLE",
} as const;
/**
 * @public
 */
export type DatabaseOutputMode = (typeof DatabaseOutputMode)[keyof typeof DatabaseOutputMode];

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  BROTLI: "BROTLI",
  BZIP2: "BZIP2",
  DEFLATE: "DEFLATE",
  GZIP: "GZIP",
  LZ4: "LZ4",
  LZO: "LZO",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  AVRO: "AVRO",
  CSV: "CSV",
  GLUEPARQUET: "GLUEPARQUET",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
  TABLEAUHYPER: "TABLEAUHYPER",
  XML: "XML",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const ThresholdType = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;
/**
 * @public
 */
export type ThresholdType = (typeof ThresholdType)[keyof typeof ThresholdType];

/**
 * @public
 * @enum
 */
export const ThresholdUnit = {
  COUNT: "COUNT",
  PERCENTAGE: "PERCENTAGE",
} as const;
/**
 * @public
 */
export type ThresholdUnit = (typeof ThresholdUnit)[keyof typeof ThresholdUnit];

/**
 * @public
 * @enum
 */
export const Source = {
  DATABASE: "DATABASE",
  DATACATALOG: "DATA-CATALOG",
  S3: "S3",
} as const;
/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * @public
 * @enum
 */
export const JobType = {
  PROFILE: "PROFILE",
  RECIPE: "RECIPE",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobRunState = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  ASSIGNED: "ASSIGNED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
  RECYCLING: "RECYCLING",
  ROTATING: "ROTATING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];
