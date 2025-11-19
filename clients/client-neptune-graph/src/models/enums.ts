// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BAD_REQUEST: "BAD_REQUEST",
  CONSTRAINT_VIOLATION: "CONSTRAINT_VIOLATION",
  ILLEGAL_ARGUMENT: "ILLEGAL_ARGUMENT",
  MALFORMED_QUERY: "MALFORMED_QUERY",
  QUERY_CANCELLED: "QUERY_CANCELLED",
  QUERY_TOO_LARGE: "QUERY_TOO_LARGE",
  UNSUPPORTED_OPERATION: "UNSUPPORTED_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ExplainMode = {
  DETAILS: "DETAILS",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type ExplainMode = (typeof ExplainMode)[keyof typeof ExplainMode];

/**
 * @public
 * @enum
 */
export const QueryLanguage = {
  OPEN_CYPHER: "OPEN_CYPHER",
} as const;
/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];

/**
 * @public
 * @enum
 */
export const PlanCacheType = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PlanCacheType = (typeof PlanCacheType)[keyof typeof PlanCacheType];

/**
 * @public
 * @enum
 */
export const UnprocessableExceptionReason = {
  INTERNAL_LIMIT_EXCEEDED: "INTERNAL_LIMIT_EXCEEDED",
  MEMORY_LIMIT_EXCEEDED: "MEMORY_LIMIT_EXCEEDED",
  PARTITION_FULL: "PARTITION_FULL",
  QUERY_TIMEOUT: "QUERY_TIMEOUT",
  STORAGE_LIMIT_EXCEEDED: "STORAGE_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type UnprocessableExceptionReason =
  (typeof UnprocessableExceptionReason)[keyof typeof UnprocessableExceptionReason];

/**
 * @public
 * @enum
 */
export const GraphSummaryMode = {
  BASIC: "BASIC",
  DETAILED: "DETAILED",
} as const;
/**
 * @public
 */
export type GraphSummaryMode = (typeof GraphSummaryMode)[keyof typeof GraphSummaryMode];

/**
 * @public
 * @enum
 */
export const QueryState = {
  CANCELLING: "CANCELLING",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type QueryState = (typeof QueryState)[keyof typeof QueryState];

/**
 * @public
 * @enum
 */
export const GraphStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IMPORTING: "IMPORTING",
  RESETTING: "RESETTING",
  SNAPSHOTTING: "SNAPSHOTTING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type GraphStatus = (typeof GraphStatus)[keyof typeof GraphStatus];

/**
 * @public
 * @enum
 */
export const QueryStateInput = {
  ALL: "ALL",
  CANCELLING: "CANCELLING",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type QueryStateInput = (typeof QueryStateInput)[keyof typeof QueryStateInput];

/**
 * @public
 * @enum
 */
export const PrivateGraphEndpointStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type PrivateGraphEndpointStatus = (typeof PrivateGraphEndpointStatus)[keyof typeof PrivateGraphEndpointStatus];

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * @enum
 */
export const ExportFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type ExportFormat = (typeof ExportFormat)[keyof typeof ExportFormat];

/**
 * @public
 * @enum
 */
export const ParquetType = {
  COLUMNAR: "COLUMNAR",
} as const;
/**
 * @public
 */
export type ParquetType = (typeof ParquetType)[keyof typeof ParquetType];

/**
 * @public
 * @enum
 */
export const ExportTaskStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  DELETED: "DELETED",
  EXPORTING: "EXPORTING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExportTaskStatus = (typeof ExportTaskStatus)[keyof typeof ExportTaskStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  NTRIPLES: "NTRIPLES",
  OPEN_CYPHER: "OPEN_CYPHER",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const ImportTaskStatus = {
  ANALYZING_DATA: "ANALYZING_DATA",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  DELETED: "DELETED",
  EXPORTING: "EXPORTING",
  FAILED: "FAILED",
  IMPORTING: "IMPORTING",
  INITIALIZING: "INITIALIZING",
  REPROVISIONING: "REPROVISIONING",
  ROLLING_BACK: "ROLLING_BACK",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ImportTaskStatus = (typeof ImportTaskStatus)[keyof typeof ImportTaskStatus];

/**
 * @public
 * @enum
 */
export const BlankNodeHandling = {
  CONVERT_TO_IRI: "convertToIri",
} as const;
/**
 * @public
 */
export type BlankNodeHandling = (typeof BlankNodeHandling)[keyof typeof BlankNodeHandling];

/**
 * @public
 * @enum
 */
export const MultiValueHandlingType = {
  PICK_FIRST: "PICK_FIRST",
  TO_LIST: "TO_LIST",
} as const;
/**
 * @public
 */
export type MultiValueHandlingType = (typeof MultiValueHandlingType)[keyof typeof MultiValueHandlingType];
