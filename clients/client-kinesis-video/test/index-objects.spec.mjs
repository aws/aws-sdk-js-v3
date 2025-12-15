import {
  APIName,
  AccessDeniedException,
  AccessDeniedException$,
  AccountChannelLimitExceededException,
  AccountChannelLimitExceededException$,
  AccountStreamLimitExceededException,
  AccountStreamLimitExceededException$,
  ChannelInfo$,
  ChannelNameCondition$,
  ChannelProtocol,
  ChannelRole,
  ChannelType,
  ClientLimitExceededException,
  ClientLimitExceededException$,
  ComparisonOperator,
  ConfigurationStatus,
  CreateSignalingChannel$,
  CreateSignalingChannelCommand,
  CreateSignalingChannelInput$,
  CreateSignalingChannelOutput$,
  CreateStream$,
  CreateStreamCommand,
  CreateStreamInput$,
  CreateStreamOutput$,
  DefaultStorageTier,
  DeleteEdgeConfiguration$,
  DeleteEdgeConfigurationCommand,
  DeleteEdgeConfigurationInput$,
  DeleteEdgeConfigurationOutput$,
  DeleteSignalingChannel$,
  DeleteSignalingChannelCommand,
  DeleteSignalingChannelInput$,
  DeleteSignalingChannelOutput$,
  DeleteStream$,
  DeleteStreamCommand,
  DeleteStreamInput$,
  DeleteStreamOutput$,
  DeletionConfig$,
  DescribeEdgeConfiguration$,
  DescribeEdgeConfigurationCommand,
  DescribeEdgeConfigurationInput$,
  DescribeEdgeConfigurationOutput$,
  DescribeImageGenerationConfiguration$,
  DescribeImageGenerationConfigurationCommand,
  DescribeImageGenerationConfigurationInput$,
  DescribeImageGenerationConfigurationOutput$,
  DescribeMappedResourceConfiguration$,
  DescribeMappedResourceConfigurationCommand,
  DescribeMappedResourceConfigurationInput$,
  DescribeMappedResourceConfigurationOutput$,
  DescribeMediaStorageConfiguration$,
  DescribeMediaStorageConfigurationCommand,
  DescribeMediaStorageConfigurationInput$,
  DescribeMediaStorageConfigurationOutput$,
  DescribeNotificationConfiguration$,
  DescribeNotificationConfigurationCommand,
  DescribeNotificationConfigurationInput$,
  DescribeNotificationConfigurationOutput$,
  DescribeSignalingChannel$,
  DescribeSignalingChannelCommand,
  DescribeSignalingChannelInput$,
  DescribeSignalingChannelOutput$,
  DescribeStream$,
  DescribeStreamCommand,
  DescribeStreamInput$,
  DescribeStreamOutput$,
  DescribeStreamStorageConfiguration$,
  DescribeStreamStorageConfigurationCommand,
  DescribeStreamStorageConfigurationInput$,
  DescribeStreamStorageConfigurationOutput$,
  DeviceStreamLimitExceededException,
  DeviceStreamLimitExceededException$,
  EdgeAgentStatus$,
  EdgeConfig$,
  Format,
  FormatConfigKey,
  GetDataEndpoint$,
  GetDataEndpointCommand,
  GetDataEndpointInput$,
  GetDataEndpointOutput$,
  GetSignalingChannelEndpoint$,
  GetSignalingChannelEndpointCommand,
  GetSignalingChannelEndpointInput$,
  GetSignalingChannelEndpointOutput$,
  ImageGenerationConfiguration$,
  ImageGenerationDestinationConfig$,
  ImageSelectorType,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidDeviceException,
  InvalidDeviceException$,
  InvalidResourceFormatException,
  InvalidResourceFormatException$,
  KinesisVideo,
  KinesisVideoClient,
  KinesisVideoServiceException,
  LastRecorderStatus$,
  LastUploaderStatus$,
  ListEdgeAgentConfigurations$,
  ListEdgeAgentConfigurationsCommand,
  ListEdgeAgentConfigurationsEdgeConfig$,
  ListEdgeAgentConfigurationsInput$,
  ListEdgeAgentConfigurationsOutput$,
  ListSignalingChannels$,
  ListSignalingChannelsCommand,
  ListSignalingChannelsInput$,
  ListSignalingChannelsOutput$,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsInput$,
  ListStreamsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTagsForStream$,
  ListTagsForStreamCommand,
  ListTagsForStreamInput$,
  ListTagsForStreamOutput$,
  LocalSizeConfig$,
  MappedResourceConfigurationListItem$,
  MediaSourceConfig$,
  MediaStorageConfiguration$,
  MediaStorageConfigurationStatus,
  MediaUriType,
  NoDataRetentionException,
  NoDataRetentionException$,
  NotAuthorizedException,
  NotAuthorizedException$,
  NotificationConfiguration$,
  NotificationDestinationConfig$,
  RecorderConfig$,
  RecorderStatus,
  ResourceEndpointListItem$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScheduleConfig$,
  SingleMasterChannelEndpointConfiguration$,
  SingleMasterConfiguration$,
  StartEdgeConfigurationUpdate$,
  StartEdgeConfigurationUpdateCommand,
  StartEdgeConfigurationUpdateInput$,
  StartEdgeConfigurationUpdateOutput$,
  Status,
  StrategyOnFullSize,
  StreamEdgeConfigurationNotFoundException,
  StreamEdgeConfigurationNotFoundException$,
  StreamInfo$,
  StreamNameCondition$,
  StreamStorageConfiguration$,
  SyncStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TagStream$,
  TagStreamCommand,
  TagStreamInput$,
  TagStreamOutput$,
  TagsPerResourceExceededLimitException,
  TagsPerResourceExceededLimitException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UntagStream$,
  UntagStreamCommand,
  UntagStreamInput$,
  UntagStreamOutput$,
  UpdateDataRetention$,
  UpdateDataRetentionCommand,
  UpdateDataRetentionInput$,
  UpdateDataRetentionOperation,
  UpdateDataRetentionOutput$,
  UpdateImageGenerationConfiguration$,
  UpdateImageGenerationConfigurationCommand,
  UpdateImageGenerationConfigurationInput$,
  UpdateImageGenerationConfigurationOutput$,
  UpdateMediaStorageConfiguration$,
  UpdateMediaStorageConfigurationCommand,
  UpdateMediaStorageConfigurationInput$,
  UpdateMediaStorageConfigurationOutput$,
  UpdateNotificationConfiguration$,
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationInput$,
  UpdateNotificationConfigurationOutput$,
  UpdateSignalingChannel$,
  UpdateSignalingChannelCommand,
  UpdateSignalingChannelInput$,
  UpdateSignalingChannelOutput$,
  UpdateStream$,
  UpdateStreamCommand,
  UpdateStreamInput$,
  UpdateStreamOutput$,
  UpdateStreamStorageConfiguration$,
  UpdateStreamStorageConfigurationCommand,
  UpdateStreamStorageConfigurationInput$,
  UpdateStreamStorageConfigurationOutput$,
  UploaderConfig$,
  UploaderStatus,
  VersionMismatchException,
  VersionMismatchException$,
  paginateDescribeMappedResourceConfiguration,
  paginateListEdgeAgentConfigurations,
  paginateListSignalingChannels,
  paginateListStreams,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoClient === "function");
