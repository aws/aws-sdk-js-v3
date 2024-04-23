// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelImportTaskCommand,
  CancelImportTaskCommandInput,
  CancelImportTaskCommandOutput,
} from "./commands/CancelImportTaskCommand";
import { CreateGraphCommand, CreateGraphCommandInput, CreateGraphCommandOutput } from "./commands/CreateGraphCommand";
import {
  CreateGraphSnapshotCommand,
  CreateGraphSnapshotCommandInput,
  CreateGraphSnapshotCommandOutput,
} from "./commands/CreateGraphSnapshotCommand";
import {
  CreateGraphUsingImportTaskCommand,
  CreateGraphUsingImportTaskCommandInput,
  CreateGraphUsingImportTaskCommandOutput,
} from "./commands/CreateGraphUsingImportTaskCommand";
import {
  CreatePrivateGraphEndpointCommand,
  CreatePrivateGraphEndpointCommandInput,
  CreatePrivateGraphEndpointCommandOutput,
} from "./commands/CreatePrivateGraphEndpointCommand";
import { DeleteGraphCommand, DeleteGraphCommandInput, DeleteGraphCommandOutput } from "./commands/DeleteGraphCommand";
import {
  DeleteGraphSnapshotCommand,
  DeleteGraphSnapshotCommandInput,
  DeleteGraphSnapshotCommandOutput,
} from "./commands/DeleteGraphSnapshotCommand";
import {
  DeletePrivateGraphEndpointCommand,
  DeletePrivateGraphEndpointCommandInput,
  DeletePrivateGraphEndpointCommandOutput,
} from "./commands/DeletePrivateGraphEndpointCommand";
import { GetGraphCommand, GetGraphCommandInput, GetGraphCommandOutput } from "./commands/GetGraphCommand";
import {
  GetGraphSnapshotCommand,
  GetGraphSnapshotCommandInput,
  GetGraphSnapshotCommandOutput,
} from "./commands/GetGraphSnapshotCommand";
import {
  GetImportTaskCommand,
  GetImportTaskCommandInput,
  GetImportTaskCommandOutput,
} from "./commands/GetImportTaskCommand";
import {
  GetPrivateGraphEndpointCommand,
  GetPrivateGraphEndpointCommandInput,
  GetPrivateGraphEndpointCommandOutput,
} from "./commands/GetPrivateGraphEndpointCommand";
import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "./commands/ListGraphsCommand";
import {
  ListGraphSnapshotsCommand,
  ListGraphSnapshotsCommandInput,
  ListGraphSnapshotsCommandOutput,
} from "./commands/ListGraphSnapshotsCommand";
import {
  ListImportTasksCommand,
  ListImportTasksCommandInput,
  ListImportTasksCommandOutput,
} from "./commands/ListImportTasksCommand";
import {
  ListPrivateGraphEndpointsCommand,
  ListPrivateGraphEndpointsCommandInput,
  ListPrivateGraphEndpointsCommandOutput,
} from "./commands/ListPrivateGraphEndpointsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ResetGraphCommand, ResetGraphCommandInput, ResetGraphCommandOutput } from "./commands/ResetGraphCommand";
import {
  RestoreGraphFromSnapshotCommand,
  RestoreGraphFromSnapshotCommandInput,
  RestoreGraphFromSnapshotCommandOutput,
} from "./commands/RestoreGraphFromSnapshotCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateGraphCommand, UpdateGraphCommandInput, UpdateGraphCommandOutput } from "./commands/UpdateGraphCommand";
import { NeptuneGraphClient, NeptuneGraphClientConfig } from "./NeptuneGraphClient";

const commands = {
  CancelImportTaskCommand,
  CreateGraphCommand,
  CreateGraphSnapshotCommand,
  CreateGraphUsingImportTaskCommand,
  CreatePrivateGraphEndpointCommand,
  DeleteGraphCommand,
  DeleteGraphSnapshotCommand,
  DeletePrivateGraphEndpointCommand,
  GetGraphCommand,
  GetGraphSnapshotCommand,
  GetImportTaskCommand,
  GetPrivateGraphEndpointCommand,
  ListGraphsCommand,
  ListGraphSnapshotsCommand,
  ListImportTasksCommand,
  ListPrivateGraphEndpointsCommand,
  ListTagsForResourceCommand,
  ResetGraphCommand,
  RestoreGraphFromSnapshotCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGraphCommand,
};

