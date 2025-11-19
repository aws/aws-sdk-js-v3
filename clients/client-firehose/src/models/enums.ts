// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ProcessorParameterName = {
  BUFFER_INTERVAL_IN_SECONDS: "BufferIntervalInSeconds",
  BUFFER_SIZE_IN_MB: "BufferSizeInMBs",
  COMPRESSION_FORMAT: "CompressionFormat",
  DATA_MESSAGE_EXTRACTION: "DataMessageExtraction",
  Delimiter: "Delimiter",
  JSON_PARSING_ENGINE: "JsonParsingEngine",
  LAMBDA_ARN: "LambdaArn",
  LAMBDA_NUMBER_OF_RETRIES: "NumberOfRetries",
  METADATA_EXTRACTION_QUERY: "MetadataExtractionQuery",
  ROLE_ARN: "RoleArn",
  SUB_RECORD_TYPE: "SubRecordType",
} as const;
/**
 * @public
 */
export type ProcessorParameterName = (typeof ProcessorParameterName)[keyof typeof ProcessorParameterName];

/**
 * @public
 * @enum
 */
export const ProcessorType = {
  AppendDelimiterToRecord: "AppendDelimiterToRecord",
  CloudWatchLogProcessing: "CloudWatchLogProcessing",
  Decompression: "Decompression",
  Lambda: "Lambda",
  MetadataExtraction: "MetadataExtraction",
  RecordDeAggregation: "RecordDeAggregation",
} as const;
/**
 * @public
 */
export type ProcessorType = (typeof ProcessorType)[keyof typeof ProcessorType];

/**
 * @public
 * @enum
 */
export const AmazonOpenSearchServerlessS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;
/**
 * @public
 */
export type AmazonOpenSearchServerlessS3BackupMode =
  (typeof AmazonOpenSearchServerlessS3BackupMode)[keyof typeof AmazonOpenSearchServerlessS3BackupMode];

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  GZIP: "GZIP",
  HADOOP_SNAPPY: "HADOOP_SNAPPY",
  SNAPPY: "Snappy",
  UNCOMPRESSED: "UNCOMPRESSED",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * @public
 * @enum
 */
export const NoEncryptionConfig = {
  NoEncryption: "NoEncryption",
} as const;
/**
 * @public
 */
export type NoEncryptionConfig = (typeof NoEncryptionConfig)[keyof typeof NoEncryptionConfig];

/**
 * @public
 * @enum
 */
export const DefaultDocumentIdFormat = {
  FIREHOSE_DEFAULT: "FIREHOSE_DEFAULT",
  NO_DOCUMENT_ID: "NO_DOCUMENT_ID",
} as const;
/**
 * @public
 */
export type DefaultDocumentIdFormat = (typeof DefaultDocumentIdFormat)[keyof typeof DefaultDocumentIdFormat];

/**
 * @public
 * @enum
 */
export const AmazonopensearchserviceIndexRotationPeriod = {
  NoRotation: "NoRotation",
  OneDay: "OneDay",
  OneHour: "OneHour",
  OneMonth: "OneMonth",
  OneWeek: "OneWeek",
} as const;
/**
 * @public
 */
export type AmazonopensearchserviceIndexRotationPeriod =
  (typeof AmazonopensearchserviceIndexRotationPeriod)[keyof typeof AmazonopensearchserviceIndexRotationPeriod];

/**
 * @public
 * @enum
 */
export const AmazonopensearchserviceS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;
/**
 * @public
 */
export type AmazonopensearchserviceS3BackupMode =
  (typeof AmazonopensearchserviceS3BackupMode)[keyof typeof AmazonopensearchserviceS3BackupMode];

/**
 * @public
 * @enum
 */
export const Connectivity = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];

/**
 * @public
 * @enum
 */
export const ContentEncoding = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding];

/**
 * @public
 * @enum
 */
export const SSLMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type SSLMode = (typeof SSLMode)[keyof typeof SSLMode];

/**
 * @public
 * @enum
 */
export const DatabaseType = {
  MySQL: "MySQL",
  PostgreSQL: "PostgreSQL",
} as const;
/**
 * @public
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

/**
 * @public
 * @enum
 */
