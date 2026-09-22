// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchCreateRumMetricDefinitionsCommandInput,
  type BatchCreateRumMetricDefinitionsCommandOutput,
  BatchCreateRumMetricDefinitionsCommand,
} from "./commands/BatchCreateRumMetricDefinitionsCommand";
import {
  type BatchDeleteRumMetricDefinitionsCommandInput,
  type BatchDeleteRumMetricDefinitionsCommandOutput,
  BatchDeleteRumMetricDefinitionsCommand,
} from "./commands/BatchDeleteRumMetricDefinitionsCommand";
import {
  type BatchGetRumMetricDefinitionsCommandInput,
  type BatchGetRumMetricDefinitionsCommandOutput,
  BatchGetRumMetricDefinitionsCommand,
} from "./commands/BatchGetRumMetricDefinitionsCommand";
import {
  type CreateAppMonitorCommandInput,
  type CreateAppMonitorCommandOutput,
  CreateAppMonitorCommand,
} from "./commands/CreateAppMonitorCommand";
import {
  type DeleteAppMonitorCommandInput,
  type DeleteAppMonitorCommandOutput,
  DeleteAppMonitorCommand,
} from "./commands/DeleteAppMonitorCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteRumMetricsDestinationCommandInput,
  type DeleteRumMetricsDestinationCommandOutput,
  DeleteRumMetricsDestinationCommand,
} from "./commands/DeleteRumMetricsDestinationCommand";
import {
  type GetAppMonitorCommandInput,
  type GetAppMonitorCommandOutput,
  GetAppMonitorCommand,
} from "./commands/GetAppMonitorCommand";
import {
  type GetAppMonitorDataCommandInput,
  type GetAppMonitorDataCommandOutput,
  GetAppMonitorDataCommand,
} from "./commands/GetAppMonitorDataCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListAppMonitorsCommandInput,
  type ListAppMonitorsCommandOutput,
  ListAppMonitorsCommand,
} from "./commands/ListAppMonitorsCommand";
import {
  type ListRumMetricsDestinationsCommandInput,
  type ListRumMetricsDestinationsCommandOutput,
  ListRumMetricsDestinationsCommand,
} from "./commands/ListRumMetricsDestinationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type PutRumEventsCommandInput,
  type PutRumEventsCommandOutput,
  PutRumEventsCommand,
} from "./commands/PutRumEventsCommand";
import {
  type PutRumMetricsDestinationCommandInput,
  type PutRumMetricsDestinationCommandOutput,
  PutRumMetricsDestinationCommand,
} from "./commands/PutRumMetricsDestinationCommand";
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
  type UpdateAppMonitorCommandInput,
  type UpdateAppMonitorCommandOutput,
  UpdateAppMonitorCommand,
} from "./commands/UpdateAppMonitorCommand";
import {
  type UpdateRumMetricDefinitionCommandInput,
  type UpdateRumMetricDefinitionCommandOutput,
  UpdateRumMetricDefinitionCommand,
} from "./commands/UpdateRumMetricDefinitionCommand";
import { paginateBatchGetRumMetricDefinitions } from "./pagination/BatchGetRumMetricDefinitionsPaginator";
import { paginateGetAppMonitorData } from "./pagination/GetAppMonitorDataPaginator";
import { paginateListAppMonitors } from "./pagination/ListAppMonitorsPaginator";
import { paginateListRumMetricsDestinations } from "./pagination/ListRumMetricsDestinationsPaginator";
import { RUMClient } from "./RUMClient";

const commands = {
  BatchCreateRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommand,
  CreateAppMonitorCommand,
  DeleteAppMonitorCommand,
  DeleteResourcePolicyCommand,
  DeleteRumMetricsDestinationCommand,
  GetAppMonitorCommand,
  GetAppMonitorDataCommand,
  GetResourcePolicyCommand,
  ListAppMonitorsCommand,
  ListRumMetricsDestinationsCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  PutRumEventsCommand,
  PutRumMetricsDestinationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppMonitorCommand,
  UpdateRumMetricDefinitionCommand,
};
const paginators = {
  paginateBatchGetRumMetricDefinitions,
  paginateGetAppMonitorData,
  paginateListAppMonitors,
  paginateListRumMetricsDestinations,
};