export interface NeptuneGraph {
  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImportTaskCommandOutput>;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphCommand}
   */
  createGraph(args: CreateGraphCommandInput, options?: __HttpHandlerOptions): Promise<CreateGraphCommandOutput>;
  createGraph(args: CreateGraphCommandInput, cb: (err: any, data?: CreateGraphCommandOutput) => void): void;
  createGraph(
    args: CreateGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphSnapshotCommand}
   */
  createGraphSnapshot(
    args: CreateGraphSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphSnapshotCommandOutput>;
  createGraphSnapshot(
    args: CreateGraphSnapshotCommandInput,
    cb: (err: any, data?: CreateGraphSnapshotCommandOutput) => void
  ): void;
  createGraphSnapshot(
    args: CreateGraphSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphUsingImportTaskCommand}
   */
  createGraphUsingImportTask(
    args: CreateGraphUsingImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphUsingImportTaskCommandOutput>;
  createGraphUsingImportTask(
    args: CreateGraphUsingImportTaskCommandInput,
    cb: (err: any, data?: CreateGraphUsingImportTaskCommandOutput) => void
  ): void;
  createGraphUsingImportTask(
    args: CreateGraphUsingImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphUsingImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateGraphEndpointCommand}
   */
  createPrivateGraphEndpoint(
    args: CreatePrivateGraphEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateGraphEndpointCommandOutput>;
  createPrivateGraphEndpoint(
    args: CreatePrivateGraphEndpointCommandInput,
    cb: (err: any, data?: CreatePrivateGraphEndpointCommandOutput) => void
  ): void;
  createPrivateGraphEndpoint(
    args: CreatePrivateGraphEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateGraphEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGraphCommand}
   */
  deleteGraph(args: DeleteGraphCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGraphCommandOutput>;
  deleteGraph(args: DeleteGraphCommandInput, cb: (err: any, data?: DeleteGraphCommandOutput) => void): void;
  deleteGraph(
    args: DeleteGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGraphSnapshotCommand}
   */
  deleteGraphSnapshot(
    args: DeleteGraphSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGraphSnapshotCommandOutput>;
  deleteGraphSnapshot(
    args: DeleteGraphSnapshotCommandInput,
    cb: (err: any, data?: DeleteGraphSnapshotCommandOutput) => void
  ): void;
  deleteGraphSnapshot(
    args: DeleteGraphSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrivateGraphEndpointCommand}
   */
  deletePrivateGraphEndpoint(
    args: DeletePrivateGraphEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrivateGraphEndpointCommandOutput>;
  deletePrivateGraphEndpoint(
    args: DeletePrivateGraphEndpointCommandInput,
    cb: (err: any, data?: DeletePrivateGraphEndpointCommandOutput) => void
  ): void;
  deletePrivateGraphEndpoint(
    args: DeletePrivateGraphEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrivateGraphEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphCommand}
   */
  getGraph(args: GetGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetGraphCommandOutput>;
  getGraph(args: GetGraphCommandInput, cb: (err: any, data?: GetGraphCommandOutput) => void): void;
  getGraph(
    args: GetGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphSnapshotCommand}
   */
  getGraphSnapshot(
    args: GetGraphSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGraphSnapshotCommandOutput>;
  getGraphSnapshot(
    args: GetGraphSnapshotCommandInput,
    cb: (err: any, data?: GetGraphSnapshotCommandOutput) => void
  ): void;
  getGraphSnapshot(
    args: GetGraphSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportTaskCommand}
   */
  getImportTask(args: GetImportTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetImportTaskCommandOutput>;
  getImportTask(args: GetImportTaskCommandInput, cb: (err: any, data?: GetImportTaskCommandOutput) => void): void;
  getImportTask(
    args: GetImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrivateGraphEndpointCommand}
   */
  getPrivateGraphEndpoint(
    args: GetPrivateGraphEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPrivateGraphEndpointCommandOutput>;
  getPrivateGraphEndpoint(
    args: GetPrivateGraphEndpointCommandInput,
    cb: (err: any, data?: GetPrivateGraphEndpointCommandOutput) => void
  ): void;
  getPrivateGraphEndpoint(
    args: GetPrivateGraphEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPrivateGraphEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphsCommand}
   */
  listGraphs(args: ListGraphsCommandInput, options?: __HttpHandlerOptions): Promise<ListGraphsCommandOutput>;
  listGraphs(args: ListGraphsCommandInput, cb: (err: any, data?: ListGraphsCommandOutput) => void): void;
  listGraphs(
    args: ListGraphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphSnapshotsCommand}
   */
  listGraphSnapshots(
    args: ListGraphSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGraphSnapshotsCommandOutput>;
  listGraphSnapshots(
    args: ListGraphSnapshotsCommandInput,
    cb: (err: any, data?: ListGraphSnapshotsCommandOutput) => void
  ): void;
  listGraphSnapshots(
    args: ListGraphSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportTasksCommand}
   */
  listImportTasks(
    args: ListImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportTasksCommandOutput>;
  listImportTasks(args: ListImportTasksCommandInput, cb: (err: any, data?: ListImportTasksCommandOutput) => void): void;
  listImportTasks(
    args: ListImportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivateGraphEndpointsCommand}
   */
  listPrivateGraphEndpoints(
    args: ListPrivateGraphEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrivateGraphEndpointsCommandOutput>;
  listPrivateGraphEndpoints(
    args: ListPrivateGraphEndpointsCommandInput,
    cb: (err: any, data?: ListPrivateGraphEndpointsCommandOutput) => void
  ): void;
  listPrivateGraphEndpoints(
    args: ListPrivateGraphEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrivateGraphEndpointsCommandOutput) => void
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
   * @see {@link ResetGraphCommand}
   */
  resetGraph(args: ResetGraphCommandInput, options?: __HttpHandlerOptions): Promise<ResetGraphCommandOutput>;
  resetGraph(args: ResetGraphCommandInput, cb: (err: any, data?: ResetGraphCommandOutput) => void): void;
  resetGraph(
    args: ResetGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreGraphFromSnapshotCommand}
   */
  restoreGraphFromSnapshot(
    args: RestoreGraphFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreGraphFromSnapshotCommandOutput>;
  restoreGraphFromSnapshot(
    args: RestoreGraphFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreGraphFromSnapshotCommandOutput) => void
  ): void;
  restoreGraphFromSnapshot(
    args: RestoreGraphFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreGraphFromSnapshotCommandOutput) => void
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
   * @see {@link UpdateGraphCommand}
   */
  updateGraph(args: UpdateGraphCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGraphCommandOutput>;
  updateGraph(args: UpdateGraphCommandInput, cb: (err: any, data?: UpdateGraphCommandOutput) => void): void;
  updateGraph(
    args: UpdateGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGraphCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Neptune Analytics is a serverless in-memory graph database service for analytics
 *         that delivers high-performance analytics and real-time queries for any graph type. It
 *         complements the Amazon Neptune Database, an industry-leading managed graph database.</p>
 */
export class NeptuneGraph extends NeptuneGraphClient implements NeptuneGraph {}
createAggregatedClient(commands, NeptuneGraph);
