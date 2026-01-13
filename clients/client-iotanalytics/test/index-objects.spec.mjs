import {
  AddAttributesActivity$,
  BatchPutMessage$,
  BatchPutMessageCommand,
  BatchPutMessageErrorEntry$,
  BatchPutMessageRequest$,
  BatchPutMessageResponse$,
  CancelPipelineReprocessing$,
  CancelPipelineReprocessingCommand,
  CancelPipelineReprocessingRequest$,
  CancelPipelineReprocessingResponse$,
  Channel$,
  ChannelActivity$,
  ChannelMessages$,
  ChannelStatistics$,
  ChannelStatus,
  ChannelStorage$,
  ChannelStorageSummary$,
  ChannelSummary$,
  Column$,
  ComputeType,
  ContainerDatasetAction$,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetContent$,
  CreateDatasetContentCommand,
  CreateDatasetContentRequest$,
  CreateDatasetContentResponse$,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateDatastore$,
  CreateDatastoreCommand,
  CreateDatastoreRequest$,
  CreateDatastoreResponse$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineRequest$,
  CreatePipelineResponse$,
  CustomerManagedChannelS3Storage$,
  CustomerManagedChannelS3StorageSummary$,
  CustomerManagedDatastoreS3Storage$,
  CustomerManagedDatastoreS3StorageSummary$,
  Dataset$,
  DatasetAction$,
  DatasetActionSummary$,
  DatasetActionType,
  DatasetContentDeliveryDestination$,
  DatasetContentDeliveryRule$,
  DatasetContentState,
  DatasetContentStatus$,
  DatasetContentSummary$,
  DatasetContentVersionValue$,
  DatasetEntry$,
  DatasetStatus,
  DatasetSummary$,
  DatasetTrigger$,
  Datastore$,
  DatastoreActivity$,
  DatastoreIotSiteWiseMultiLayerStorage$,
  DatastoreIotSiteWiseMultiLayerStorageSummary$,
  DatastorePartition$,
  DatastorePartitions$,
  DatastoreStatistics$,
  DatastoreStatus,
  DatastoreStorage$,
  DatastoreStorageSummary$,
  DatastoreSummary$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelRequest$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetContent$,
  DeleteDatasetContentCommand,
  DeleteDatasetContentRequest$,
  DeleteDatasetRequest$,
  DeleteDatastore$,
  DeleteDatastoreCommand,
  DeleteDatastoreRequest$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineRequest$,
  DeltaTime$,
  DeltaTimeSessionWindowConfiguration$,
  DescribeChannel$,
  DescribeChannelCommand,
  DescribeChannelRequest$,
  DescribeChannelResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeDatastore$,
  DescribeDatastoreCommand,
  DescribeDatastoreRequest$,
  DescribeDatastoreResponse$,
  DescribeLoggingOptions$,
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsRequest$,
  DescribeLoggingOptionsResponse$,
  DescribePipeline$,
  DescribePipelineCommand,
  DescribePipelineRequest$,
  DescribePipelineResponse$,
  DeviceRegistryEnrichActivity$,
  DeviceShadowEnrichActivity$,
  EstimatedResourceSize$,
  FileFormatConfiguration$,
  FileFormatType,
  FilterActivity$,
  GetDatasetContent$,
  GetDatasetContentCommand,
  GetDatasetContentRequest$,
  GetDatasetContentResponse$,
  GlueConfiguration$,
  InternalFailureException,
  InternalFailureException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTAnalytics,
  IoTAnalyticsClient,
  IoTAnalyticsServiceException,
  IotEventsDestinationConfiguration$,
  IotSiteWiseCustomerManagedDatastoreS3Storage$,
  IotSiteWiseCustomerManagedDatastoreS3StorageSummary$,
  JsonConfiguration$,
  LambdaActivity$,
  LateDataRule$,
  LateDataRuleConfiguration$,
  LimitExceededException,
  LimitExceededException$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListDatasetContents$,
  ListDatasetContentsCommand,
  ListDatasetContentsRequest$,
  ListDatasetContentsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListDatastores$,
  ListDatastoresCommand,
  ListDatastoresRequest$,
  ListDatastoresResponse$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesRequest$,
  ListPipelinesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoggingLevel,
  LoggingOptions$,
  MathActivity$,
  Message$,
  OutputFileUriValue$,
  paginateListChannels,
  paginateListDatasetContents,
  paginateListDatasets,
  paginateListDatastores,
  paginateListPipelines,
  ParquetConfiguration$,
  Partition$,
  Pipeline$,
  PipelineActivity$,
  PipelineSummary$,
  PutLoggingOptions$,
  PutLoggingOptionsCommand,
  PutLoggingOptionsRequest$,
  QueryFilter$,
  RemoveAttributesActivity$,
  ReprocessingStatus,
  ReprocessingSummary$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetentionPeriod$,
  RunPipelineActivity$,
  RunPipelineActivityCommand,
  RunPipelineActivityRequest$,
  RunPipelineActivityResponse$,
  S3DestinationConfiguration$,
  SampleChannelData$,
  SampleChannelDataCommand,
  SampleChannelDataRequest$,
  SampleChannelDataResponse$,
  Schedule$,
  SchemaDefinition$,
  SelectAttributesActivity$,
  ServiceManagedChannelS3Storage$,
  ServiceManagedChannelS3StorageSummary$,
  ServiceManagedDatastoreS3Storage$,
  ServiceManagedDatastoreS3StorageSummary$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SqlQueryDatasetAction$,
  StartPipelineReprocessing$,
  StartPipelineReprocessingCommand,
  StartPipelineReprocessingRequest$,
  StartPipelineReprocessingResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimestampPartition$,
  TriggeringDataset$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelRequest$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetRequest$,
  UpdateDatastore$,
  UpdateDatastoreCommand,
  UpdateDatastoreRequest$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineRequest$,
  Variable$,
  VersioningConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTAnalyticsClient === "function");
