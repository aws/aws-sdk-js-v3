// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateMonitorCommandInput,
  type CreateMonitorCommandOutput,
  CreateMonitorCommand,
} from "./commands/CreateMonitorCommand";
import {
  type CreateScopeCommandInput,
  type CreateScopeCommandOutput,
  CreateScopeCommand,
} from "./commands/CreateScopeCommand";
import {
  type DeleteMonitorCommandInput,
  type DeleteMonitorCommandOutput,
  DeleteMonitorCommand,
} from "./commands/DeleteMonitorCommand";
import {
  type DeleteScopeCommandInput,
  type DeleteScopeCommandOutput,
  DeleteScopeCommand,
} from "./commands/DeleteScopeCommand";
import {
  type GetMonitorCommandInput,
  type GetMonitorCommandOutput,
  GetMonitorCommand,
} from "./commands/GetMonitorCommand";
import {
  type GetQueryResultsMonitorTopContributorsCommandInput,
  type GetQueryResultsMonitorTopContributorsCommandOutput,
  GetQueryResultsMonitorTopContributorsCommand,
} from "./commands/GetQueryResultsMonitorTopContributorsCommand";
import {
  type GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  type GetQueryResultsWorkloadInsightsTopContributorsCommandOutput,
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
} from "./commands/GetQueryResultsWorkloadInsightsTopContributorsCommand";
import {
  type GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  type GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
} from "./commands/GetQueryResultsWorkloadInsightsTopContributorsDataCommand";
import {
  type GetQueryStatusMonitorTopContributorsCommandInput,
  type GetQueryStatusMonitorTopContributorsCommandOutput,
  GetQueryStatusMonitorTopContributorsCommand,
} from "./commands/GetQueryStatusMonitorTopContributorsCommand";
import {
  type GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
  type GetQueryStatusWorkloadInsightsTopContributorsCommandOutput,
  GetQueryStatusWorkloadInsightsTopContributorsCommand,
} from "./commands/GetQueryStatusWorkloadInsightsTopContributorsCommand";
import {
  type GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
  type GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput,
  GetQueryStatusWorkloadInsightsTopContributorsDataCommand,
} from "./commands/GetQueryStatusWorkloadInsightsTopContributorsDataCommand";
import { type GetScopeCommandInput, type GetScopeCommandOutput, GetScopeCommand } from "./commands/GetScopeCommand";
import {
  type ListMonitorsCommandInput,
  type ListMonitorsCommandOutput,
  ListMonitorsCommand,
} from "./commands/ListMonitorsCommand";
import {
  type ListScopesCommandInput,
  type ListScopesCommandOutput,
  ListScopesCommand,
} from "./commands/ListScopesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartQueryMonitorTopContributorsCommandInput,
  type StartQueryMonitorTopContributorsCommandOutput,
  StartQueryMonitorTopContributorsCommand,
} from "./commands/StartQueryMonitorTopContributorsCommand";
import {
  type StartQueryWorkloadInsightsTopContributorsCommandInput,
  type StartQueryWorkloadInsightsTopContributorsCommandOutput,
  StartQueryWorkloadInsightsTopContributorsCommand,
} from "./commands/StartQueryWorkloadInsightsTopContributorsCommand";
import {
  type StartQueryWorkloadInsightsTopContributorsDataCommandInput,
  type StartQueryWorkloadInsightsTopContributorsDataCommandOutput,
  StartQueryWorkloadInsightsTopContributorsDataCommand,
} from "./commands/StartQueryWorkloadInsightsTopContributorsDataCommand";
import {
  type StopQueryMonitorTopContributorsCommandInput,
  type StopQueryMonitorTopContributorsCommandOutput,
  StopQueryMonitorTopContributorsCommand,
} from "./commands/StopQueryMonitorTopContributorsCommand";
import {
  type StopQueryWorkloadInsightsTopContributorsCommandInput,
  type StopQueryWorkloadInsightsTopContributorsCommandOutput,
  StopQueryWorkloadInsightsTopContributorsCommand,
} from "./commands/StopQueryWorkloadInsightsTopContributorsCommand";
import {
  type StopQueryWorkloadInsightsTopContributorsDataCommandInput,
  type StopQueryWorkloadInsightsTopContributorsDataCommandOutput,
  StopQueryWorkloadInsightsTopContributorsDataCommand,
} from "./commands/StopQueryWorkloadInsightsTopContributorsDataCommand";
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
  type UpdateMonitorCommandInput,
  type UpdateMonitorCommandOutput,
  UpdateMonitorCommand,
} from "./commands/UpdateMonitorCommand";
import {
  type UpdateScopeCommandInput,
  type UpdateScopeCommandOutput,
  UpdateScopeCommand,
} from "./commands/UpdateScopeCommand";
import { NetworkFlowMonitorClient } from "./NetworkFlowMonitorClient";
import {
  paginateGetQueryResultsMonitorTopContributors,
} from "./pagination/GetQueryResultsMonitorTopContributorsPaginator";
import {
  paginateGetQueryResultsWorkloadInsightsTopContributorsData,
} from "./pagination/GetQueryResultsWorkloadInsightsTopContributorsDataPaginator";
import {
  paginateGetQueryResultsWorkloadInsightsTopContributors,
} from "./pagination/GetQueryResultsWorkloadInsightsTopContributorsPaginator";
import { paginateListMonitors } from "./pagination/ListMonitorsPaginator";
import { paginateListScopes } from "./pagination/ListScopesPaginator";

