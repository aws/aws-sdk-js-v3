// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { RUMClient } from "./RUMClient";

/**
 * <p>With Amazon CloudWatch RUM, you can perform real-user monitoring to collect client-side data about
 *        your web application performance from actual user sessions in real time. The data collected includes page load
 *        times, client-side errors, and user behavior. When you view this data, you can see it all aggregated together and
 *        also see breakdowns by the browsers and devices that your customers use.</p>
 *          <p>You can use the collected data to quickly identify and debug client-side performance issues. CloudWatch
 *        RUM helps you visualize anomalies in your application performance and find relevant debugging data such as error
 *        messages, stack traces, and user sessions. You can also use RUM to
 *        understand the range of end-user impact including the number of users, geolocations, and browsers used.</p>
 */
export class RUM extends RUMClient {
  /**
   * <p>Specifies the extended metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid
   *          destinations include CloudWatch and Evidently.</p>
   *          <p>By default, RUM app monitors send some metrics to CloudWatch. These default metrics
   *          are listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html">CloudWatch metrics that you can collect
   *             with CloudWatch RUM</a>.</p>
   *          <p>If you also send extended metrics, you can send metrics to Evidently as well as CloudWatch, and you can also
   *          optionally
   *          send the metrics with additional dimensions. The valid dimension names for the additional dimensions are
   *          <code>BrowserName</code>, <code>CountryCode</code>, <code>DeviceType</code>,
   *          <code>FileType</code>, <code>OSName</code>, and <code>PageId</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
   *             Extended metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
   *          <p>The maximum number of metric definitions that you can specify in one
   *          <code>BatchCreateRumMetricDefinitions</code> operation is 200.</p>
   *          <p>The maximum number of metric definitions that one destination can contain is 2000.</p>
   *          <p>Extended metrics sent are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension
   *          value counts as a custom metric. For more information, see
   *          <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *          <p>You must have
   *          already created a destination for the metrics before you send them. For more information, see
   *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
   *          <p>If some metric definitions specified in a <code>BatchCreateRumMetricDefinitions</code> operations are not valid,
   *       those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.</p>
   */
  public batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateRumMetricDefinitionsCommandOutput>;
  public batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchCreateRumMetricDefinitions(
    args: BatchCreateRumMetricDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateRumMetricDefinitionsCommandOutput) => void
  ): Promise<BatchCreateRumMetricDefinitionsCommandOutput> | void {
    const command = new BatchCreateRumMetricDefinitionsCommand(args);
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
   * <p>Removes the specified metrics from being sent to an extended metrics destination.</p>
   *          <p>If some metric definition IDs specified in a <code>BatchDeleteRumMetricDefinitions</code> operations are not valid,
   *          those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still
   *          deleted.</p>
   *          <p>The maximum number of metric definitions that you can specify in one
   *          <code>BatchDeleteRumMetricDefinitions</code> operation is 200.</p>
   */
  public batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteRumMetricDefinitionsCommandOutput>;
  public batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchDeleteRumMetricDefinitions(
    args: BatchDeleteRumMetricDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteRumMetricDefinitionsCommandOutput) => void
  ): Promise<BatchDeleteRumMetricDefinitionsCommandOutput> | void {
    const command = new BatchDeleteRumMetricDefinitionsCommand(args);
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
   * <p>Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.</p>
   */
  public batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRumMetricDefinitionsCommandOutput>;
  public batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): void;
  public batchGetRumMetricDefinitions(
    args: BatchGetRumMetricDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetRumMetricDefinitionsCommandOutput) => void
  ): Promise<BatchGetRumMetricDefinitionsCommandOutput> | void {
    const command = new BatchGetRumMetricDefinitionsCommand(args);
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
   * <p>Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops
   *          sending extended metrics to that destination.</p>
   */
  public deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRumMetricsDestinationCommandOutput>;
  public deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;
  public deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): void;
  public deleteRumMetricsDestination(
    args: DeleteRumMetricsDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteRumMetricsDestinationCommandOutput) => void
  ): Promise<DeleteRumMetricsDestinationCommandOutput> | void {
    const command = new DeleteRumMetricsDestinationCommand(args);
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
   * <p>Returns a list of destinations that you have created to receive RUM extended metrics,
   *          for the specified app monitor.</p>
   *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html">AddRumMetrics</a>.</p>
   */
  public listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRumMetricsDestinationsCommandOutput>;
  public listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): void;
  public listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): void;
  public listRumMetricsDestinations(
    args: ListRumMetricsDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRumMetricsDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListRumMetricsDestinationsCommandOutput) => void
  ): Promise<ListRumMetricsDestinationsCommandOutput> | void {
    const command = new ListRumMetricsDestinationsCommand(args);
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
   * <p>Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send
   *          extended metrics to CloudWatch or to a CloudWatch Evidently experiment.</p>
   *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrics.html">AddRumMetrics</a>.</p>
   */
  public putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRumMetricsDestinationCommandOutput>;
  public putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): void;
  public putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): void;
  public putRumMetricsDestination(
    args: PutRumMetricsDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRumMetricsDestinationCommandOutput) => void),
    cb?: (err: any, data?: PutRumMetricsDestinationCommandOutput) => void
  ): Promise<PutRumMetricsDestinationCommandOutput> | void {
    const command = new PutRumMetricsDestinationCommand(args);
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

  /**
   * <p>Modifies one existing metric definition for CloudWatch RUM extended metrics. For
   *          more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_BatchCreateRumMetricsDefinitions.html">BatchCreateRumMetricsDefinitions</a>.</p>
   */
  public updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRumMetricDefinitionCommandOutput>;
  public updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;
  public updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): void;
  public updateRumMetricDefinition(
    args: UpdateRumMetricDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateRumMetricDefinitionCommandOutput) => void
  ): Promise<UpdateRumMetricDefinitionCommandOutput> | void {
    const command = new UpdateRumMetricDefinitionCommand(args);
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
