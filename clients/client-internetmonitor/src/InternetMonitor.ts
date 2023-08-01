// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateMonitorCommand,
  CreateMonitorCommandInput,
  CreateMonitorCommandOutput,
} from "./commands/CreateMonitorCommand";
import {
  DeleteMonitorCommand,
  DeleteMonitorCommandInput,
  DeleteMonitorCommandOutput,
} from "./commands/DeleteMonitorCommand";
import {
  GetHealthEventCommand,
  GetHealthEventCommandInput,
  GetHealthEventCommandOutput,
} from "./commands/GetHealthEventCommand";
import { GetMonitorCommand, GetMonitorCommandInput, GetMonitorCommandOutput } from "./commands/GetMonitorCommand";
import {
  ListHealthEventsCommand,
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput,
} from "./commands/ListHealthEventsCommand";
import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "./commands/ListMonitorsCommand";
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
  UpdateMonitorCommand,
  UpdateMonitorCommandInput,
  UpdateMonitorCommandOutput,
} from "./commands/UpdateMonitorCommand";
import { InternetMonitorClient, InternetMonitorClientConfig } from "./InternetMonitorClient";

const commands = {
  CreateMonitorCommand,
  DeleteMonitorCommand,
  GetHealthEventCommand,
  GetMonitorCommand,
  ListHealthEventsCommand,
  ListMonitorsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMonitorCommand,
};

export interface InternetMonitor {
  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(args: CreateMonitorCommandInput, options?: __HttpHandlerOptions): Promise<CreateMonitorCommandOutput>;
  createMonitor(args: CreateMonitorCommandInput, cb: (err: any, data?: CreateMonitorCommandOutput) => void): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(args: DeleteMonitorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(args: DeleteMonitorCommandInput, cb: (err: any, data?: DeleteMonitorCommandOutput) => void): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHealthEventCommand}
   */
  getHealthEvent(
    args: GetHealthEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthEventCommandOutput>;
  getHealthEvent(args: GetHealthEventCommandInput, cb: (err: any, data?: GetHealthEventCommandOutput) => void): void;
  getHealthEvent(
    args: GetHealthEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitorCommand}
   */
  getMonitor(args: GetMonitorCommandInput, options?: __HttpHandlerOptions): Promise<GetMonitorCommandOutput>;
  getMonitor(args: GetMonitorCommandInput, cb: (err: any, data?: GetMonitorCommandOutput) => void): void;
  getMonitor(
    args: GetMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHealthEventsCommand}
   */
  listHealthEvents(
    args: ListHealthEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHealthEventsCommandOutput>;
  listHealthEvents(
    args: ListHealthEventsCommandInput,
    cb: (err: any, data?: ListHealthEventsCommandOutput) => void
  ): void;
  listHealthEvents(
    args: ListHealthEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHealthEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(args: ListMonitorsCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitorsCommandOutput>;
  listMonitors(args: ListMonitorsCommandInput, cb: (err: any, data?: ListMonitorsCommandOutput) => void): void;
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
   * @see {@link UpdateMonitorCommand}
   */
  updateMonitor(args: UpdateMonitorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMonitorCommandOutput>;
  updateMonitor(args: UpdateMonitorCommandInput, cb: (err: any, data?: UpdateMonitorCommandOutput) => void): void;
  updateMonitor(
    args: UpdateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability
 * 			between your applications hosted on Amazon Web Services and your end users. It can reduce the time it takes for you to diagnose
 * 			internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global
 * 			networking footprint to calculate a baseline of performance and availability for internet traffic. This
 * 			is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements
 * 			as a baseline, Internet Monitor raises awareness for you when there are significant problems for your
 * 			end users in the different geographic locations where your application runs.</p>
 *          <p>Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics,
 * 			to easily support using CloudWatch tools with health information for geographies and networks specific to your application.
 * 			Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network,
 * 			you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem.</p>
 *          <p>To use Internet Monitor, you create a <i>monitor</i> and associate your application's resources
 * 			with it - VPCs, NLBs, CloudFront distributions, or WorkSpaces directories - so Internet Monitor can determine
 * 			where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to
 * 			the locations and ASNs (typically, internet service providers or ISPs) that communicate with your application.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export class InternetMonitor extends InternetMonitorClient implements InternetMonitor {}
createAggregatedClient(commands, InternetMonitor);
