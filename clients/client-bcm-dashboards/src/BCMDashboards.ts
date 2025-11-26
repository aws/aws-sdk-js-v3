// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BCMDashboardsClient } from "./BCMDashboardsClient";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
import {
  GetDashboardCommand,
  GetDashboardCommandInput,
  GetDashboardCommandOutput,
} from "./commands/GetDashboardCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";

const commands = {
  CreateDashboardCommand,
  DeleteDashboardCommand,
  GetDashboardCommand,
  GetResourcePolicyCommand,
  ListDashboardsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDashboardCommand,
};

export interface BCMDashboards {
  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(args: CreateDashboardCommandInput, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(args: DeleteDashboardCommandInput, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(args: GetDashboardCommandInput, options?: __HttpHandlerOptions): Promise<GetDashboardCommandOutput>;
  getDashboard(args: GetDashboardCommandInput, cb: (err: any, data?: GetDashboardCommandOutput) => void): void;
  getDashboard(
    args: GetDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
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
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(args: ListDashboardsCommandInput, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
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
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(args: UpdateDashboardCommandInput, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services Billing and Cost Management Dashboards is a service that enables you to create, manage, and share dashboards that combine multiple visualizations of your Amazon Web Services cost and usage data. You can combine multiple data sources including Cost Explorer, Savings Plans, and Reserved Instance metrics into unified dashboards, helping you analyze spending patterns and share cost insights across your organization.</p> <p>You can use the Amazon Web Services Billing and Cost Management Dashboards API to programmatically create, manage, and share dashboards. This includes creating custom dashboards, configuring widgets, managing dashboard permissions, and sharing dashboards across accounts in your organization.</p>
 * @public
 */
export class BCMDashboards extends BCMDashboardsClient implements BCMDashboards {}
createAggregatedClient(commands, BCMDashboards);
