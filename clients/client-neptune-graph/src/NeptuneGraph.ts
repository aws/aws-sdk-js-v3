// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CancelExportTaskCommand,
} from "./commands/CancelExportTaskCommand";
import {
  type CancelImportTaskCommandInput,
  type CancelImportTaskCommandOutput,
  CancelImportTaskCommand,
} from "./commands/CancelImportTaskCommand";
import {
  type CancelQueryCommandInput,
  type CancelQueryCommandOutput,
  CancelQueryCommand,
} from "./commands/CancelQueryCommand";
import {
  type CreateGraphCommandInput,
  type CreateGraphCommandOutput,
  CreateGraphCommand,
} from "./commands/CreateGraphCommand";
import {
  type CreateGraphSnapshotCommandInput,
  type CreateGraphSnapshotCommandOutput,
  CreateGraphSnapshotCommand,
} from "./commands/CreateGraphSnapshotCommand";
import {
  type CreateGraphUsingImportTaskCommandInput,
  type CreateGraphUsingImportTaskCommandOutput,
  CreateGraphUsingImportTaskCommand,
} from "./commands/CreateGraphUsingImportTaskCommand";
import {
  type CreatePrivateGraphEndpointCommandInput,
  type CreatePrivateGraphEndpointCommandOutput,
  CreatePrivateGraphEndpointCommand,
} from "./commands/CreatePrivateGraphEndpointCommand";
import {
  type DeleteGraphCommandInput,
  type DeleteGraphCommandOutput,
  DeleteGraphCommand,
} from "./commands/DeleteGraphCommand";
import {
  type DeleteGraphSnapshotCommandInput,
  type DeleteGraphSnapshotCommandOutput,
  DeleteGraphSnapshotCommand,
} from "./commands/DeleteGraphSnapshotCommand";
import {
  type DeletePrivateGraphEndpointCommandInput,
  type DeletePrivateGraphEndpointCommandOutput,
  DeletePrivateGraphEndpointCommand,
} from "./commands/DeletePrivateGraphEndpointCommand";
import {
  type ExecuteQueryCommandInput,
  type ExecuteQueryCommandOutput,
  ExecuteQueryCommand,
} from "./commands/ExecuteQueryCommand";
import {
  type GetExportTaskCommandInput,
  type GetExportTaskCommandOutput,
  GetExportTaskCommand,
} from "./commands/GetExportTaskCommand";
import { type GetGraphCommandInput, type GetGraphCommandOutput, GetGraphCommand } from "./commands/GetGraphCommand";
import {
  type GetGraphSnapshotCommandInput,
  type GetGraphSnapshotCommandOutput,
  GetGraphSnapshotCommand,
} from "./commands/GetGraphSnapshotCommand";
import {
  type GetGraphSummaryCommandInput,
  type GetGraphSummaryCommandOutput,
  GetGraphSummaryCommand,
} from "./commands/GetGraphSummaryCommand";
import {
  type GetImportTaskCommandInput,
  type GetImportTaskCommandOutput,
  GetImportTaskCommand,
} from "./commands/GetImportTaskCommand";
import {
  type GetPrivateGraphEndpointCommandInput,
  type GetPrivateGraphEndpointCommandOutput,
  GetPrivateGraphEndpointCommand,
} from "./commands/GetPrivateGraphEndpointCommand";
import { type GetQueryCommandInput, type GetQueryCommandOutput, GetQueryCommand } from "./commands/GetQueryCommand";
import {
  type ListExportTasksCommandInput,
  type ListExportTasksCommandOutput,
  ListExportTasksCommand,
} from "./commands/ListExportTasksCommand";
import {
  type ListGraphsCommandInput,
  type ListGraphsCommandOutput,
  ListGraphsCommand,
} from "./commands/ListGraphsCommand";
import {
  type ListGraphSnapshotsCommandInput,
  type ListGraphSnapshotsCommandOutput,
  ListGraphSnapshotsCommand,
} from "./commands/ListGraphSnapshotsCommand";
import {
  type ListImportTasksCommandInput,
  type ListImportTasksCommandOutput,
  ListImportTasksCommand,
} from "./commands/ListImportTasksCommand";
import {
  type ListPrivateGraphEndpointsCommandInput,
  type ListPrivateGraphEndpointsCommandOutput,
  ListPrivateGraphEndpointsCommand,
} from "./commands/ListPrivateGraphEndpointsCommand";
import {
  type ListQueriesCommandInput,
  type ListQueriesCommandOutput,
  ListQueriesCommand,
} from "./commands/ListQueriesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ResetGraphCommandInput,
  type ResetGraphCommandOutput,
  ResetGraphCommand,
} from "./commands/ResetGraphCommand";
import {
  type RestoreGraphFromSnapshotCommandInput,
  type RestoreGraphFromSnapshotCommandOutput,
  RestoreGraphFromSnapshotCommand,
} from "./commands/RestoreGraphFromSnapshotCommand";
import {
  type StartExportTaskCommandInput,
  type StartExportTaskCommandOutput,
  StartExportTaskCommand,
} from "./commands/StartExportTaskCommand";
import {
  type StartGraphCommandInput,
  type StartGraphCommandOutput,
  StartGraphCommand,
} from "./commands/StartGraphCommand";
import {
  type StartImportTaskCommandInput,
  type StartImportTaskCommandOutput,
  StartImportTaskCommand,
} from "./commands/StartImportTaskCommand";
import { type StopGraphCommandInput, type StopGraphCommandOutput, StopGraphCommand } from "./commands/StopGraphCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateGraphCommandInput,
  type UpdateGraphCommandOutput,
  UpdateGraphCommand,
} from "./commands/UpdateGraphCommand";
import { NeptuneGraphClient } from "./NeptuneGraphClient";
import { paginateListExportTasks } from "./pagination/ListExportTasksPaginator";
import { paginateListGraphSnapshots } from "./pagination/ListGraphSnapshotsPaginator";
import { paginateListGraphs } from "./pagination/ListGraphsPaginator";
import { paginateListImportTasks } from "./pagination/ListImportTasksPaginator";
import { paginateListPrivateGraphEndpoints } from "./pagination/ListPrivateGraphEndpointsPaginator";
import { waitUntilExportTaskCancelled } from "./waiters/waitForExportTaskCancelled";
import { waitUntilExportTaskSuccessful } from "./waiters/waitForExportTaskSuccessful";
import { waitUntilGraphAvailable } from "./waiters/waitForGraphAvailable";
import { waitUntilGraphDeleted } from "./waiters/waitForGraphDeleted";
import { waitUntilGraphSnapshotAvailable } from "./waiters/waitForGraphSnapshotAvailable";
import { waitUntilGraphSnapshotDeleted } from "./waiters/waitForGraphSnapshotDeleted";
import { waitUntilGraphStopped } from "./waiters/waitForGraphStopped";
import { waitUntilImportTaskCancelled } from "./waiters/waitForImportTaskCancelled";
import { waitUntilImportTaskSuccessful } from "./waiters/waitForImportTaskSuccessful";
import { waitUntilPrivateGraphEndpointAvailable } from "./waiters/waitForPrivateGraphEndpointAvailable";
import { waitUntilPrivateGraphEndpointDeleted } from "./waiters/waitForPrivateGraphEndpointDeleted";