/**
 * @public
 */
export interface RUMRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface RUM {
  /**
   * @see {@link BatchCreateRumMetricDefinitionsCommand}
   */
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options?: RUMRequestOptions
  ): Promise<BatchCreateRumMetricDefinitionsCommandOutput>;
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteRumMetricDefinitionsCommand}
   */
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options?: RUMRequestOptions
  ): Promise<BatchDeleteRumMetricDefinitionsCommandOutput>;
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRumMetricDefinitionsCommand}
   */
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options?: RUMRequestOptions
  ): Promise<BatchGetRumMetricDefinitionsCommandOutput>;
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppMonitorCommand}
   */
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options?: RUMRequestOptions
  ): Promise<CreateAppMonitorCommandOutput>;
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppMonitorCommand}
   */
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options?: RUMRequestOptions
  ): Promise<DeleteAppMonitorCommandOutput>;
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: RUMRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRumMetricsDestinationCommand}
   */
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options?: RUMRequestOptions
  ): Promise<DeleteRumMetricsDestinationCommandOutput>;
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppMonitorCommand}
   */
  getAppMonitor(
    args: GetAppMonitorCommandInput,
    options?: RUMRequestOptions
  ): Promise<GetAppMonitorCommandOutput>;
  getAppMonitor(
    args: GetAppMonitorCommandInput,
    cb: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): void;
  getAppMonitor(
    args: GetAppMonitorCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppMonitorDataCommand}
   */
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options?: RUMRequestOptions
  ): Promise<GetAppMonitorDataCommandOutput>;
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: RUMRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppMonitorsCommand}
   */
  listAppMonitors(): Promise<ListAppMonitorsCommandOutput>;
  listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options?: RUMRequestOptions
  ): Promise<ListAppMonitorsCommandOutput>;
  listAppMonitors(
    args: ListAppMonitorsCommandInput,
    cb: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): void;
  listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRumMetricsDestinationsCommand}
   */
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options?: RUMRequestOptions
  ): Promise<ListRumMetricsDestinationsCommandOutput>;
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): void;
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: RUMRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: RUMRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRumEventsCommand}
   */
  putRumEvents(
    args: PutRumEventsCommandInput,
    options?: RUMRequestOptions
  ): Promise<PutRumEventsCommandOutput>;
  putRumEvents(
    args: PutRumEventsCommandInput,
    cb: (err: any, data?: PutRumEventsCommandOutput) => void
  ): void;
  putRumEvents(
    args: PutRumEventsCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: PutRumEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRumMetricsDestinationCommand}
   */
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options?: RUMRequestOptions
  ): Promise<PutRumMetricsDestinationCommandOutput>;
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): void;
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: RUMRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: RUMRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppMonitorCommand}
   */
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options?: RUMRequestOptions
  ): Promise<UpdateAppMonitorCommandOutput>;
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRumMetricDefinitionCommand}
   */
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options?: RUMRequestOptions
  ): Promise<UpdateRumMetricDefinitionCommandOutput>;
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options: RUMRequestOptions,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRumMetricDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetRumMetricDefinitionsCommandOutput}.
   */
  paginateBatchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetRumMetricDefinitionsCommandOutput>;

  /**
   * @see {@link GetAppMonitorDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAppMonitorDataCommandOutput}.
   */
  paginateGetAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAppMonitorDataCommandOutput>;

  /**
   * @see {@link ListAppMonitorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppMonitorsCommandOutput}.
   */
  paginateListAppMonitors(
    args?: ListAppMonitorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppMonitorsCommandOutput>;

  /**
   * @see {@link ListRumMetricsDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRumMetricsDestinationsCommandOutput}.
   */
  paginateListRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRumMetricsDestinationsCommandOutput>;
}

/**
 * <p>With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about your web application performance from actual user sessions in real time. The data collected includes page load times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and also see breakdowns by the browsers and devices that your customers use.</p> <p>You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error messages, stack traces, and user sessions. You can also use RUM to understand the range of end-user impact including the number of users, geolocations, and browsers used.</p>
 * @public
 */
export class RUM extends RUMClient implements RUM {}
createAggregatedClient(commands, RUM, { paginators });
