import {
  APIName,
  ChannelProtocol,
  ChannelRole,
  ChannelType,
  ComparisonOperator,
  ConfigurationStatus,
  CreateSignalingChannelCommand,
  CreateStreamCommand,
  DefaultStorageTier,
  DeleteEdgeConfigurationCommand,
  DeleteSignalingChannelCommand,
  DeleteStreamCommand,
  DescribeEdgeConfigurationCommand,
  DescribeImageGenerationConfigurationCommand,
  DescribeMappedResourceConfigurationCommand,
  DescribeMediaStorageConfigurationCommand,
  DescribeNotificationConfigurationCommand,
  DescribeSignalingChannelCommand,
  DescribeStreamCommand,
  DescribeStreamStorageConfigurationCommand,
  Format,
  FormatConfigKey,
  GetDataEndpointCommand,
  GetSignalingChannelEndpointCommand,
  ImageSelectorType,
  KinesisVideo,
  KinesisVideoClient,
  KinesisVideoServiceException,
  ListEdgeAgentConfigurationsCommand,
  ListSignalingChannelsCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTagsForStreamCommand,
  MediaStorageConfigurationStatus,
  MediaUriType,
  RecorderStatus,
  StartEdgeConfigurationUpdateCommand,
  Status,
  StrategyOnFullSize,
  SyncStatus,
  TagResourceCommand,
  TagStreamCommand,
  UntagResourceCommand,
  UntagStreamCommand,
  UpdateDataRetentionCommand,
  UpdateDataRetentionOperation,
  UpdateImageGenerationConfigurationCommand,
  UpdateMediaStorageConfigurationCommand,
  UpdateNotificationConfigurationCommand,
  UpdateSignalingChannelCommand,
  UpdateStreamCommand,
  UpdateStreamStorageConfigurationCommand,
  UploaderStatus,
  paginateDescribeMappedResourceConfiguration,
  paginateListEdgeAgentConfigurations,
  paginateListSignalingChannels,
  paginateListStreams,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoClient === "function")
assert(typeof KinesisVideo === "function")
// commands
assert(typeof CreateSignalingChannelCommand === "function")
assert(typeof CreateStreamCommand === "function")
assert(typeof DeleteEdgeConfigurationCommand === "function")
assert(typeof DeleteSignalingChannelCommand === "function")
assert(typeof DeleteStreamCommand === "function")
assert(typeof DescribeEdgeConfigurationCommand === "function")
assert(typeof DescribeImageGenerationConfigurationCommand === "function")
assert(typeof DescribeMappedResourceConfigurationCommand === "function")
assert(typeof DescribeMediaStorageConfigurationCommand === "function")
assert(typeof DescribeNotificationConfigurationCommand === "function")
assert(typeof DescribeSignalingChannelCommand === "function")
assert(typeof DescribeStreamCommand === "function")
assert(typeof DescribeStreamStorageConfigurationCommand === "function")
assert(typeof GetDataEndpointCommand === "function")
assert(typeof GetSignalingChannelEndpointCommand === "function")
assert(typeof ListEdgeAgentConfigurationsCommand === "function")
assert(typeof ListSignalingChannelsCommand === "function")
assert(typeof ListStreamsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTagsForStreamCommand === "function")
assert(typeof StartEdgeConfigurationUpdateCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TagStreamCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UntagStreamCommand === "function")
assert(typeof UpdateDataRetentionCommand === "function")
assert(typeof UpdateImageGenerationConfigurationCommand === "function")
assert(typeof UpdateMediaStorageConfigurationCommand === "function")
assert(typeof UpdateNotificationConfigurationCommand === "function")
assert(typeof UpdateSignalingChannelCommand === "function")
assert(typeof UpdateStreamCommand === "function")
assert(typeof UpdateStreamStorageConfigurationCommand === "function")
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
assert(KinesisVideoServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeMappedResourceConfiguration === "function")
assert(typeof paginateListEdgeAgentConfigurations === "function")
assert(typeof paginateListSignalingChannels === "function")
assert(typeof paginateListStreams === "function")
console.log(`KinesisVideo index test passed.`);
