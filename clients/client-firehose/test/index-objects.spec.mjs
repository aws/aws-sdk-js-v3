import {
  AmazonOpenSearchServerlessS3BackupMode,
  AmazonopensearchserviceIndexRotationPeriod,
  AmazonopensearchserviceS3BackupMode,
  CompressionFormat,
  Connectivity,
  ContentEncoding,
  CreateDeliveryStreamCommand,
  DatabaseType,
  DefaultDocumentIdFormat,
  DeleteDeliveryStreamCommand,
  DeliveryStreamEncryptionStatus,
  DeliveryStreamFailureType,
  DeliveryStreamStatus,
  DeliveryStreamType,
  DescribeDeliveryStreamCommand,
  ElasticsearchIndexRotationPeriod,
  ElasticsearchS3BackupMode,
  Firehose,
  FirehoseClient,
  FirehoseServiceException,
  HECEndpointType,
  HttpEndpointS3BackupMode,
  IcebergS3BackupMode,
  KeyType,
  ListDeliveryStreamsCommand,
  ListTagsForDeliveryStreamCommand,
  NoEncryptionConfig,
  OrcCompression,
  OrcFormatVersion,
  ParquetCompression,
  ParquetWriterVersion,
  ProcessorParameterName,
  ProcessorType,
  PutRecordBatchCommand,
  PutRecordCommand,
  RedshiftS3BackupMode,
  S3BackupMode,
  SSLMode,
  SnapshotRequestedBy,
  SnapshotStatus,
  SnowflakeDataLoadingOption,
  SnowflakeS3BackupMode,
  SplunkS3BackupMode,
  StartDeliveryStreamEncryptionCommand,
  StopDeliveryStreamEncryptionCommand,
  TagDeliveryStreamCommand,
  UntagDeliveryStreamCommand,
  UpdateDestinationCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FirehoseClient === "function");
assert(typeof Firehose === "function");
// commands
assert(typeof CreateDeliveryStreamCommand === "function");
assert(typeof DeleteDeliveryStreamCommand === "function");
assert(typeof DescribeDeliveryStreamCommand === "function");
assert(typeof ListDeliveryStreamsCommand === "function");
assert(typeof ListTagsForDeliveryStreamCommand === "function");
assert(typeof PutRecordCommand === "function");
assert(typeof PutRecordBatchCommand === "function");
assert(typeof StartDeliveryStreamEncryptionCommand === "function");
assert(typeof StopDeliveryStreamEncryptionCommand === "function");
assert(typeof TagDeliveryStreamCommand === "function");
assert(typeof UntagDeliveryStreamCommand === "function");
assert(typeof UpdateDestinationCommand === "function");
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
assert(FirehoseServiceException.prototype instanceof Error);
console.log(`Firehose index test passed.`);
