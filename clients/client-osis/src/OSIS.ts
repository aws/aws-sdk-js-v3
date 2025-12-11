// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  CreatePipelineEndpointCommand,
  CreatePipelineEndpointCommandInput,
  CreatePipelineEndpointCommandOutput,
} from "./commands/CreatePipelineEndpointCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeletePipelineEndpointCommand,
  DeletePipelineEndpointCommandInput,
  DeletePipelineEndpointCommandOutput,
} from "./commands/DeletePipelineEndpointCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
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
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListPipelineBlueprintsCommand,
  ListPipelineBlueprintsCommandInput,
  ListPipelineBlueprintsCommandOutput,
} from "./commands/ListPipelineBlueprintsCommand";
import {
  ListPipelineEndpointConnectionsCommand,
  ListPipelineEndpointConnectionsCommandInput,
  ListPipelineEndpointConnectionsCommandOutput,
} from "./commands/ListPipelineEndpointConnectionsCommand";
import {
  ListPipelineEndpointsCommand,
  ListPipelineEndpointsCommandInput,
  ListPipelineEndpointsCommandOutput,
} from "./commands/ListPipelineEndpointsCommand";
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
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RevokePipelineEndpointConnectionsCommand,
  RevokePipelineEndpointConnectionsCommandInput,
  RevokePipelineEndpointConnectionsCommandOutput,
} from "./commands/RevokePipelineEndpointConnectionsCommand";
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
import { OSISClient } from "./OSISClient";

const commands = {
  CreatePipelineCommand,
  CreatePipelineEndpointCommand,
  DeletePipelineCommand,
  DeletePipelineEndpointCommand,
  DeleteResourcePolicyCommand,
  GetPipelineCommand,
  GetPipelineBlueprintCommand,
  GetPipelineChangeProgressCommand,
  GetResourcePolicyCommand,
  ListPipelineBlueprintsCommand,
  ListPipelineEndpointConnectionsCommand,
  ListPipelineEndpointsCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  RevokePipelineEndpointConnectionsCommand,
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
   * @see {@link CreatePipelineEndpointCommand}
   */
  createPipelineEndpoint(
    args: CreatePipelineEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineEndpointCommandOutput>;
  createPipelineEndpoint(
    args: CreatePipelineEndpointCommandInput,
    cb: (err: any, data?: CreatePipelineEndpointCommandOutput) => void
  ): void;
  createPipelineEndpoint(
    args: CreatePipelineEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineEndpointCommandOutput) => void
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
   * @see {@link DeletePipelineEndpointCommand}
   */
  deletePipelineEndpoint(
    args: DeletePipelineEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineEndpointCommandOutput>;
  deletePipelineEndpoint(
    args: DeletePipelineEndpointCommandInput,
    cb: (err: any, data?: DeletePipelineEndpointCommandOutput) => void
  ): void;
  deletePipelineEndpoint(
    args: DeletePipelineEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
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
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineBlueprintsCommand}
   */
  listPipelineBlueprints(): Promise<ListPipelineBlueprintsCommandOutput>;
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
   * @see {@link ListPipelineEndpointConnectionsCommand}
   */
  listPipelineEndpointConnections(): Promise<ListPipelineEndpointConnectionsCommandOutput>;
  listPipelineEndpointConnections(
    args: ListPipelineEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineEndpointConnectionsCommandOutput>;
  listPipelineEndpointConnections(
    args: ListPipelineEndpointConnectionsCommandInput,
    cb: (err: any, data?: ListPipelineEndpointConnectionsCommandOutput) => void
  ): void;
  listPipelineEndpointConnections(
    args: ListPipelineEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineEndpointConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineEndpointsCommand}
   */
  listPipelineEndpoints(): Promise<ListPipelineEndpointsCommandOutput>;
  listPipelineEndpoints(
    args: ListPipelineEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineEndpointsCommandOutput>;
  listPipelineEndpoints(
    args: ListPipelineEndpointsCommandInput,
    cb: (err: any, data?: ListPipelineEndpointsCommandOutput) => void
  ): void;
  listPipelineEndpoints(
    args: ListPipelineEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(): Promise<ListPipelinesCommandOutput>;
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
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokePipelineEndpointConnectionsCommand}
   */
  revokePipelineEndpointConnections(
    args: RevokePipelineEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokePipelineEndpointConnectionsCommandOutput>;
  revokePipelineEndpointConnections(
    args: RevokePipelineEndpointConnectionsCommandInput,
    cb: (err: any, data?: RevokePipelineEndpointConnectionsCommandOutput) => void
  ): void;
  revokePipelineEndpointConnections(
    args: RevokePipelineEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokePipelineEndpointConnectionsCommandOutput) => void
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
 * <p>Use the Amazon OpenSearch Ingestion API to create and manage ingestion pipelines. OpenSearch Ingestion is a
 *    fully managed data collector that delivers real-time log and trace data to OpenSearch Service domains. For more information, see
 *    <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ingestion.html">Getting data into your cluster using OpenSearch Ingestion</a>.</p>
 * @public
 */
export class OSIS extends OSISClient implements OSIS {}
createAggregatedClient(commands, OSIS);
