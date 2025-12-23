import {
  _Record$,
  AmazonOpenSearchServerlessBufferingHints$,
  AmazonOpenSearchServerlessDestinationConfiguration$,
  AmazonOpenSearchServerlessDestinationDescription$,
  AmazonOpenSearchServerlessDestinationUpdate$,
  AmazonOpenSearchServerlessRetryOptions$,
  AmazonOpenSearchServerlessS3BackupMode,
  AmazonopensearchserviceBufferingHints$,
  AmazonopensearchserviceDestinationConfiguration$,
  AmazonopensearchserviceDestinationDescription$,
  AmazonopensearchserviceDestinationUpdate$,
  AmazonopensearchserviceIndexRotationPeriod,
  AmazonopensearchserviceRetryOptions$,
  AmazonopensearchserviceS3BackupMode,
  AuthenticationConfiguration$,
  BufferingHints$,
  CatalogConfiguration$,
  CloudWatchLoggingOptions$,
  CompressionFormat,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Connectivity,
  ContentEncoding,
  CopyCommand$,
  CreateDeliveryStream$,
  CreateDeliveryStreamCommand,
  CreateDeliveryStreamInput$,
  CreateDeliveryStreamOutput$,
  DatabaseColumnList$,
  DatabaseList$,
  DatabaseSnapshotInfo$,
  DatabaseSourceAuthenticationConfiguration$,
  DatabaseSourceConfiguration$,
  DatabaseSourceDescription$,
  DatabaseSourceVPCConfiguration$,
  DatabaseTableList$,
  DatabaseType,
  DataFormatConversionConfiguration$,
  DefaultDocumentIdFormat,
  DeleteDeliveryStream$,
  DeleteDeliveryStreamCommand,
  DeleteDeliveryStreamInput$,
  DeleteDeliveryStreamOutput$,
  DeliveryStreamDescription$,
  DeliveryStreamEncryptionConfiguration$,
  DeliveryStreamEncryptionConfigurationInput$,
  DeliveryStreamEncryptionStatus,
  DeliveryStreamFailureType,
  DeliveryStreamStatus,
  DeliveryStreamType,
  DescribeDeliveryStream$,
  DescribeDeliveryStreamCommand,
  DescribeDeliveryStreamInput$,
  DescribeDeliveryStreamOutput$,
  Deserializer$,
  DestinationDescription$,
  DestinationTableConfiguration$,
  DirectPutSourceConfiguration$,
  DirectPutSourceDescription$,
  DocumentIdOptions$,
  DynamicPartitioningConfiguration$,
  ElasticsearchBufferingHints$,
  ElasticsearchDestinationConfiguration$,
  ElasticsearchDestinationDescription$,
  ElasticsearchDestinationUpdate$,
  ElasticsearchIndexRotationPeriod,
  ElasticsearchRetryOptions$,
  ElasticsearchS3BackupMode,
  EncryptionConfiguration$,
  ExtendedS3DestinationConfiguration$,
  ExtendedS3DestinationDescription$,
  ExtendedS3DestinationUpdate$,
  FailureDescription$,
  Firehose,
  FirehoseClient,
  FirehoseServiceException,
  HECEndpointType,
  HiveJsonSerDe$,
  HttpEndpointBufferingHints$,
  HttpEndpointCommonAttribute$,
  HttpEndpointConfiguration$,
  HttpEndpointDescription$,
  HttpEndpointDestinationConfiguration$,
  HttpEndpointDestinationDescription$,
  HttpEndpointDestinationUpdate$,
  HttpEndpointRequestConfiguration$,
  HttpEndpointRetryOptions$,
  HttpEndpointS3BackupMode,
  IcebergDestinationConfiguration$,
  IcebergDestinationDescription$,
  IcebergDestinationUpdate$,
  IcebergS3BackupMode,
  InputFormatConfiguration$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidKMSResourceException,
  InvalidKMSResourceException$,
  InvalidSourceException,
  InvalidSourceException$,
  KeyType,
  KinesisStreamSourceConfiguration$,
  KinesisStreamSourceDescription$,
  KMSEncryptionConfig$,
  LimitExceededException,
  LimitExceededException$,
  ListDeliveryStreams$,
  ListDeliveryStreamsCommand,
  ListDeliveryStreamsInput$,
  ListDeliveryStreamsOutput$,
  ListTagsForDeliveryStream$,
  ListTagsForDeliveryStreamCommand,
  ListTagsForDeliveryStreamInput$,
  ListTagsForDeliveryStreamOutput$,
  MSKSourceConfiguration$,
  MSKSourceDescription$,
  NoEncryptionConfig,
  OpenXJsonSerDe$,
  OrcCompression,
  OrcFormatVersion,
  OrcSerDe$,
  OutputFormatConfiguration$,
  ParquetCompression,
  ParquetSerDe$,
  ParquetWriterVersion,
  PartitionField$,
  PartitionSpec$,
  ProcessingConfiguration$,
  Processor$,
  ProcessorParameter$,
  ProcessorParameterName,
  ProcessorType,
  PutRecord$,
  PutRecordBatch$,
  PutRecordBatchCommand,
  PutRecordBatchInput$,
  PutRecordBatchOutput$,
  PutRecordBatchResponseEntry$,
  PutRecordCommand,
  PutRecordInput$,
  PutRecordOutput$,
  RedshiftDestinationConfiguration$,
  RedshiftDestinationDescription$,
  RedshiftDestinationUpdate$,
  RedshiftRetryOptions$,
  RedshiftS3BackupMode,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryOptions$,
  S3BackupMode,
  S3DestinationConfiguration$,
  S3DestinationDescription$,
  S3DestinationUpdate$,
  SchemaConfiguration$,
  SchemaEvolutionConfiguration$,
  SecretsManagerConfiguration$,
  Serializer$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SnapshotRequestedBy,
  SnapshotStatus,
  SnowflakeBufferingHints$,
  SnowflakeDataLoadingOption,
  SnowflakeDestinationConfiguration$,
  SnowflakeDestinationDescription$,
  SnowflakeDestinationUpdate$,
  SnowflakeRetryOptions$,
  SnowflakeRoleConfiguration$,
  SnowflakeS3BackupMode,
  SnowflakeVpcConfiguration$,
  SourceDescription$,
  SplunkBufferingHints$,
  SplunkDestinationConfiguration$,
  SplunkDestinationDescription$,
  SplunkDestinationUpdate$,
  SplunkRetryOptions$,
  SplunkS3BackupMode,
  SSLMode,
  StartDeliveryStreamEncryption$,
  StartDeliveryStreamEncryptionCommand,
  StartDeliveryStreamEncryptionInput$,
  StartDeliveryStreamEncryptionOutput$,
  StopDeliveryStreamEncryption$,
  StopDeliveryStreamEncryptionCommand,
  StopDeliveryStreamEncryptionInput$,
  StopDeliveryStreamEncryptionOutput$,
  TableCreationConfiguration$,
  Tag$,
  TagDeliveryStream$,
  TagDeliveryStreamCommand,
  TagDeliveryStreamInput$,
  TagDeliveryStreamOutput$,
  UntagDeliveryStream$,
  UntagDeliveryStreamCommand,
  UntagDeliveryStreamInput$,
  UntagDeliveryStreamOutput$,
  UpdateDestination$,
  UpdateDestinationCommand,
  UpdateDestinationInput$,
  UpdateDestinationOutput$,
  VpcConfiguration$,
  VpcConfigurationDescription$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FirehoseClient === "function");
