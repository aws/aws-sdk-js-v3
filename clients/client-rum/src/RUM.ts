// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutRumEventsCommand,
  PutRumEventsCommandInput,
  PutRumEventsCommandOutput,
} from "./commands/PutRumEventsCommand";
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
import { RUMClient } from "./RUMClient";

/**
 * <p>With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about
 *        your web application performance from actual user sessions in real time. The data collected includes page load
 *        times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and
 *        also see breakdowns by the browsers and devices that your customers use.</p>
 *
 *          <p>You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch
 *        RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error
 *        messages, stack traces, and user sessions. You can also use RUM to
 *        understand the range of end-user impact including the number of users, geolocations, and browsers used.</p>
 */
export class RUM extends RUMClient {
  /**
   * <p>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that
   *       data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
   *       and user behavior.</p>
   *          <p>You use this operation only to create a new app monitor. To update an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html">UpdateAppMonitor</a> instead.</p>
   *          <p>After you create an app monitor, sign in to the CloudWatch RUM console to get
   *          the JavaScript code snippet to add to your web application. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
   *          that I've already generated?</a>
   *          </p>
   */
  public createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppMonitorCommandOutput>;
  public createAppMonitor(
    args: CreateAppMonitorCommandInput,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;
  public createAppMonitor(
    args: CreateAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): void;
  public createAppMonitor(
    args: CreateAppMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppMonitorCommandOutput) => void),
    cb?: (err: any, data?: CreateAppMonitorCommandOutput) => void
  ): Promise<CreateAppMonitorCommandOutput> | void {
    const command = new CreateAppMonitorCommand(args);
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
   * <p>Deletes an existing app monitor. This immediately stops the collection of data.</p>
   */
  public deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppMonitorCommandOutput>;
  public deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;
  public deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): void;
  public deleteAppMonitor(
    args: DeleteAppMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppMonitorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppMonitorCommandOutput) => void
  ): Promise<DeleteAppMonitorCommandOutput> | void {
    const command = new DeleteAppMonitorCommand(args);
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
   * <p>Retrieves the complete configuration information for one app monitor.</p>
   */
  public getAppMonitor(
    args: GetAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppMonitorCommandOutput>;
  public getAppMonitor(
    args: GetAppMonitorCommandInput,
    cb: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): void;
  public getAppMonitor(
    args: GetAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): void;
  public getAppMonitor(
    args: GetAppMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppMonitorCommandOutput) => void),
    cb?: (err: any, data?: GetAppMonitorCommandOutput) => void
  ): Promise<GetAppMonitorCommandOutput> | void {
    const command = new GetAppMonitorCommand(args);
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
   * <p>Retrieves the raw performance events that RUM has collected from your web application,
   *          so that you can do your own processing or analysis of this data.</p>
   */
  public getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppMonitorDataCommandOutput>;
  public getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;
  public getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): void;
  public getAppMonitorData(
    args: GetAppMonitorDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppMonitorDataCommandOutput) => void),
    cb?: (err: any, data?: GetAppMonitorDataCommandOutput) => void
  ): Promise<GetAppMonitorDataCommandOutput> | void {
    const command = new GetAppMonitorDataCommand(args);
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
   * <p>Returns a list of the Amazon CloudWatch RUM app monitors in the account.</p>
   */
  public listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppMonitorsCommandOutput>;
  public listAppMonitors(
    args: ListAppMonitorsCommandInput,
    cb: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): void;
  public listAppMonitors(
    args: ListAppMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): void;
  public listAppMonitors(
    args: ListAppMonitorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppMonitorsCommandOutput) => void),
    cb?: (err: any, data?: ListAppMonitorsCommandOutput) => void
  ): Promise<ListAppMonitorsCommandOutput> | void {
    const command = new ListAppMonitorsCommand(args);
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
   * <p>Displays the tags associated with a CloudWatch RUM resource.</p>
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
   * <p>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code
   *       snippet that RUM generates for you to add to your application includes <code>PutRumEvents</code> operations to
   *       send this data to RUM.</p>
   *          <p>Each <code>PutRumEvents</code> operation can send a batch of events from one user session.</p>
   */
  public putRumEvents(
    args: PutRumEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRumEventsCommandOutput>;
  public putRumEvents(args: PutRumEventsCommandInput, cb: (err: any, data?: PutRumEventsCommandOutput) => void): void;
  public putRumEvents(
    args: PutRumEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRumEventsCommandOutput) => void
  ): void;
  public putRumEvents(
    args: PutRumEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRumEventsCommandOutput) => void),
    cb?: (err: any, data?: PutRumEventsCommandOutput) => void
  ): Promise<PutRumEventsCommandOutput> | void {
    const command = new PutRumEventsCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch RUM resource. Currently,
   *        the only resources that
   *        can be tagged app monitors.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *        permissions by granting a user
   *        permission to access or change only resources with certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *          <p>You can use the <code>TagResource</code> action with a resource that already has tags.
   *        If you specify a new tag key for the resource,
   *        this tag is appended to the list of tags associated
   *        with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces
   *        the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
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
   * <p>Removes one or more tags from the specified resource.</p>
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
   * <p>Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor
   *          configuration that you specify in this operation are changed. For any parameters that you omit, the existing
   *          values are kept.</p>
   *          <p>You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use
   *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
   *          <p>To create a new app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_CreateAppMonitor.html">CreateAppMonitor</a>.</p>
   *          <p>After you update an app monitor, sign in to the CloudWatch RUM console to get
   *          the updated JavaScript code snippet to add to your web application. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
   *             that I've already generated?</a>
   *          </p>
   */
  public updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppMonitorCommandOutput>;
  public updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;
  public updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): void;
  public updateAppMonitor(
    args: UpdateAppMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppMonitorCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppMonitorCommandOutput) => void
  ): Promise<UpdateAppMonitorCommandOutput> | void {
    const command = new UpdateAppMonitorCommand(args);
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
