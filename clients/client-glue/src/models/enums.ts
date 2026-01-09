// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdditionalOptionKeys = {
  CacheOption: "performanceTuning.caching",
  CompositeOption: "compositeRuleEvaluation.method",
  ObservationsOption: "observations.scope",
} as const;
/**
 * @public
 */
export type AdditionalOptionKeys = (typeof AdditionalOptionKeys)[keyof typeof AdditionalOptionKeys];

/**
 * @public
 * @enum
 */
export const AggFunction = {
  avg: "avg",
  count: "count",
  countDistinct: "countDistinct",
  first: "first",
  kurtosis: "kurtosis",
  last: "last",
  max: "max",
  min: "min",
  skewness: "skewness",
  stddev_pop: "stddev_pop",
  stddev_samp: "stddev_samp",
  sum: "sum",
  sumDistinct: "sumDistinct",
  var_pop: "var_pop",
  var_samp: "var_samp",
} as const;
/**
 * @public
 */
export type AggFunction = (typeof AggFunction)[keyof typeof AggFunction];

/**
 * @public
 * @enum
 */
export const AllowFullTableExternalDataAccessEnum = {
  False: "False",
  True: "True",
} as const;
/**
 * @public
 */
export type AllowFullTableExternalDataAccessEnum =
  (typeof AllowFullTableExternalDataAccessEnum)[keyof typeof AllowFullTableExternalDataAccessEnum];

/**
 * @public
 * @enum
 */
export const InclusionAnnotationValue = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type InclusionAnnotationValue = (typeof InclusionAnnotationValue)[keyof typeof InclusionAnnotationValue];

/**
 * @public
 * @enum
 */
export const DataOperation = {
  READ: "READ",
  WRITE: "WRITE",
} as const;
/**
 * @public
 */
export type DataOperation = (typeof DataOperation)[keyof typeof DataOperation];

/**
 * @public
 * @enum
 */
export const PropertyType = {
  READ_ONLY: "READ_ONLY",
  SECRET: "SECRET",
  SECRET_OR_USER_INPUT: "SECRET_OR_USER_INPUT",
  UNUSED: "UNUSED",
  USER_INPUT: "USER_INPUT",
} as const;
/**
 * @public
 */
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  BASIC: "BASIC",
  CUSTOM: "CUSTOM",
  IAM: "IAM",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const OAuth2GrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  JWT_BEARER: "JWT_BEARER",
} as const;
/**
 * @public
 */
export type OAuth2GrantType = (typeof OAuth2GrantType)[keyof typeof OAuth2GrantType];

/**
 * @public
 * @enum
 */
export const BlueprintStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type BlueprintStatus = (typeof BlueprintStatus)[keyof typeof BlueprintStatus];

/**
 * @public
 * @enum
 */
export const LastCrawlStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type LastCrawlStatus = (typeof LastCrawlStatus)[keyof typeof LastCrawlStatus];

/**
 * @public
 * @enum
 */
export const CrawlerLineageSettings = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type CrawlerLineageSettings = (typeof CrawlerLineageSettings)[keyof typeof CrawlerLineageSettings];

/**
 * @public
 * @enum
 */
export const RecrawlBehavior = {
  CRAWL_EVENT_MODE: "CRAWL_EVENT_MODE",
  CRAWL_EVERYTHING: "CRAWL_EVERYTHING",
  CRAWL_NEW_FOLDERS_ONLY: "CRAWL_NEW_FOLDERS_ONLY",
} as const;
/**
 * @public
 */
export type RecrawlBehavior = (typeof RecrawlBehavior)[keyof typeof RecrawlBehavior];

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  NOT_SCHEDULED: "NOT_SCHEDULED",
  SCHEDULED: "SCHEDULED",
  TRANSITIONING: "TRANSITIONING",
} as const;
/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
 * @enum
 */
export const DeleteBehavior = {
  DELETE_FROM_DATABASE: "DELETE_FROM_DATABASE",
  DEPRECATE_IN_DATABASE: "DEPRECATE_IN_DATABASE",
  LOG: "LOG",
} as const;
/**
 * @public
 */
export type DeleteBehavior = (typeof DeleteBehavior)[keyof typeof DeleteBehavior];

/**
 * @public
 * @enum
 */
export const UpdateBehavior = {
  LOG: "LOG",
  UPDATE_IN_DATABASE: "UPDATE_IN_DATABASE",
} as const;
/**
 * @public
 */
export type UpdateBehavior = (typeof UpdateBehavior)[keyof typeof UpdateBehavior];

/**
 * @public
 * @enum
 */
