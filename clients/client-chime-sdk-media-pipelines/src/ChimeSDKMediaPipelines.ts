// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient, ChimeSDKMediaPipelinesClientConfig } from "./ChimeSDKMediaPipelinesClient";
import {
  CreateMediaCapturePipelineCommand,
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "./commands/CreateMediaCapturePipelineCommand";
import {
  CreateMediaConcatenationPipelineCommand,
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
} from "./commands/CreateMediaConcatenationPipelineCommand";
import {
  CreateMediaInsightsPipelineCommand,
  CreateMediaInsightsPipelineCommandInput,
  CreateMediaInsightsPipelineCommandOutput,
} from "./commands/CreateMediaInsightsPipelineCommand";
import {
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaInsightsPipelineConfigurationCommandInput,
  CreateMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/CreateMediaInsightsPipelineConfigurationCommand";
import {
  CreateMediaLiveConnectorPipelineCommand,
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
} from "./commands/CreateMediaLiveConnectorPipelineCommand";
import {
  DeleteMediaCapturePipelineCommand,
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "./commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMediaInsightsPipelineConfigurationCommand,
  DeleteMediaInsightsPipelineConfigurationCommandInput,
  DeleteMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/DeleteMediaInsightsPipelineConfigurationCommand";
import {
  DeleteMediaPipelineCommand,
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
} from "./commands/DeleteMediaPipelineCommand";
import {
  GetMediaCapturePipelineCommand,
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "./commands/GetMediaCapturePipelineCommand";
import {
  GetMediaInsightsPipelineConfigurationCommand,
  GetMediaInsightsPipelineConfigurationCommandInput,
  GetMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/GetMediaInsightsPipelineConfigurationCommand";
import {
  GetMediaPipelineCommand,
  GetMediaPipelineCommandInput,
  GetMediaPipelineCommandOutput,
} from "./commands/GetMediaPipelineCommand";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "./commands/ListMediaCapturePipelinesCommand";
import {
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "./commands/ListMediaInsightsPipelineConfigurationsCommand";
import {
  ListMediaPipelinesCommand,
  ListMediaPipelinesCommandInput,
  ListMediaPipelinesCommandOutput,
} from "./commands/ListMediaPipelinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineConfigurationCommandInput,
  UpdateMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/UpdateMediaInsightsPipelineConfigurationCommand";
import {
  UpdateMediaInsightsPipelineStatusCommand,
  UpdateMediaInsightsPipelineStatusCommandInput,
  UpdateMediaInsightsPipelineStatusCommandOutput,
} from "./commands/UpdateMediaInsightsPipelineStatusCommand";

const commands = {
  CreateMediaCapturePipelineCommand,
  CreateMediaConcatenationPipelineCommand,
  CreateMediaInsightsPipelineCommand,
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaLiveConnectorPipelineCommand,
  DeleteMediaCapturePipelineCommand,
  DeleteMediaInsightsPipelineConfigurationCommand,
  DeleteMediaPipelineCommand,
  GetMediaCapturePipelineCommand,
  GetMediaInsightsPipelineConfigurationCommand,
  GetMediaPipelineCommand,
  ListMediaCapturePipelinesCommand,
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaPipelinesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineStatusCommand,
};

export interface ChimeSDKMediaPipelines {
  /**
   * @see {@link CreateMediaCapturePipelineCommand}
   */
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaCapturePipelineCommandOutput>;
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaConcatenationPipelineCommand}
   */
  createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaConcatenationPipelineCommandOutput>;
  createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    cb: (err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void
  ): void;
  createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaInsightsPipelineCommand}
   */
  createMediaInsightsPipeline(
    args: CreateMediaInsightsPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaInsightsPipelineCommandOutput>;
  createMediaInsightsPipeline(
    args: CreateMediaInsightsPipelineCommandInput,
    cb: (err: any, data?: CreateMediaInsightsPipelineCommandOutput) => void
  ): void;
  createMediaInsightsPipeline(
    args: CreateMediaInsightsPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaInsightsPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaInsightsPipelineConfigurationCommand}
   */
  createMediaInsightsPipelineConfiguration(
    args: CreateMediaInsightsPipelineConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaInsightsPipelineConfigurationCommandOutput>;
  createMediaInsightsPipelineConfiguration(
    args: CreateMediaInsightsPipelineConfigurationCommandInput,
    cb: (err: any, data?: CreateMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;
  createMediaInsightsPipelineConfiguration(
    args: CreateMediaInsightsPipelineConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaLiveConnectorPipelineCommand}
   */
  createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaLiveConnectorPipelineCommandOutput>;
  createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    cb: (err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void
  ): void;
  createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMediaCapturePipelineCommand}
   */
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaCapturePipelineCommandOutput>;
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMediaInsightsPipelineConfigurationCommand}
   */
  deleteMediaInsightsPipelineConfiguration(
    args: DeleteMediaInsightsPipelineConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaInsightsPipelineConfigurationCommandOutput>;
  deleteMediaInsightsPipelineConfiguration(
    args: DeleteMediaInsightsPipelineConfigurationCommandInput,
    cb: (err: any, data?: DeleteMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;
  deleteMediaInsightsPipelineConfiguration(
    args: DeleteMediaInsightsPipelineConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMediaPipelineCommand}
   */
  deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaPipelineCommandOutput>;
  deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    cb: (err: any, data?: DeleteMediaPipelineCommandOutput) => void
  ): void;
  deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaCapturePipelineCommand}
   */
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaCapturePipelineCommandOutput>;
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaInsightsPipelineConfigurationCommand}
   */
  getMediaInsightsPipelineConfiguration(
    args: GetMediaInsightsPipelineConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaInsightsPipelineConfigurationCommandOutput>;
  getMediaInsightsPipelineConfiguration(
    args: GetMediaInsightsPipelineConfigurationCommandInput,
    cb: (err: any, data?: GetMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;
  getMediaInsightsPipelineConfiguration(
    args: GetMediaInsightsPipelineConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaPipelineCommand}
   */
  getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaPipelineCommandOutput>;
  getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    cb: (err: any, data?: GetMediaPipelineCommandOutput) => void
  ): void;
  getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMediaCapturePipelinesCommand}
   */
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaCapturePipelinesCommandOutput>;
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMediaInsightsPipelineConfigurationsCommand}
   */
  listMediaInsightsPipelineConfigurations(
    args: ListMediaInsightsPipelineConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput>;
  listMediaInsightsPipelineConfigurations(
    args: ListMediaInsightsPipelineConfigurationsCommandInput,
    cb: (err: any, data?: ListMediaInsightsPipelineConfigurationsCommandOutput) => void
  ): void;
  listMediaInsightsPipelineConfigurations(
    args: ListMediaInsightsPipelineConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaInsightsPipelineConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMediaPipelinesCommand}
   */
  listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaPipelinesCommandOutput>;
  listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    cb: (err: any, data?: ListMediaPipelinesCommandOutput) => void
  ): void;
  listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaPipelinesCommandOutput) => void
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
   * @see {@link UpdateMediaInsightsPipelineConfigurationCommand}
   */
  updateMediaInsightsPipelineConfiguration(
    args: UpdateMediaInsightsPipelineConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMediaInsightsPipelineConfigurationCommandOutput>;
  updateMediaInsightsPipelineConfiguration(
    args: UpdateMediaInsightsPipelineConfigurationCommandInput,
    cb: (err: any, data?: UpdateMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;
  updateMediaInsightsPipelineConfiguration(
    args: UpdateMediaInsightsPipelineConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMediaInsightsPipelineConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMediaInsightsPipelineStatusCommand}
   */
  updateMediaInsightsPipelineStatus(
    args: UpdateMediaInsightsPipelineStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMediaInsightsPipelineStatusCommandOutput>;
  updateMediaInsightsPipelineStatus(
    args: UpdateMediaInsightsPipelineStatusCommandInput,
    cb: (err: any, data?: UpdateMediaInsightsPipelineStatusCommandOutput) => void
  ): void;
  updateMediaInsightsPipelineStatus(
    args: UpdateMediaInsightsPipelineStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMediaInsightsPipelineStatusCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
 *          create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>
 */
export class ChimeSDKMediaPipelines extends ChimeSDKMediaPipelinesClient implements ChimeSDKMediaPipelines {}
createAggregatedClient(commands, ChimeSDKMediaPipelines);
