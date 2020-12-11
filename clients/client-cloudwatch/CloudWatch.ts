import { CloudWatchClient } from "./CloudWatchClient";
import {
  DeleteAlarmsCommand,
  DeleteAlarmsCommandInput,
  DeleteAlarmsCommandOutput,
} from "./commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommand,
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import {
  DeleteDashboardsCommand,
  DeleteDashboardsCommandInput,
  DeleteDashboardsCommandOutput,
} from "./commands/DeleteDashboardsCommand";
import {
  DeleteInsightRulesCommand,
  DeleteInsightRulesCommandInput,
  DeleteInsightRulesCommandOutput,
} from "./commands/DeleteInsightRulesCommand";
import {
  DescribeAlarmHistoryCommand,
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "./commands/DescribeAlarmHistoryCommand";
import {
  DescribeAlarmsCommand,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
} from "./commands/DescribeAlarmsCommand";
import {
  DescribeAlarmsForMetricCommand,
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
} from "./commands/DescribeAlarmsForMetricCommand";
import {
  DescribeAnomalyDetectorsCommand,
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "./commands/DescribeAnomalyDetectorsCommand";
import {
  DescribeInsightRulesCommand,
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "./commands/DescribeInsightRulesCommand";
import {
  DisableAlarmActionsCommand,
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
} from "./commands/DisableAlarmActionsCommand";
import {
  DisableInsightRulesCommand,
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput,
} from "./commands/DisableInsightRulesCommand";
import {
  EnableAlarmActionsCommand,
  EnableAlarmActionsCommandInput,
  EnableAlarmActionsCommandOutput,
} from "./commands/EnableAlarmActionsCommand";
import {
  EnableInsightRulesCommand,
  EnableInsightRulesCommandInput,
  EnableInsightRulesCommandOutput,
} from "./commands/EnableInsightRulesCommand";
import {
  GetDashboardCommand,
  GetDashboardCommandInput,
  GetDashboardCommandOutput,
} from "./commands/GetDashboardCommand";
import {
  GetInsightRuleReportCommand,
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
} from "./commands/GetInsightRuleReportCommand";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "./commands/GetMetricDataCommand";
import {
  GetMetricStatisticsCommand,
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput,
} from "./commands/GetMetricStatisticsCommand";
import {
  GetMetricWidgetImageCommand,
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
} from "./commands/GetMetricWidgetImageCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAnomalyDetectorCommand,
  PutAnomalyDetectorCommandInput,
  PutAnomalyDetectorCommandOutput,
} from "./commands/PutAnomalyDetectorCommand";
import {
  PutCompositeAlarmCommand,
  PutCompositeAlarmCommandInput,
  PutCompositeAlarmCommandOutput,
} from "./commands/PutCompositeAlarmCommand";
import {
  PutDashboardCommand,
  PutDashboardCommandInput,
  PutDashboardCommandOutput,
} from "./commands/PutDashboardCommand";
import {
  PutInsightRuleCommand,
  PutInsightRuleCommandInput,
  PutInsightRuleCommandOutput,
} from "./commands/PutInsightRuleCommand";
import {
  PutMetricAlarmCommand,
  PutMetricAlarmCommandInput,
  PutMetricAlarmCommandOutput,
} from "./commands/PutMetricAlarmCommand";
import {
  PutMetricDataCommand,
  PutMetricDataCommandInput,
  PutMetricDataCommandOutput,
} from "./commands/PutMetricDataCommand";
import {
  SetAlarmStateCommand,
  SetAlarmStateCommandInput,
  SetAlarmStateCommandOutput,
} from "./commands/SetAlarmStateCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the
 * 			applications you run on AWS in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *
 * 		       <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules
 * 			that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch
 * 			additional instances to handle increased load. You can also use this data to stop
 * 			under-used instances to save
 * 			money.</p>
 *
 * 		       <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 */
export class CloudWatch extends CloudWatchClient {
  /**
   * <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more
   * 			than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't
   * 			delete two composite alarms with one operation.</p>
   * 		       <p>
   * 			In the event of an error, no alarms are
   * 			deleted.</p>
   * 		       <note>
   *             <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and
   * 			composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle
   * 			because there is always still a composite alarm that depends on that alarm that you want to delete.</p>
   * 			         <p>To get out of such a situation, you must
   * 				break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest
   * 				change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p>
   * 			         <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
   * 			</p>
   *          </note>
   */
  public deleteAlarms(
    args: DeleteAlarmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlarmsCommandOutput>;
  public deleteAlarms(args: DeleteAlarmsCommandInput, cb: (err: any, data?: DeleteAlarmsCommandOutput) => void): void;
  public deleteAlarms(
    args: DeleteAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlarmsCommandOutput) => void
  ): void;
  public deleteAlarms(
    args: DeleteAlarmsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAlarmsCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlarmsCommandOutput) => void
  ): Promise<DeleteAlarmsCommandOutput> | void {
    const command = new DeleteAlarmsCommand(args);
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
   * <p>Deletes the specified anomaly detection model from your account.</p>
   */
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyDetectorCommandOutput>;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  public deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): Promise<DeleteAnomalyDetectorCommandOutput> | void {
    const command = new DeleteAnomalyDetectorCommand(args);
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
   * <p>Deletes all dashboards that you specify. You
   * 			can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are
   * 			deleted.</p>
   */
  public deleteDashboards(
    args: DeleteDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardsCommandOutput>;
  public deleteDashboards(
    args: DeleteDashboardsCommandInput,
    cb: (err: any, data?: DeleteDashboardsCommandOutput) => void
  ): void;
  public deleteDashboards(
    args: DeleteDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardsCommandOutput) => void
  ): void;
  public deleteDashboards(
    args: DeleteDashboardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDashboardsCommandOutput) => void),
    cb?: (err: any, data?: DeleteDashboardsCommandOutput) => void
  ): Promise<DeleteDashboardsCommandOutput> | void {
    const command = new DeleteDashboardsCommand(args);
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
   * <p>Permanently deletes the specified Contributor Insights rules.</p>
   * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
   * 			the rule was created might
   * 			not be available.</p>
   */
  public deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInsightRulesCommandOutput>;
  public deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    cb: (err: any, data?: DeleteInsightRulesCommandOutput) => void
  ): void;
  public deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightRulesCommandOutput) => void
  ): void;
  public deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInsightRulesCommandOutput) => void),
    cb?: (err: any, data?: DeleteInsightRulesCommandOutput) => void
  ): Promise<DeleteInsightRulesCommandOutput> | void {
    const command = new DeleteInsightRulesCommand(args);
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
   * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type.
   * 			If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p>
   * 		       <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
   */
  public describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmHistoryCommandOutput>;
  public describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    cb: (err: any, data?: DescribeAlarmHistoryCommandOutput) => void
  ): void;
  public describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmHistoryCommandOutput) => void
  ): void;
  public describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlarmHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlarmHistoryCommandOutput) => void
  ): Promise<DescribeAlarmHistoryCommandOutput> | void {
    const command = new DescribeAlarmHistoryCommand(args);
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
   * <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm
   * 			name, the alarm state, or a prefix for any action.</p>
   */
  public describeAlarms(
    args: DescribeAlarmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmsCommandOutput>;
  public describeAlarms(
    args: DescribeAlarmsCommandInput,
    cb: (err: any, data?: DescribeAlarmsCommandOutput) => void
  ): void;
  public describeAlarms(
    args: DescribeAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmsCommandOutput) => void
  ): void;
  public describeAlarms(
    args: DescribeAlarmsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlarmsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlarmsCommandOutput) => void
  ): Promise<DescribeAlarmsCommandOutput> | void {
    const command = new DescribeAlarmsCommand(args);
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
   * <p>Retrieves the alarms for the specified metric. To
   * 			filter the results, specify a statistic, period, or unit.</p>
   * 		       <p>This operation retrieves only standard alarms that are based on
   * 		the specified metric. It does not return alarms based on math expressions that
   * 		use the specified metric, or composite alarms that use the specified metric.</p>
   */
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmsForMetricCommandOutput>;
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    cb: (err: any, data?: DescribeAlarmsForMetricCommandOutput) => void
  ): void;
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmsForMetricCommandOutput) => void
  ): void;
  public describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlarmsForMetricCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlarmsForMetricCommandOutput) => void
  ): Promise<DescribeAlarmsForMetricCommandOutput> | void {
    const command = new DescribeAlarmsForMetricCommand(args);
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
   * <p>Lists the anomaly detection models that you have created in your account. You can list all
   * 			models in your account or filter the results to only the models that are related to a
   * 			certain namespace, metric name, or metric dimension.</p>
   */
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectorsCommandOutput>;
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void
  ): void;
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void
  ): void;
  public describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void
  ): Promise<DescribeAnomalyDetectorsCommandOutput> | void {
    const command = new DescribeAnomalyDetectorsCommand(args);
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
   * <p>Returns a list of all the Contributor Insights rules in your account.</p>
   *
   * 		       <p>For more information about Contributor Insights, see
   * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
   */
  public describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightRulesCommandOutput>;
  public describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    cb: (err: any, data?: DescribeInsightRulesCommandOutput) => void
  ): void;
  public describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightRulesCommandOutput) => void
  ): void;
  public describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInsightRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInsightRulesCommandOutput) => void
  ): Promise<DescribeInsightRulesCommandOutput> | void {
    const command = new DescribeInsightRulesCommand(args);
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
   * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the
   * 			alarm actions do not execute when the alarm state changes.</p>
   */
  public disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAlarmActionsCommandOutput>;
  public disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    cb: (err: any, data?: DisableAlarmActionsCommandOutput) => void
  ): void;
  public disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAlarmActionsCommandOutput) => void
  ): void;
  public disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableAlarmActionsCommandOutput) => void),
    cb?: (err: any, data?: DisableAlarmActionsCommandOutput) => void
  ): Promise<DisableAlarmActionsCommandOutput> | void {
    const command = new DisableAlarmActionsCommand(args);
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
   * <p>Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do
   * 		not incur costs.</p>
   */
  public disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableInsightRulesCommandOutput>;
  public disableInsightRules(
    args: DisableInsightRulesCommandInput,
    cb: (err: any, data?: DisableInsightRulesCommandOutput) => void
  ): void;
  public disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableInsightRulesCommandOutput) => void
  ): void;
  public disableInsightRules(
    args: DisableInsightRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableInsightRulesCommandOutput) => void),
    cb?: (err: any, data?: DisableInsightRulesCommandOutput) => void
  ): Promise<DisableInsightRulesCommandOutput> | void {
    const command = new DisableInsightRulesCommand(args);
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
   * <p>Enables the actions for the specified alarms.</p>
   */
  public enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAlarmActionsCommandOutput>;
  public enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    cb: (err: any, data?: EnableAlarmActionsCommandOutput) => void
  ): void;
  public enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAlarmActionsCommandOutput) => void
  ): void;
  public enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableAlarmActionsCommandOutput) => void),
    cb?: (err: any, data?: EnableAlarmActionsCommandOutput) => void
  ): Promise<EnableAlarmActionsCommandOutput> | void {
    const command = new EnableAlarmActionsCommand(args);
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
   * <p>Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.</p>
   */
  public enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableInsightRulesCommandOutput>;
  public enableInsightRules(
    args: EnableInsightRulesCommandInput,
    cb: (err: any, data?: EnableInsightRulesCommandOutput) => void
  ): void;
  public enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableInsightRulesCommandOutput) => void
  ): void;
  public enableInsightRules(
    args: EnableInsightRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableInsightRulesCommandOutput) => void),
    cb?: (err: any, data?: EnableInsightRulesCommandOutput) => void
  ): Promise<EnableInsightRulesCommandOutput> | void {
    const command = new EnableInsightRulesCommand(args);
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
   * <p>Displays the details of the dashboard that you specify.</p>
   * 		       <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned
   * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create
   * 			the copy.</p>
   */
  public getDashboard(
    args: GetDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDashboardCommandOutput>;
  public getDashboard(args: GetDashboardCommandInput, cb: (err: any, data?: GetDashboardCommandOutput) => void): void;
  public getDashboard(
    args: GetDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
  ): void;
  public getDashboard(
    args: GetDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDashboardCommandOutput) => void),
    cb?: (err: any, data?: GetDashboardCommandOutput) => void
  ): Promise<GetDashboardCommandOutput> | void {
    const command = new GetDashboardCommand(args);
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
   * <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of
   * 		contributors to the log group.</p>
   * 		       <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
   * 					contributor might change for each data point in the graph.</p>
   * 				           <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
   * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
   * 					by the rule's <code>Value</code>, during that period.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
   * 			         </li>
   *          </ul>
   */
  public getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightRuleReportCommandOutput>;
  public getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    cb: (err: any, data?: GetInsightRuleReportCommandOutput) => void
  ): void;
  public getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightRuleReportCommandOutput) => void
  ): void;
  public getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightRuleReportCommandOutput) => void),
    cb?: (err: any, data?: GetInsightRuleReportCommandOutput) => void
  ): Promise<GetInsightRuleReportCommandOutput> | void {
    const command = new GetInsightRuleReportCommand(args);
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
   * <p>You can use the <code>GetMetricData</code> API to retrieve as many as 500 different
   * 			metrics in a single request, with a total of as many as 100,800 data points. You can also
   * 			optionally perform math expressions on the values of the returned statistics, to create
   * 			new time series that represent new insights into your data. For example, using Lambda
   * 			metrics, you could divide the Errors metric by the Invocations metric to get an error
   * 			rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
   * 				Guide</i>.</p>
   *
   * 		       <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than
   * 			calls to <code>GetMetricStatistics</code>. For more information about pricing, see
   * 			<a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *
   * 		       <p>Amazon CloudWatch retains metric data as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution
   * 				metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p>
   *             </li>
   *          </ul>
   * 		       <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect
   * 			data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available,
   * 			but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with
   * 			a resolution of 1 hour.</p>
   *
   * 		       <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified
   * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   */
  public getMetricData(
    args: GetMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricDataCommandOutput>;
  public getMetricData(
    args: GetMetricDataCommandInput,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetMetricDataCommandOutput) => void
  ): Promise<GetMetricDataCommandOutput> | void {
    const command = new GetMetricDataCommand(args);
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
   * <p>Gets statistics for the specified metric.</p>
   *
   *
   *
   * 		       <p>The maximum number of data points returned from a single call is 1,440. If
   * 			you request more than 1,440 data points, CloudWatch returns an error.
   * 			To reduce the number of data points, you can narrow the specified time range and make
   * 			multiple requests across adjacent time ranges, or you can increase the specified period.
   * 			Data points are not returned in chronological order.</p>
   *
   * 		       <p>CloudWatch aggregates data points based on the length of the period
   * 			that you specify. For example, if you request statistics with a one-hour period,
   * 			CloudWatch aggregates all data points with time stamps that fall within each
   * 			one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than
   * 			the number of data points returned.</p>
   * 		       <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
   * 			data using a statistic set instead, you can only retrieve
   * 			percentile statistics for this data if one of the following conditions is true:</p>
   * 		       <ul>
   *             <li>
   *                <p>The SampleCount value of the statistic set is 1.</p>
   *             </li>
   *             <li>
   *                <p>The Min and the Max values of the statistic set are equal.</p>
   *             </li>
   *          </ul>
   * 		       <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p>
   * 		       <p>Amazon CloudWatch retains metric data as follows:</p>
   * 		       <ul>
   *             <li>
   *                <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution
   * 				metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
   *             </li>
   *             <li>
   *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p>
   *             </li>
   *          </ul>
   * 		       <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect
   * 			data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available,
   * 			but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with
   * 		a resolution of 1 hour.</p>
   * 		       <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p>
   *
   * 		       <p>For information about metrics and dimensions supported by AWS services, see the
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   */
  public getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricStatisticsCommandOutput>;
  public getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    cb: (err: any, data?: GetMetricStatisticsCommandOutput) => void
  ): void;
  public getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricStatisticsCommandOutput) => void
  ): void;
  public getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetricStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetMetricStatisticsCommandOutput) => void
  ): Promise<GetMetricStatisticsCommandOutput> | void {
    const command = new GetMetricStatisticsCommand(args);
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
   * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
   * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
   * 			image into your services and products, such as wiki pages, reports, and documents.
   * 			You could also retrieve images regularly, such as every minute, and create your own
   * 			custom live dashboard.</p>
   *
   * 		       <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
   * 		and horizontal and vertical annotations.</p>
   *
   * 		       <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>As many as 100 metrics in the graph.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Up to 100 KB uncompressed payload.</p>
   * 			         </li>
   *          </ul>
   */
  public getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricWidgetImageCommandOutput>;
  public getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    cb: (err: any, data?: GetMetricWidgetImageCommandOutput) => void
  ): void;
  public getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricWidgetImageCommandOutput) => void
  ): void;
  public getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetricWidgetImageCommandOutput) => void),
    cb?: (err: any, data?: GetMetricWidgetImageCommandOutput) => void
  ): Promise<GetMetricWidgetImageCommandOutput> | void {
    const command = new GetMetricWidgetImageCommand(args);
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
   * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only
   * 			those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are
   * 			listed.
   * 	    </p>
   * 		       <p>
   *             <code>ListDashboards</code> returns up to 1000 results on one page. If there
   * 			are more than 1000 dashboards, you can call <code>ListDashboards</code> again and
   * 		include the value you received for <code>NextToken</code> in the first call, to receive
   * 		the next 1000 results.</p>
   */
  public listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  public listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDashboardsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardsCommandOutput) => void
  ): Promise<ListDashboardsCommandOutput> | void {
    const command = new ListDashboardsCommand(args);
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
   * <p>List the specified metrics. You can use the returned metrics with
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to obtain statistical data.</p>
   * 		       <p>Up to 500 results are returned for any one call. To retrieve additional results,
   * 			use the returned token with subsequent calls.</p>
   * 		       <p>After you create a metric, allow up to 15 minutes before the metric appears.
   * 			You can see statistics about the metric sooner by using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
   *
   * 	        <p>
   *             <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't
   * 	reported data in the past two weeks. To retrieve those metrics, use
   * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
   * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
   */
  public listMetrics(args: ListMetricsCommandInput, options?: __HttpHandlerOptions): Promise<ListMetricsCommandOutput>;
  public listMetrics(args: ListMetricsCommandInput, cb: (err: any, data?: ListMetricsCommandOutput) => void): void;
  public listMetrics(
    args: ListMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricsCommandOutput) => void
  ): void;
  public listMetrics(
    args: ListMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListMetricsCommandOutput) => void
  ): Promise<ListMetricsCommandOutput> | void {
    const command = new ListMetricsCommand(args);
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
   * <p>Displays the tags associated with a CloudWatch resource. Currently, alarms
   * 			and Contributor Insights rules support tagging.</p>
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
   * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model
   * 			to display a band of expected normal values when the metric is graphed.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
   */
  public putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAnomalyDetectorCommandOutput>;
  public putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    cb: (err: any, data?: PutAnomalyDetectorCommandOutput) => void
  ): void;
  public putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAnomalyDetectorCommandOutput) => void
  ): void;
  public putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAnomalyDetectorCommandOutput) => void),
    cb?: (err: any, data?: PutAnomalyDetectorCommandOutput) => void
  ): Promise<PutAnomalyDetectorCommandOutput> | void {
    const command = new PutAnomalyDetectorCommand(args);
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
   * <p>Creates or updates a <i>composite alarm</i>. When you create a composite
   * 			alarm, you specify a rule expression for the alarm that takes into account the alarm
   * 			states of other alarms that you have created. The composite alarm goes into ALARM state
   * 			only if all conditions of the rule are met.</p>
   * 		       <p>The alarms specified in a composite alarm's rule expression can include metric alarms
   * 			and other composite alarms.</p>
   * 		       <p>Using composite alarms can reduce
   * 			alarm noise. You can create multiple metric alarms,
   * 			and also create a composite alarm and
   * 			set up alerts only
   * 			for the composite alarm. For example, you could create a composite
   * 			alarm that goes into ALARM state only when more than one of the underlying metric alarms
   * 			are in ALARM state.</p>
   * 		       <p>Currently, the only alarm actions that can be taken by composite alarms are notifying
   * 			SNS topics.</p>
   * 		       <note>
   *             <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and
   * 			composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle
   * 			because there is always still a composite alarm that depends on that alarm that you want to delete.</p>
   * 			         <p>To get out of such a situation, you must
   * 			break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest
   * 			change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p>
   * 			         <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
   * 		</p>
   *          </note>
   * 		       <p>When this operation creates an alarm, the alarm state is immediately set to
   * 				<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
   * 			appropriately. Any actions associated with the new state are then executed. For a
   * 			composite alarm, this initial time after creation is the only time that
   * 			the
   * 			alarm can be in <code>INSUFFICIENT_DATA</code> state.</p>
   * 		       <p>When you update an existing alarm, its state is left unchanged, but the update
   * 			completely overwrites the previous configuration of the alarm.</p>
   *
   * 		       <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create
   * 			a composite alarm that has Systems Manager OpsItem actions.</p>
   */
  public putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCompositeAlarmCommandOutput>;
  public putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    cb: (err: any, data?: PutCompositeAlarmCommandOutput) => void
  ): void;
  public putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCompositeAlarmCommandOutput) => void
  ): void;
  public putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCompositeAlarmCommandOutput) => void),
    cb?: (err: any, data?: PutCompositeAlarmCommandOutput) => void
  ): Promise<PutCompositeAlarmCommandOutput> | void {
    const command = new PutCompositeAlarmCommand(args);
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
   * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard,
   * 		the entire contents are replaced with what you specify here.</p>
   * 		       <p>All dashboards in your account are global, not region-specific.</p>
   * 		       <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
   * 			existing dashboard. To copy an existing dashboard using the console, you can load the dashboard
   * 			and then use the View/edit source command in the Actions menu to display the JSON  block
   * 			for that dashboard. Another way to copy a dashboard is to
   * 			use <code>GetDashboard</code>, and then use the data returned
   * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p>
   * 		       <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
   * 			add a text widget at the top of the dashboard with a message that the dashboard was created by script and should
   * 		not be changed in the console. This message could also point console users to the location
   * 		of the <code>DashboardBody</code> script or the CloudFormation template used to create the
   * 		dashboard.</p>
   */
  public putDashboard(
    args: PutDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDashboardCommandOutput>;
  public putDashboard(args: PutDashboardCommandInput, cb: (err: any, data?: PutDashboardCommandOutput) => void): void;
  public putDashboard(
    args: PutDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDashboardCommandOutput) => void
  ): void;
  public putDashboard(
    args: PutDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDashboardCommandOutput) => void),
    cb?: (err: any, data?: PutDashboardCommandOutput) => void
  ): Promise<PutDashboardCommandOutput> | void {
    const command = new PutDashboardCommand(args);
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
   * <p>Creates a Contributor Insights rule. Rules evaluate log events in a
   * 		CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information,
   * 		see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
   * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
   * 			the rule was created might not be available.</p>
   */
  public putInsightRule(
    args: PutInsightRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInsightRuleCommandOutput>;
  public putInsightRule(
    args: PutInsightRuleCommandInput,
    cb: (err: any, data?: PutInsightRuleCommandOutput) => void
  ): void;
  public putInsightRule(
    args: PutInsightRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInsightRuleCommandOutput) => void
  ): void;
  public putInsightRule(
    args: PutInsightRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutInsightRuleCommandOutput) => void),
    cb?: (err: any, data?: PutInsightRuleCommandOutput) => void
  ): Promise<PutInsightRuleCommandOutput> | void {
    const command = new PutInsightRuleCommand(args);
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
   * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression,
   * 			or anomaly detection model.</p>
   * 		       <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p>
   * 		       <p>When this operation creates an alarm, the alarm state is immediately set to
   * 			<code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
   * 			appropriately. Any actions associated with the new state are then executed.</p>
   * 		       <p>When you update an existing alarm, its state is left unchanged, but the
   * 			update completely overwrites the previous configuration of the alarm.</p>
   *
   * 		       <p>If you are an IAM user, you must have
   * 			Amazon EC2 permissions for some alarm operations:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p>
   *
   * 			         </li>
   *             <li>
   *
   * 				           <p>The <code>iam:CreateServiceLinkedRole</code> to create an alarm
   * 					with Systems Manager OpsItem actions.</p>
   * 			         </li>
   *          </ul>
   *
   *
   *
   *
   *
   *
   * 		       <p>The first time you create an alarm in the
   * 			AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch
   * 			creates the necessary service-linked rolea for you. The service-linked roles
   * 			are called <code>AWSServiceRoleForCloudWatchEvents</code> and
   * 			<code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>.
   * 			For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">AWS service-linked role</a>.</p>
   */
  public putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricAlarmCommandOutput>;
  public putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    cb: (err: any, data?: PutMetricAlarmCommandOutput) => void
  ): void;
  public putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricAlarmCommandOutput) => void
  ): void;
  public putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMetricAlarmCommandOutput) => void),
    cb?: (err: any, data?: PutMetricAlarmCommandOutput) => void
  ): Promise<PutMetricAlarmCommandOutput> | void {
    const command = new PutMetricAlarmCommand(args);
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
   * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates
   * 			the data points with the specified metric. If the specified metric does not exist,
   * 			CloudWatch creates the metric. When CloudWatch creates a metric, it can
   * 			take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
   *
   * 		       <p>You can publish either individual data points in the <code>Value</code> field, or
   * 		arrays of values and the number of times each value occurred during the period by using the
   * 		<code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using
   * 		the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric
   * 			with one <code>PutMetricData</code> request, and
   * 		supports retrieving percentile statistics on this data.</p>
   * 		       <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests. You can
   * 			send a payload compressed by gzip. Each request
   * 		is also limited to no more than 20 different metrics.</p>
   * 		       <p>Although the <code>Value</code> parameter accepts numbers of type
   * 			<code>Double</code>, CloudWatch rejects values that are either too small
   * 			or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
   * 			-Infinity) are not supported.</p>
   * 		       <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension
   * 			consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   *
   * 		       <p>You specify the time stamp to be associated with each data point. You can specify
   * 		time stamps that are as much as two weeks before the current date, and as much as 2 hours after
   * 		the current day and time.</p>
   * 		       <p>Data points with time stamps from 24 hours ago or longer can take at least 48
   * 			hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they
   * 			are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available
   * 			for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
   * 		       <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
   * 			data using a statistic set instead, you can only retrieve
   * 			percentile statistics for this data if one of the following conditions is true:</p>
   * 			      <ul>
   *             <li>
   *                <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>,
   * 					<code>Max</code>, and <code>Sum</code> are all equal.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Min</code> and
   * 					<code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code>
   * 					multiplied by <code>SampleCount</code>.</p>
   *             </li>
   *          </ul>
   */
  public putMetricData(
    args: PutMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricDataCommandOutput>;
  public putMetricData(
    args: PutMetricDataCommandInput,
    cb: (err: any, data?: PutMetricDataCommandOutput) => void
  ): void;
  public putMetricData(
    args: PutMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricDataCommandOutput) => void
  ): void;
  public putMetricData(
    args: PutMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMetricDataCommandOutput) => void),
    cb?: (err: any, data?: PutMetricDataCommandOutput) => void
  ): Promise<PutMetricDataCommandOutput> | void {
    const command = new PutMetricDataCommand(args);
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
   * <p>Temporarily sets the state of an alarm for testing purposes. When the updated
   * 			state differs from the previous value, the action configured for
   * 			the appropriate state is invoked. For example, if your alarm is configured to send an
   * 			Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to
   * 			<code>ALARM</code> sends an SNS message.</p>
   * 		       <p>Metric alarms
   * 			returns to their actual state quickly, often within seconds. Because the metric alarm state change
   * 			happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p>
   * 		       <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return
   * 			to its actual state. It
   * 			returns to its actual state only once any of its children alarms change state. It is also
   * 			reevaluated if you update its
   * 			configuration.</p>
   * 		       <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include
   * 		information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
   */
  public setAlarmState(
    args: SetAlarmStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetAlarmStateCommandOutput>;
  public setAlarmState(
    args: SetAlarmStateCommandInput,
    cb: (err: any, data?: SetAlarmStateCommandOutput) => void
  ): void;
  public setAlarmState(
    args: SetAlarmStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetAlarmStateCommandOutput) => void
  ): void;
  public setAlarmState(
    args: SetAlarmStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetAlarmStateCommandOutput) => void),
    cb?: (err: any, data?: SetAlarmStateCommandOutput) => void
  ): Promise<SetAlarmStateCommandOutput> | void {
    const command = new SetAlarmStateCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that
   * 			can be tagged are alarms and Contributor Insights rules.</p>
   * 		       <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   * 			permissions by granting a user
   * 			permission to access or change only resources with certain tag values.</p>
   * 		       <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p>
   * 		       <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm,
   * 			this tag is appended to the list of tags associated
   * 			with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
   * 			the previous value for that tag.</p>
   * 		       <p>You can associate as many as 50 tags with a CloudWatch resource.</p>
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
}
