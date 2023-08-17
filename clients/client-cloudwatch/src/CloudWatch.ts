// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudWatchClient, CloudWatchClientConfig } from "./CloudWatchClient";
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
  DeleteMetricStreamCommand,
  DeleteMetricStreamCommandInput,
  DeleteMetricStreamCommandOutput,
} from "./commands/DeleteMetricStreamCommand";
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
  GetMetricStreamCommand,
  GetMetricStreamCommandInput,
  GetMetricStreamCommandOutput,
} from "./commands/GetMetricStreamCommand";
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
import {
  ListManagedInsightRulesCommand,
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "./commands/ListManagedInsightRulesCommand";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import {
  ListMetricStreamsCommand,
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput,
} from "./commands/ListMetricStreamsCommand";
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
  PutManagedInsightRulesCommand,
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
} from "./commands/PutManagedInsightRulesCommand";
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
  PutMetricStreamCommand,
  PutMetricStreamCommandInput,
  PutMetricStreamCommandOutput,
} from "./commands/PutMetricStreamCommand";
import {
  SetAlarmStateCommand,
  SetAlarmStateCommandInput,
  SetAlarmStateCommandOutput,
} from "./commands/SetAlarmStateCommand";
import {
  StartMetricStreamsCommand,
  StartMetricStreamsCommandInput,
  StartMetricStreamsCommandOutput,
} from "./commands/StartMetricStreamsCommand";
import {
  StopMetricStreamsCommand,
  StopMetricStreamsCommandInput,
  StopMetricStreamsCommandOutput,
} from "./commands/StopMetricStreamsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
  DescribeAlarmHistoryCommand,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetricCommand,
  DescribeAnomalyDetectorsCommand,
  DescribeInsightRulesCommand,
  DisableAlarmActionsCommand,
  DisableInsightRulesCommand,
  EnableAlarmActionsCommand,
  EnableInsightRulesCommand,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  GetMetricStreamCommand,
  GetMetricWidgetImageCommand,
  ListDashboardsCommand,
  ListManagedInsightRulesCommand,
  ListMetricsCommand,
  ListMetricStreamsCommand,
  ListTagsForResourceCommand,
  PutAnomalyDetectorCommand,
  PutCompositeAlarmCommand,
  PutDashboardCommand,
  PutInsightRuleCommand,
  PutManagedInsightRulesCommand,
  PutMetricAlarmCommand,
  PutMetricDataCommand,
  PutMetricStreamCommand,
  SetAlarmStateCommand,
  StartMetricStreamsCommand,
  StopMetricStreamsCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface CloudWatch {
  /**
   * @see {@link DeleteAlarmsCommand}
   */
  deleteAlarms(args: DeleteAlarmsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlarmsCommandOutput>;
  deleteAlarms(args: DeleteAlarmsCommandInput, cb: (err: any, data?: DeleteAlarmsCommandOutput) => void): void;
  deleteAlarms(
    args: DeleteAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnomalyDetectorCommand}
   */
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyDetectorCommandOutput>;
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardsCommand}
   */
  deleteDashboards(
    args: DeleteDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardsCommandOutput>;
  deleteDashboards(
    args: DeleteDashboardsCommandInput,
    cb: (err: any, data?: DeleteDashboardsCommandOutput) => void
  ): void;
  deleteDashboards(
    args: DeleteDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInsightRulesCommand}
   */
  deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInsightRulesCommandOutput>;
  deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    cb: (err: any, data?: DeleteInsightRulesCommandOutput) => void
  ): void;
  deleteInsightRules(
    args: DeleteInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMetricStreamCommand}
   */
  deleteMetricStream(
    args: DeleteMetricStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricStreamCommandOutput>;
  deleteMetricStream(
    args: DeleteMetricStreamCommandInput,
    cb: (err: any, data?: DeleteMetricStreamCommandOutput) => void
  ): void;
  deleteMetricStream(
    args: DeleteMetricStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlarmHistoryCommand}
   */
  describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmHistoryCommandOutput>;
  describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    cb: (err: any, data?: DescribeAlarmHistoryCommandOutput) => void
  ): void;
  describeAlarmHistory(
    args: DescribeAlarmHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlarmsCommand}
   */
  describeAlarms(
    args: DescribeAlarmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmsCommandOutput>;
  describeAlarms(args: DescribeAlarmsCommandInput, cb: (err: any, data?: DescribeAlarmsCommandOutput) => void): void;
  describeAlarms(
    args: DescribeAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlarmsForMetricCommand}
   */
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmsForMetricCommandOutput>;
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    cb: (err: any, data?: DescribeAlarmsForMetricCommandOutput) => void
  ): void;
  describeAlarmsForMetric(
    args: DescribeAlarmsForMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmsForMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnomalyDetectorsCommand}
   */
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectorsCommandOutput>;
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void
  ): void;
  describeAnomalyDetectors(
    args: DescribeAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInsightRulesCommand}
   */
  describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightRulesCommandOutput>;
  describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    cb: (err: any, data?: DescribeInsightRulesCommandOutput) => void
  ): void;
  describeInsightRules(
    args: DescribeInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAlarmActionsCommand}
   */
  disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAlarmActionsCommandOutput>;
  disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    cb: (err: any, data?: DisableAlarmActionsCommandOutput) => void
  ): void;
  disableAlarmActions(
    args: DisableAlarmActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAlarmActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableInsightRulesCommand}
   */
  disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableInsightRulesCommandOutput>;
  disableInsightRules(
    args: DisableInsightRulesCommandInput,
    cb: (err: any, data?: DisableInsightRulesCommandOutput) => void
  ): void;
  disableInsightRules(
    args: DisableInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableInsightRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAlarmActionsCommand}
   */
  enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAlarmActionsCommandOutput>;
  enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    cb: (err: any, data?: EnableAlarmActionsCommandOutput) => void
  ): void;
  enableAlarmActions(
    args: EnableAlarmActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAlarmActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableInsightRulesCommand}
   */
  enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableInsightRulesCommandOutput>;
  enableInsightRules(
    args: EnableInsightRulesCommandInput,
    cb: (err: any, data?: EnableInsightRulesCommandOutput) => void
  ): void;
  enableInsightRules(
    args: EnableInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableInsightRulesCommandOutput) => void
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
   * @see {@link GetInsightRuleReportCommand}
   */
  getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightRuleReportCommandOutput>;
  getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    cb: (err: any, data?: GetInsightRuleReportCommandOutput) => void
  ): void;
  getInsightRuleReport(
    args: GetInsightRuleReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightRuleReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(args: GetMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetricDataCommandOutput>;
  getMetricData(args: GetMetricDataCommandInput, cb: (err: any, data?: GetMetricDataCommandOutput) => void): void;
  getMetricData(
    args: GetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricStatisticsCommand}
   */
  getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricStatisticsCommandOutput>;
  getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    cb: (err: any, data?: GetMetricStatisticsCommandOutput) => void
  ): void;
  getMetricStatistics(
    args: GetMetricStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricStreamCommand}
   */
  getMetricStream(
    args: GetMetricStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricStreamCommandOutput>;
  getMetricStream(args: GetMetricStreamCommandInput, cb: (err: any, data?: GetMetricStreamCommandOutput) => void): void;
  getMetricStream(
    args: GetMetricStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricWidgetImageCommand}
   */
  getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricWidgetImageCommandOutput>;
  getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    cb: (err: any, data?: GetMetricWidgetImageCommandOutput) => void
  ): void;
  getMetricWidgetImage(
    args: GetMetricWidgetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricWidgetImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
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
   * @see {@link ListManagedInsightRulesCommand}
   */
  listManagedInsightRules(
    args: ListManagedInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedInsightRulesCommandOutput>;
  listManagedInsightRules(
    args: ListManagedInsightRulesCommandInput,
    cb: (err: any, data?: ListManagedInsightRulesCommandOutput) => void
  ): void;
  listManagedInsightRules(
    args: ListManagedInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedInsightRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricsCommand}
   */
  listMetrics(args: ListMetricsCommandInput, options?: __HttpHandlerOptions): Promise<ListMetricsCommandOutput>;
  listMetrics(args: ListMetricsCommandInput, cb: (err: any, data?: ListMetricsCommandOutput) => void): void;
  listMetrics(
    args: ListMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricStreamsCommand}
   */
  listMetricStreams(
    args: ListMetricStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricStreamsCommandOutput>;
  listMetricStreams(
    args: ListMetricStreamsCommandInput,
    cb: (err: any, data?: ListMetricStreamsCommandOutput) => void
  ): void;
  listMetricStreams(
    args: ListMetricStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricStreamsCommandOutput) => void
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
   * @see {@link PutAnomalyDetectorCommand}
   */
  putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAnomalyDetectorCommandOutput>;
  putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    cb: (err: any, data?: PutAnomalyDetectorCommandOutput) => void
  ): void;
  putAnomalyDetector(
    args: PutAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCompositeAlarmCommand}
   */
  putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCompositeAlarmCommandOutput>;
  putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    cb: (err: any, data?: PutCompositeAlarmCommandOutput) => void
  ): void;
  putCompositeAlarm(
    args: PutCompositeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCompositeAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDashboardCommand}
   */
  putDashboard(args: PutDashboardCommandInput, options?: __HttpHandlerOptions): Promise<PutDashboardCommandOutput>;
  putDashboard(args: PutDashboardCommandInput, cb: (err: any, data?: PutDashboardCommandOutput) => void): void;
  putDashboard(
    args: PutDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInsightRuleCommand}
   */
  putInsightRule(
    args: PutInsightRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInsightRuleCommandOutput>;
  putInsightRule(args: PutInsightRuleCommandInput, cb: (err: any, data?: PutInsightRuleCommandOutput) => void): void;
  putInsightRule(
    args: PutInsightRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInsightRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutManagedInsightRulesCommand}
   */
  putManagedInsightRules(
    args: PutManagedInsightRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutManagedInsightRulesCommandOutput>;
  putManagedInsightRules(
    args: PutManagedInsightRulesCommandInput,
    cb: (err: any, data?: PutManagedInsightRulesCommandOutput) => void
  ): void;
  putManagedInsightRules(
    args: PutManagedInsightRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutManagedInsightRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricAlarmCommand}
   */
  putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricAlarmCommandOutput>;
  putMetricAlarm(args: PutMetricAlarmCommandInput, cb: (err: any, data?: PutMetricAlarmCommandOutput) => void): void;
  putMetricAlarm(
    args: PutMetricAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricDataCommand}
   */
  putMetricData(args: PutMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<PutMetricDataCommandOutput>;
  putMetricData(args: PutMetricDataCommandInput, cb: (err: any, data?: PutMetricDataCommandOutput) => void): void;
  putMetricData(
    args: PutMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricStreamCommand}
   */
  putMetricStream(
    args: PutMetricStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricStreamCommandOutput>;
  putMetricStream(args: PutMetricStreamCommandInput, cb: (err: any, data?: PutMetricStreamCommandOutput) => void): void;
  putMetricStream(
    args: PutMetricStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link SetAlarmStateCommand}
   */
  setAlarmState(args: SetAlarmStateCommandInput, options?: __HttpHandlerOptions): Promise<SetAlarmStateCommandOutput>;
  setAlarmState(args: SetAlarmStateCommandInput, cb: (err: any, data?: SetAlarmStateCommandOutput) => void): void;
  setAlarmState(
    args: SetAlarmStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetAlarmStateCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMetricStreamsCommand}
   */
  startMetricStreams(
    args: StartMetricStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMetricStreamsCommandOutput>;
  startMetricStreams(
    args: StartMetricStreamsCommandInput,
    cb: (err: any, data?: StartMetricStreamsCommandOutput) => void
  ): void;
  startMetricStreams(
    args: StartMetricStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMetricStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMetricStreamsCommand}
   */
  stopMetricStreams(
    args: StopMetricStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMetricStreamsCommandOutput>;
  stopMetricStreams(
    args: StopMetricStreamsCommandInput,
    cb: (err: any, data?: StopMetricStreamsCommandOutput) => void
  ): void;
  stopMetricStreams(
    args: StopMetricStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMetricStreamsCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the
 * 			applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *          <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules
 * 			that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch
 * 			additional instances to handle increased load. You can also use this data to stop
 * 			under-used instances to save
 * 			money.</p>
 *          <p>In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 */
export class CloudWatch extends CloudWatchClient implements CloudWatch {}
createAggregatedClient(commands, CloudWatch);
