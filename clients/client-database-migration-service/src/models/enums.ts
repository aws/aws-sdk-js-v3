// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MigrationTypeValue = {
  CDC: "cdc",
  FULL_LOAD: "full-load",
  FULL_LOAD_AND_CDC: "full-load-and-cdc",
} as const;
/**
 * @public
 */
export type MigrationTypeValue = (typeof MigrationTypeValue)[keyof typeof MigrationTypeValue];

/**
 * @public
 * @enum
 */
export const TablePreparationMode = {
  DO_NOTHING: "do-nothing",
  DROP_TABLES_ON_TARGET: "drop-tables-on-target",
  TRUNCATE: "truncate",
} as const;
/**
 * @public
 */
export type TablePreparationMode = (typeof TablePreparationMode)[keyof typeof TablePreparationMode];

/**
 * @public
 * @enum
 */
export const DmsSslModeValue = {
  NONE: "none",
  REQUIRE: "require",
  VERIFY_CA: "verify-ca",
  VERIFY_FULL: "verify-full",
} as const;
/**
 * @public
 */
export type DmsSslModeValue = (typeof DmsSslModeValue)[keyof typeof DmsSslModeValue];

/**
 * @public
 * @enum
 */
export const AuthMechanismValue = {
  DEFAULT: "default",
  MONGODB_CR: "mongodb_cr",
  SCRAM_SHA_1: "scram_sha_1",
} as const;
/**
 * @public
 */
export type AuthMechanismValue = (typeof AuthMechanismValue)[keyof typeof AuthMechanismValue];

/**
 * @public
 * @enum
 */
