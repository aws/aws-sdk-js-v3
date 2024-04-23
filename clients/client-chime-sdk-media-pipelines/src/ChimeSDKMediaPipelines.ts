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
  CreateMediaPipelineKinesisVideoStreamPoolCommand,
  CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
  CreateMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "./commands/CreateMediaPipelineKinesisVideoStreamPoolCommand";
import {
  CreateMediaStreamPipelineCommand,
  CreateMediaStreamPipelineCommandInput,
  CreateMediaStreamPipelineCommandOutput,
} from "./commands/CreateMediaStreamPipelineCommand";
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
  DeleteMediaPipelineKinesisVideoStreamPoolCommand,
  DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
  DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "./commands/DeleteMediaPipelineKinesisVideoStreamPoolCommand";
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
  GetMediaPipelineKinesisVideoStreamPoolCommand,
  GetMediaPipelineKinesisVideoStreamPoolCommandInput,
  GetMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "./commands/GetMediaPipelineKinesisVideoStreamPoolCommand";
import {
  GetSpeakerSearchTaskCommand,
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "./commands/GetSpeakerSearchTaskCommand";
import {
  GetVoiceToneAnalysisTaskCommand,
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "./commands/GetVoiceToneAnalysisTaskCommand";
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
  ListMediaPipelineKinesisVideoStreamPoolsCommand,
  ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  ListMediaPipelineKinesisVideoStreamPoolsCommandOutput,
} from "./commands/ListMediaPipelineKinesisVideoStreamPoolsCommand";
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
import {
  StartSpeakerSearchTaskCommand,
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "./commands/StartSpeakerSearchTaskCommand";
import {
  StartVoiceToneAnalysisTaskCommand,
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StartVoiceToneAnalysisTaskCommand";
import {
  StopSpeakerSearchTaskCommand,
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "./commands/StopSpeakerSearchTaskCommand";
import {
  StopVoiceToneAnalysisTaskCommand,
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StopVoiceToneAnalysisTaskCommand";
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
import {
  UpdateMediaPipelineKinesisVideoStreamPoolCommand,
  UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
  UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "./commands/UpdateMediaPipelineKinesisVideoStreamPoolCommand";

const commands = {
  CreateMediaCapturePipelineCommand,
  CreateMediaConcatenationPipelineCommand,
  CreateMediaInsightsPipelineCommand,
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaLiveConnectorPipelineCommand,
  CreateMediaPipelineKinesisVideoStreamPoolCommand,
  CreateMediaStreamPipelineCommand,
  DeleteMediaCapturePipelineCommand,
  DeleteMediaInsightsPipelineConfigurationCommand,
  DeleteMediaPipelineCommand,
  DeleteMediaPipelineKinesisVideoStreamPoolCommand,
  GetMediaCapturePipelineCommand,
  GetMediaInsightsPipelineConfigurationCommand,
  GetMediaPipelineCommand,
  GetMediaPipelineKinesisVideoStreamPoolCommand,
  GetSpeakerSearchTaskCommand,
  GetVoiceToneAnalysisTaskCommand,
  ListMediaCapturePipelinesCommand,
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaPipelineKinesisVideoStreamPoolsCommand,
  ListMediaPipelinesCommand,
  ListTagsForResourceCommand,
  StartSpeakerSearchTaskCommand,
  StartVoiceToneAnalysisTaskCommand,
  StopSpeakerSearchTaskCommand,
  StopVoiceToneAnalysisTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineStatusCommand,
  UpdateMediaPipelineKinesisVideoStreamPoolCommand,
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
   * @see {@link CreateMediaPipelineKinesisVideoStreamPoolCommand}
   */
  createMediaPipelineKinesisVideoStreamPool(
    args: CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaPipelineKinesisVideoStreamPoolCommandOutput>;
  createMediaPipelineKinesisVideoStreamPool(
    args: CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    cb: (err: any, data?: CreateMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;
  createMediaPipelineKinesisVideoStreamPool(
    args: CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMediaStreamPipelineCommand}
   */
  createMediaStreamPipeline(
    args: CreateMediaStreamPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaStreamPipelineCommandOutput>;
  createMediaStreamPipeline(
    args: CreateMediaStreamPipelineCommandInput,
    cb: (err: any, data?: CreateMediaStreamPipelineCommandOutput) => void
  ): void;
  createMediaStreamPipeline(
    args: CreateMediaStreamPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaStreamPipelineCommandOutput) => void
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
   * @see {@link DeleteMediaPipelineKinesisVideoStreamPoolCommand}
   */
  deleteMediaPipelineKinesisVideoStreamPool(
    args: DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput>;
  deleteMediaPipelineKinesisVideoStreamPool(
    args: DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
    cb: (err: any, data?: DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;
  deleteMediaPipelineKinesisVideoStreamPool(
    args: DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
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
   * @see {@link GetMediaPipelineKinesisVideoStreamPoolCommand}
   */
  getMediaPipelineKinesisVideoStreamPool(
    args: GetMediaPipelineKinesisVideoStreamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaPipelineKinesisVideoStreamPoolCommandOutput>;
  getMediaPipelineKinesisVideoStreamPool(
    args: GetMediaPipelineKinesisVideoStreamPoolCommandInput,
    cb: (err: any, data?: GetMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;
  getMediaPipelineKinesisVideoStreamPool(
    args: GetMediaPipelineKinesisVideoStreamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpeakerSearchTaskCommand}
   */
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSpeakerSearchTaskCommandOutput>;
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceToneAnalysisTaskCommand}
   */
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceToneAnalysisTaskCommandOutput>;
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
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
   * @see {@link ListMediaPipelineKinesisVideoStreamPoolsCommand}
   */
  listMediaPipelineKinesisVideoStreamPools(
    args: ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaPipelineKinesisVideoStreamPoolsCommandOutput>;
  listMediaPipelineKinesisVideoStreamPools(
    args: ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
    cb: (err: any, data?: ListMediaPipelineKinesisVideoStreamPoolsCommandOutput) => void
  ): void;
  listMediaPipelineKinesisVideoStreamPools(
    args: ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaPipelineKinesisVideoStreamPoolsCommandOutput) => void
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
   * @see {@link StartSpeakerSearchTaskCommand}
   */
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeakerSearchTaskCommandOutput>;
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVoiceToneAnalysisTaskCommand}
   */
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVoiceToneAnalysisTaskCommandOutput>;
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSpeakerSearchTaskCommand}
   */
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSpeakerSearchTaskCommandOutput>;
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopVoiceToneAnalysisTaskCommand}
   */
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopVoiceToneAnalysisTaskCommandOutput>;
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
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

  /**
   * @see {@link UpdateMediaPipelineKinesisVideoStreamPoolCommand}
   */
  updateMediaPipelineKinesisVideoStreamPool(
    args: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput>;
  updateMediaPipelineKinesisVideoStreamPool(
    args: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
    cb: (err: any, data?: UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;
  updateMediaPipelineKinesisVideoStreamPool(
    args: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
 *          create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>
 */
export class ChimeSDKMediaPipelines extends ChimeSDKMediaPipelinesClient implements ChimeSDKMediaPipelines {}
createAggregatedClient(commands, ChimeSDKMediaPipelines);