const commands = {
  CancelExportTaskCommand,
  CancelImportTaskCommand,
  CancelQueryCommand,
  CreateGraphCommand,
  CreateGraphSnapshotCommand,
  CreateGraphUsingImportTaskCommand,
  CreatePrivateGraphEndpointCommand,
  DeleteGraphCommand,
  DeleteGraphSnapshotCommand,
  DeletePrivateGraphEndpointCommand,
  ExecuteQueryCommand,
  GetExportTaskCommand,
  GetGraphCommand,
  GetGraphSnapshotCommand,
  GetGraphSummaryCommand,
  GetImportTaskCommand,
  GetPrivateGraphEndpointCommand,
  GetQueryCommand,
  ListExportTasksCommand,
  ListGraphsCommand,
  ListGraphSnapshotsCommand,
  ListImportTasksCommand,
  ListPrivateGraphEndpointsCommand,
  ListQueriesCommand,
  ListTagsForResourceCommand,
  ResetGraphCommand,
  RestoreGraphFromSnapshotCommand,
  StartExportTaskCommand,
  StartGraphCommand,
  StartImportTaskCommand,
  StopGraphCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGraphCommand,
};
const paginators = {
  paginateListExportTasks,
  paginateListGraphs,
  paginateListGraphSnapshots,
  paginateListImportTasks,
  paginateListPrivateGraphEndpoints,
};
const waiters = {
  waitUntilExportTaskSuccessful,
  waitUntilExportTaskCancelled,
  waitUntilGraphAvailable,
  waitUntilGraphDeleted,
  waitUntilGraphStopped,
  waitUntilGraphSnapshotAvailable,
  waitUntilGraphSnapshotDeleted,
  waitUntilImportTaskSuccessful,
  waitUntilImportTaskCancelled,
  waitUntilPrivateGraphEndpointAvailable,
  waitUntilPrivateGraphEndpointDeleted,
};

