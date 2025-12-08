import {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationOutputCommand,
  AddApplicationReferenceDataSourceCommand,
  AddApplicationVpcConfigurationCommand,
  ApplicationMode,
  ApplicationRestoreType,
  ApplicationStatus,
  ArtifactType,
  CodeContentType,
  CodeValidationException,
  ConcurrentModificationException,
  ConfigurationType,
  CreateApplicationCommand,
  CreateApplicationPresignedUrlCommand,
  CreateApplicationSnapshotCommand,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationCommand,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationOutputCommand,
  DeleteApplicationReferenceDataSourceCommand,
  DeleteApplicationSnapshotCommand,
  DeleteApplicationVpcConfigurationCommand,
  DescribeApplicationCommand,
  DescribeApplicationOperationCommand,
  DescribeApplicationSnapshotCommand,
  DescribeApplicationVersionCommand,
  DiscoverInputSchemaCommand,
  InputStartingPosition,
  InvalidApplicationConfigurationException,
  InvalidArgumentException,
  InvalidRequestException,
  KeyType,
  KinesisAnalyticsV2,
  KinesisAnalyticsV2Client,
  KinesisAnalyticsV2ServiceException,
  LimitExceededException,
  ListApplicationOperationsCommand,
  ListApplicationSnapshotsCommand,
  ListApplicationVersionsCommand,
  ListApplicationsCommand,
  ListTagsForResourceCommand,
  LogLevel,
  MetricsLevel,
  OperationStatus,
  RecordFormatType,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceProvisionedThroughputExceededException,
  RollbackApplicationCommand,
  RuntimeEnvironment,
  ServiceUnavailableException,
  SnapshotStatus,
  StartApplicationCommand,
  StopApplicationCommand,
  TagResourceCommand,
  TooManyTagsException,
  UnableToDetectSchemaException,
  UnsupportedOperationException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateApplicationMaintenanceConfigurationCommand,
  UrlType,
  paginateListApplicationOperations,
  paginateListApplicationSnapshots,
  paginateListApplicationVersions,
  paginateListApplications,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisAnalyticsV2Client === "function");
assert(typeof KinesisAnalyticsV2 === "function");
// commands
assert(typeof AddApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof AddApplicationInputCommand === "function");
assert(typeof AddApplicationInputProcessingConfigurationCommand === "function");
assert(typeof AddApplicationOutputCommand === "function");
assert(typeof AddApplicationReferenceDataSourceCommand === "function");
assert(typeof AddApplicationVpcConfigurationCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplicationPresignedUrlCommand === "function");
assert(typeof CreateApplicationSnapshotCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof DeleteApplicationInputProcessingConfigurationCommand === "function");
assert(typeof DeleteApplicationOutputCommand === "function");
assert(typeof DeleteApplicationReferenceDataSourceCommand === "function");
assert(typeof DeleteApplicationSnapshotCommand === "function");
assert(typeof DeleteApplicationVpcConfigurationCommand === "function");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeApplicationOperationCommand === "function");
assert(typeof DescribeApplicationSnapshotCommand === "function");
assert(typeof DescribeApplicationVersionCommand === "function");
assert(typeof DiscoverInputSchemaCommand === "function");
assert(typeof ListApplicationOperationsCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplicationSnapshotsCommand === "function");
assert(typeof ListApplicationVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RollbackApplicationCommand === "function");
assert(typeof StartApplicationCommand === "function");
assert(typeof StopApplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplicationMaintenanceConfigurationCommand === "function");
// enums
assert(typeof ApplicationMode === "object");
assert(typeof ApplicationRestoreType === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof ArtifactType === "object");
assert(typeof CodeContentType === "object");
assert(typeof ConfigurationType === "object");
assert(typeof InputStartingPosition === "object");
assert(typeof KeyType === "object");
assert(typeof LogLevel === "object");
assert(typeof MetricsLevel === "object");
assert(typeof OperationStatus === "object");
assert(typeof RecordFormatType === "object");
assert(typeof RuntimeEnvironment === "object");
assert(typeof SnapshotStatus === "object");
assert(typeof UrlType === "object");
// errors
assert(CodeValidationException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(ConcurrentModificationException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(InvalidApplicationConfigurationException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(InvalidRequestException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(LimitExceededException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(ResourceInUseException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(ResourceProvisionedThroughputExceededException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(ServiceUnavailableException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(TooManyTagsException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(UnableToDetectSchemaException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(UnsupportedOperationException.prototype instanceof KinesisAnalyticsV2ServiceException);
assert(KinesisAnalyticsV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationOperations === "function");
assert(typeof paginateListApplicationSnapshots === "function");
assert(typeof paginateListApplicationVersions === "function");
assert(typeof paginateListApplications === "function");
console.log(`KinesisAnalyticsV2 index test passed.`);
