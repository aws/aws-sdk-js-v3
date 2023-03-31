// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { InternetMonitorClient } from "./InternetMonitorClient";

/**
 * @public
 * <p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability
 * 			between your applications hosted on Amazon Web Services and your end users. It reduces the time it takes for you to diagnose
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
 * 			with it, VPCs, CloudFront distributions, or WorkSpaces directories, to enable Internet Monitor to know
 * 			where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to
 * 			the locations and networks that communicate with your application.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export class InternetMonitor extends InternetMonitorClient {
  /**
   * @public
   * <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Amazon Virtual Private Clouds (VPCs),
   * 			Amazon CloudFront distributions, and WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to
   * 			the <i>city-networks</i>, that is, the locations and ASNs (typically internet service providers or ISPs),
   * 			where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>When you create a monitor, you set a maximum limit for the number of city-networks where client traffic is monitored. The city-network maximum
   * 			that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. You can change the maximum at any time
   * 			by updating your monitor. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  public createMonitor(
    args: CreateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitorCommandOutput>;
  public createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  public createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  public createMonitor(
    args: CreateMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMonitorCommandOutput) => void),
    cb?: (err: any, data?: CreateMonitorCommandOutput) => void
  ): Promise<CreateMonitorCommandOutput> | void {
    const command = new CreateMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes a monitor in Amazon CloudWatch Internet Monitor. </p>
   */
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitorCommandOutput>;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMonitorCommandOutput) => void),
    cb?: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): Promise<DeleteMonitorCommandOutput> | void {
    const command = new DeleteMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations,
   * 			and all of the information related to the event by location.</p>
   *          <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type,
   * 			and so on.</p>
   *          <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
   */
  public getHealthEvent(
    args: GetHealthEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHealthEventCommandOutput>;
  public getHealthEvent(
    args: GetHealthEventCommandInput,
    cb: (err: any, data?: GetHealthEventCommandOutput) => void
  ): void;
  public getHealthEvent(
    args: GetHealthEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHealthEventCommandOutput) => void
  ): void;
  public getHealthEvent(
    args: GetHealthEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHealthEventCommandOutput) => void),
    cb?: (err: any, data?: GetHealthEventCommandOutput) => void
  ): Promise<GetHealthEventCommandOutput> | void {
    const command = new GetHealthEventCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time,
   * 			modified time, resources included in the monitor, and status information.</p>
   */
  public getMonitor(args: GetMonitorCommandInput, options?: __HttpHandlerOptions): Promise<GetMonitorCommandOutput>;
  public getMonitor(args: GetMonitorCommandInput, cb: (err: any, data?: GetMonitorCommandOutput) => void): void;
  public getMonitor(
    args: GetMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitorCommandOutput) => void
  ): void;
  public getMonitor(
    args: GetMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMonitorCommandOutput) => void),
    cb?: (err: any, data?: GetMonitorCommandOutput) => void
  ): Promise<GetMonitorCommandOutput> | void {
    const command = new GetMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network
   * 			cause and status, event start and end time, percentage of total traffic impacted, and status.</p>
   *          <note>
   *             <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p>
   *          </note>
   */
  public listHealthEvents(
    args: ListHealthEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHealthEventsCommandOutput>;
  public listHealthEvents(
    args: ListHealthEventsCommandInput,
    cb: (err: any, data?: ListHealthEventsCommandOutput) => void
  ): void;
  public listHealthEvents(
    args: ListHealthEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHealthEventsCommandOutput) => void
  ): void;
  public listHealthEvents(
    args: ListHealthEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHealthEventsCommandOutput) => void),
    cb?: (err: any, data?: ListHealthEventsCommandOutput) => void
  ): Promise<ListHealthEventsCommandOutput> | void {
    const command = new ListHealthEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.</p>
   */
  public listMonitors(
    args: ListMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorsCommandOutput>;
  public listMonitors(args: ListMonitorsCommandInput, cb: (err: any, data?: ListMonitorsCommandOutput) => void): void;
  public listMonitors(
    args: ListMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  public listMonitors(
    args: ListMonitorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMonitorsCommandOutput) => void),
    cb?: (err: any, data?: ListMonitorsCommandOutput) => void
  ): Promise<ListMonitorsCommandOutput> | void {
    const command = new ListMonitorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p>
   *          <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Removes a tag from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a monitor. You can update a monitor to change the maximum number of city-networks (locations and ASNs or
   * 			internet service providers), to add or remove resources,
   * 			or to change the status of the monitor. Note that you can't change the name of a monitor.</p>
   *          <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  public updateMonitor(
    args: UpdateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitorCommandOutput>;
  public updateMonitor(
    args: UpdateMonitorCommandInput,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  public updateMonitor(
    args: UpdateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): void;
  public updateMonitor(
    args: UpdateMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMonitorCommandOutput) => void),
    cb?: (err: any, data?: UpdateMonitorCommandOutput) => void
  ): Promise<UpdateMonitorCommandOutput> | void {
    const command = new UpdateMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