const commands = {
  CreateMonitorCommand,
  CreateScopeCommand,
  DeleteMonitorCommand,
  DeleteScopeCommand,
  GetMonitorCommand,
  GetQueryResultsMonitorTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
  GetQueryStatusMonitorTopContributorsCommand,
  GetQueryStatusWorkloadInsightsTopContributorsCommand,
  GetQueryStatusWorkloadInsightsTopContributorsDataCommand,
  GetScopeCommand,
  ListMonitorsCommand,
  ListScopesCommand,
  ListTagsForResourceCommand,
  StartQueryMonitorTopContributorsCommand,
  StartQueryWorkloadInsightsTopContributorsCommand,
  StartQueryWorkloadInsightsTopContributorsDataCommand,
  StopQueryMonitorTopContributorsCommand,
  StopQueryWorkloadInsightsTopContributorsCommand,
  StopQueryWorkloadInsightsTopContributorsDataCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMonitorCommand,
  UpdateScopeCommand,
};
const paginators = {
  paginateGetQueryResultsMonitorTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributorsData,
  paginateListMonitors,
  paginateListScopes,
};

/**
 * @public
 */
export interface NetworkFlowMonitorRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface NetworkFlowMonitor {
  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(
    args: CreateMonitorCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<CreateMonitorCommandOutput>;
  createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScopeCommand}
   */
  createScope(
    args: CreateScopeCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<CreateScopeCommandOutput>;
  createScope(
    args: CreateScopeCommandInput,
    cb: (err: any, data?: CreateScopeCommandOutput) => void
  ): void;
  createScope(
    args: CreateScopeCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: CreateScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScopeCommand}
   */
  deleteScope(
    args: DeleteScopeCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<DeleteScopeCommandOutput>;
  deleteScope(
    args: DeleteScopeCommandInput,
    cb: (err: any, data?: DeleteScopeCommandOutput) => void
  ): void;
  deleteScope(
    args: DeleteScopeCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: DeleteScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorCommand}
   */
  getMonitor(
    args: GetMonitorCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetMonitorCommandOutput>;
  getMonitor(
    args: GetMonitorCommandInput,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;
  getMonitor(
    args: GetMonitorCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsMonitorTopContributorsCommand}
   */
  getQueryResultsMonitorTopContributors(
    args: GetQueryResultsMonitorTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryResultsMonitorTopContributorsCommandOutput>;
  getQueryResultsMonitorTopContributors(
    args: GetQueryResultsMonitorTopContributorsCommandInput,
    cb: (err: any, data?: GetQueryResultsMonitorTopContributorsCommandOutput) => void
  ): void;
  getQueryResultsMonitorTopContributors(
    args: GetQueryResultsMonitorTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryResultsMonitorTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}
   */
  getQueryResultsWorkloadInsightsTopContributors(
    args: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryResultsWorkloadInsightsTopContributorsCommandOutput>;
  getQueryResultsWorkloadInsightsTopContributors(
    args: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    cb: (err: any, data?: GetQueryResultsWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;
  getQueryResultsWorkloadInsightsTopContributors(
    args: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryResultsWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommand}
   */
  getQueryResultsWorkloadInsightsTopContributorsData(
    args: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput>;
  getQueryResultsWorkloadInsightsTopContributorsData(
    args: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
    cb: (err: any, data?: GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;
  getQueryResultsWorkloadInsightsTopContributorsData(
    args: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryStatusMonitorTopContributorsCommand}
   */
  getQueryStatusMonitorTopContributors(
    args: GetQueryStatusMonitorTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryStatusMonitorTopContributorsCommandOutput>;
  getQueryStatusMonitorTopContributors(
    args: GetQueryStatusMonitorTopContributorsCommandInput,
    cb: (err: any, data?: GetQueryStatusMonitorTopContributorsCommandOutput) => void
  ): void;
  getQueryStatusMonitorTopContributors(
    args: GetQueryStatusMonitorTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryStatusMonitorTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryStatusWorkloadInsightsTopContributorsCommand}
   */
  getQueryStatusWorkloadInsightsTopContributors(
    args: GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryStatusWorkloadInsightsTopContributorsCommandOutput>;
  getQueryStatusWorkloadInsightsTopContributors(
    args: GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
    cb: (err: any, data?: GetQueryStatusWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;
  getQueryStatusWorkloadInsightsTopContributors(
    args: GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryStatusWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommand}
   */
  getQueryStatusWorkloadInsightsTopContributorsData(
    args: GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput>;
  getQueryStatusWorkloadInsightsTopContributorsData(
    args: GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
    cb: (err: any, data?: GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;
  getQueryStatusWorkloadInsightsTopContributorsData(
    args: GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScopeCommand}
   */
  getScope(
    args: GetScopeCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<GetScopeCommandOutput>;
  getScope(
    args: GetScopeCommandInput,
    cb: (err: any, data?: GetScopeCommandOutput) => void
  ): void;
  getScope(
    args: GetScopeCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: GetScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScopesCommand}
   */
  listScopes(): Promise<ListScopesCommandOutput>;
  listScopes(
    args: ListScopesCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<ListScopesCommandOutput>;
  listScopes(
    args: ListScopesCommandInput,
    cb: (err: any, data?: ListScopesCommandOutput) => void
  ): void;
  listScopes(
    args: ListScopesCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: ListScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryMonitorTopContributorsCommand}
   */
  startQueryMonitorTopContributors(
    args: StartQueryMonitorTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StartQueryMonitorTopContributorsCommandOutput>;
  startQueryMonitorTopContributors(
    args: StartQueryMonitorTopContributorsCommandInput,
    cb: (err: any, data?: StartQueryMonitorTopContributorsCommandOutput) => void
  ): void;
  startQueryMonitorTopContributors(
    args: StartQueryMonitorTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StartQueryMonitorTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryWorkloadInsightsTopContributorsCommand}
   */
  startQueryWorkloadInsightsTopContributors(
    args: StartQueryWorkloadInsightsTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StartQueryWorkloadInsightsTopContributorsCommandOutput>;
  startQueryWorkloadInsightsTopContributors(
    args: StartQueryWorkloadInsightsTopContributorsCommandInput,
    cb: (err: any, data?: StartQueryWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;
  startQueryWorkloadInsightsTopContributors(
    args: StartQueryWorkloadInsightsTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StartQueryWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryWorkloadInsightsTopContributorsDataCommand}
   */
  startQueryWorkloadInsightsTopContributorsData(
    args: StartQueryWorkloadInsightsTopContributorsDataCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StartQueryWorkloadInsightsTopContributorsDataCommandOutput>;
  startQueryWorkloadInsightsTopContributorsData(
    args: StartQueryWorkloadInsightsTopContributorsDataCommandInput,
    cb: (err: any, data?: StartQueryWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;
  startQueryWorkloadInsightsTopContributorsData(
    args: StartQueryWorkloadInsightsTopContributorsDataCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StartQueryWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryMonitorTopContributorsCommand}
   */
  stopQueryMonitorTopContributors(
    args: StopQueryMonitorTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StopQueryMonitorTopContributorsCommandOutput>;
  stopQueryMonitorTopContributors(
    args: StopQueryMonitorTopContributorsCommandInput,
    cb: (err: any, data?: StopQueryMonitorTopContributorsCommandOutput) => void
  ): void;
  stopQueryMonitorTopContributors(
    args: StopQueryMonitorTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StopQueryMonitorTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryWorkloadInsightsTopContributorsCommand}
   */
  stopQueryWorkloadInsightsTopContributors(
    args: StopQueryWorkloadInsightsTopContributorsCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StopQueryWorkloadInsightsTopContributorsCommandOutput>;
  stopQueryWorkloadInsightsTopContributors(
    args: StopQueryWorkloadInsightsTopContributorsCommandInput,
    cb: (err: any, data?: StopQueryWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;
  stopQueryWorkloadInsightsTopContributors(
    args: StopQueryWorkloadInsightsTopContributorsCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StopQueryWorkloadInsightsTopContributorsCommandOutput) => void
  ): void;

  /**
   * @see {@link StopQueryWorkloadInsightsTopContributorsDataCommand}
   */
  stopQueryWorkloadInsightsTopContributorsData(
    args: StopQueryWorkloadInsightsTopContributorsDataCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<StopQueryWorkloadInsightsTopContributorsDataCommandOutput>;
  stopQueryWorkloadInsightsTopContributorsData(
    args: StopQueryWorkloadInsightsTopContributorsDataCommandInput,
    cb: (err: any, data?: StopQueryWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;
  stopQueryWorkloadInsightsTopContributorsData(
    args: StopQueryWorkloadInsightsTopContributorsDataCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: StopQueryWorkloadInsightsTopContributorsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitorCommand}
   */
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<UpdateMonitorCommandOutput>;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScopeCommand}
   */
  updateScope(
    args: UpdateScopeCommandInput,
    options?: NetworkFlowMonitorRequestOptions
  ): Promise<UpdateScopeCommandOutput>;
  updateScope(
    args: UpdateScopeCommandInput,
    cb: (err: any, data?: UpdateScopeCommandOutput) => void
  ): void;
  updateScope(
    args: UpdateScopeCommandInput,
    options: NetworkFlowMonitorRequestOptions,
    cb: (err: any, data?: UpdateScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsMonitorTopContributorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetQueryResultsMonitorTopContributorsCommandOutput}.
   */
  paginateGetQueryResultsMonitorTopContributors(
    args: GetQueryResultsMonitorTopContributorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetQueryResultsMonitorTopContributorsCommandOutput>;

  /**
   * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetQueryResultsWorkloadInsightsTopContributorsCommandOutput}.
   */
  paginateGetQueryResultsWorkloadInsightsTopContributors(
    args: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetQueryResultsWorkloadInsightsTopContributorsCommandOutput>;

  /**
   * @see {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput}.
   */
  paginateGetQueryResultsWorkloadInsightsTopContributorsData(
    args: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput>;

  /**
   * @see {@link ListMonitorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMonitorsCommandOutput}.
   */
  paginateListMonitors(
    args?: ListMonitorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMonitorsCommandOutput>;

  /**
   * @see {@link ListScopesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScopesCommandOutput}.
   */
  paginateListScopes(
    args?: ListScopesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScopesCommandOutput>;
}

/**
 * <p>Network Flow Monitor is a feature of Amazon CloudWatch Network Monitoring that provides visibility into the performance of network flows for your Amazon Web Services workloads, between instances in subnets, as well as to and from Amazon Web Services. Lightweight agents that you install on the instances capture performance metrics for your network flows, such as packet loss and latency, and send them to the Network Flow Monitor backend. Then, you can view and analyze metrics from the top contributors for each metric type, to help troubleshoot issues.</p> <p>In addition, when you create a monitor, Network Flow Monitor provides a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose. By using this value, you can independently determine if the Amazon Web Services network is impacting your workload during a specific time frame, to help you focus troubleshooting efforts.</p> <p>To learn more about Network Flow Monitor, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-NetworkFlowMonitor.html">Network Flow Monitor User Guide</a> in the Amazon CloudWatch User Guide.</p>
 * @public
 */
export class NetworkFlowMonitor extends NetworkFlowMonitorClient implements NetworkFlowMonitor {}
createAggregatedClient(commands, NetworkFlowMonitor, { paginators });
