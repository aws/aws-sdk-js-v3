import {
  BatchPutMessageCommand,
  CancelPipelineReprocessingCommand,
  ChannelStatus,
  ComputeType,
  CreateChannelCommand,
  CreateDatasetCommand,
  CreateDatasetContentCommand,
  CreateDatastoreCommand,
  CreatePipelineCommand,
  DatasetActionType,
  DatasetContentState,
  DatasetStatus,
  DatastoreStatus,
  DeleteChannelCommand,
  DeleteDatasetCommand,
  DeleteDatasetContentCommand,
  DeleteDatastoreCommand,
  DeletePipelineCommand,
  DescribeChannelCommand,
  DescribeDatasetCommand,
  DescribeDatastoreCommand,
  DescribeLoggingOptionsCommand,
  DescribePipelineCommand,
  FileFormatType,
  GetDatasetContentCommand,
  InternalFailureException,
  InvalidRequestException,
  IoTAnalytics,
  IoTAnalyticsClient,
  IoTAnalyticsServiceException,
  LimitExceededException,
  ListChannelsCommand,
  ListDatasetContentsCommand,
  ListDatasetsCommand,
  ListDatastoresCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  LoggingLevel,
  PutLoggingOptionsCommand,
  ReprocessingStatus,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RunPipelineActivityCommand,
  SampleChannelDataCommand,
  ServiceUnavailableException,
  StartPipelineReprocessingCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateDatasetCommand,
  UpdateDatastoreCommand,
  UpdatePipelineCommand,
  paginateListChannels,
  paginateListDatasetContents,
  paginateListDatasets,
  paginateListDatastores,
  paginateListPipelines,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTAnalyticsClient === "function");
assert(typeof IoTAnalytics === "function");
// commands
assert(typeof BatchPutMessageCommand === "function");
assert(typeof CancelPipelineReprocessingCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDatasetContentCommand === "function");
assert(typeof CreateDatastoreCommand === "function");
assert(typeof CreatePipelineCommand === "function");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDatasetContentCommand === "function");
assert(typeof DeleteDatastoreCommand === "function");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDatastoreCommand === "function");
assert(typeof DescribeLoggingOptionsCommand === "function");
assert(typeof DescribePipelineCommand === "function");
assert(typeof GetDatasetContentCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListDatasetContentsCommand === "function");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatastoresCommand === "function");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof RunPipelineActivityCommand === "function");
assert(typeof SampleChannelDataCommand === "function");
assert(typeof StartPipelineReprocessingCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDatastoreCommand === "function");
assert(typeof UpdatePipelineCommand === "function");
// enums
assert(typeof ChannelStatus === "object");
assert(typeof ComputeType === "object");
assert(typeof DatasetActionType === "object");
assert(typeof DatasetContentState === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DatastoreStatus === "object");
assert(typeof FileFormatType === "object");
assert(typeof LoggingLevel === "object");
assert(typeof ReprocessingStatus === "object");
// errors
assert(InternalFailureException.prototype instanceof IoTAnalyticsServiceException);
assert(InvalidRequestException.prototype instanceof IoTAnalyticsServiceException);
assert(LimitExceededException.prototype instanceof IoTAnalyticsServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof IoTAnalyticsServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTAnalyticsServiceException);
assert(ServiceUnavailableException.prototype instanceof IoTAnalyticsServiceException);
assert(ThrottlingException.prototype instanceof IoTAnalyticsServiceException);
assert(IoTAnalyticsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListDatasetContents === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListDatastores === "function");
assert(typeof paginateListPipelines === "function");
console.log(`IoTAnalytics index test passed.`);
