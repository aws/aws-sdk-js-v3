// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateSignalingChannelCommand,
  CreateSignalingChannelCommandInput,
  CreateSignalingChannelCommandOutput,
} from "./commands/CreateSignalingChannelCommand";
import {
  CreateStreamCommand,
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "./commands/CreateStreamCommand";
import {
  DeleteEdgeConfigurationCommand,
  DeleteEdgeConfigurationCommandInput,
  DeleteEdgeConfigurationCommandOutput,
} from "./commands/DeleteEdgeConfigurationCommand";
import {
  DeleteSignalingChannelCommand,
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput,
} from "./commands/DeleteSignalingChannelCommand";
import {
  DeleteStreamCommand,
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "./commands/DeleteStreamCommand";
import {
  DescribeEdgeConfigurationCommand,
  DescribeEdgeConfigurationCommandInput,
  DescribeEdgeConfigurationCommandOutput,
} from "./commands/DescribeEdgeConfigurationCommand";
import {
  DescribeImageGenerationConfigurationCommand,
  DescribeImageGenerationConfigurationCommandInput,
  DescribeImageGenerationConfigurationCommandOutput,
} from "./commands/DescribeImageGenerationConfigurationCommand";
import {
  DescribeMappedResourceConfigurationCommand,
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
} from "./commands/DescribeMappedResourceConfigurationCommand";
import {
  DescribeMediaStorageConfigurationCommand,
  DescribeMediaStorageConfigurationCommandInput,
  DescribeMediaStorageConfigurationCommandOutput,
} from "./commands/DescribeMediaStorageConfigurationCommand";
import {
  DescribeNotificationConfigurationCommand,
  DescribeNotificationConfigurationCommandInput,
  DescribeNotificationConfigurationCommandOutput,
} from "./commands/DescribeNotificationConfigurationCommand";
import {
  DescribeSignalingChannelCommand,
  DescribeSignalingChannelCommandInput,
  DescribeSignalingChannelCommandOutput,
} from "./commands/DescribeSignalingChannelCommand";
import {
  DescribeStreamCommand,
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "./commands/DescribeStreamCommand";
import {
  GetDataEndpointCommand,
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput,
} from "./commands/GetDataEndpointCommand";
import {
  GetSignalingChannelEndpointCommand,
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
} from "./commands/GetSignalingChannelEndpointCommand";
import {
  ListEdgeAgentConfigurationsCommand,
  ListEdgeAgentConfigurationsCommandInput,
  ListEdgeAgentConfigurationsCommandOutput,
} from "./commands/ListEdgeAgentConfigurationsCommand";
import {
  ListSignalingChannelsCommand,
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
} from "./commands/ListSignalingChannelsCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForStreamCommand,
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
} from "./commands/ListTagsForStreamCommand";
import {
  StartEdgeConfigurationUpdateCommand,
  StartEdgeConfigurationUpdateCommandInput,
  StartEdgeConfigurationUpdateCommandOutput,
} from "./commands/StartEdgeConfigurationUpdateCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TagStreamCommand, TagStreamCommandInput, TagStreamCommandOutput } from "./commands/TagStreamCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UntagStreamCommand, UntagStreamCommandInput, UntagStreamCommandOutput } from "./commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommand,
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "./commands/UpdateDataRetentionCommand";
import {
  UpdateImageGenerationConfigurationCommand,
  UpdateImageGenerationConfigurationCommandInput,
  UpdateImageGenerationConfigurationCommandOutput,
} from "./commands/UpdateImageGenerationConfigurationCommand";
import {
  UpdateMediaStorageConfigurationCommand,
  UpdateMediaStorageConfigurationCommandInput,
  UpdateMediaStorageConfigurationCommandOutput,
} from "./commands/UpdateMediaStorageConfigurationCommand";
import {
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import {
  UpdateSignalingChannelCommand,
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput,
} from "./commands/UpdateSignalingChannelCommand";
import {
  UpdateStreamCommand,
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
} from "./commands/UpdateStreamCommand";
import { KinesisVideoClient, KinesisVideoClientConfig } from "./KinesisVideoClient";

const commands = {
  CreateSignalingChannelCommand,
  CreateStreamCommand,
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
  GetDataEndpointCommand,
  GetSignalingChannelEndpointCommand,
  ListEdgeAgentConfigurationsCommand,
  ListSignalingChannelsCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTagsForStreamCommand,
  StartEdgeConfigurationUpdateCommand,
  TagResourceCommand,
  TagStreamCommand,
  UntagResourceCommand,
  UntagStreamCommand,
  UpdateDataRetentionCommand,
  UpdateImageGenerationConfigurationCommand,
  UpdateMediaStorageConfigurationCommand,
  UpdateNotificationConfigurationCommand,
  UpdateSignalingChannelCommand,
  UpdateStreamCommand,
};

export interface KinesisVideo {
  /**
   * @see {@link CreateSignalingChannelCommand}
   */
  createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSignalingChannelCommandOutput>;
  createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    cb: (err: any, data?: CreateSignalingChannelCommandOutput) => void
  ): void;
  createSignalingChannel(
    args: CreateSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSignalingChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(args: CreateStreamCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamCommandOutput>;
  createStream(args: CreateStreamCommandInput, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
  createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEdgeConfigurationCommand}
   */
  deleteEdgeConfiguration(
    args: DeleteEdgeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEdgeConfigurationCommandOutput>;
  deleteEdgeConfiguration(
    args: DeleteEdgeConfigurationCommandInput,
    cb: (err: any, data?: DeleteEdgeConfigurationCommandOutput) => void
  ): void;
  deleteEdgeConfiguration(
    args: DeleteEdgeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEdgeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSignalingChannelCommand}
   */
  deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSignalingChannelCommandOutput>;
  deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    cb: (err: any, data?: DeleteSignalingChannelCommandOutput) => void
  ): void;
  deleteSignalingChannel(
    args: DeleteSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSignalingChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(args: DeleteStreamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamCommandOutput>;
  deleteStream(args: DeleteStreamCommandInput, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEdgeConfigurationCommand}
   */
  describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEdgeConfigurationCommandOutput>;
  describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    cb: (err: any, data?: DescribeEdgeConfigurationCommandOutput) => void
  ): void;
  describeEdgeConfiguration(
    args: DescribeEdgeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEdgeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageGenerationConfigurationCommand}
   */
  describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageGenerationConfigurationCommandOutput>;
  describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    cb: (err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void
  ): void;
  describeImageGenerationConfiguration(
    args: DescribeImageGenerationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageGenerationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMappedResourceConfigurationCommand}
   */
  describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMappedResourceConfigurationCommandOutput>;
  describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    cb: (err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void
  ): void;
  describeMappedResourceConfiguration(
    args: DescribeMappedResourceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMappedResourceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMediaStorageConfigurationCommand}
   */
  describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMediaStorageConfigurationCommandOutput>;
  describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    cb: (err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void
  ): void;
  describeMediaStorageConfiguration(
    args: DescribeMediaStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMediaStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationConfigurationCommand}
   */
  describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationConfigurationCommandOutput>;
  describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    cb: (err: any, data?: DescribeNotificationConfigurationCommandOutput) => void
  ): void;
  describeNotificationConfiguration(
    args: DescribeNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSignalingChannelCommand}
   */
  describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSignalingChannelCommandOutput>;
  describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    cb: (err: any, data?: DescribeSignalingChannelCommandOutput) => void
  ): void;
  describeSignalingChannel(
    args: DescribeSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSignalingChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(args: DescribeStreamCommandInput, cb: (err: any, data?: DescribeStreamCommandOutput) => void): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataEndpointCommand}
   */
  getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataEndpointCommandOutput>;
  getDataEndpoint(args: GetDataEndpointCommandInput, cb: (err: any, data?: GetDataEndpointCommandOutput) => void): void;
  getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSignalingChannelEndpointCommand}
   */
  getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSignalingChannelEndpointCommandOutput>;
  getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    cb: (err: any, data?: GetSignalingChannelEndpointCommandOutput) => void
  ): void;
  getSignalingChannelEndpoint(
    args: GetSignalingChannelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSignalingChannelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEdgeAgentConfigurationsCommand}
   */
  listEdgeAgentConfigurations(
    args: ListEdgeAgentConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEdgeAgentConfigurationsCommandOutput>;
  listEdgeAgentConfigurations(
    args: ListEdgeAgentConfigurationsCommandInput,
    cb: (err: any, data?: ListEdgeAgentConfigurationsCommandOutput) => void
  ): void;
  listEdgeAgentConfigurations(
    args: ListEdgeAgentConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEdgeAgentConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSignalingChannelsCommand}
   */
  listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalingChannelsCommandOutput>;
  listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    cb: (err: any, data?: ListSignalingChannelsCommandOutput) => void
  ): void;
  listSignalingChannels(
    args: ListSignalingChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalingChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForStreamCommand}
   */
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForStreamCommandOutput>;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEdgeConfigurationUpdateCommand}
   */
  startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEdgeConfigurationUpdateCommandOutput>;
  startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    cb: (err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void
  ): void;
  startEdgeConfigurationUpdate(
    args: StartEdgeConfigurationUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEdgeConfigurationUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagStreamCommand}
   */
  tagStream(args: TagStreamCommandInput, options?: __HttpHandlerOptions): Promise<TagStreamCommandOutput>;
  tagStream(args: TagStreamCommandInput, cb: (err: any, data?: TagStreamCommandOutput) => void): void;
  tagStream(
    args: TagStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagStreamCommand}
   */
  untagStream(args: UntagStreamCommandInput, options?: __HttpHandlerOptions): Promise<UntagStreamCommandOutput>;
  untagStream(args: UntagStreamCommandInput, cb: (err: any, data?: UntagStreamCommandOutput) => void): void;
  untagStream(
    args: UntagStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataRetentionCommand}
   */
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataRetentionCommandOutput>;
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;
  updateDataRetention(
    args: UpdateDataRetentionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataRetentionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImageGenerationConfigurationCommand}
   */
  updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImageGenerationConfigurationCommandOutput>;
  updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    cb: (err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void
  ): void;
  updateImageGenerationConfiguration(
    args: UpdateImageGenerationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageGenerationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMediaStorageConfigurationCommand}
   */
  updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMediaStorageConfigurationCommandOutput>;
  updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    cb: (err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void
  ): void;
  updateMediaStorageConfiguration(
    args: UpdateMediaStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMediaStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationConfigurationCommand}
   */
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationConfigurationCommandOutput>;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSignalingChannelCommand}
   */
  updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSignalingChannelCommandOutput>;
  updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    cb: (err: any, data?: UpdateSignalingChannelCommandOutput) => void
  ): void;
  updateSignalingChannel(
    args: UpdateSignalingChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSignalingChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamCommand}
   */
  updateStream(args: UpdateStreamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStreamCommandOutput>;
  updateStream(args: UpdateStreamCommandInput, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
  updateStream(
    args: UpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p></p>
 */
export class KinesisVideo extends KinesisVideoClient implements KinesisVideo {}
createAggregatedClient(commands, KinesisVideo);