export const CrawlerState = {
  READY: "READY",
  RUNNING: "RUNNING",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type CrawlerState = (typeof CrawlerState)[keyof typeof CrawlerState];

/**
 * @public
 * @enum
 */
export const JdbcMetadataEntry = {
  COMMENTS: "COMMENTS",
  RAWTYPES: "RAWTYPES",
} as const;
/**
 * @public
 */
export type JdbcMetadataEntry = (typeof JdbcMetadataEntry)[keyof typeof JdbcMetadataEntry];

/**
 * @public
 * @enum
 */
export const DataQualityRuleResultStatus = {
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
} as const;
/**
 * @public
 */
export type DataQualityRuleResultStatus =
  (typeof DataQualityRuleResultStatus)[keyof typeof DataQualityRuleResultStatus];

/**
 * @public
 * @enum
 */
export const WorkerType = {
  G_025X: "G.025X",
  G_1X: "G.1X",
  G_2X: "G.2X",
  G_4X: "G.4X",
  G_8X: "G.8X",
  Standard: "Standard",
  Z_2X: "Z.2X",
} as const;
/**
 * @public
 */
export type WorkerType = (typeof WorkerType)[keyof typeof WorkerType];

/**
 * @public
 * @enum
 */
export const StartingPosition = {
  EARLIEST: "earliest",
  LATEST: "latest",
  TIMESTAMP: "timestamp",
  TRIM_HORIZON: "trim_horizon",
} as const;
/**
 * @public
 */
export type StartingPosition = (typeof StartingPosition)[keyof typeof StartingPosition];

/**
 * @public
 * @enum
 */
export const JDBCConnectionType = {
  mysql: "mysql",
  oracle: "oracle",
  postgresql: "postgresql",
  redshift: "redshift",
  sqlserver: "sqlserver",
} as const;
/**
 * @public
 */
export type JDBCConnectionType = (typeof JDBCConnectionType)[keyof typeof JDBCConnectionType];

/**
 * @public
 * @enum
 */
export const ParamType = {
  BOOL: "bool",
  COMPLEX: "complex",
  FLOAT: "float",
  INT: "int",
  LIST: "list",
  NULL: "null",
  STR: "str",
} as const;
/**
 * @public
 */
export type ParamType = (typeof ParamType)[keyof typeof ParamType];

/**
 * @public
 * @enum
 */
export const DdbExportType = {
  ddb: "ddb",
  s3: "s3",
} as const;
/**
 * @public
 */
export type DdbExportType = (typeof DdbExportType)[keyof typeof DdbExportType];

/**
 * @public
 * @enum
 */
export const DQTransformOutput = {
  EvaluationResults: "EvaluationResults",
  PrimaryInput: "PrimaryInput",
} as const;
/**
 * @public
 */
export type DQTransformOutput = (typeof DQTransformOutput)[keyof typeof DQTransformOutput];

/**
 * @public
 * @enum
 */
export const DQStopJobOnFailureTiming = {
  AfterDataLoad: "AfterDataLoad",
  Immediate: "Immediate",
} as const;
/**
 * @public
 */
export type DQStopJobOnFailureTiming = (typeof DQStopJobOnFailureTiming)[keyof typeof DQStopJobOnFailureTiming];

/**
 * @public
 * @enum
 */
export const FilterOperation = {
  EQ: "EQ",
  GT: "GT",
  GTE: "GTE",
  ISNULL: "ISNULL",
  LT: "LT",
  LTE: "LTE",
  REGEX: "REGEX",
} as const;
/**
 * @public
 */
export type FilterOperation = (typeof FilterOperation)[keyof typeof FilterOperation];

/**
 * @public
 * @enum
 */
export const FilterValueType = {
  COLUMNEXTRACTED: "COLUMNEXTRACTED",
  CONSTANT: "CONSTANT",
} as const;
/**
 * @public
 */
export type FilterValueType = (typeof FilterValueType)[keyof typeof FilterValueType];

/**
 * @public
 * @enum
 */
export const FilterLogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type FilterLogicalOperator = (typeof FilterLogicalOperator)[keyof typeof FilterLogicalOperator];

/**
 * @public
 * @enum
 */
export const UpdateCatalogBehavior = {
  LOG: "LOG",
  UPDATE_IN_DATABASE: "UPDATE_IN_DATABASE",
} as const;
/**
 * @public
 */
export type UpdateCatalogBehavior = (typeof UpdateCatalogBehavior)[keyof typeof UpdateCatalogBehavior];

/**
 * @public
 * @enum
 */
export const JDBCDataType = {
  ARRAY: "ARRAY",
  BIGINT: "BIGINT",
  BINARY: "BINARY",
  BIT: "BIT",
  BLOB: "BLOB",
  BOOLEAN: "BOOLEAN",
  CHAR: "CHAR",
  CLOB: "CLOB",
  DATALINK: "DATALINK",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DISTINCT: "DISTINCT",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  JAVA_OBJECT: "JAVA_OBJECT",
  LONGNVARCHAR: "LONGNVARCHAR",
  LONGVARBINARY: "LONGVARBINARY",
  LONGVARCHAR: "LONGVARCHAR",
  NCHAR: "NCHAR",
  NCLOB: "NCLOB",
  NULL: "NULL",
  NUMERIC: "NUMERIC",
  NVARCHAR: "NVARCHAR",
  OTHER: "OTHER",
  REAL: "REAL",
  REF: "REF",
  REF_CURSOR: "REF_CURSOR",
  ROWID: "ROWID",
  SMALLINT: "SMALLINT",
  SQLXML: "SQLXML",
  STRUCT: "STRUCT",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  TIMESTAMP_WITH_TIMEZONE: "TIMESTAMP_WITH_TIMEZONE",
  TIME_WITH_TIMEZONE: "TIME_WITH_TIMEZONE",
  TINYINT: "TINYINT",
  VARBINARY: "VARBINARY",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type JDBCDataType = (typeof JDBCDataType)[keyof typeof JDBCDataType];

/**
 * @public
 * @enum
 */
export const GlueRecordType = {
  BIGDECIMAL: "BIGDECIMAL",
  BYTE: "BYTE",
  DATE: "DATE",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INT: "INT",
  LONG: "LONG",
  SHORT: "SHORT",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type GlueRecordType = (typeof GlueRecordType)[keyof typeof GlueRecordType];

/**
 * @public
 * @enum
 */
export const JoinType = {
  EQUIJOIN: "equijoin",
  LEFT: "left",
  LEFT_ANTI: "leftanti",
  LEFT_SEMI: "leftsemi",
  OUTER: "outer",
  RIGHT: "right",
} as const;
/**
 * @public
 */
export type JoinType = (typeof JoinType)[keyof typeof JoinType];

/**
 * @public
 * @enum
 */
export const PiiType = {
  ColumnAudit: "ColumnAudit",
  ColumnHashing: "ColumnHashing",
  ColumnMasking: "ColumnMasking",
  RowAudit: "RowAudit",
  RowHashing: "RowHashing",
  RowMasking: "RowMasking",
  RowPartialMasking: "RowPartialMasking",
} as const;
/**
 * @public
 */
export type PiiType = (typeof PiiType)[keyof typeof PiiType];

/**
 * @public
 * @enum
 */
export const CompressionType = {
  BZIP2: "bzip2",
  GZIP: "gzip",
} as const;
/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const QuoteChar = {
  DISABLED: "disabled",
  QUILLEMET: "quillemet",
  QUOTE: "quote",
  SINGLE_QUOTE: "single_quote",
} as const;
/**
 * @public
 */
export type QuoteChar = (typeof QuoteChar)[keyof typeof QuoteChar];

/**
 * @public
 * @enum
 */
export const Separator = {
  COMMA: "comma",
  CTRLA: "ctrla",
  PIPE: "pipe",
  SEMICOLON: "semicolon",
  TAB: "tab",
} as const;
/**
 * @public
 */
export type Separator = (typeof Separator)[keyof typeof Separator];

/**
 * @public
 * @enum
 */
export const DeltaTargetCompressionType = {
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;
/**
 * @public
 */
export type DeltaTargetCompressionType = (typeof DeltaTargetCompressionType)[keyof typeof DeltaTargetCompressionType];

/**
 * @public
 * @enum
 */
export const TargetFormat = {
  AVRO: "avro",
  CSV: "csv",
  DELTA: "delta",
  HUDI: "hudi",
  HYPER: "hyper",
  ICEBERG: "iceberg",
  JSON: "json",
  ORC: "orc",
  PARQUET: "parquet",
  XML: "xml",
} as const;
/**
 * @public
 */
export type TargetFormat = (typeof TargetFormat)[keyof typeof TargetFormat];

/**
 * @public
 * @enum
 */
export const ParquetCompressionType = {
  BROTLI: "brotli",
  GZIP: "gzip",
  LZ4: "lz4",
  LZO: "lzo",
  NONE: "none",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;
/**
 * @public
 */
export type ParquetCompressionType = (typeof ParquetCompressionType)[keyof typeof ParquetCompressionType];

/**
 * @public
 * @enum
 */
export const HudiTargetCompressionType = {
  GZIP: "gzip",
  LZO: "lzo",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;
/**
 * @public
 */
export type HudiTargetCompressionType = (typeof HudiTargetCompressionType)[keyof typeof HudiTargetCompressionType];

/**
 * @public
 * @enum
 */
export const HyperTargetCompressionType = {
  UNCOMPRESSED: "uncompressed",
} as const;
/**
 * @public
 */
export type HyperTargetCompressionType = (typeof HyperTargetCompressionType)[keyof typeof HyperTargetCompressionType];

/**
 * @public
 * @enum
 */
export const IcebergTargetCompressionType = {
  GZIP: "gzip",
  LZO: "lzo",
  SNAPPY: "snappy",
  UNCOMPRESSED: "uncompressed",
} as const;
/**
 * @public
 */
export type IcebergTargetCompressionType =
  (typeof IcebergTargetCompressionType)[keyof typeof IcebergTargetCompressionType];

/**
 * @public
 * @enum
 */
export const UnionType = {
  ALL: "ALL",
  DISTINCT: "DISTINCT",
} as const;
/**
 * @public
 */
export type UnionType = (typeof UnionType)[keyof typeof UnionType];

/**
 * @public
 * @enum
 */
export const ExecutionClass = {
  FLEX: "FLEX",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ExecutionClass = (typeof ExecutionClass)[keyof typeof ExecutionClass];

/**
 * @public
 * @enum
 */
export const JobMode = {
  NOTEBOOK: "NOTEBOOK",
  SCRIPT: "SCRIPT",
  VISUAL: "VISUAL",
} as const;
/**
 * @public
 */
export type JobMode = (typeof JobMode)[keyof typeof JobMode];

/**
 * @public
 * @enum
 */
export const SourceControlAuthStrategy = {
  AWS_SECRETS_MANAGER: "AWS_SECRETS_MANAGER",
  PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
} as const;
/**
 * @public
 */
export type SourceControlAuthStrategy = (typeof SourceControlAuthStrategy)[keyof typeof SourceControlAuthStrategy];

/**
 * @public
 * @enum
 */
export const SourceControlProvider = {
  AWS_CODE_COMMIT: "AWS_CODE_COMMIT",
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITLAB: "GITLAB",
} as const;
/**
 * @public
 */
export type SourceControlProvider = (typeof SourceControlProvider)[keyof typeof SourceControlProvider];

/**
 * @public
 * @enum
 */
export const FederationSourceErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  EntityNotFoundException: "EntityNotFoundException",
  InternalServiceException: "InternalServiceException",
  InvalidCredentialsException: "InvalidCredentialsException",
  InvalidInputException: "InvalidInputException",
  InvalidResponseException: "InvalidResponseException",
  OperationNotSupportedException: "OperationNotSupportedException",
  OperationTimeoutException: "OperationTimeoutException",
  PartialFailureException: "PartialFailureException",
  ThrottlingException: "ThrottlingException",
} as const;
/**
 * @public
 */
export type FederationSourceErrorCode = (typeof FederationSourceErrorCode)[keyof typeof FederationSourceErrorCode];

/**
 * @public
 * @enum
 */
export const TableOptimizerType = {
  COMPACTION: "compaction",
  ORPHAN_FILE_DELETION: "orphan_file_deletion",
  RETENTION: "retention",
} as const;
/**
 * @public
 */
export type TableOptimizerType = (typeof TableOptimizerType)[keyof typeof TableOptimizerType];

/**
 * @public
 * @enum
 */
export const CompactionStrategy = {
  BINPACK: "binpack",
  SORT: "sort",
  ZORDER: "z-order",
} as const;
/**
 * @public
 */
export type CompactionStrategy = (typeof CompactionStrategy)[keyof typeof CompactionStrategy];

/**
 * @public
 * @enum
 */
export const ConfigurationSource = {
  CATALOG: "catalog",
  TABLE: "table",
} as const;
/**
 * @public
 */
export type ConfigurationSource = (typeof ConfigurationSource)[keyof typeof ConfigurationSource];

/**
 * @public
 * @enum
 */
export const TableOptimizerEventType = {
  COMPLETED: "completed",
  FAILED: "failed",
  IN_PROGRESS: "in_progress",
  STARTING: "starting",
} as const;
/**
 * @public
 */
export type TableOptimizerEventType = (typeof TableOptimizerEventType)[keyof typeof TableOptimizerEventType];

/**
 * @public
 * @enum
 */
export const CrawlState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CrawlState = (typeof CrawlState)[keyof typeof CrawlState];

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 * @enum
 */
export const JobRunState = {
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
 * @enum
 */
export const Logical = {
  AND: "AND",
  ANY: "ANY",
} as const;
/**
 * @public
 */
export type Logical = (typeof Logical)[keyof typeof Logical];

/**
 * @public
 * @enum
 */
export const TriggerState = {
  ACTIVATED: "ACTIVATED",
  ACTIVATING: "ACTIVATING",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DEACTIVATED: "DEACTIVATED",
  DEACTIVATING: "DEACTIVATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TriggerState = (typeof TriggerState)[keyof typeof TriggerState];

/**
 * @public
 * @enum
 */
export const TriggerType = {
  CONDITIONAL: "CONDITIONAL",
  EVENT: "EVENT",
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType];

/**
 * @public
 * @enum
 */
export const NodeType = {
  CRAWLER: "CRAWLER",
  JOB: "JOB",
  TRIGGER: "TRIGGER",
} as const;
/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * @enum
 */
export const WorkflowRunStatus = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];

/**
 * @public
 * @enum
 */
export const TaskStatusType = {
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
export type TaskStatusType = (typeof TaskStatusType)[keyof typeof TaskStatusType];

/**
 * @public
 * @enum
 */
export const DataFormat = {
  AVRO: "AVRO",
  JSON: "JSON",
  PROTOBUF: "PROTOBUF",
} as const;
/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DROP: "DROP",
  INSERT: "INSERT",
  SELECT: "SELECT",
} as const;
/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * @enum
 */
export const CsvHeaderOption = {
  ABSENT: "ABSENT",
  PRESENT: "PRESENT",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type CsvHeaderOption = (typeof CsvHeaderOption)[keyof typeof CsvHeaderOption];

/**
 * @public
 * @enum
 */
export const CsvSerdeOption = {
  LazySimpleSerDe: "LazySimpleSerDe",
  None: "None",
  OpenCSVSerDe: "OpenCSVSerDe",
} as const;
/**
 * @public
 */
export type CsvSerdeOption = (typeof CsvSerdeOption)[keyof typeof CsvSerdeOption];

/**
 * @public
 * @enum
 */
export const ConnectionPropertyKey = {
  CLUSTER_IDENTIFIER: "CLUSTER_IDENTIFIER",
  CONFIG_FILES: "CONFIG_FILES",
  CONNECTION_URL: "CONNECTION_URL",
  CONNECTOR_CLASS_NAME: "CONNECTOR_CLASS_NAME",
  CONNECTOR_TYPE: "CONNECTOR_TYPE",
  CONNECTOR_URL: "CONNECTOR_URL",
  CUSTOM_JDBC_CERT: "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING: "CUSTOM_JDBC_CERT_STRING",
  DATABASE: "DATABASE",
  ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD",
  ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD: "ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD",
  ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD: "ENCRYPTED_KAFKA_SASL_PLAIN_PASSWORD",
  ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD: "ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD",
  ENCRYPTED_PASSWORD: "ENCRYPTED_PASSWORD",
  ENDPOINT: "ENDPOINT",
  ENDPOINT_TYPE: "ENDPOINT_TYPE",
  HOST: "HOST",
  INSTANCE_ID: "INSTANCE_ID",
  JDBC_CONNECTION_URL: "JDBC_CONNECTION_URL",
  JDBC_DRIVER_CLASS_NAME: "JDBC_DRIVER_CLASS_NAME",
  JDBC_DRIVER_JAR_URI: "JDBC_DRIVER_JAR_URI",
  JDBC_ENFORCE_SSL: "JDBC_ENFORCE_SSL",
  JDBC_ENGINE: "JDBC_ENGINE",
  JDBC_ENGINE_VERSION: "JDBC_ENGINE_VERSION",
  KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
  KAFKA_CLIENT_KEYSTORE: "KAFKA_CLIENT_KEYSTORE",
  KAFKA_CLIENT_KEYSTORE_PASSWORD: "KAFKA_CLIENT_KEYSTORE_PASSWORD",
  KAFKA_CLIENT_KEY_PASSWORD: "KAFKA_CLIENT_KEY_PASSWORD",
  KAFKA_CUSTOM_CERT: "KAFKA_CUSTOM_CERT",
  KAFKA_SASL_GSSAPI_KEYTAB: "KAFKA_SASL_GSSAPI_KEYTAB",
  KAFKA_SASL_GSSAPI_KRB5_CONF: "KAFKA_SASL_GSSAPI_KRB5_CONF",
  KAFKA_SASL_GSSAPI_PRINCIPAL: "KAFKA_SASL_GSSAPI_PRINCIPAL",
  KAFKA_SASL_GSSAPI_SERVICE: "KAFKA_SASL_GSSAPI_SERVICE",
  KAFKA_SASL_MECHANISM: "KAFKA_SASL_MECHANISM",
  KAFKA_SASL_PLAIN_PASSWORD: "KAFKA_SASL_PLAIN_PASSWORD",
  KAFKA_SASL_PLAIN_USERNAME: "KAFKA_SASL_PLAIN_USERNAME",
  KAFKA_SASL_SCRAM_PASSWORD: "KAFKA_SASL_SCRAM_PASSWORD",
  KAFKA_SASL_SCRAM_SECRETS_ARN: "KAFKA_SASL_SCRAM_SECRETS_ARN",
  KAFKA_SASL_SCRAM_USERNAME: "KAFKA_SASL_SCRAM_USERNAME",
  KAFKA_SKIP_CUSTOM_CERT_VALIDATION: "KAFKA_SKIP_CUSTOM_CERT_VALIDATION",
  KAFKA_SSL_ENABLED: "KAFKA_SSL_ENABLED",
  PASSWORD: "PASSWORD",
  PORT: "PORT",
  REGION: "REGION",
  ROLE_ARN: "ROLE_ARN",
  SECRET_ID: "SECRET_ID",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION: "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME: "USERNAME",
  WORKGROUP_NAME: "WORKGROUP_NAME",
} as const;
/**
 * @public
 */
export type ConnectionPropertyKey = (typeof ConnectionPropertyKey)[keyof typeof ConnectionPropertyKey];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  ADOBEANALYTICS: "ADOBEANALYTICS",
  ASANA: "ASANA",
  AZURECOSMOS: "AZURECOSMOS",
  AZURESQL: "AZURESQL",
  BIGQUERY: "BIGQUERY",
  BLACKBAUD: "BLACKBAUD",
  BLACKBAUDRAISEREDGENXT: "BLACKBAUDRAISEREDGENXT",
  CIRCLECI: "CIRCLECI",
  CLOUDERAHIVE: "CLOUDERAHIVE",
  CLOUDERAIMPALA: "CLOUDERAIMPALA",
  CLOUDWATCH: "CLOUDWATCH",
  CLOUDWATCHMETRICS: "CLOUDWATCHMETRICS",
  CMDB: "CMDB",
  CUSTOM: "CUSTOM",
  DATADOG: "DATADOG",
  DATALAKEGEN2: "DATALAKEGEN2",
  DB2: "DB2",
  DB2AS400: "DB2AS400",
  DOCUMENTDB: "DOCUMENTDB",
  DOCUSIGNMONITOR: "DOCUSIGNMONITOR",
  DOMO: "DOMO",
  DYNAMODB: "DYNAMODB",
  DYNATRACE: "DYNATRACE",
  FACEBOOKADS: "FACEBOOKADS",
  FACEBOOKPAGEINSIGHTS: "FACEBOOKPAGEINSIGHTS",
  FRESHDESK: "FRESHDESK",
  FRESHSALES: "FRESHSALES",
  GITLAB: "GITLAB",
  GOOGLEADS: "GOOGLEADS",
  GOOGLEANALYTICS4: "GOOGLEANALYTICS4",
  GOOGLECLOUDSTORAGE: "GOOGLECLOUDSTORAGE",
  GOOGLESEARCHCONSOLE: "GOOGLESEARCHCONSOLE",
  GOOGLESHEETS: "GOOGLESHEETS",
  HBASE: "HBASE",
  HUBSPOT: "HUBSPOT",
  INSTAGRAMADS: "INSTAGRAMADS",
  INTERCOM: "INTERCOM",
  JDBC: "JDBC",
  JIRACLOUD: "JIRACLOUD",
  KAFKA: "KAFKA",
  KUSTOMER: "KUSTOMER",
  LINKEDIN: "LINKEDIN",
  MAILCHIMP: "MAILCHIMP",
  MARKETO: "MARKETO",
  MARKETPLACE: "MARKETPLACE",
  MICROSOFTDYNAMIC365FINANCEANDOPS: "MICROSOFTDYNAMIC365FINANCEANDOPS",
  MICROSOFTDYNAMICS365CRM: "MICROSOFTDYNAMICS365CRM",
  MICROSOFTTEAMS: "MICROSOFTTEAMS",
  MIXPANEL: "MIXPANEL",
  MONDAY: "MONDAY",
  MONGODB: "MONGODB",
  MYSQL: "MYSQL",
  NETSUITEERP: "NETSUITEERP",
  NETWORK: "NETWORK",
  OKTA: "OKTA",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  PAYPAL: "PAYPAL",
  PENDO: "PENDO",
  PIPEDIVE: "PIPEDIVE",
  PIPEDRIVE: "PIPEDRIVE",
  POSTGRESQL: "POSTGRESQL",
  PRODUCTBOARD: "PRODUCTBOARD",
  QUICKBOOKS: "QUICKBOOKS",
  SALESFORCE: "SALESFORCE",
  SALESFORCECOMMERCECLOUD: "SALESFORCECOMMERCECLOUD",
  SALESFORCEMARKETINGCLOUD: "SALESFORCEMARKETINGCLOUD",
  SALESFORCEPARDOT: "SALESFORCEPARDOT",
  SAPCONCUR: "SAPCONCUR",
  SAPHANA: "SAPHANA",
  SAPODATA: "SAPODATA",
  SENDGRID: "SENDGRID",
  SERVICENOW: "SERVICENOW",
  SFTP: "SFTP",
  SLACK: "SLACK",
  SMARTSHEET: "SMARTSHEET",
  SNAPCHATADS: "SNAPCHATADS",
  SQLSERVER: "SQLSERVER",
  STRIPE: "STRIPE",
  SYNAPSE: "SYNAPSE",
  TERADATA: "TERADATA",
  TERADATANOS: "TERADATANOS",
  TIMESTREAM: "TIMESTREAM",
  TPCDS: "TPCDS",
  TWILIO: "TWILIO",
  VERTICA: "VERTICA",
  VIEW_VALIDATION_ATHENA: "VIEW_VALIDATION_ATHENA",
  VIEW_VALIDATION_REDSHIFT: "VIEW_VALIDATION_REDSHIFT",
  WOOCOMMERCE: "WOOCOMMERCE",
  ZENDESK: "ZENDESK",
  ZOHOCRM: "ZOHOCRM",
  ZOOM: "ZOOM",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ComputeEnvironment = {
  ATHENA: "ATHENA",
  PYTHON: "PYTHON",
  SPARK: "SPARK",
} as const;
/**
 * @public
 */
export type ComputeEnvironment = (typeof ComputeEnvironment)[keyof typeof ComputeEnvironment];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
  NEEDS_ATTENTION: "NEEDS_ATTENTION",
  SYNCING: "SYNCING",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const UnnestSpec = {
  FULL: "FULL",
  NOUNNEST: "NOUNNEST",
  TOPLEVEL: "TOPLEVEL",
} as const;
/**
 * @public
 */
export type UnnestSpec = (typeof UnnestSpec)[keyof typeof UnnestSpec];

/**
 * @public
 * @enum
 */
export const TransformType = {
  FIND_MATCHES: "FIND_MATCHES",
} as const;
/**
 * @public
 */
export type TransformType = (typeof TransformType)[keyof typeof TransformType];

/**
 * @public
 * @enum
 */
export const MLUserDataEncryptionModeString = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;
/**
 * @public
 */
export type MLUserDataEncryptionModeString =
  (typeof MLUserDataEncryptionModeString)[keyof typeof MLUserDataEncryptionModeString];

/**
 * @public
 * @enum
 */
export const Compatibility = {
  BACKWARD: "BACKWARD",
  BACKWARD_ALL: "BACKWARD_ALL",
  DISABLED: "DISABLED",
  FORWARD: "FORWARD",
  FORWARD_ALL: "FORWARD_ALL",
  FULL: "FULL",
  FULL_ALL: "FULL_ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 * @enum
 */
export const SchemaVersionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILURE: "FAILURE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SchemaVersionStatus = (typeof SchemaVersionStatus)[keyof typeof SchemaVersionStatus];

/**
 * @public
 * @enum
 */
export const Language = {
  PYTHON: "PYTHON",
  SCALA: "SCALA",
} as const;
/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

/**
 * @public
 * @enum
 */
export const CloudWatchEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;
/**
 * @public
 */
export type CloudWatchEncryptionMode = (typeof CloudWatchEncryptionMode)[keyof typeof CloudWatchEncryptionMode];

/**
 * @public
 * @enum
 */
export const DataQualityEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;
/**
 * @public
 */
export type DataQualityEncryptionMode = (typeof DataQualityEncryptionMode)[keyof typeof DataQualityEncryptionMode];

/**
 * @public
 * @enum
 */
export const JobBookmarksEncryptionMode = {
  CSEKMS: "CSE-KMS",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type JobBookmarksEncryptionMode = (typeof JobBookmarksEncryptionMode)[keyof typeof JobBookmarksEncryptionMode];

/**
 * @public
 * @enum
 */
export const S3EncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
  SSES3: "SSE-S3",
} as const;
/**
 * @public
 */
export type S3EncryptionMode = (typeof S3EncryptionMode)[keyof typeof S3EncryptionMode];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * @enum
 */
export const IcebergStructTypeEnum = {
  STRUCT: "struct",
} as const;
/**
 * @public
 */
export type IcebergStructTypeEnum = (typeof IcebergStructTypeEnum)[keyof typeof IcebergStructTypeEnum];

/**
 * @public
 * @enum
 */
export const IcebergSortDirection = {
  ASC: "asc",
  DESC: "desc",
} as const;
/**
 * @public
 */
export type IcebergSortDirection = (typeof IcebergSortDirection)[keyof typeof IcebergSortDirection];

/**
 * @public
 * @enum
 */
export const IcebergNullOrder = {
  NULLS_FIRST: "nulls-first",
  NULLS_LAST: "nulls-last",
} as const;
/**
 * @public
 */
export type IcebergNullOrder = (typeof IcebergNullOrder)[keyof typeof IcebergNullOrder];

/**
 * @public
 * @enum
 */
export const MetadataOperation = {
  CREATE: "CREATE",
} as const;
/**
 * @public
 */
export type MetadataOperation = (typeof MetadataOperation)[keyof typeof MetadataOperation];

/**
 * @public
 * @enum
 */
export const LastRefreshType = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type LastRefreshType = (typeof LastRefreshType)[keyof typeof LastRefreshType];

/**
 * @public
 * @enum
 */
export const ViewDialect = {
  ATHENA: "ATHENA",
  REDSHIFT: "REDSHIFT",
  SPARK: "SPARK",
} as const;
/**
 * @public
 */
export type ViewDialect = (typeof ViewDialect)[keyof typeof ViewDialect];

/**
 * @public
 * @enum
 */
export const FunctionType = {
  AGGREGATE_FUNCTION: "AGGREGATE_FUNCTION",
  REGULAR_FUNCTION: "REGULAR_FUNCTION",
  STORED_PROCEDURE: "STORED_PROCEDURE",
} as const;
/**
 * @public
 */
export type FunctionType = (typeof FunctionType)[keyof typeof FunctionType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  GROUP: "GROUP",
  ROLE: "ROLE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ARCHIVE: "ARCHIVE",
  FILE: "FILE",
  JAR: "JAR",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const RegistryStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type RegistryStatus = (typeof RegistryStatus)[keyof typeof RegistryStatus];

/**
 * @public
 * @enum
 */
export const FieldDataType = {
  ARRAY: "ARRAY",
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  BYTE: "BYTE",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INT: "INT",
  LONG: "LONG",
  MAP: "MAP",
  SHORT: "SHORT",
  SMALLINT: "SMALLINT",
  STRING: "STRING",
  STRUCT: "STRUCT",
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type FieldDataType = (typeof FieldDataType)[keyof typeof FieldDataType];

/**
 * @public
 * @enum
 */
export const FieldFilterOperator = {
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  NOT_EQUAL_TO: "NOT_EQUAL_TO",
  ORDER_BY: "ORDER_BY",
} as const;
/**
 * @public
 */
export type FieldFilterOperator = (typeof FieldFilterOperator)[keyof typeof FieldFilterOperator];

/**
 * @public
 * @enum
 */
export const BlueprintRunState = {
  FAILED: "FAILED",
  ROLLING_BACK: "ROLLING_BACK",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BlueprintRunState = (typeof BlueprintRunState)[keyof typeof BlueprintRunState];

/**
 * @public
 * @enum
 */
export const ColumnStatisticsType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type ColumnStatisticsType = (typeof ColumnStatisticsType)[keyof typeof ColumnStatisticsType];

/**
 * @public
 * @enum
 */
export const ComputationType = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type ComputationType = (typeof ComputationType)[keyof typeof ComputationType];

/**
 * @public
 * @enum
 */
export const ColumnStatisticsState = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ColumnStatisticsState = (typeof ColumnStatisticsState)[keyof typeof ColumnStatisticsState];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  FAILED: "FAILED",
  STARTED: "STARTED",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const ScheduleType = {
  AUTO: "AUTO",
  CRON: "CRON",
} as const;
/**
 * @public
 */
export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType];

/**
 * @public
 * @enum
 */
export const SettingSource = {
  CATALOG: "CATALOG",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type SettingSource = (typeof SettingSource)[keyof typeof SettingSource];

/**
 * @public
 * @enum
 */
export const DatabaseAttributes = {
  NAME: "NAME",
  TARGET_DATABASE: "TARGET_DATABASE",
} as const;
/**
 * @public
 */
export type DatabaseAttributes = (typeof DatabaseAttributes)[keyof typeof DatabaseAttributes];

/**
 * @public
 * @enum
 */
export const ResourceShareType = {
  ALL: "ALL",
  FEDERATED: "FEDERATED",
  FOREIGN: "FOREIGN",
} as const;
/**
 * @public
 */
export type ResourceShareType = (typeof ResourceShareType)[keyof typeof ResourceShareType];

/**
 * @public
 * @enum
 */
export const CatalogEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
  SSEKMSWITHSERVICEROLE: "SSE-KMS-WITH-SERVICE-ROLE",
} as const;
/**
 * @public
 */
export type CatalogEncryptionMode = (typeof CatalogEncryptionMode)[keyof typeof CatalogEncryptionMode];

/**
 * @public
 * @enum
 */
export const DataQualityModelStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DataQualityModelStatus = (typeof DataQualityModelStatus)[keyof typeof DataQualityModelStatus];

/**
 * @public
 * @enum
 */
export const DQCompositeRuleEvaluationMethod = {
  COLUMN: "COLUMN",
  ROW: "ROW",
} as const;
/**
 * @public
 */
export type DQCompositeRuleEvaluationMethod =
  (typeof DQCompositeRuleEvaluationMethod)[keyof typeof DQCompositeRuleEvaluationMethod];

/**
 * @public
 * @enum
 */
export const MaterializedViewRefreshType = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type MaterializedViewRefreshType =
  (typeof MaterializedViewRefreshType)[keyof typeof MaterializedViewRefreshType];

/**
 * @public
 * @enum
 */
export const MaterializedViewRefreshState = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type MaterializedViewRefreshState =
  (typeof MaterializedViewRefreshState)[keyof typeof MaterializedViewRefreshState];

/**
 * @public
 * @enum
 */
export const TaskType = {
  EVALUATION: "EVALUATION",
  EXPORT_LABELS: "EXPORT_LABELS",
  FIND_MATCHES: "FIND_MATCHES",
  IMPORT_LABELS: "IMPORT_LABELS",
  LABELING_SET_GENERATION: "LABELING_SET_GENERATION",
} as const;
/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @public
 * @enum
 */
export const TaskRunSortColumnType = {
  STARTED: "STARTED",
  STATUS: "STATUS",
  TASK_RUN_TYPE: "TASK_RUN_TYPE",
} as const;
/**
 * @public
 */
export type TaskRunSortColumnType = (typeof TaskRunSortColumnType)[keyof typeof TaskRunSortColumnType];

/**
 * @public
 * @enum
 */
export const SortDirectionType = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortDirectionType = (typeof SortDirectionType)[keyof typeof SortDirectionType];

/**
 * @public
 * @enum
 */
export const TransformStatusType = {
  DELETING: "DELETING",
  NOT_READY: "NOT_READY",
  READY: "READY",
} as const;
/**
 * @public
 */
export type TransformStatusType = (typeof TransformStatusType)[keyof typeof TransformStatusType];

/**
 * @public
 * @enum
 */
export const TransformSortColumnType = {
  CREATED: "CREATED",
  LAST_MODIFIED: "LAST_MODIFIED",
  NAME: "NAME",
  STATUS: "STATUS",
  TRANSFORM_TYPE: "TRANSFORM_TYPE",
} as const;
/**
 * @public
 */
export type TransformSortColumnType = (typeof TransformSortColumnType)[keyof typeof TransformSortColumnType];

/**
 * @public
 * @enum
 */
export const BackfillErrorCode = {
  ENCRYPTED_PARTITION_ERROR: "ENCRYPTED_PARTITION_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PARTITION_TYPE_DATA_ERROR: "INVALID_PARTITION_TYPE_DATA_ERROR",
  MISSING_PARTITION_VALUE_ERROR: "MISSING_PARTITION_VALUE_ERROR",
  UNSUPPORTED_PARTITION_CHARACTER_ERROR: "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
} as const;
/**
 * @public
 */
export type BackfillErrorCode = (typeof BackfillErrorCode)[keyof typeof BackfillErrorCode];

/**
 * @public
 * @enum
 */
export const PartitionIndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type PartitionIndexStatus = (typeof PartitionIndexStatus)[keyof typeof PartitionIndexStatus];

/**
 * @public
 * @enum
 */
export const SchemaDiffType = {
  SYNTAX_DIFF: "SYNTAX_DIFF",
} as const;
/**
 * @public
 */
export type SchemaDiffType = (typeof SchemaDiffType)[keyof typeof SchemaDiffType];

/**
 * @public
 * @enum
 */
export const StatementState = {
  AVAILABLE: "AVAILABLE",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type StatementState = (typeof StatementState)[keyof typeof StatementState];

/**
 * @public
 * @enum
 */
export const ResourceAction = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type ResourceAction = (typeof ResourceAction)[keyof typeof ResourceAction];

/**
 * @public
 * @enum
 */
export const ResourceState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  STOPPED: "STOPPED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ResourceState = (typeof ResourceState)[keyof typeof ResourceState];

/**
 * @public
 * @enum
 */
export const TableAttributes = {
  NAME: "NAME",
  TABLE_TYPE: "TABLE_TYPE",
} as const;
/**
 * @public
 */
export type TableAttributes = (typeof TableAttributes)[keyof typeof TableAttributes];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CELL_FILTER_PERMISSION: "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION: "COLUMN_PERMISSION",
  NESTED_CELL_PERMISSION: "NESTED_CELL_PERMISSION",
  NESTED_PERMISSION: "NESTED_PERMISSION",
} as const;
/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const FieldName = {
  CRAWL_ID: "CRAWL_ID",
  DPU_HOUR: "DPU_HOUR",
  END_TIME: "END_TIME",
  START_TIME: "START_TIME",
  STATE: "STATE",
} as const;
/**
 * @public
 */
export type FieldName = (typeof FieldName)[keyof typeof FieldName];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  LE: "LE",
  LT: "LT",
  NE: "NE",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * @enum
 */
export const CrawlerHistoryState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type CrawlerHistoryState = (typeof CrawlerHistoryState)[keyof typeof CrawlerHistoryState];

/**
 * @public
 * @enum
 */
export const StatisticEvaluationLevel = {
  COLUMN: "Column",
  DATASET: "Dataset",
  MULTICOLUMN: "Multicolumn",
} as const;
/**
 * @public
 */
export type StatisticEvaluationLevel = (typeof StatisticEvaluationLevel)[keyof typeof StatisticEvaluationLevel];

/**
 * @public
 * @enum
 */
export const EnableHybridValues = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type EnableHybridValues = (typeof EnableHybridValues)[keyof typeof EnableHybridValues];

/**
 * @public
 * @enum
 */
export const ExistCondition = {
  MUST_EXIST: "MUST_EXIST",
  NONE: "NONE",
  NOT_EXIST: "NOT_EXIST",
} as const;
/**
 * @public
 */
export type ExistCondition = (typeof ExistCondition)[keyof typeof ExistCondition];

/**
 * @public
 * @enum
 */
export const Comparator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUALS: "GREATER_THAN_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
} as const;
/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 * @enum
 */
export const Sort = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
} as const;
/**
 * @public
 */
export type Sort = (typeof Sort)[keyof typeof Sort];

/**
 * @public
 * @enum
 */
export const IcebergUpdateAction = {
  ADD_ENCRYPTION_KEY: "add-encryption-key",
  ADD_SCHEMA: "add-schema",
  ADD_SORT_ORDER: "add-sort-order",
  ADD_SPEC: "add-spec",
  REMOVE_ENCRYPTION_KEY: "remove-encryption-key",
  REMOVE_PROPERTIES: "remove-properties",
  SET_CURRENT_SCHEMA: "set-current-schema",
  SET_DEFAULT_SORT_ORDER: "set-default-sort-order",
  SET_DEFAULT_SPEC: "set-default-spec",
  SET_LOCATION: "set-location",
  SET_PROPERTIES: "set-properties",
} as const;
/**
 * @public
 */
export type IcebergUpdateAction = (typeof IcebergUpdateAction)[keyof typeof IcebergUpdateAction];

/**
 * @public
 * @enum
 */
export const ViewUpdateAction = {
  ADD: "ADD",
  ADD_OR_REPLACE: "ADD_OR_REPLACE",
  DROP: "DROP",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type ViewUpdateAction = (typeof ViewUpdateAction)[keyof typeof ViewUpdateAction];