assert(typeof IoTAnalytics === "function");
// commands
assert(typeof BatchPutMessageCommand === "function");
assert(typeof BatchPutMessage$ === "object");
assert(typeof CancelPipelineReprocessingCommand === "function");
assert(typeof CancelPipelineReprocessing$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDatasetContentCommand === "function");
assert(typeof CreateDatasetContent$ === "object");
assert(typeof CreateDatastoreCommand === "function");
assert(typeof CreateDatastore$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteDatasetContentCommand === "function");
assert(typeof DeleteDatasetContent$ === "object");
assert(typeof DeleteDatastoreCommand === "function");
assert(typeof DeleteDatastore$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeDatastoreCommand === "function");
assert(typeof DescribeDatastore$ === "object");
assert(typeof DescribeLoggingOptionsCommand === "function");
assert(typeof DescribeLoggingOptions$ === "object");
assert(typeof DescribePipelineCommand === "function");
assert(typeof DescribePipeline$ === "object");
assert(typeof GetDatasetContentCommand === "function");
assert(typeof GetDatasetContent$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListDatasetContentsCommand === "function");
assert(typeof ListDatasetContents$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListDatastoresCommand === "function");
assert(typeof ListDatastores$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof PutLoggingOptions$ === "object");
assert(typeof RunPipelineActivityCommand === "function");
assert(typeof RunPipelineActivity$ === "object");
assert(typeof SampleChannelDataCommand === "function");
assert(typeof SampleChannelData$ === "object");
assert(typeof StartPipelineReprocessingCommand === "function");
assert(typeof StartPipelineReprocessing$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdateDatastoreCommand === "function");
assert(typeof UpdateDatastore$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
// structural schemas
assert(typeof AddAttributesActivity$ === "object");
assert(typeof BatchPutMessageErrorEntry$ === "object");
assert(typeof BatchPutMessageRequest$ === "object");
assert(typeof BatchPutMessageResponse$ === "object");
assert(typeof CancelPipelineReprocessingRequest$ === "object");
assert(typeof CancelPipelineReprocessingResponse$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ChannelActivity$ === "object");
assert(typeof ChannelMessages$ === "object");
assert(typeof ChannelStatistics$ === "object");
assert(typeof ChannelStorage$ === "object");
assert(typeof ChannelStorageSummary$ === "object");
assert(typeof ChannelSummary$ === "object");
assert(typeof Column$ === "object");
assert(typeof ContainerDatasetAction$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateDatasetContentRequest$ === "object");
assert(typeof CreateDatasetContentResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateDatastoreRequest$ === "object");
assert(typeof CreateDatastoreResponse$ === "object");
assert(typeof CreatePipelineRequest$ === "object");
assert(typeof CreatePipelineResponse$ === "object");
assert(typeof CustomerManagedChannelS3Storage$ === "object");
assert(typeof CustomerManagedChannelS3StorageSummary$ === "object");
assert(typeof CustomerManagedDatastoreS3Storage$ === "object");
assert(typeof CustomerManagedDatastoreS3StorageSummary$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DatasetAction$ === "object");
assert(typeof DatasetActionSummary$ === "object");
assert(typeof DatasetContentDeliveryDestination$ === "object");
assert(typeof DatasetContentDeliveryRule$ === "object");
assert(typeof DatasetContentStatus$ === "object");
assert(typeof DatasetContentSummary$ === "object");
assert(typeof DatasetContentVersionValue$ === "object");
assert(typeof DatasetEntry$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DatasetTrigger$ === "object");
assert(typeof Datastore$ === "object");
assert(typeof DatastoreActivity$ === "object");
assert(typeof DatastoreIotSiteWiseMultiLayerStorage$ === "object");
assert(typeof DatastoreIotSiteWiseMultiLayerStorageSummary$ === "object");
assert(typeof DatastorePartition$ === "object");
assert(typeof DatastorePartitions$ === "object");
assert(typeof DatastoreStatistics$ === "object");
assert(typeof DatastoreStorage$ === "object");
assert(typeof DatastoreStorageSummary$ === "object");
assert(typeof DatastoreSummary$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteDatasetContentRequest$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatastoreRequest$ === "object");
assert(typeof DeletePipelineRequest$ === "object");
assert(typeof DeltaTime$ === "object");
assert(typeof DeltaTimeSessionWindowConfiguration$ === "object");
assert(typeof DescribeChannelRequest$ === "object");
assert(typeof DescribeChannelResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeDatastoreRequest$ === "object");
assert(typeof DescribeDatastoreResponse$ === "object");
assert(typeof DescribeLoggingOptionsRequest$ === "object");
assert(typeof DescribeLoggingOptionsResponse$ === "object");
assert(typeof DescribePipelineRequest$ === "object");
assert(typeof DescribePipelineResponse$ === "object");
assert(typeof DeviceRegistryEnrichActivity$ === "object");
assert(typeof DeviceShadowEnrichActivity$ === "object");
assert(typeof EstimatedResourceSize$ === "object");
assert(typeof FileFormatConfiguration$ === "object");
assert(typeof FilterActivity$ === "object");
assert(typeof GetDatasetContentRequest$ === "object");
assert(typeof GetDatasetContentResponse$ === "object");
assert(typeof GlueConfiguration$ === "object");
assert(typeof IotEventsDestinationConfiguration$ === "object");
assert(typeof IotSiteWiseCustomerManagedDatastoreS3Storage$ === "object");
assert(typeof IotSiteWiseCustomerManagedDatastoreS3StorageSummary$ === "object");
assert(typeof JsonConfiguration$ === "object");
assert(typeof LambdaActivity$ === "object");
assert(typeof LateDataRule$ === "object");
assert(typeof LateDataRuleConfiguration$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListDatasetContentsRequest$ === "object");
assert(typeof ListDatasetContentsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListDatastoresRequest$ === "object");
assert(typeof ListDatastoresResponse$ === "object");
assert(typeof ListPipelinesRequest$ === "object");
assert(typeof ListPipelinesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoggingOptions$ === "object");
assert(typeof MathActivity$ === "object");
assert(typeof Message$ === "object");
assert(typeof OutputFileUriValue$ === "object");
assert(typeof ParquetConfiguration$ === "object");
assert(typeof Partition$ === "object");
assert(typeof Pipeline$ === "object");
assert(typeof PipelineActivity$ === "object");
assert(typeof PipelineSummary$ === "object");
assert(typeof PutLoggingOptionsRequest$ === "object");
assert(typeof QueryFilter$ === "object");
assert(typeof RemoveAttributesActivity$ === "object");
assert(typeof ReprocessingSummary$ === "object");
assert(typeof ResourceConfiguration$ === "object");
assert(typeof RetentionPeriod$ === "object");
assert(typeof RunPipelineActivityRequest$ === "object");
assert(typeof RunPipelineActivityResponse$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof SampleChannelDataRequest$ === "object");
assert(typeof SampleChannelDataResponse$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof SelectAttributesActivity$ === "object");
assert(typeof ServiceManagedChannelS3Storage$ === "object");
assert(typeof ServiceManagedChannelS3StorageSummary$ === "object");
assert(typeof ServiceManagedDatastoreS3Storage$ === "object");
assert(typeof ServiceManagedDatastoreS3StorageSummary$ === "object");
assert(typeof SqlQueryDatasetAction$ === "object");
assert(typeof StartPipelineReprocessingRequest$ === "object");
assert(typeof StartPipelineReprocessingResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimestampPartition$ === "object");
assert(typeof TriggeringDataset$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatastoreRequest$ === "object");
assert(typeof UpdatePipelineRequest$ === "object");
assert(typeof Variable$ === "object");
assert(typeof VersioningConfiguration$ === "object");
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
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTAnalyticsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(IoTAnalyticsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListDatasetContents === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListDatastores === "function");
assert(typeof paginateListPipelines === "function");
console.log(`IoTAnalytics index test passed.`);
