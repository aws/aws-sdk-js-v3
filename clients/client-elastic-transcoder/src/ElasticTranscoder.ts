// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  CreatePresetCommand,
  CreatePresetCommandInput,
  CreatePresetCommandOutput,
} from "./commands/CreatePresetCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeletePresetCommand,
  DeletePresetCommandInput,
  DeletePresetCommandOutput,
} from "./commands/DeletePresetCommand";
import {
  ListJobsByPipelineCommand,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
} from "./commands/ListJobsByPipelineCommand";
import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "./commands/ListJobsByStatusCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "./commands/ListPresetsCommand";
import { ReadJobCommand, ReadJobCommandInput, ReadJobCommandOutput } from "./commands/ReadJobCommand";
import {
  ReadPipelineCommand,
  ReadPipelineCommandInput,
  ReadPipelineCommandOutput,
} from "./commands/ReadPipelineCommand";
import { ReadPresetCommand, ReadPresetCommandInput, ReadPresetCommandOutput } from "./commands/ReadPresetCommand";
import { TestRoleCommand, TestRoleCommandInput, TestRoleCommandOutput } from "./commands/TestRoleCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";
import {
  UpdatePipelineNotificationsCommand,
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput,
} from "./commands/UpdatePipelineNotificationsCommand";
import {
  UpdatePipelineStatusCommand,
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
} from "./commands/UpdatePipelineStatusCommand";
import { ElasticTranscoderClient, ElasticTranscoderClientConfig } from "./ElasticTranscoderClient";

const commands = {
  CancelJobCommand,
  CreateJobCommand,
  CreatePipelineCommand,
  CreatePresetCommand,
  DeletePipelineCommand,
  DeletePresetCommand,
  ListJobsByPipelineCommand,
  ListJobsByStatusCommand,
  ListPipelinesCommand,
  ListPresetsCommand,
  ReadJobCommand,
  ReadPipelineCommand,
  ReadPresetCommand,
  TestRoleCommand,
  UpdatePipelineCommand,
  UpdatePipelineNotificationsCommand,
  UpdatePipelineStatusCommand,
};

export interface ElasticTranscoder {
  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
  createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresetCommand}
   */
  createPreset(args: CreatePresetCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresetCommandOutput>;
  createPreset(args: CreatePresetCommandInput, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
  createPreset(
    args: CreatePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
  deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePresetCommand}
   */
  deletePreset(args: DeletePresetCommandInput, options?: __HttpHandlerOptions): Promise<DeletePresetCommandOutput>;
  deletePreset(args: DeletePresetCommandInput, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
  deletePreset(
    args: DeletePresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePresetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsByPipelineCommand}
   */
  listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsByPipelineCommandOutput>;
  listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void
  ): void;
  listJobsByPipeline(
    args: ListJobsByPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsByStatusCommand}
   */
  listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsByStatusCommandOutput>;
  listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    cb: (err: any, data?: ListJobsByStatusCommandOutput) => void
  ): void;
  listJobsByStatus(
    args: ListJobsByStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsByStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
  listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
  listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPresetsCommand}
   */
  listPresets(args: ListPresetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPresetsCommandOutput>;
  listPresets(args: ListPresetsCommandInput, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
  listPresets(
    args: ListPresetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPresetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ReadJobCommand}
   */
  readJob(args: ReadJobCommandInput, options?: __HttpHandlerOptions): Promise<ReadJobCommandOutput>;
  readJob(args: ReadJobCommandInput, cb: (err: any, data?: ReadJobCommandOutput) => void): void;
  readJob(
    args: ReadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ReadPipelineCommand}
   */
  readPipeline(args: ReadPipelineCommandInput, options?: __HttpHandlerOptions): Promise<ReadPipelineCommandOutput>;
  readPipeline(args: ReadPipelineCommandInput, cb: (err: any, data?: ReadPipelineCommandOutput) => void): void;
  readPipeline(
    args: ReadPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link ReadPresetCommand}
   */
  readPreset(args: ReadPresetCommandInput, options?: __HttpHandlerOptions): Promise<ReadPresetCommandOutput>;
  readPreset(args: ReadPresetCommandInput, cb: (err: any, data?: ReadPresetCommandOutput) => void): void;
  readPreset(
    args: ReadPresetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReadPresetCommandOutput) => void
  ): void;

  /**
   * @see {@link TestRoleCommand}
   */
  testRole(args: TestRoleCommandInput, options?: __HttpHandlerOptions): Promise<TestRoleCommandOutput>;
  testRole(args: TestRoleCommandInput, cb: (err: any, data?: TestRoleCommandOutput) => void): void;
  testRole(
    args: TestRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineCommand}
   */
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineNotificationsCommand}
   */
  updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineNotificationsCommandOutput>;
  updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void
  ): void;
  updatePipelineNotifications(
    args: UpdatePipelineNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineStatusCommand}
   */
  updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineStatusCommandOutput>;
  updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void
  ): void;
  updatePipelineStatus(
    args: UpdatePipelineStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS Elastic Transcoder Service</fullname>
 *         <p>The AWS Elastic Transcoder Service.</p>
 */
export class ElasticTranscoder extends ElasticTranscoderClient implements ElasticTranscoder {}
createAggregatedClient(commands, ElasticTranscoder);
