// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const S3AclOption = {
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
} as const;
/**
 * @public
 */
export type S3AclOption = (typeof S3AclOption)[keyof typeof S3AclOption];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  DIRECTORY_IDENTITY: "DIRECTORY_IDENTITY",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const EncryptionOption = {
  CSE_KMS: "CSE_KMS",
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;
/**
 * @public
 */
export type EncryptionOption = (typeof EncryptionOption)[keyof typeof EncryptionOption];

/**
 * @public
 * @enum
 */
export const StatementType = {
  DDL: "DDL",
  DML: "DML",
  UTILITY: "UTILITY",
} as const;
/**
 * @public
 */
export type StatementType = (typeof StatementType)[keyof typeof StatementType];

/**
 * @public
 * @enum
 */
export const QueryExecutionState = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type QueryExecutionState = (typeof QueryExecutionState)[keyof typeof QueryExecutionState];

/**
 * @public
 * @enum
 */
export const DataCatalogType = {
  FEDERATED: "FEDERATED",
  GLUE: "GLUE",
  HIVE: "HIVE",
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type DataCatalogType = (typeof DataCatalogType)[keyof typeof DataCatalogType];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  BIGQUERY: "BIGQUERY",
  CMDB: "CMDB",
  DATALAKEGEN2: "DATALAKEGEN2",
  DB2: "DB2",
  DB2AS400: "DB2AS400",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  GOOGLECLOUDSTORAGE: "GOOGLECLOUDSTORAGE",
  HBASE: "HBASE",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SQLSERVER: "SQLSERVER",
  SYNAPSE: "SYNAPSE",
  TIMESTREAM: "TIMESTREAM",
  TPCDS: "TPCDS",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const DataCatalogStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_FAILED_CLEANUP_COMPLETE: "CREATE_FAILED_CLEANUP_COMPLETE",
  CREATE_FAILED_CLEANUP_FAILED: "CREATE_FAILED_CLEANUP_FAILED",
  CREATE_FAILED_CLEANUP_IN_PROGRESS: "CREATE_FAILED_CLEANUP_IN_PROGRESS",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DataCatalogStatus = (typeof DataCatalogStatus)[keyof typeof DataCatalogStatus];

/**
 * @public
 * @enum
 */
export const ThrottleReason = {
  CONCURRENT_QUERY_LIMIT_EXCEEDED: "CONCURRENT_QUERY_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type ThrottleReason = (typeof ThrottleReason)[keyof typeof ThrottleReason];

/**
 * @public
 * @enum
 */
export const NotebookType = {
  IPYNB: "IPYNB",
} as const;
/**
 * @public
 */
export type NotebookType = (typeof NotebookType)[keyof typeof NotebookType];

/**
 * @public
 * @enum
 */
export const CalculationExecutionState = {
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  CREATING: "CREATING",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type CalculationExecutionState = (typeof CalculationExecutionState)[keyof typeof CalculationExecutionState];

/**
 * @public
 * @enum
 */
export const CapacityAllocationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CapacityAllocationStatus = (typeof CapacityAllocationStatus)[keyof typeof CapacityAllocationStatus];

/**
 * @public
 * @enum
 */
export const CapacityReservationStatus = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;
/**
 * @public
 */
export type CapacityReservationStatus = (typeof CapacityReservationStatus)[keyof typeof CapacityReservationStatus];

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  DATA_MANIFEST: "DATA_MANIFEST",
  DATA_ROWS: "DATA_ROWS",
} as const;
/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 * @enum
 */
export const ColumnNullable = {
  NOT_NULL: "NOT_NULL",
  NULLABLE: "NULLABLE",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type ColumnNullable = (typeof ColumnNullable)[keyof typeof ColumnNullable];

/**
 * @public
 * @enum
 */
export const SessionState = {
  BUSY: "BUSY",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  FAILED: "FAILED",
  IDLE: "IDLE",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * @public
 * @enum
 */
export const WorkGroupState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WorkGroupState = (typeof WorkGroupState)[keyof typeof WorkGroupState];

/**
 * @public
 * @enum
 */
export const ExecutorState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  FAILED: "FAILED",
  REGISTERED: "REGISTERED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type ExecutorState = (typeof ExecutorState)[keyof typeof ExecutorState];

/**
 * @public
 * @enum
 */
export const ExecutorType = {
  COORDINATOR: "COORDINATOR",
  GATEWAY: "GATEWAY",
  WORKER: "WORKER",
} as const;
/**
 * @public
 */
export type ExecutorType = (typeof ExecutorType)[keyof typeof ExecutorType];
