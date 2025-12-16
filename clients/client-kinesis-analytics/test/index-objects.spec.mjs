import {
  AddApplicationCloudWatchLoggingOption$,
  AddApplicationCloudWatchLoggingOptionCommand,
  AddApplicationCloudWatchLoggingOptionRequest$,
  AddApplicationCloudWatchLoggingOptionResponse$,
  AddApplicationInput$,
  AddApplicationInputCommand,
  AddApplicationInputProcessingConfiguration$,
  AddApplicationInputProcessingConfigurationCommand,
  AddApplicationInputProcessingConfigurationRequest$,
  AddApplicationInputProcessingConfigurationResponse$,
  AddApplicationInputRequest$,
  AddApplicationInputResponse$,
  AddApplicationOutput$,
  AddApplicationOutputCommand,
  AddApplicationOutputRequest$,
  AddApplicationOutputResponse$,
  AddApplicationReferenceDataSource$,
  AddApplicationReferenceDataSourceCommand,
  AddApplicationReferenceDataSourceRequest$,
  AddApplicationReferenceDataSourceResponse$,
  ApplicationDetail$,
  ApplicationStatus,
  ApplicationSummary$,
  ApplicationUpdate$,
  CSVMappingParameters$,
  CloudWatchLoggingOption$,
  CloudWatchLoggingOptionDescription$,
  CloudWatchLoggingOptionUpdate$,
  CodeValidationException,
  CodeValidationException$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  DeleteApplication$,
  DeleteApplicationCloudWatchLoggingOption$,
  DeleteApplicationCloudWatchLoggingOptionCommand,
  DeleteApplicationCloudWatchLoggingOptionRequest$,
  DeleteApplicationCloudWatchLoggingOptionResponse$,
  DeleteApplicationCommand,
  DeleteApplicationInputProcessingConfiguration$,
  DeleteApplicationInputProcessingConfigurationCommand,
  DeleteApplicationInputProcessingConfigurationRequest$,
  DeleteApplicationInputProcessingConfigurationResponse$,
  DeleteApplicationOutput$,
  DeleteApplicationOutputCommand,
  DeleteApplicationOutputRequest$,
  DeleteApplicationOutputResponse$,
  DeleteApplicationReferenceDataSource$,
  DeleteApplicationReferenceDataSourceCommand,
  DeleteApplicationReferenceDataSourceRequest$,
  DeleteApplicationReferenceDataSourceResponse$,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DescribeApplication$,
  DescribeApplicationCommand,
  DescribeApplicationRequest$,
  DescribeApplicationResponse$,
  DestinationSchema$,
  DiscoverInputSchema$,
  DiscoverInputSchemaCommand,
  DiscoverInputSchemaRequest$,
  DiscoverInputSchemaResponse$,
  Input$,
  InputConfiguration$,
  InputDescription$,
  InputLambdaProcessor$,
  InputLambdaProcessorDescription$,
  InputLambdaProcessorUpdate$,
  InputParallelism$,
  InputParallelismUpdate$,
  InputProcessingConfiguration$,
  InputProcessingConfigurationDescription$,
  InputProcessingConfigurationUpdate$,
  InputSchemaUpdate$,
  InputStartingPosition,
  InputStartingPositionConfiguration$,
  InputUpdate$,
  InvalidApplicationConfigurationException,
  InvalidApplicationConfigurationException$,
  InvalidArgumentException,
  InvalidArgumentException$,
  JSONMappingParameters$,
  KinesisAnalytics,
  KinesisAnalyticsClient,
  KinesisAnalyticsServiceException,
  KinesisFirehoseInput$,
  KinesisFirehoseInputDescription$,
  KinesisFirehoseInputUpdate$,
  KinesisFirehoseOutput$,
  KinesisFirehoseOutputDescription$,
  KinesisFirehoseOutputUpdate$,
  KinesisStreamsInput$,
  KinesisStreamsInputDescription$,
  KinesisStreamsInputUpdate$,
  KinesisStreamsOutput$,
  KinesisStreamsOutputDescription$,
  KinesisStreamsOutputUpdate$,
  LambdaOutput$,
  LambdaOutputDescription$,
  LambdaOutputUpdate$,
  LimitExceededException,
  LimitExceededException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MappingParameters$,
  Output$,
  OutputDescription$,
  OutputUpdate$,
  RecordColumn$,
  RecordFormat$,
  RecordFormatType,
  ReferenceDataSource$,
  ReferenceDataSourceDescription$,
  ReferenceDataSourceUpdate$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceProvisionedThroughputExceededException,
  ResourceProvisionedThroughputExceededException$,
  S3Configuration$,
  S3ReferenceDataSource$,
  S3ReferenceDataSourceDescription$,
  S3ReferenceDataSourceUpdate$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SourceSchema$,
  StartApplication$,
  StartApplicationCommand,
  StartApplicationRequest$,
  StartApplicationResponse$,
  StopApplication$,
  StopApplicationCommand,
  StopApplicationRequest$,
  StopApplicationResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UnableToDetectSchemaException,
  UnableToDetectSchemaException$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisAnalyticsClient === "function");
