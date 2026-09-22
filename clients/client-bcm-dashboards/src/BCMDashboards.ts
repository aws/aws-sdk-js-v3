// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { BCMDashboardsClient } from "./BCMDashboardsClient";
import {
  type CreateDashboardCommandInput,
  type CreateDashboardCommandOutput,
  CreateDashboardCommand,
} from "./commands/CreateDashboardCommand";
import {
  type CreateScheduledReportCommandInput,
  type CreateScheduledReportCommandOutput,
  CreateScheduledReportCommand,
} from "./commands/CreateScheduledReportCommand";
import {
  type DeleteDashboardCommandInput,
  type DeleteDashboardCommandOutput,
  DeleteDashboardCommand,
} from "./commands/DeleteDashboardCommand";
import {
  type DeleteScheduledReportCommandInput,
  type DeleteScheduledReportCommandOutput,
  DeleteScheduledReportCommand,
} from "./commands/DeleteScheduledReportCommand";
import {
  type ExecuteScheduledReportCommandInput,
  type ExecuteScheduledReportCommandOutput,
  ExecuteScheduledReportCommand,
} from "./commands/ExecuteScheduledReportCommand";
import {
  type GetDashboardCommandInput,
  type GetDashboardCommandOutput,
  GetDashboardCommand,
} from "./commands/GetDashboardCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetScheduledReportCommandInput,
  type GetScheduledReportCommandOutput,
  GetScheduledReportCommand,
} from "./commands/GetScheduledReportCommand";
import {
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListDashboardsCommand,
} from "./commands/ListDashboardsCommand";
import {
  type ListScheduledReportsCommandInput,
  type ListScheduledReportsCommandOutput,
  ListScheduledReportsCommand,
} from "./commands/ListScheduledReportsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
  type UpdateDashboardCommandInput,
  type UpdateDashboardCommandOutput,
  UpdateDashboardCommand,
} from "./commands/UpdateDashboardCommand";
import {
  type UpdateScheduledReportCommandInput,
  type UpdateScheduledReportCommandOutput,
  UpdateScheduledReportCommand,
} from "./commands/UpdateScheduledReportCommand";
import { paginateListDashboards } from "./pagination/ListDashboardsPaginator";
import { paginateListScheduledReports } from "./pagination/ListScheduledReportsPaginator";

const commands = {
  CreateDashboardCommand,
  CreateScheduledReportCommand,
  DeleteDashboardCommand,
  DeleteScheduledReportCommand,
  ExecuteScheduledReportCommand,
  GetDashboardCommand,
  GetResourcePolicyCommand,
  GetScheduledReportCommand,
  ListDashboardsCommand,
  ListScheduledReportsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDashboardCommand,
  UpdateScheduledReportCommand,
};
const paginators = {
  paginateListDashboards,
  paginateListScheduledReports,
};

/**
 * @public
 */
export interface BCMDashboardsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface BCMDashboards {
  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledReportCommand}
   */
  createScheduledReport(
    args: CreateScheduledReportCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<CreateScheduledReportCommandOutput>;
  createScheduledReport(
    args: CreateScheduledReportCommandInput,
    cb: (err: any, data?: CreateScheduledReportCommandOutput) => void
  ): void;
  createScheduledReport(
    args: CreateScheduledReportCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: CreateScheduledReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledReportCommand}
   */
  deleteScheduledReport(
    args: DeleteScheduledReportCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<DeleteScheduledReportCommandOutput>;
  deleteScheduledReport(
    args: DeleteScheduledReportCommandInput,
    cb: (err: any, data?: DeleteScheduledReportCommandOutput) => void
  ): void;
  deleteScheduledReport(
    args: DeleteScheduledReportCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: DeleteScheduledReportCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteScheduledReportCommand}
   */
  executeScheduledReport(
    args: ExecuteScheduledReportCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<ExecuteScheduledReportCommandOutput>;
  executeScheduledReport(
    args: ExecuteScheduledReportCommandInput,
    cb: (err: any, data?: ExecuteScheduledReportCommandOutput) => void
  ): void;
  executeScheduledReport(
    args: ExecuteScheduledReportCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: ExecuteScheduledReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<GetDashboardCommandOutput>;
  getDashboard(
    args: GetDashboardCommandInput,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
  ): void;
  getDashboard(
    args: GetDashboardCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduledReportCommand}
   */
  getScheduledReport(
    args: GetScheduledReportCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<GetScheduledReportCommandOutput>;
  getScheduledReport(
    args: GetScheduledReportCommandInput,
    cb: (err: any, data?: GetScheduledReportCommandOutput) => void
  ): void;
  getScheduledReport(
    args: GetScheduledReportCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: GetScheduledReportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledReportsCommand}
   */
  listScheduledReports(): Promise<ListScheduledReportsCommandOutput>;
  listScheduledReports(
    args: ListScheduledReportsCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<ListScheduledReportsCommandOutput>;
  listScheduledReports(
    args: ListScheduledReportsCommandInput,
    cb: (err: any, data?: ListScheduledReportsCommandOutput) => void
  ): void;
  listScheduledReports(
    args: ListScheduledReportsCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: ListScheduledReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledReportCommand}
   */
  updateScheduledReport(
    args: UpdateScheduledReportCommandInput,
    options?: BCMDashboardsRequestOptions
  ): Promise<UpdateScheduledReportCommandOutput>;
  updateScheduledReport(
    args: UpdateScheduledReportCommandInput,
    cb: (err: any, data?: UpdateScheduledReportCommandOutput) => void
  ): void;
  updateScheduledReport(
    args: UpdateScheduledReportCommandInput,
    options: BCMDashboardsRequestOptions,
    cb: (err: any, data?: UpdateScheduledReportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDashboardsCommandOutput}.
   */
  paginateListDashboards(
    args?: ListDashboardsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDashboardsCommandOutput>;

  /**
   * @see {@link ListScheduledReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScheduledReportsCommandOutput}.
   */
  paginateListScheduledReports(
    args?: ListScheduledReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScheduledReportsCommandOutput>;
}

/**
 * <p>Amazon Web Services Billing and Cost Management Dashboards is a service that enables you to create, manage, and share dashboards that combine multiple visualizations of your Amazon Web Services cost and usage data. You can combine multiple data sources including Cost Explorer, Savings Plans, and Reserved Instance metrics into unified dashboards, helping you analyze spending patterns and share cost insights across your organization.</p> <p>You can use the Amazon Web Services Billing and Cost Management Dashboards API to programmatically create, manage, and share dashboards. This includes creating custom dashboards, configuring widgets, managing dashboard permissions, and sharing dashboards across accounts in your organization.</p>
 * @public
 */
export class BCMDashboards extends BCMDashboardsClient implements BCMDashboards {}
createAggregatedClient(commands, BCMDashboards, { paginators });
