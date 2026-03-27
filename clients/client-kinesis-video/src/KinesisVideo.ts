// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateSignalingChannelCommandInput,
  type CreateSignalingChannelCommandOutput,
  CreateSignalingChannelCommand,
} from "./commands/CreateSignalingChannelCommand";
import {
  type CreateStreamCommandInput,
  type CreateStreamCommandOutput,
  CreateStreamCommand,
} from "./commands/CreateStreamCommand";
import {
  type DeleteEdgeConfigurationCommandInput,
  type DeleteEdgeConfigurationCommandOutput,
  DeleteEdgeConfigurationCommand,
} from "./commands/DeleteEdgeConfigurationCommand";
import {
  type DeleteSignalingChannelCommandInput,
  type DeleteSignalingChannelCommandOutput,
  DeleteSignalingChannelCommand,
} from "./commands/DeleteSignalingChannelCommand";
import {
  type DeleteStreamCommandInput,
  type DeleteStreamCommandOutput,
  DeleteStreamCommand,
} from "./commands/DeleteStreamCommand";
import {
  type DescribeEdgeConfigurationCommandInput,
  type DescribeEdgeConfigurationCommandOutput,
  DescribeEdgeConfigurationCommand,
} from "./commands/DescribeEdgeConfigurationCommand";
import {
  type DescribeImageGenerationConfigurationCommandInput,
  type DescribeImageGenerationConfigurationCommandOutput,
  DescribeImageGenerationConfigurationCommand,
} from "./commands/DescribeImageGenerationConfigurationCommand";
import {
  type DescribeMappedResourceConfigurationCommandInput,
  type DescribeMappedResourceConfigurationCommandOutput,
  DescribeMappedResourceConfigurationCommand,
} from "./commands/DescribeMappedResourceConfigurationCommand";
import {
  type DescribeMediaStorageConfigurationCommandInput,
  type DescribeMediaStorageConfigurationCommandOutput,
  DescribeMediaStorageConfigurationCommand,
} from "./commands/DescribeMediaStorageConfigurationCommand";
import {
  type DescribeNotificationConfigurationCommandInput,
  type DescribeNotificationConfigurationCommandOutput,
  DescribeNotificationConfigurationCommand,
} from "./commands/DescribeNotificationConfigurationCommand";
import {
  type DescribeSignalingChannelCommandInput,
  type DescribeSignalingChannelCommandOutput,
  DescribeSignalingChannelCommand,
} from "./commands/DescribeSignalingChannelCommand";
import {
  type DescribeStreamCommandInput,
  type DescribeStreamCommandOutput,
  DescribeStreamCommand,
} from "./commands/DescribeStreamCommand";
import {
  type DescribeStreamStorageConfigurationCommandInput,
  type DescribeStreamStorageConfigurationCommandOutput,
  DescribeStreamStorageConfigurationCommand,
} from "./commands/DescribeStreamStorageConfigurationCommand";
import {
  type GetDataEndpointCommandInput,
  type GetDataEndpointCommandOutput,
  GetDataEndpointCommand,
} from "./commands/GetDataEndpointCommand";
import {
  type GetSignalingChannelEndpointCommandInput,
  type GetSignalingChannelEndpointCommandOutput,
  GetSignalingChannelEndpointCommand,
} from "./commands/GetSignalingChannelEndpointCommand";
import {
  type ListEdgeAgentConfigurationsCommandInput,
  type ListEdgeAgentConfigurationsCommandOutput,
  ListEdgeAgentConfigurationsCommand,
} from "./commands/ListEdgeAgentConfigurationsCommand";
import {
  type ListSignalingChannelsCommandInput,
  type ListSignalingChannelsCommandOutput,
  ListSignalingChannelsCommand,
} from "./commands/ListSignalingChannelsCommand";
import {
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListStreamsCommand,
} from "./commands/ListStreamsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTagsForStreamCommandInput,
  type ListTagsForStreamCommandOutput,
  ListTagsForStreamCommand,
} from "./commands/ListTagsForStreamCommand";
import {
  type StartEdgeConfigurationUpdateCommandInput,
  type StartEdgeConfigurationUpdateCommandOutput,
  StartEdgeConfigurationUpdateCommand,
} from "./commands/StartEdgeConfigurationUpdateCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import { type TagStreamCommandInput, type TagStreamCommandOutput, TagStreamCommand } from "./commands/TagStreamCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UntagStreamCommandInput,
  type UntagStreamCommandOutput,
  UntagStreamCommand,
} from "./commands/UntagStreamCommand";
import {
  type UpdateDataRetentionCommandInput,
  type UpdateDataRetentionCommandOutput,
  UpdateDataRetentionCommand,
} from "./commands/UpdateDataRetentionCommand";
import {
  type UpdateImageGenerationConfigurationCommandInput,
  type UpdateImageGenerationConfigurationCommandOutput,
  UpdateImageGenerationConfigurationCommand,
} from "./commands/UpdateImageGenerationConfigurationCommand";
import {
  type UpdateMediaStorageConfigurationCommandInput,
  type UpdateMediaStorageConfigurationCommandOutput,
  UpdateMediaStorageConfigurationCommand,
} from "./commands/UpdateMediaStorageConfigurationCommand";
import {
  type UpdateNotificationConfigurationCommandInput,
  type UpdateNotificationConfigurationCommandOutput,
  UpdateNotificationConfigurationCommand,
} from "./commands/UpdateNotificationConfigurationCommand";
import {
  type UpdateSignalingChannelCommandInput,
  type UpdateSignalingChannelCommandOutput,
  UpdateSignalingChannelCommand,
} from "./commands/UpdateSignalingChannelCommand";
import {
  type UpdateStreamCommandInput,
  type UpdateStreamCommandOutput,
  UpdateStreamCommand,
} from "./commands/UpdateStreamCommand";
import {
  type UpdateStreamStorageConfigurationCommandInput,
  type UpdateStreamStorageConfigurationCommandOutput,
  UpdateStreamStorageConfigurationCommand,
} from "./commands/UpdateStreamStorageConfigurationCommand";
import { KinesisVideoClient } from "./KinesisVideoClient";
import { paginateDescribeMappedResourceConfiguration } from "./pagination/DescribeMappedResourceConfigurationPaginator";
import { paginateListEdgeAgentConfigurations } from "./pagination/ListEdgeAgentConfigurationsPaginator";
import { paginateListSignalingChannels } from "./pagination/ListSignalingChannelsPaginator";
import { paginateListStreams } from "./pagination/ListStreamsPaginator";

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
  DescribeStreamStorageConfigurationCommand,
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
  UpdateStreamStorageConfigurationCommand,
};
const paginators = {
  paginateDescribeMappedResourceConfiguration,
  paginateListEdgeAgentConfigurations,
  paginateListSignalingChannels,
  paginateListStreams,
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
  createStream(
    args: CreateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamCommandOutput>;
  createStream(
    args: CreateStreamCommandInput,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEdgeConfigurationCommand}
   */
  deleteEdgeConfiguration(): Promise<DeleteEdgeConfigurationCommandOutput>;
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
  deleteStream(
    args: DeleteStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamCommandOutput>;
  deleteStream(
    args: DeleteStreamCommandInput,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEdgeConfigurationCommand}
   */
  describeEdgeConfiguration(): Promise<DescribeEdgeConfigurationCommandOutput>;
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
  describeImageGenerationConfiguration(): Promise<DescribeImageGenerationConfigurationCommandOutput>;
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
  describeMappedResourceConfiguration(): Promise<DescribeMappedResourceConfigurationCommandOutput>;
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
  describeMediaStorageConfiguration(): Promise<DescribeMediaStorageConfigurationCommandOutput>;
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
  describeNotificationConfiguration(): Promise<DescribeNotificationConfigurationCommandOutput>;
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
  describeSignalingChannel(): Promise<DescribeSignalingChannelCommandOutput>;
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
  describeStream(): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamStorageConfigurationCommand}
   */
  describeStreamStorageConfiguration(): Promise<DescribeStreamStorageConfigurationCommandOutput>;
  describeStreamStorageConfiguration(
    args: DescribeStreamStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamStorageConfigurationCommandOutput>;
  describeStreamStorageConfiguration(
    args: DescribeStreamStorageConfigurationCommandInput,
    cb: (err: any, data?: DescribeStreamStorageConfigurationCommandOutput) => void
  ): void;
  describeStreamStorageConfiguration(
    args: DescribeStreamStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataEndpointCommand}
   */
  getDataEndpoint(
    args: GetDataEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataEndpointCommandOutput>;
  getDataEndpoint(
    args: GetDataEndpointCommandInput,
    cb: (err: any, data?: GetDataEndpointCommandOutput) => void
  ): void;
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
  listSignalingChannels(): Promise<ListSignalingChannelsCommandOutput>;
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
  listStreams(): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
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
  listTagsForStream(): Promise<ListTagsForStreamCommandOutput>;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagStreamCommand}
   */
  tagStream(
    args: TagStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagStreamCommandOutput>;
  tagStream(
    args: TagStreamCommandInput,
    cb: (err: any, data?: TagStreamCommandOutput) => void
  ): void;
  tagStream(
    args: TagStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagStreamCommand}
   */
  untagStream(
    args: UntagStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagStreamCommandOutput>;
  untagStream(
    args: UntagStreamCommandInput,
    cb: (err: any, data?: UntagStreamCommandOutput) => void
  ): void;
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
  updateImageGenerationConfiguration(): Promise<UpdateImageGenerationConfigurationCommandOutput>;
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
  updateNotificationConfiguration(): Promise<UpdateNotificationConfigurationCommandOutput>;
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
  updateStream(
    args: UpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamCommandOutput>;
  updateStream(
    args: UpdateStreamCommandInput,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;
  updateStream(
    args: UpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamStorageConfigurationCommand}
   */
  updateStreamStorageConfiguration(
    args: UpdateStreamStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamStorageConfigurationCommandOutput>;
  updateStreamStorageConfiguration(
    args: UpdateStreamStorageConfigurationCommandInput,
    cb: (err: any, data?: UpdateStreamStorageConfigurationCommandOutput) => void
  ): void;
  updateStreamStorageConfiguration(
    args: UpdateStreamStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMappedResourceConfigurationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMappedResourceConfigurationCommandOutput}.
   */
  paginateDescribeMappedResourceConfiguration(
    args?: DescribeMappedResourceConfigurationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMappedResourceConfigurationCommandOutput>;

  /**
   * @see {@link ListEdgeAgentConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEdgeAgentConfigurationsCommandOutput}.
   */
  paginateListEdgeAgentConfigurations(
    args: ListEdgeAgentConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEdgeAgentConfigurationsCommandOutput>;

  /**
   * @see {@link ListSignalingChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSignalingChannelsCommandOutput}.
   */
  paginateListSignalingChannels(
    args?: ListSignalingChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSignalingChannelsCommandOutput>;

  /**
   * @see {@link ListStreamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamsCommandOutput}.
   */
  paginateListStreams(
    args?: ListStreamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamsCommandOutput>;
}

/**
 * <p></p>
 * @public
 */
export class KinesisVideo extends KinesisVideoClient implements KinesisVideo {}
createAggregatedClient(commands, KinesisVideo, { paginators });
