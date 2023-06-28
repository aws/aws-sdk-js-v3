// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  GetPipelineBlueprintCommand,
  GetPipelineBlueprintCommandInput,
  GetPipelineBlueprintCommandOutput,
} from "./commands/GetPipelineBlueprintCommand";
import {
  GetPipelineChangeProgressCommand,
  GetPipelineChangeProgressCommandInput,
  GetPipelineChangeProgressCommandOutput,
} from "./commands/GetPipelineChangeProgressCommand";
import { GetPipelineCommand, GetPipelineCommandInput, GetPipelineCommandOutput } from "./commands/GetPipelineCommand";
import {
  ListPipelineBlueprintsCommand,
  ListPipelineBlueprintsCommandInput,
  ListPipelineBlueprintsCommandOutput,
} from "./commands/ListPipelineBlueprintsCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPipelineCommand,
  StartPipelineCommandInput,
  StartPipelineCommandOutput,
} from "./commands/StartPipelineCommand";
import {
  StopPipelineCommand,
  StopPipelineCommandInput,
  StopPipelineCommandOutput,
} from "./commands/StopPipelineCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";
import {
  ValidatePipelineCommand,
  ValidatePipelineCommandInput,
  ValidatePipelineCommandOutput,
} from "./commands/ValidatePipelineCommand";
import { OSISClient, OSISClientConfig } from "./OSISClient";

const commands = {
  CreatePipelineCommand,
  DeletePipelineCommand,
  GetPipelineCommand,
  GetPipelineBlueprintCommand,
  GetPipelineChangeProgressCommand,
  ListPipelineBlueprintsCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  StartPipelineCommand,
  StopPipelineCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePipelineCommand,
  ValidatePipelineCommand,
};

export interface OSIS {
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
   * @see {@link GetPipelineCommand}
   */
  getPipeline(args: GetPipelineCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineCommandOutput>;
  getPipeline(args: GetPipelineCommandInput, cb: (err: any, data?: GetPipelineCommandOutput) => void): void;
  getPipeline(
    args: GetPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineBlueprintCommand}
   */
  getPipelineBlueprint(
    args: GetPipelineBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineBlueprintCommandOutput>;
  getPipelineBlueprint(
    args: GetPipelineBlueprintCommandInput,
    cb: (err: any, data?: GetPipelineBlueprintCommandOutput) => void
  ): void;
  getPipelineBlueprint(
    args: GetPipelineBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineChangeProgressCommand}
   */
  getPipelineChangeProgress(
    args: GetPipelineChangeProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineChangeProgressCommandOutput>;
  getPipelineChangeProgress(
    args: GetPipelineChangeProgressCommandInput,
    cb: (err: any, data?: GetPipelineChangeProgressCommandOutput) => void
  ): void;
  getPipelineChangeProgress(
    args: GetPipelineChangeProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineChangeProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineBlueprintsCommand}
   */
  listPipelineBlueprints(
    args: ListPipelineBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineBlueprintsCommandOutput>;
  listPipelineBlueprints(
    args: ListPipelineBlueprintsCommandInput,
    cb: (err: any, data?: ListPipelineBlueprintsCommandOutput) => void
  ): void;
  listPipelineBlueprints(
    args: ListPipelineBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineBlueprintsCommandOutput) => void
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
   * @see {@link StartPipelineCommand}
   */
  startPipeline(args: StartPipelineCommandInput, options?: __HttpHandlerOptions): Promise<StartPipelineCommandOutput>;
  startPipeline(args: StartPipelineCommandInput, cb: (err: any, data?: StartPipelineCommandOutput) => void): void;
  startPipeline(
    args: StartPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPipelineCommand}
   */
  stopPipeline(args: StopPipelineCommandInput, options?: __HttpHandlerOptions): Promise<StopPipelineCommandOutput>;
  stopPipeline(args: StopPipelineCommandInput, cb: (err: any, data?: StopPipelineCommandOutput) => void): void;
  stopPipeline(
    args: StopPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipelineCommandOutput) => void
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
   * @see {@link ValidatePipelineCommand}
   */
  validatePipeline(
    args: ValidatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePipelineCommandOutput>;
  validatePipeline(
    args: ValidatePipelineCommandInput,
    cb: (err: any, data?: ValidatePipelineCommandOutput) => void
  ): void;
  validatePipeline(
    args: ValidatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePipelineCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Use the Amazon OpenSearch Ingestion API to create and manage ingestion pipelines. OpenSearch Ingestion is a
 *    fully managed data collector that delivers real-time log and trace data to OpenSearch Service domains. For more information, see
 *    <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ingestion.html">Getting data into your cluster using OpenSearch Ingestion</a>.</p>
 */
export class OSIS extends OSISClient implements OSIS {}
createAggregatedClient(commands, OSIS);
