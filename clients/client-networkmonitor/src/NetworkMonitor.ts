// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateMonitorCommandInput,
  type CreateMonitorCommandOutput,
  CreateMonitorCommand,
} from "./commands/CreateMonitorCommand";
import {
  type CreateProbeCommandInput,
  type CreateProbeCommandOutput,
  CreateProbeCommand,
} from "./commands/CreateProbeCommand";
import {
  type DeleteMonitorCommandInput,
  type DeleteMonitorCommandOutput,
  DeleteMonitorCommand,
} from "./commands/DeleteMonitorCommand";
import {
  type DeleteProbeCommandInput,
  type DeleteProbeCommandOutput,
  DeleteProbeCommand,
} from "./commands/DeleteProbeCommand";
import {
  type GetMonitorCommandInput,
  type GetMonitorCommandOutput,
  GetMonitorCommand,
} from "./commands/GetMonitorCommand";
import { type GetProbeCommandInput, type GetProbeCommandOutput, GetProbeCommand } from "./commands/GetProbeCommand";
import {
  type ListMonitorsCommandInput,
  type ListMonitorsCommandOutput,
  ListMonitorsCommand,
} from "./commands/ListMonitorsCommand";
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
  type UpdateMonitorCommandInput,
  type UpdateMonitorCommandOutput,
  UpdateMonitorCommand,
} from "./commands/UpdateMonitorCommand";
import {
  type UpdateProbeCommandInput,
  type UpdateProbeCommandOutput,
  UpdateProbeCommand,
} from "./commands/UpdateProbeCommand";
import { NetworkMonitorClient } from "./NetworkMonitorClient";
import { paginateListMonitors } from "./pagination/ListMonitorsPaginator";

const commands = {
  CreateMonitorCommand,
  CreateProbeCommand,
  DeleteMonitorCommand,
  DeleteProbeCommand,
  GetMonitorCommand,
  GetProbeCommand,
  ListMonitorsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMonitorCommand,
  UpdateProbeCommand,
};
const paginators = {
  paginateListMonitors,
};

export interface NetworkMonitor {
  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(
    args: CreateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitorCommandOutput>;
  createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProbeCommand}
   */
  createProbe(
    args: CreateProbeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProbeCommandOutput>;
  createProbe(
    args: CreateProbeCommandInput,
    cb: (err: any, data?: CreateProbeCommandOutput) => void
  ): void;
  createProbe(
    args: CreateProbeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProbeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProbeCommand}
   */
  deleteProbe(
    args: DeleteProbeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProbeCommandOutput>;
  deleteProbe(
    args: DeleteProbeCommandInput,
    cb: (err: any, data?: DeleteProbeCommandOutput) => void
  ): void;
  deleteProbe(
    args: DeleteProbeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProbeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorCommand}
   */
  getMonitor(
    args: GetMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMonitorCommandOutput>;
  getMonitor(
    args: GetMonitorCommandInput,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;
  getMonitor(
    args: GetMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProbeCommand}
   */
  getProbe(
    args: GetProbeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProbeCommandOutput>;
  getProbe(
    args: GetProbeCommandInput,
    cb: (err: any, data?: GetProbeCommandOutput) => void
  ): void;
  getProbe(
    args: GetProbeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProbeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
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
   * @see {@link UpdateMonitorCommand}
   */
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitorCommandOutput>;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProbeCommand}
   */
  updateProbe(
    args: UpdateProbeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProbeCommandOutput>;
  updateProbe(
    args: UpdateProbeCommandInput,
    cb: (err: any, data?: UpdateProbeCommandOutput) => void
  ): void;
  updateProbe(
    args: UpdateProbeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProbeCommandOutput) => void
  ): void;

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
}

/**
 * <p>Amazon CloudWatch Network Monitor is an Amazon Web Services active network monitoring
 *             service that identifies if a network issues exists within the Amazon Web Services network
 *             or your own company network.  Within Network Monitor you'll choose the source VPCs and
 *             subnets from the Amazon Web Services network in which you operate and then you'll choose
 *             the destination IP addresses from your on-premises network. From these sources and
 *             destinations, Network Monitor creates a monitor containing all the possible source and
 *             destination combinations, each of which is called a probe, within a single monitor.
 *             These probes then monitor network traffic to help you identify where network issues might be affecting your traffic.</p>
 *          <p>Before you begin, ensure the Amazon Web Services CLI is configured in the Amazon Web Services Account where you will create the Network Monitor resource. Network
 *             Monitor doesn’t support creation on cross-account resources, but you can create a
 *             Network Monitor in any subnet belonging to a VPC owned by your Account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/what-is-network-monitor.html">Using Amazon CloudWatch Network Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 * @public
 */
export class NetworkMonitor extends NetworkMonitorClient implements NetworkMonitor {}
createAggregatedClient(commands, NetworkMonitor, { paginators });