assert(typeof KinesisVideo === "function");
// commands
assert(typeof CreateSignalingChannelCommand === "function");
assert(typeof CreateSignalingChannel$ === "object");
assert(typeof CreateStreamCommand === "function");
assert(typeof CreateStream$ === "object");
assert(typeof DeleteEdgeConfigurationCommand === "function");
assert(typeof DeleteEdgeConfiguration$ === "object");
assert(typeof DeleteSignalingChannelCommand === "function");
assert(typeof DeleteSignalingChannel$ === "object");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeleteStream$ === "object");
assert(typeof DescribeEdgeConfigurationCommand === "function");
assert(typeof DescribeEdgeConfiguration$ === "object");
assert(typeof DescribeImageGenerationConfigurationCommand === "function");
assert(typeof DescribeImageGenerationConfiguration$ === "object");
assert(typeof DescribeMappedResourceConfigurationCommand === "function");
assert(typeof DescribeMappedResourceConfiguration$ === "object");
assert(typeof DescribeMediaStorageConfigurationCommand === "function");
assert(typeof DescribeMediaStorageConfiguration$ === "object");
assert(typeof DescribeNotificationConfigurationCommand === "function");
assert(typeof DescribeNotificationConfiguration$ === "object");
assert(typeof DescribeSignalingChannelCommand === "function");
assert(typeof DescribeSignalingChannel$ === "object");
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeStream$ === "object");
assert(typeof DescribeStreamStorageConfigurationCommand === "function");
assert(typeof DescribeStreamStorageConfiguration$ === "object");
assert(typeof GetDataEndpointCommand === "function");
assert(typeof GetDataEndpoint$ === "object");
assert(typeof GetSignalingChannelEndpointCommand === "function");
assert(typeof GetSignalingChannelEndpoint$ === "object");
assert(typeof ListEdgeAgentConfigurationsCommand === "function");
assert(typeof ListEdgeAgentConfigurations$ === "object");
assert(typeof ListSignalingChannelsCommand === "function");
assert(typeof ListSignalingChannels$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTagsForStreamCommand === "function");
assert(typeof ListTagsForStream$ === "object");
assert(typeof StartEdgeConfigurationUpdateCommand === "function");
assert(typeof StartEdgeConfigurationUpdate$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TagStreamCommand === "function");
assert(typeof TagStream$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UntagStreamCommand === "function");
assert(typeof UntagStream$ === "object");
assert(typeof UpdateDataRetentionCommand === "function");
assert(typeof UpdateDataRetention$ === "object");
assert(typeof UpdateImageGenerationConfigurationCommand === "function");
assert(typeof UpdateImageGenerationConfiguration$ === "object");
assert(typeof UpdateMediaStorageConfigurationCommand === "function");
assert(typeof UpdateMediaStorageConfiguration$ === "object");
assert(typeof UpdateNotificationConfigurationCommand === "function");
assert(typeof UpdateNotificationConfiguration$ === "object");
assert(typeof UpdateSignalingChannelCommand === "function");
assert(typeof UpdateSignalingChannel$ === "object");
assert(typeof UpdateStreamCommand === "function");
assert(typeof UpdateStream$ === "object");
assert(typeof UpdateStreamStorageConfigurationCommand === "function");
assert(typeof UpdateStreamStorageConfiguration$ === "object");
// structural schemas
assert(typeof ChannelInfo$ === "object");
assert(typeof ChannelNameCondition$ === "object");
assert(typeof CreateSignalingChannelInput$ === "object");
assert(typeof CreateSignalingChannelOutput$ === "object");
assert(typeof CreateStreamInput$ === "object");
assert(typeof CreateStreamOutput$ === "object");
assert(typeof DeleteEdgeConfigurationInput$ === "object");
assert(typeof DeleteEdgeConfigurationOutput$ === "object");
assert(typeof DeleteSignalingChannelInput$ === "object");
assert(typeof DeleteSignalingChannelOutput$ === "object");
assert(typeof DeleteStreamInput$ === "object");
assert(typeof DeleteStreamOutput$ === "object");
assert(typeof DeletionConfig$ === "object");
assert(typeof DescribeEdgeConfigurationInput$ === "object");
assert(typeof DescribeEdgeConfigurationOutput$ === "object");
assert(typeof DescribeImageGenerationConfigurationInput$ === "object");
assert(typeof DescribeImageGenerationConfigurationOutput$ === "object");
assert(typeof DescribeMappedResourceConfigurationInput$ === "object");
assert(typeof DescribeMappedResourceConfigurationOutput$ === "object");
assert(typeof DescribeMediaStorageConfigurationInput$ === "object");
assert(typeof DescribeMediaStorageConfigurationOutput$ === "object");
assert(typeof DescribeNotificationConfigurationInput$ === "object");
assert(typeof DescribeNotificationConfigurationOutput$ === "object");
assert(typeof DescribeSignalingChannelInput$ === "object");
assert(typeof DescribeSignalingChannelOutput$ === "object");
assert(typeof DescribeStreamInput$ === "object");
assert(typeof DescribeStreamOutput$ === "object");
assert(typeof DescribeStreamStorageConfigurationInput$ === "object");
assert(typeof DescribeStreamStorageConfigurationOutput$ === "object");
assert(typeof EdgeAgentStatus$ === "object");
assert(typeof EdgeConfig$ === "object");
assert(typeof GetDataEndpointInput$ === "object");
assert(typeof GetDataEndpointOutput$ === "object");
assert(typeof GetSignalingChannelEndpointInput$ === "object");
assert(typeof GetSignalingChannelEndpointOutput$ === "object");
assert(typeof ImageGenerationConfiguration$ === "object");
assert(typeof ImageGenerationDestinationConfig$ === "object");
assert(typeof LastRecorderStatus$ === "object");
assert(typeof LastUploaderStatus$ === "object");
assert(typeof ListEdgeAgentConfigurationsEdgeConfig$ === "object");
assert(typeof ListEdgeAgentConfigurationsInput$ === "object");
assert(typeof ListEdgeAgentConfigurationsOutput$ === "object");
assert(typeof ListSignalingChannelsInput$ === "object");
assert(typeof ListSignalingChannelsOutput$ === "object");
assert(typeof ListStreamsInput$ === "object");
assert(typeof ListStreamsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTagsForStreamInput$ === "object");
assert(typeof ListTagsForStreamOutput$ === "object");
assert(typeof LocalSizeConfig$ === "object");
assert(typeof MappedResourceConfigurationListItem$ === "object");
assert(typeof MediaSourceConfig$ === "object");
assert(typeof MediaStorageConfiguration$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof NotificationDestinationConfig$ === "object");
assert(typeof RecorderConfig$ === "object");
assert(typeof ResourceEndpointListItem$ === "object");
assert(typeof ScheduleConfig$ === "object");
assert(typeof SingleMasterChannelEndpointConfiguration$ === "object");
assert(typeof SingleMasterConfiguration$ === "object");
assert(typeof StartEdgeConfigurationUpdateInput$ === "object");
assert(typeof StartEdgeConfigurationUpdateOutput$ === "object");
assert(typeof StreamInfo$ === "object");
assert(typeof StreamNameCondition$ === "object");
assert(typeof StreamStorageConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TagStreamInput$ === "object");
assert(typeof TagStreamOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UntagStreamInput$ === "object");
assert(typeof UntagStreamOutput$ === "object");
assert(typeof UpdateDataRetentionInput$ === "object");
assert(typeof UpdateDataRetentionOutput$ === "object");
assert(typeof UpdateImageGenerationConfigurationInput$ === "object");
assert(typeof UpdateImageGenerationConfigurationOutput$ === "object");
assert(typeof UpdateMediaStorageConfigurationInput$ === "object");
assert(typeof UpdateMediaStorageConfigurationOutput$ === "object");
assert(typeof UpdateNotificationConfigurationInput$ === "object");
assert(typeof UpdateNotificationConfigurationOutput$ === "object");
assert(typeof UpdateSignalingChannelInput$ === "object");
assert(typeof UpdateSignalingChannelOutput$ === "object");
assert(typeof UpdateStreamInput$ === "object");
assert(typeof UpdateStreamOutput$ === "object");
assert(typeof UpdateStreamStorageConfigurationInput$ === "object");
assert(typeof UpdateStreamStorageConfigurationOutput$ === "object");
assert(typeof UploaderConfig$ === "object");
// enums
assert(typeof APIName === "object");
assert(typeof ChannelProtocol === "object");
assert(typeof ChannelRole === "object");
assert(typeof ChannelType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ConfigurationStatus === "object");
assert(typeof DefaultStorageTier === "object");
assert(typeof Format === "object");
assert(typeof FormatConfigKey === "object");
assert(typeof ImageSelectorType === "object");
assert(typeof MediaStorageConfigurationStatus === "object");
assert(typeof MediaUriType === "object");
assert(typeof RecorderStatus === "object");
assert(typeof Status === "object");
assert(typeof StrategyOnFullSize === "object");
assert(typeof SyncStatus === "object");
assert(typeof UpdateDataRetentionOperation === "object");
assert(typeof UploaderStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof KinesisVideoServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AccountChannelLimitExceededException.prototype instanceof KinesisVideoServiceException);
assert(typeof AccountChannelLimitExceededException$ === "object");
assert(AccountStreamLimitExceededException.prototype instanceof KinesisVideoServiceException);
assert(typeof AccountStreamLimitExceededException$ === "object");
assert(ClientLimitExceededException.prototype instanceof KinesisVideoServiceException);
assert(typeof ClientLimitExceededException$ === "object");
assert(DeviceStreamLimitExceededException.prototype instanceof KinesisVideoServiceException);
assert(typeof DeviceStreamLimitExceededException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisVideoServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidDeviceException.prototype instanceof KinesisVideoServiceException);
assert(typeof InvalidDeviceException$ === "object");
assert(InvalidResourceFormatException.prototype instanceof KinesisVideoServiceException);
assert(typeof InvalidResourceFormatException$ === "object");
assert(NoDataRetentionException.prototype instanceof KinesisVideoServiceException);
assert(typeof NoDataRetentionException$ === "object");
assert(NotAuthorizedException.prototype instanceof KinesisVideoServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceInUseException.prototype instanceof KinesisVideoServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisVideoServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(StreamEdgeConfigurationNotFoundException.prototype instanceof KinesisVideoServiceException);
assert(typeof StreamEdgeConfigurationNotFoundException$ === "object");
assert(TagsPerResourceExceededLimitException.prototype instanceof KinesisVideoServiceException);
assert(typeof TagsPerResourceExceededLimitException$ === "object");
assert(VersionMismatchException.prototype instanceof KinesisVideoServiceException);
assert(typeof VersionMismatchException$ === "object");
assert(KinesisVideoServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeMappedResourceConfiguration === "function");
assert(typeof paginateListEdgeAgentConfigurations === "function");
assert(typeof paginateListSignalingChannels === "function");
assert(typeof paginateListStreams === "function");
console.log(`KinesisVideo index test passed.`);