export const AuthTypeValue = {
  NO: "no",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type AuthTypeValue = (typeof AuthTypeValue)[keyof typeof AuthTypeValue];

/**
 * @public
 * @enum
 */
export const NestingLevelValue = {
  NONE: "none",
  ONE: "one",
} as const;
/**
 * @public
 */
export type NestingLevelValue = (typeof NestingLevelValue)[keyof typeof NestingLevelValue];

/**
 * @public
 * @enum
 */
export const ReplicationEndpointTypeValue = {
  SOURCE: "source",
  TARGET: "target",
} as const;
/**
 * @public
 */
export type ReplicationEndpointTypeValue =
  (typeof ReplicationEndpointTypeValue)[keyof typeof ReplicationEndpointTypeValue];

/**
 * @public
 * @enum
 */
export const TargetDbType = {
  MULTIPLE_DATABASES: "multiple-databases",
  SPECIFIC_DATABASE: "specific-database",
} as const;
/**
 * @public
 */
export type TargetDbType = (typeof TargetDbType)[keyof typeof TargetDbType];

/**
 * @public
 * @enum
 */
export const MessageFormatValue = {
  JSON: "json",
  JSON_UNFORMATTED: "json-unformatted",
} as const;
/**
 * @public
 */
export type MessageFormatValue = (typeof MessageFormatValue)[keyof typeof MessageFormatValue];

/**
 * @public
 * @enum
 */
export const KafkaSaslMechanism = {
  PLAIN: "plain",
  SCRAM_SHA_512: "scram-sha-512",
} as const;
/**
 * @public
 */
export type KafkaSaslMechanism = (typeof KafkaSaslMechanism)[keyof typeof KafkaSaslMechanism];

/**
 * @public
 * @enum
 */
export const KafkaSecurityProtocol = {
  PLAINTEXT: "plaintext",
  SASL_SSL: "sasl-ssl",
  SSL_AUTHENTICATION: "ssl-authentication",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;
/**
 * @public
 */
export type KafkaSecurityProtocol = (typeof KafkaSecurityProtocol)[keyof typeof KafkaSecurityProtocol];

/**
 * @public
 * @enum
 */
export const KafkaSslEndpointIdentificationAlgorithm = {
  HTTPS: "https",
  NONE: "none",
} as const;
/**
 * @public
 */
export type KafkaSslEndpointIdentificationAlgorithm =
  (typeof KafkaSslEndpointIdentificationAlgorithm)[keyof typeof KafkaSslEndpointIdentificationAlgorithm];

/**
 * @public
 * @enum
 */
export const SqlServerAuthenticationMethod = {
  Kerberos: "kerberos",
  Password: "password",
} as const;
/**
 * @public
 */
export type SqlServerAuthenticationMethod =
  (typeof SqlServerAuthenticationMethod)[keyof typeof SqlServerAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const SafeguardPolicy = {
  EXCLUSIVE_AUTOMATIC_TRUNCATION: "exclusive-automatic-truncation",
  RELY_ON_SQL_SERVER_REPLICATION_AGENT: "rely-on-sql-server-replication-agent",
  SHARED_AUTOMATIC_TRUNCATION: "shared-automatic-truncation",
} as const;
/**
 * @public
 */
export type SafeguardPolicy = (typeof SafeguardPolicy)[keyof typeof SafeguardPolicy];

/**
 * @public
 * @enum
 */
export const TlogAccessMode = {
  BackupOnly: "BackupOnly",
  PreferBackup: "PreferBackup",
  PreferTlog: "PreferTlog",
  TlogOnly: "TlogOnly",
} as const;
/**
 * @public
 */
export type TlogAccessMode = (typeof TlogAccessMode)[keyof typeof TlogAccessMode];

/**
 * @public
 * @enum
 */
export const MySQLAuthenticationMethod = {
  IAM: "iam",
  Password: "password",
} as const;
/**
 * @public
 */
export type MySQLAuthenticationMethod = (typeof MySQLAuthenticationMethod)[keyof typeof MySQLAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const OracleAuthenticationMethod = {
  Kerberos: "kerberos",
  Password: "password",
} as const;
/**
 * @public
 */
export type OracleAuthenticationMethod = (typeof OracleAuthenticationMethod)[keyof typeof OracleAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const CharLengthSemantics = {
  BYTE: "byte",
  CHAR: "char",
  DEFAULT: "default",
} as const;
/**
 * @public
 */
export type CharLengthSemantics = (typeof CharLengthSemantics)[keyof typeof CharLengthSemantics];

/**
 * @public
 * @enum
 */
export const PostgreSQLAuthenticationMethod = {
  IAM: "iam",
  Password: "password",
} as const;
/**
 * @public
 */
export type PostgreSQLAuthenticationMethod =
  (typeof PostgreSQLAuthenticationMethod)[keyof typeof PostgreSQLAuthenticationMethod];

/**
 * @public
 * @enum
 */
export const DatabaseMode = {
  BABELFISH: "babelfish",
  DEFAULT: "default",
} as const;
/**
 * @public
 */
export type DatabaseMode = (typeof DatabaseMode)[keyof typeof DatabaseMode];

/**
 * @public
 * @enum
 */
export const LongVarcharMappingType = {
  CLOB: "clob",
  NCLOB: "nclob",
  WSTRING: "wstring",
} as const;
/**
 * @public
 */
export type LongVarcharMappingType = (typeof LongVarcharMappingType)[keyof typeof LongVarcharMappingType];

/**
 * @public
 * @enum
 */
export const PluginNameValue = {
  NO_PREFERENCE: "no-preference",
  PGLOGICAL: "pglogical",
  TEST_DECODING: "test-decoding",
} as const;
/**
 * @public
 */
export type PluginNameValue = (typeof PluginNameValue)[keyof typeof PluginNameValue];

/**
 * @public
 * @enum
 */
export const RedisAuthTypeValue = {
  AUTH_ROLE: "auth-role",
  AUTH_TOKEN: "auth-token",
  NONE: "none",
} as const;
/**
 * @public
 */
export type RedisAuthTypeValue = (typeof RedisAuthTypeValue)[keyof typeof RedisAuthTypeValue];

/**
 * @public
 * @enum
 */
export const SslSecurityProtocolValue = {
  PLAINTEXT: "plaintext",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;
/**
 * @public
 */
export type SslSecurityProtocolValue = (typeof SslSecurityProtocolValue)[keyof typeof SslSecurityProtocolValue];

/**
 * @public
 * @enum
 */
export const EncryptionModeValue = {
  SSE_KMS: "sse-kms",
  SSE_S3: "sse-s3",
} as const;
/**
 * @public
 */
export type EncryptionModeValue = (typeof EncryptionModeValue)[keyof typeof EncryptionModeValue];

/**
 * @public
 * @enum
 */
export const CannedAclForObjectsValue = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  NONE: "none",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;
/**
 * @public
 */
export type CannedAclForObjectsValue = (typeof CannedAclForObjectsValue)[keyof typeof CannedAclForObjectsValue];

/**
 * @public
 * @enum
 */
export const CompressionTypeValue = {
  GZIP: "gzip",
  NONE: "none",
} as const;
/**
 * @public
 */
export type CompressionTypeValue = (typeof CompressionTypeValue)[keyof typeof CompressionTypeValue];

/**
 * @public
 * @enum
 */
export const DataFormatValue = {
  CSV: "csv",
  PARQUET: "parquet",
} as const;
/**
 * @public
 */
export type DataFormatValue = (typeof DataFormatValue)[keyof typeof DataFormatValue];

/**
 * @public
 * @enum
 */
export const DatePartitionDelimiterValue = {
  DASH: "DASH",
  NONE: "NONE",
  SLASH: "SLASH",
  UNDERSCORE: "UNDERSCORE",
} as const;
/**
 * @public
 */
export type DatePartitionDelimiterValue =
  (typeof DatePartitionDelimiterValue)[keyof typeof DatePartitionDelimiterValue];

/**
 * @public
 * @enum
 */
export const DatePartitionSequenceValue = {
  DDMMYYYY: "DDMMYYYY",
  MMYYYYDD: "MMYYYYDD",
  YYYYMM: "YYYYMM",
  YYYYMMDD: "YYYYMMDD",
  YYYYMMDDHH: "YYYYMMDDHH",
} as const;
/**
 * @public
 */
export type DatePartitionSequenceValue = (typeof DatePartitionSequenceValue)[keyof typeof DatePartitionSequenceValue];

/**
 * @public
 * @enum
 */
export const EncodingTypeValue = {
  PLAIN: "plain",
  PLAIN_DICTIONARY: "plain-dictionary",
  RLE_DICTIONARY: "rle-dictionary",
} as const;
/**
 * @public
 */
export type EncodingTypeValue = (typeof EncodingTypeValue)[keyof typeof EncodingTypeValue];

/**
 * @public
 * @enum
 */
export const ParquetVersionValue = {
  PARQUET_1_0: "parquet-1-0",
  PARQUET_2_0: "parquet-2-0",
} as const;
/**
 * @public
 */
export type ParquetVersionValue = (typeof ParquetVersionValue)[keyof typeof ParquetVersionValue];

/**
 * @public
 * @enum
 */
export const EndpointSettingTypeValue = {
  BOOLEAN: "boolean",
  ENUM: "enum",
  INTEGER: "integer",
  STRING: "string",
} as const;
/**
 * @public
 */
export type EndpointSettingTypeValue = (typeof EndpointSettingTypeValue)[keyof typeof EndpointSettingTypeValue];

/**
 * @public
 * @enum
 */
export const ReleaseStatusValues = {
  BETA: "beta",
  PROD: "prod",
} as const;
/**
 * @public
 */
export type ReleaseStatusValues = (typeof ReleaseStatusValues)[keyof typeof ReleaseStatusValues];

/**
 * @public
 * @enum
 */
export const SourceType = {
  replication_instance: "replication-instance",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const CollectorStatus = {
  ACTIVE: "ACTIVE",
  UNREGISTERED: "UNREGISTERED",
} as const;
/**
 * @public
 */
export type CollectorStatus = (typeof CollectorStatus)[keyof typeof CollectorStatus];

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  OUTDATED: "OUTDATED",
  UNSUPPORTED: "UNSUPPORTED",
  UP_TO_DATE: "UP_TO_DATE",
} as const;
/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * @public
 * @enum
 */
export const OriginTypeValue = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;
/**
 * @public
 */
export type OriginTypeValue = (typeof OriginTypeValue)[keyof typeof OriginTypeValue];

/**
 * @public
 * @enum
 */
export const RefreshSchemasStatusTypeValue = {
  FAILED: "failed",
  REFRESHING: "refreshing",
  SUCCESSFUL: "successful",
} as const;
/**
 * @public
 */
export type RefreshSchemasStatusTypeValue =
  (typeof RefreshSchemasStatusTypeValue)[keyof typeof RefreshSchemasStatusTypeValue];

/**
 * @public
 * @enum
 */
export const AssessmentReportType = {
  CSV: "csv",
  PDF: "pdf",
} as const;
/**
 * @public
 */
export type AssessmentReportType = (typeof AssessmentReportType)[keyof typeof AssessmentReportType];

/**
 * @public
 * @enum
 */
export const ReloadOptionValue = {
  DATA_RELOAD: "data-reload",
  VALIDATE_ONLY: "validate-only",
} as const;
/**
 * @public
 */
export type ReloadOptionValue = (typeof ReloadOptionValue)[keyof typeof ReloadOptionValue];

/**
 * @public
 * @enum
 */
export const StartReplicationMigrationTypeValue = {
  RELOAD_TARGET: "reload-target",
  RESUME_PROCESSING: "resume-processing",
  START_REPLICATION: "start-replication",
} as const;
/**
 * @public
 */
export type StartReplicationMigrationTypeValue =
  (typeof StartReplicationMigrationTypeValue)[keyof typeof StartReplicationMigrationTypeValue];

/**
 * @public
 * @enum
 */
export const StartReplicationTaskTypeValue = {
  RELOAD_TARGET: "reload-target",
  RESUME_PROCESSING: "resume-processing",
  START_REPLICATION: "start-replication",
} as const;
/**
 * @public
 */
export type StartReplicationTaskTypeValue =
  (typeof StartReplicationTaskTypeValue)[keyof typeof StartReplicationTaskTypeValue];