export interface NeptuneGraph {
  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

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
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelQueryCommandOutput>;
  cancelQuery(
    args: CancelQueryCommandInput,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;
  cancelQuery(
    args: CancelQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphCommand}
   */
  createGraph(
    args: CreateGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphCommandOutput>;
  createGraph(
    args: CreateGraphCommandInput,
    cb: (err: any, data?: CreateGraphCommandOutput) => void
  ): void;
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
  deleteGraph(
    args: DeleteGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGraphCommandOutput>;
  deleteGraph(
    args: DeleteGraphCommandInput,
    cb: (err: any, data?: DeleteGraphCommandOutput) => void
  ): void;
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
   * @see {@link ExecuteQueryCommand}
   */
  executeQuery(
    args: ExecuteQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteQueryCommandOutput>;
  executeQuery(
    args: ExecuteQueryCommandInput,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;
  executeQuery(
    args: ExecuteQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportTaskCommand}
   */
  getExportTask(
    args: GetExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportTaskCommandOutput>;
  getExportTask(
    args: GetExportTaskCommandInput,
    cb: (err: any, data?: GetExportTaskCommandOutput) => void
  ): void;
  getExportTask(
    args: GetExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphCommand}
   */
  getGraph(
    args: GetGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGraphCommandOutput>;
  getGraph(
    args: GetGraphCommandInput,
    cb: (err: any, data?: GetGraphCommandOutput) => void
  ): void;
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
   * @see {@link GetGraphSummaryCommand}
   */
  getGraphSummary(
    args: GetGraphSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGraphSummaryCommandOutput>;
  getGraphSummary(
    args: GetGraphSummaryCommandInput,
    cb: (err: any, data?: GetGraphSummaryCommandOutput) => void
  ): void;
  getGraphSummary(
    args: GetGraphSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportTaskCommand}
   */
  getImportTask(
    args: GetImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportTaskCommandOutput>;
  getImportTask(
    args: GetImportTaskCommandInput,
    cb: (err: any, data?: GetImportTaskCommandOutput) => void
  ): void;
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
   * @see {@link GetQueryCommand}
   */
  getQuery(
    args: GetQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryCommandOutput>;
  getQuery(
    args: GetQueryCommandInput,
    cb: (err: any, data?: GetQueryCommandOutput) => void
  ): void;
  getQuery(
    args: GetQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportTasksCommand}
   */
  listExportTasks(): Promise<ListExportTasksCommandOutput>;
  listExportTasks(
    args: ListExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportTasksCommandOutput>;
  listExportTasks(
    args: ListExportTasksCommandInput,
    cb: (err: any, data?: ListExportTasksCommandOutput) => void
  ): void;
  listExportTasks(
    args: ListExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphsCommand}
   */
  listGraphs(): Promise<ListGraphsCommandOutput>;
  listGraphs(
    args: ListGraphsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGraphsCommandOutput>;
  listGraphs(
    args: ListGraphsCommandInput,
    cb: (err: any, data?: ListGraphsCommandOutput) => void
  ): void;
  listGraphs(
    args: ListGraphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphSnapshotsCommand}
   */
  listGraphSnapshots(): Promise<ListGraphSnapshotsCommandOutput>;
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
  listImportTasks(): Promise<ListImportTasksCommandOutput>;
  listImportTasks(
    args: ListImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportTasksCommandOutput>;
  listImportTasks(
    args: ListImportTasksCommandInput,
    cb: (err: any, data?: ListImportTasksCommandOutput) => void
  ): void;
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
   * @see {@link ListQueriesCommand}
   */
  listQueries(
    args: ListQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueriesCommandOutput>;
  listQueries(
    args: ListQueriesCommandInput,
    cb: (err: any, data?: ListQueriesCommandOutput) => void
  ): void;
  listQueries(
    args: ListQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueriesCommandOutput) => void
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
  resetGraph(
    args: ResetGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetGraphCommandOutput>;
  resetGraph(
    args: ResetGraphCommandInput,
    cb: (err: any, data?: ResetGraphCommandOutput) => void
  ): void;
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
   * @see {@link StartExportTaskCommand}
   */
  startExportTask(
    args: StartExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportTaskCommandOutput>;
  startExportTask(
    args: StartExportTaskCommandInput,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;
  startExportTask(
    args: StartExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartGraphCommand}
   */
  startGraph(
    args: StartGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGraphCommandOutput>;
  startGraph(
    args: StartGraphCommandInput,
    cb: (err: any, data?: StartGraphCommandOutput) => void
  ): void;
  startGraph(
    args: StartGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportTaskCommand}
   */
  startImportTask(
    args: StartImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportTaskCommandOutput>;
  startImportTask(
    args: StartImportTaskCommandInput,
    cb: (err: any, data?: StartImportTaskCommandOutput) => void
  ): void;
  startImportTask(
    args: StartImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopGraphCommand}
   */
  stopGraph(
    args: StopGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopGraphCommandOutput>;
  stopGraph(
    args: StopGraphCommandInput,
    cb: (err: any, data?: StopGraphCommandOutput) => void
  ): void;
  stopGraph(
    args: StopGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopGraphCommandOutput) => void
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
   * @see {@link UpdateGraphCommand}
   */
  updateGraph(
    args: UpdateGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGraphCommandOutput>;
  updateGraph(
    args: UpdateGraphCommandInput,
    cb: (err: any, data?: UpdateGraphCommandOutput) => void
  ): void;
  updateGraph(
    args: UpdateGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportTasksCommandOutput}.
   */
  paginateListExportTasks(
    args?: ListExportTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportTasksCommandOutput>;

  /**
   * @see {@link ListGraphsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGraphsCommandOutput}.
   */
  paginateListGraphs(
    args?: ListGraphsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGraphsCommandOutput>;

  /**
   * @see {@link ListGraphSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGraphSnapshotsCommandOutput}.
   */
  paginateListGraphSnapshots(
    args?: ListGraphSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGraphSnapshotsCommandOutput>;

  /**
   * @see {@link ListImportTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportTasksCommandOutput}.
   */
  paginateListImportTasks(
    args?: ListImportTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportTasksCommandOutput>;

  /**
   * @see {@link ListPrivateGraphEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrivateGraphEndpointsCommandOutput}.
   */
  paginateListPrivateGraphEndpoints(
    args: ListPrivateGraphEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrivateGraphEndpointsCommandOutput>;

  /**
   * @see {@link GetExportTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilExportTaskSuccessful(
    args: GetExportTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetExportTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilExportTaskCancelled(
    args: GetExportTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetGraphCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGraphAvailable(
    args: GetGraphCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetGraphCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGraphDeleted(
    args: GetGraphCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetGraphCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGraphStopped(
    args: GetGraphCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetGraphSnapshotCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGraphSnapshotAvailable(
    args: GetGraphSnapshotCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetGraphSnapshotCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGraphSnapshotDeleted(
    args: GetGraphSnapshotCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetImportTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilImportTaskSuccessful(
    args: GetImportTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetImportTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilImportTaskCancelled(
    args: GetImportTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPrivateGraphEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPrivateGraphEndpointAvailable(
    args: GetPrivateGraphEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPrivateGraphEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPrivateGraphEndpointDeleted(
    args: GetPrivateGraphEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NeptuneGraph>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Neptune Analytics is a new analytics database engine for Amazon Neptune that helps customers get to insights faster by quickly processing large amounts of graph data, invoking popular graph analytic algorithms in low-latency queries, and getting analytics results in seconds.</p>
 * @public
 */
export class NeptuneGraph extends NeptuneGraphClient implements NeptuneGraph {}
createAggregatedClient(commands, NeptuneGraph, { paginators, waiters });
