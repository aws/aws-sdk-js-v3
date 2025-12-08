import {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationOutputCommand,
  AddApplicationReferenceDataSourceCommand,
  ApplicationStatus,
  CodeValidationException,
  ConcurrentModificationException,
  CreateApplicationCommand,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationCommand,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationOutputCommand,
  DeleteApplicationReferenceDataSourceCommand,
  DescribeApplicationCommand,
  DiscoverInputSchemaCommand,
  InputStartingPosition,
  InvalidApplicationConfigurationException,
  InvalidArgumentException,
  KinesisAnalytics,
  KinesisAnalyticsClient,
  KinesisAnalyticsServiceException,
  LimitExceededException,
  ListApplicationsCommand,
  ListTagsForResourceCommand,
  RecordFormatType,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceProvisionedThroughputExceededException,
  ServiceUnavailableException,
  StartApplicationCommand,
  StopApplicationCommand,
  TagResourceCommand,
  TooManyTagsException,
  UnableToDetectSchemaException,
  UnsupportedOperationException,
  UntagResourceCommand,
  UpdateApplicationCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisAnalyticsClient === "function");
assert(typeof KinesisAnalytics === "function");
// commands
assert(typeof AddApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof AddApplicationInputCommand === "function");
assert(typeof AddApplicationInputProcessingConfigurationCommand === "function");
assert(typeof AddApplicationOutputCommand === "function");
assert(typeof AddApplicationReferenceDataSourceCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof DeleteApplicationInputProcessingConfigurationCommand === "function");
assert(typeof DeleteApplicationOutputCommand === "function");
assert(typeof DeleteApplicationReferenceDataSourceCommand === "function");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DiscoverInputSchemaCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartApplicationCommand === "function");
assert(typeof StopApplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof InputStartingPosition === "object");
assert(typeof RecordFormatType === "object");
// errors
assert(CodeValidationException.prototype instanceof KinesisAnalyticsServiceException);
assert(ConcurrentModificationException.prototype instanceof KinesisAnalyticsServiceException);
assert(InvalidApplicationConfigurationException.prototype instanceof KinesisAnalyticsServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisAnalyticsServiceException);
assert(LimitExceededException.prototype instanceof KinesisAnalyticsServiceException);
assert(ResourceInUseException.prototype instanceof KinesisAnalyticsServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisAnalyticsServiceException);
assert(ResourceProvisionedThroughputExceededException.prototype instanceof KinesisAnalyticsServiceException);
assert(ServiceUnavailableException.prototype instanceof KinesisAnalyticsServiceException);
assert(TooManyTagsException.prototype instanceof KinesisAnalyticsServiceException);
assert(UnableToDetectSchemaException.prototype instanceof KinesisAnalyticsServiceException);
assert(UnsupportedOperationException.prototype instanceof KinesisAnalyticsServiceException);
assert(KinesisAnalyticsServiceException.prototype instanceof Error);
console.log(`KinesisAnalytics index test passed.`);