assert(typeof KinesisAnalytics === "function");
// commands
assert(typeof AddApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof AddApplicationCloudWatchLoggingOption$ === "object");
assert(typeof AddApplicationInputCommand === "function");
assert(typeof AddApplicationInput$ === "object");
assert(typeof AddApplicationInputProcessingConfigurationCommand === "function");
assert(typeof AddApplicationInputProcessingConfiguration$ === "object");
assert(typeof AddApplicationOutputCommand === "function");
assert(typeof AddApplicationOutput$ === "object");
assert(typeof AddApplicationReferenceDataSourceCommand === "function");
assert(typeof AddApplicationReferenceDataSource$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteApplicationCloudWatchLoggingOptionCommand === "function");
assert(typeof DeleteApplicationCloudWatchLoggingOption$ === "object");
assert(typeof DeleteApplicationInputProcessingConfigurationCommand === "function");
assert(typeof DeleteApplicationInputProcessingConfiguration$ === "object");
assert(typeof DeleteApplicationOutputCommand === "function");
assert(typeof DeleteApplicationOutput$ === "object");
assert(typeof DeleteApplicationReferenceDataSourceCommand === "function");
assert(typeof DeleteApplicationReferenceDataSource$ === "object");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeApplication$ === "object");
assert(typeof DiscoverInputSchemaCommand === "function");
assert(typeof DiscoverInputSchema$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartApplication$ === "object");
assert(typeof StopApplicationCommand === "function");
assert(typeof StopApplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
// structural schemas
assert(typeof AddApplicationCloudWatchLoggingOptionRequest$ === "object");
assert(typeof AddApplicationCloudWatchLoggingOptionResponse$ === "object");
assert(typeof AddApplicationInputProcessingConfigurationRequest$ === "object");
assert(typeof AddApplicationInputProcessingConfigurationResponse$ === "object");
assert(typeof AddApplicationInputRequest$ === "object");
assert(typeof AddApplicationInputResponse$ === "object");
assert(typeof AddApplicationOutputRequest$ === "object");
assert(typeof AddApplicationOutputResponse$ === "object");
assert(typeof AddApplicationReferenceDataSourceRequest$ === "object");
assert(typeof AddApplicationReferenceDataSourceResponse$ === "object");
assert(typeof ApplicationDetail$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof ApplicationUpdate$ === "object");
assert(typeof CloudWatchLoggingOption$ === "object");
assert(typeof CloudWatchLoggingOptionDescription$ === "object");
assert(typeof CloudWatchLoggingOptionUpdate$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CSVMappingParameters$ === "object");
assert(typeof DeleteApplicationCloudWatchLoggingOptionRequest$ === "object");
assert(typeof DeleteApplicationCloudWatchLoggingOptionResponse$ === "object");
assert(typeof DeleteApplicationInputProcessingConfigurationRequest$ === "object");
assert(typeof DeleteApplicationInputProcessingConfigurationResponse$ === "object");
assert(typeof DeleteApplicationOutputRequest$ === "object");
assert(typeof DeleteApplicationOutputResponse$ === "object");
assert(typeof DeleteApplicationReferenceDataSourceRequest$ === "object");
assert(typeof DeleteApplicationReferenceDataSourceResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DescribeApplicationRequest$ === "object");
assert(typeof DescribeApplicationResponse$ === "object");
assert(typeof DestinationSchema$ === "object");
assert(typeof DiscoverInputSchemaRequest$ === "object");
assert(typeof DiscoverInputSchemaResponse$ === "object");
assert(typeof Input$ === "object");
assert(typeof InputConfiguration$ === "object");
assert(typeof InputDescription$ === "object");
assert(typeof InputLambdaProcessor$ === "object");
assert(typeof InputLambdaProcessorDescription$ === "object");
assert(typeof InputLambdaProcessorUpdate$ === "object");
assert(typeof InputParallelism$ === "object");
assert(typeof InputParallelismUpdate$ === "object");
assert(typeof InputProcessingConfiguration$ === "object");
assert(typeof InputProcessingConfigurationDescription$ === "object");
assert(typeof InputProcessingConfigurationUpdate$ === "object");
assert(typeof InputSchemaUpdate$ === "object");
assert(typeof InputStartingPositionConfiguration$ === "object");
assert(typeof InputUpdate$ === "object");
assert(typeof JSONMappingParameters$ === "object");
assert(typeof KinesisFirehoseInput$ === "object");
assert(typeof KinesisFirehoseInputDescription$ === "object");
assert(typeof KinesisFirehoseInputUpdate$ === "object");
assert(typeof KinesisFirehoseOutput$ === "object");
assert(typeof KinesisFirehoseOutputDescription$ === "object");
assert(typeof KinesisFirehoseOutputUpdate$ === "object");
assert(typeof KinesisStreamsInput$ === "object");
assert(typeof KinesisStreamsInputDescription$ === "object");
assert(typeof KinesisStreamsInputUpdate$ === "object");
assert(typeof KinesisStreamsOutput$ === "object");
assert(typeof KinesisStreamsOutputDescription$ === "object");
assert(typeof KinesisStreamsOutputUpdate$ === "object");
assert(typeof LambdaOutput$ === "object");
assert(typeof LambdaOutputDescription$ === "object");
assert(typeof LambdaOutputUpdate$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MappingParameters$ === "object");
assert(typeof Output$ === "object");
assert(typeof OutputDescription$ === "object");
assert(typeof OutputUpdate$ === "object");
assert(typeof RecordColumn$ === "object");
assert(typeof RecordFormat$ === "object");
assert(typeof ReferenceDataSource$ === "object");
assert(typeof ReferenceDataSourceDescription$ === "object");
assert(typeof ReferenceDataSourceUpdate$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3ReferenceDataSource$ === "object");
assert(typeof S3ReferenceDataSourceDescription$ === "object");
assert(typeof S3ReferenceDataSourceUpdate$ === "object");
assert(typeof SourceSchema$ === "object");
assert(typeof StartApplicationRequest$ === "object");
assert(typeof StartApplicationResponse$ === "object");
assert(typeof StopApplicationRequest$ === "object");
assert(typeof StopApplicationResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof InputStartingPosition === "object");
assert(typeof RecordFormatType === "object");
// errors
assert(CodeValidationException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof CodeValidationException$ === "object");
assert(ConcurrentModificationException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(InvalidApplicationConfigurationException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof InvalidApplicationConfigurationException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(LimitExceededException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceInUseException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceProvisionedThroughputExceededException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof ResourceProvisionedThroughputExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyTagsException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnableToDetectSchemaException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof UnableToDetectSchemaException$ === "object");
assert(UnsupportedOperationException.prototype instanceof KinesisAnalyticsServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(KinesisAnalyticsServiceException.prototype instanceof Error);
console.log(`KinesisAnalytics index test passed.`);
