// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreateRumMetricDefinitionsCommand,
  BatchCreateRumMetricDefinitionsCommandInput,
  BatchCreateRumMetricDefinitionsCommandOutput,
} from "./commands/BatchCreateRumMetricDefinitionsCommand";
import {
  BatchDeleteRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsCommandInput,
  BatchDeleteRumMetricDefinitionsCommandOutput,
} from "./commands/BatchDeleteRumMetricDefinitionsCommand";
import {
  BatchGetRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput,
} from "./commands/BatchGetRumMetricDefinitionsCommand";
import {
  CreateAppMonitorCommand,
  CreateAppMonitorCommandInput,
  CreateAppMonitorCommandOutput,
} from "./commands/CreateAppMonitorCommand";
import {
  DeleteAppMonitorCommand,
  DeleteAppMonitorCommandInput,
  DeleteAppMonitorCommandOutput,
} from "./commands/DeleteAppMonitorCommand";
import {
  DeleteRumMetricsDestinationCommand,
  DeleteRumMetricsDestinationCommandInput,
  DeleteRumMetricsDestinationCommandOutput,
} from "./commands/DeleteRumMetricsDestinationCommand";
import {
  GetAppMonitorCommand,
  GetAppMonitorCommandInput,
  GetAppMonitorCommandOutput,
} from "./commands/GetAppMonitorCommand";
import {
  GetAppMonitorDataCommand,
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput,
} from "./commands/GetAppMonitorDataCommand";
import {
  ListAppMonitorsCommand,
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput,
} from "./commands/ListAppMonitorsCommand";
import {
  ListRumMetricsDestinationsCommand,
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
} from "./commands/ListRumMetricsDestinationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutRumEventsCommand,
  PutRumEventsCommandInput,
  PutRumEventsCommandOutput,
} from "./commands/PutRumEventsCommand";
import {
  PutRumMetricsDestinationCommand,
  PutRumMetricsDestinationCommandInput,
  PutRumMetricsDestinationCommandOutput,
} from "./commands/PutRumMetricsDestinationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAppMonitorCommand,
  UpdateAppMonitorCommandInput,
  UpdateAppMonitorCommandOutput,
} from "./commands/UpdateAppMonitorCommand";
import {
  UpdateRumMetricDefinitionCommand,
  UpdateRumMetricDefinitionCommandInput,
  UpdateRumMetricDefinitionCommandOutput,
} from "./commands/UpdateRumMetricDefinitionCommand";
import { RUMClient, RUMClientConfig } from "./RUMClient";

const commands = {
  BatchCreateRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommand,
  CreateAppMonitorCommand,
  DeleteAppMonitorCommand,
  DeleteRumMetricsDestinationCommand,
  GetAppMonitorCommand,
  GetAppMonitorDataCommand,
  ListAppMonitorsCommand,
  ListRumMetricsDestinationsCommand,
  ListTagsForResourceCommand,
  PutRumEventsCommand,
  PutRumMetricsDestinationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppMonitorCommand,
  UpdateRumMetricDefinitionCommand,
};

export interface RUM {
  /**
   * @see {@link BatchCreateRumMetricDefinitionsCommand}
   */
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateRumMetricDefinitionsCommandOutput>;
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteRumMetricDefinitionsCommand}
   */
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteRumMetricDefinitionsCommandOutput>;
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRumMetricDefinitionsCommand}
   */
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRumMetricDefinitionsCommandOutput>;
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;
  batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppMonitorCommand}
   */
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppMonitorCommandOutput>;
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;
  createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppMonitorCommand}
   */
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppMonitorCommandOutput>;
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;
  deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRumMetricsDestinationCommand}
   */
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRumMetricsDestinationCommandOutput>;
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;
  deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppMonitorCommand}
   */
  getAppMonitor(args: GetAppMonitorCommandInput, options?: __HttpHandlerOptions): Promise<GetAppMonitorCommandOutput>;
  getAppMonitor(args: GetAppMonitorCommandInput, cb: (err: any, data?: GetAppMonitorCommandOutput) => void): void;
  getAppMonitor(
    args: GetAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppMonitorDataCommand}
   */
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppMonitorDataCommandOutput>;
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;
  getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppMonitorsCommand}
   */
  listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppMonitorsCommandOutput>;
  listAppMonitors(args: ListAppMonitorsCommandInput, cb: (err: any, data?: ListAppMonitorsCommandOutput) => void): void;
  listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRumMetricsDestinationsCommand}
   */
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRumMetricsDestinationsCommandOutput>;
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): void;
  listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
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
   * @see {@link PutRumEventsCommand}
   */
  putRumEvents(args: PutRumEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutRumEventsCommandOutput>;
  putRumEvents(args: PutRumEventsCommandInput, cb: (err: any, data?: PutRumEventsCommandOutput) => void): void;
  putRumEvents(
    args: PutRumEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRumEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRumMetricsDestinationCommand}
   */
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRumMetricsDestinationCommandOutput>;
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): void;
  putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
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
   * @see {@link UpdateAppMonitorCommand}
   */
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppMonitorCommandOutput>;
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;
  updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRumMetricDefinitionCommand}
   */
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRumMetricDefinitionCommandOutput>;
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;
  updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about
 *        your web application performance from actual user sessions in real time. The data collected includes page load
 *        times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and
 *        also see breakdowns by the browsers and devices that your customers use.</p>
 *          <p>You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch
 *        RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error
 *        messages, stack traces, and user sessions. You can also use RUM to
 *        understand the range of end-user impact including the number of users, geolocations, and browsers used.</p>
 */
export class RUM extends RUMClient implements RUM {}
createAggregatedClient(commands, RUM);