export const KeyType = {
  AWS_OWNED_CMK: "AWS_OWNED_CMK",
  CUSTOMER_MANAGED_CMK: "CUSTOMER_MANAGED_CMK",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const DeliveryStreamType = {
  DatabaseAsSource: "DatabaseAsSource",
  DirectPut: "DirectPut",
  KinesisStreamAsSource: "KinesisStreamAsSource",
  MSKAsSource: "MSKAsSource",
} as const;
/**
 * @public
 */
export type DeliveryStreamType = (typeof DeliveryStreamType)[keyof typeof DeliveryStreamType];

/**
 * @public
 * @enum
 */
export const ElasticsearchIndexRotationPeriod = {
  NoRotation: "NoRotation",
  OneDay: "OneDay",
  OneHour: "OneHour",
  OneMonth: "OneMonth",
  OneWeek: "OneWeek",
} as const;
/**
 * @public
 */
export type ElasticsearchIndexRotationPeriod =
  (typeof ElasticsearchIndexRotationPeriod)[keyof typeof ElasticsearchIndexRotationPeriod];

/**
 * @public
 * @enum
 */
export const ElasticsearchS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;
/**
 * @public
 */
export type ElasticsearchS3BackupMode = (typeof ElasticsearchS3BackupMode)[keyof typeof ElasticsearchS3BackupMode];

/**
 * @public
 * @enum
 */
export const OrcCompression = {
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
} as const;
/**
 * @public
 */
export type OrcCompression = (typeof OrcCompression)[keyof typeof OrcCompression];

/**
 * @public
 * @enum
 */
export const OrcFormatVersion = {
  V0_11: "V0_11",
  V0_12: "V0_12",
} as const;
/**
 * @public
 */
export type OrcFormatVersion = (typeof OrcFormatVersion)[keyof typeof OrcFormatVersion];

/**
 * @public
 * @enum
 */
export const ParquetCompression = {
  GZIP: "GZIP",
  SNAPPY: "SNAPPY",
  UNCOMPRESSED: "UNCOMPRESSED",
} as const;
/**
 * @public
 */
export type ParquetCompression = (typeof ParquetCompression)[keyof typeof ParquetCompression];

/**
 * @public
 * @enum
 */
export const ParquetWriterVersion = {
  V1: "V1",
  V2: "V2",
} as const;
/**
 * @public
 */
export type ParquetWriterVersion = (typeof ParquetWriterVersion)[keyof typeof ParquetWriterVersion];

/**
 * @public
 * @enum
 */
export const S3BackupMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type S3BackupMode = (typeof S3BackupMode)[keyof typeof S3BackupMode];

/**
 * @public
 * @enum
 */
export const HttpEndpointS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;
/**
 * @public
 */
export type HttpEndpointS3BackupMode = (typeof HttpEndpointS3BackupMode)[keyof typeof HttpEndpointS3BackupMode];

/**
 * @public
 * @enum
 */
export const IcebergS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;
/**
 * @public
 */
export type IcebergS3BackupMode = (typeof IcebergS3BackupMode)[keyof typeof IcebergS3BackupMode];

/**
 * @public
 * @enum
 */
export const RedshiftS3BackupMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type RedshiftS3BackupMode = (typeof RedshiftS3BackupMode)[keyof typeof RedshiftS3BackupMode];

/**
 * @public
 * @enum
 */
export const SnowflakeDataLoadingOption = {
  JSON_MAPPING: "JSON_MAPPING",
  VARIANT_CONTENT_AND_METADATA_MAPPING: "VARIANT_CONTENT_AND_METADATA_MAPPING",
  VARIANT_CONTENT_MAPPING: "VARIANT_CONTENT_MAPPING",
} as const;
/**
 * @public
 */
export type SnowflakeDataLoadingOption = (typeof SnowflakeDataLoadingOption)[keyof typeof SnowflakeDataLoadingOption];

/**
 * @public
 * @enum
 */
export const SnowflakeS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;
/**
 * @public
 */
export type SnowflakeS3BackupMode = (typeof SnowflakeS3BackupMode)[keyof typeof SnowflakeS3BackupMode];

/**
 * @public
 * @enum
 */
export const HECEndpointType = {
  Event: "Event",
  Raw: "Raw",
} as const;
/**
 * @public
 */
export type HECEndpointType = (typeof HECEndpointType)[keyof typeof HECEndpointType];

/**
 * @public
 * @enum
 */
export const SplunkS3BackupMode = {
  AllEvents: "AllEvents",
  FailedEventsOnly: "FailedEventsOnly",
} as const;
/**
 * @public
 */
export type SplunkS3BackupMode = (typeof SplunkS3BackupMode)[keyof typeof SplunkS3BackupMode];

/**
 * @public
 * @enum
 */
export const DeliveryStreamFailureType = {
  CREATE_ENI_FAILED: "CREATE_ENI_FAILED",
  CREATE_KMS_GRANT_FAILED: "CREATE_KMS_GRANT_FAILED",
  DELETE_ENI_FAILED: "DELETE_ENI_FAILED",
  DISABLED_KMS_KEY: "DISABLED_KMS_KEY",
  ENI_ACCESS_DENIED: "ENI_ACCESS_DENIED",
  INVALID_KMS_KEY: "INVALID_KMS_KEY",
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
  KMS_OPT_IN_REQUIRED: "KMS_OPT_IN_REQUIRED",
  RETIRE_KMS_GRANT_FAILED: "RETIRE_KMS_GRANT_FAILED",
  SECURITY_GROUP_ACCESS_DENIED: "SECURITY_GROUP_ACCESS_DENIED",
  SECURITY_GROUP_NOT_FOUND: "SECURITY_GROUP_NOT_FOUND",
  SUBNET_ACCESS_DENIED: "SUBNET_ACCESS_DENIED",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  VPC_ENDPOINT_SERVICE_NAME_NOT_FOUND: "VPC_ENDPOINT_SERVICE_NAME_NOT_FOUND",
  VPC_INTERFACE_ENDPOINT_SERVICE_ACCESS_DENIED: "VPC_INTERFACE_ENDPOINT_SERVICE_ACCESS_DENIED",
} as const;
/**
 * @public
 */
export type DeliveryStreamFailureType = (typeof DeliveryStreamFailureType)[keyof typeof DeliveryStreamFailureType];

/**
 * @public
 * @enum
 */
export const SnapshotRequestedBy = {
  FIREHOSE: "FIREHOSE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type SnapshotRequestedBy = (typeof SnapshotRequestedBy)[keyof typeof SnapshotRequestedBy];

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * @enum
 */
export const DeliveryStreamEncryptionStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  DISABLING_FAILED: "DISABLING_FAILED",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  ENABLING_FAILED: "ENABLING_FAILED",
} as const;
/**
 * @public
 */
export type DeliveryStreamEncryptionStatus =
  (typeof DeliveryStreamEncryptionStatus)[keyof typeof DeliveryStreamEncryptionStatus];

/**
 * @public
 * @enum
 */
export const DeliveryStreamStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  CREATING_FAILED: "CREATING_FAILED",
  DELETING: "DELETING",
  DELETING_FAILED: "DELETING_FAILED",
} as const;
/**
 * @public
 */
export type DeliveryStreamStatus = (typeof DeliveryStreamStatus)[keyof typeof DeliveryStreamStatus];
