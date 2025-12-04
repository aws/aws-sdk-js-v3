import {
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationOutputCommand,
  AddApplicationReferenceDataSourceCommand,
  ApplicationStatus,
  CreateApplicationCommand,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationCommand,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationOutputCommand,
  DeleteApplicationReferenceDataSourceCommand,
  DescribeApplicationCommand,
  DiscoverInputSchemaCommand,
  InputStartingPosition,
  KinesisAnalytics,
  KinesisAnalyticsClient,
  KinesisAnalyticsServiceException,
  ListApplicationsCommand,
  ListTagsForResourceCommand,
  RecordFormatType,
  StartApplicationCommand,
  StopApplicationCommand,
  TagResourceCommand,
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
assert(KinesisAnalyticsServiceException.prototype instanceof Error);
console.log(`KinesisAnalytics index test passed.`);