assert(typeof Firehose === "function");
// commands
assert(typeof CreateDeliveryStreamCommand === "function");
assert(typeof CreateDeliveryStream$ === "object");
assert(typeof DeleteDeliveryStreamCommand === "function");
assert(typeof DeleteDeliveryStream$ === "object");
assert(typeof DescribeDeliveryStreamCommand === "function");
assert(typeof DescribeDeliveryStream$ === "object");
assert(typeof ListDeliveryStreamsCommand === "function");
assert(typeof ListDeliveryStreams$ === "object");
assert(typeof ListTagsForDeliveryStreamCommand === "function");
assert(typeof ListTagsForDeliveryStream$ === "object");
assert(typeof PutRecordCommand === "function");
assert(typeof PutRecord$ === "object");
assert(typeof PutRecordBatchCommand === "function");
assert(typeof PutRecordBatch$ === "object");
assert(typeof StartDeliveryStreamEncryptionCommand === "function");
assert(typeof StartDeliveryStreamEncryption$ === "object");
assert(typeof StopDeliveryStreamEncryptionCommand === "function");
assert(typeof StopDeliveryStreamEncryption$ === "object");
assert(typeof TagDeliveryStreamCommand === "function");
assert(typeof TagDeliveryStream$ === "object");
assert(typeof UntagDeliveryStreamCommand === "function");
assert(typeof UntagDeliveryStream$ === "object");
assert(typeof UpdateDestinationCommand === "function");
assert(typeof UpdateDestination$ === "object");
// structural schemas
assert(typeof AmazonOpenSearchServerlessBufferingHints$ === "object");
assert(typeof AmazonOpenSearchServerlessDestinationConfiguration$ === "object");
assert(typeof AmazonOpenSearchServerlessDestinationDescription$ === "object");
assert(typeof AmazonOpenSearchServerlessDestinationUpdate$ === "object");
assert(typeof AmazonOpenSearchServerlessRetryOptions$ === "object");
assert(typeof AmazonopensearchserviceBufferingHints$ === "object");
assert(typeof AmazonopensearchserviceDestinationConfiguration$ === "object");
assert(typeof AmazonopensearchserviceDestinationDescription$ === "object");
assert(typeof AmazonopensearchserviceDestinationUpdate$ === "object");
assert(typeof AmazonopensearchserviceRetryOptions$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof BufferingHints$ === "object");
assert(typeof CatalogConfiguration$ === "object");
assert(typeof CloudWatchLoggingOptions$ === "object");
assert(typeof CopyCommand$ === "object");
assert(typeof CreateDeliveryStreamInput$ === "object");
assert(typeof CreateDeliveryStreamOutput$ === "object");
assert(typeof DatabaseColumnList$ === "object");
assert(typeof DatabaseList$ === "object");
assert(typeof DatabaseSnapshotInfo$ === "object");
assert(typeof DatabaseSourceAuthenticationConfiguration$ === "object");
assert(typeof DatabaseSourceConfiguration$ === "object");
assert(typeof DatabaseSourceDescription$ === "object");
assert(typeof DatabaseSourceVPCConfiguration$ === "object");
assert(typeof DatabaseTableList$ === "object");
assert(typeof DataFormatConversionConfiguration$ === "object");
assert(typeof DeleteDeliveryStreamInput$ === "object");
assert(typeof DeleteDeliveryStreamOutput$ === "object");
assert(typeof DeliveryStreamDescription$ === "object");
assert(typeof DeliveryStreamEncryptionConfiguration$ === "object");
assert(typeof DeliveryStreamEncryptionConfigurationInput$ === "object");
assert(typeof DescribeDeliveryStreamInput$ === "object");
assert(typeof DescribeDeliveryStreamOutput$ === "object");
assert(typeof Deserializer$ === "object");
assert(typeof DestinationDescription$ === "object");
assert(typeof DestinationTableConfiguration$ === "object");
assert(typeof DirectPutSourceConfiguration$ === "object");
assert(typeof DirectPutSourceDescription$ === "object");
assert(typeof DocumentIdOptions$ === "object");
assert(typeof DynamicPartitioningConfiguration$ === "object");
assert(typeof ElasticsearchBufferingHints$ === "object");
assert(typeof ElasticsearchDestinationConfiguration$ === "object");
assert(typeof ElasticsearchDestinationDescription$ === "object");
assert(typeof ElasticsearchDestinationUpdate$ === "object");
assert(typeof ElasticsearchRetryOptions$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof ExtendedS3DestinationConfiguration$ === "object");
assert(typeof ExtendedS3DestinationDescription$ === "object");
assert(typeof ExtendedS3DestinationUpdate$ === "object");
assert(typeof FailureDescription$ === "object");
assert(typeof HiveJsonSerDe$ === "object");
assert(typeof HttpEndpointBufferingHints$ === "object");
assert(typeof HttpEndpointCommonAttribute$ === "object");
assert(typeof HttpEndpointConfiguration$ === "object");
assert(typeof HttpEndpointDescription$ === "object");
assert(typeof HttpEndpointDestinationConfiguration$ === "object");
assert(typeof HttpEndpointDestinationDescription$ === "object");
assert(typeof HttpEndpointDestinationUpdate$ === "object");
assert(typeof HttpEndpointRequestConfiguration$ === "object");
assert(typeof HttpEndpointRetryOptions$ === "object");
assert(typeof IcebergDestinationConfiguration$ === "object");
assert(typeof IcebergDestinationDescription$ === "object");
assert(typeof IcebergDestinationUpdate$ === "object");
assert(typeof InputFormatConfiguration$ === "object");
assert(typeof KinesisStreamSourceConfiguration$ === "object");
assert(typeof KinesisStreamSourceDescription$ === "object");
assert(typeof KMSEncryptionConfig$ === "object");
assert(typeof ListDeliveryStreamsInput$ === "object");
assert(typeof ListDeliveryStreamsOutput$ === "object");
assert(typeof ListTagsForDeliveryStreamInput$ === "object");
assert(typeof ListTagsForDeliveryStreamOutput$ === "object");
assert(typeof MSKSourceConfiguration$ === "object");
assert(typeof MSKSourceDescription$ === "object");
assert(typeof OpenXJsonSerDe$ === "object");
assert(typeof OrcSerDe$ === "object");
assert(typeof OutputFormatConfiguration$ === "object");
assert(typeof ParquetSerDe$ === "object");
assert(typeof PartitionField$ === "object");
assert(typeof PartitionSpec$ === "object");
assert(typeof ProcessingConfiguration$ === "object");
assert(typeof Processor$ === "object");
assert(typeof ProcessorParameter$ === "object");
assert(typeof PutRecordBatchInput$ === "object");
assert(typeof PutRecordBatchOutput$ === "object");
assert(typeof PutRecordBatchResponseEntry$ === "object");
assert(typeof PutRecordInput$ === "object");
assert(typeof PutRecordOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RedshiftDestinationConfiguration$ === "object");
assert(typeof RedshiftDestinationDescription$ === "object");
assert(typeof RedshiftDestinationUpdate$ === "object");
assert(typeof RedshiftRetryOptions$ === "object");
assert(typeof RetryOptions$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof S3DestinationDescription$ === "object");
assert(typeof S3DestinationUpdate$ === "object");
assert(typeof SchemaConfiguration$ === "object");
assert(typeof SchemaEvolutionConfiguration$ === "object");
assert(typeof SecretsManagerConfiguration$ === "object");
assert(typeof Serializer$ === "object");
assert(typeof SnowflakeBufferingHints$ === "object");
assert(typeof SnowflakeDestinationConfiguration$ === "object");
assert(typeof SnowflakeDestinationDescription$ === "object");
assert(typeof SnowflakeDestinationUpdate$ === "object");
assert(typeof SnowflakeRetryOptions$ === "object");
assert(typeof SnowflakeRoleConfiguration$ === "object");
assert(typeof SnowflakeVpcConfiguration$ === "object");
assert(typeof SourceDescription$ === "object");
assert(typeof SplunkBufferingHints$ === "object");
assert(typeof SplunkDestinationConfiguration$ === "object");
assert(typeof SplunkDestinationDescription$ === "object");
assert(typeof SplunkDestinationUpdate$ === "object");
assert(typeof SplunkRetryOptions$ === "object");
assert(typeof StartDeliveryStreamEncryptionInput$ === "object");
assert(typeof StartDeliveryStreamEncryptionOutput$ === "object");
assert(typeof StopDeliveryStreamEncryptionInput$ === "object");
assert(typeof StopDeliveryStreamEncryptionOutput$ === "object");
assert(typeof TableCreationConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagDeliveryStreamInput$ === "object");
assert(typeof TagDeliveryStreamOutput$ === "object");
assert(typeof UntagDeliveryStreamInput$ === "object");
assert(typeof UntagDeliveryStreamOutput$ === "object");
assert(typeof UpdateDestinationInput$ === "object");
assert(typeof UpdateDestinationOutput$ === "object");
assert(typeof VpcConfiguration$ === "object");
assert(typeof VpcConfigurationDescription$ === "object");
// enums
assert(typeof AmazonOpenSearchServerlessS3BackupMode === "object");
assert(typeof AmazonopensearchserviceIndexRotationPeriod === "object");
assert(typeof AmazonopensearchserviceS3BackupMode === "object");
assert(typeof CompressionFormat === "object");
assert(typeof Connectivity === "object");
assert(typeof ContentEncoding === "object");
assert(typeof DatabaseType === "object");
assert(typeof DefaultDocumentIdFormat === "object");
assert(typeof DeliveryStreamEncryptionStatus === "object");
assert(typeof DeliveryStreamFailureType === "object");
assert(typeof DeliveryStreamStatus === "object");
assert(typeof DeliveryStreamType === "object");
assert(typeof ElasticsearchIndexRotationPeriod === "object");
assert(typeof ElasticsearchS3BackupMode === "object");
assert(typeof HECEndpointType === "object");
assert(typeof HttpEndpointS3BackupMode === "object");
assert(typeof IcebergS3BackupMode === "object");
assert(typeof KeyType === "object");
assert(typeof NoEncryptionConfig === "object");
assert(typeof OrcCompression === "object");
assert(typeof OrcFormatVersion === "object");
assert(typeof ParquetCompression === "object");
assert(typeof ParquetWriterVersion === "object");
assert(typeof ProcessorParameterName === "object");
assert(typeof ProcessorType === "object");
assert(typeof RedshiftS3BackupMode === "object");
assert(typeof S3BackupMode === "object");
assert(typeof SnapshotRequestedBy === "object");
assert(typeof SnapshotStatus === "object");
assert(typeof SnowflakeDataLoadingOption === "object");
assert(typeof SnowflakeS3BackupMode === "object");
assert(typeof SplunkS3BackupMode === "object");
assert(typeof SSLMode === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof FirehoseServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(InvalidArgumentException.prototype instanceof FirehoseServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidKMSResourceException.prototype instanceof FirehoseServiceException);
assert(typeof InvalidKMSResourceException$ === "object");
assert(InvalidSourceException.prototype instanceof FirehoseServiceException);
assert(typeof InvalidSourceException$ === "object");
assert(LimitExceededException.prototype instanceof FirehoseServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceInUseException.prototype instanceof FirehoseServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FirehoseServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof FirehoseServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(FirehoseServiceException.prototype instanceof Error);
console.log(`Firehose index test passed.`);
