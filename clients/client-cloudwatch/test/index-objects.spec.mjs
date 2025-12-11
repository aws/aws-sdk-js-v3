import {
  ActionsSuppressedBy,
  AlarmType,
  AnomalyDetectorStateValue,
  AnomalyDetectorType,
  CloudWatch,
  CloudWatchClient,
  CloudWatchServiceException,
  ComparisonOperator,
  ConcurrentModificationException,
  ConflictException,
  DashboardInvalidInputError,
  DashboardNotFoundError,
  DeleteAlarmsCommand,
  DeleteAnomalyDetectorCommand,
  DeleteDashboardsCommand,
  DeleteInsightRulesCommand,
  DeleteMetricStreamCommand,
  DescribeAlarmContributorsCommand,
  DescribeAlarmHistoryCommand,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetricCommand,
  DescribeAnomalyDetectorsCommand,
  DescribeInsightRulesCommand,
  DisableAlarmActionsCommand,
  DisableInsightRulesCommand,
  EnableAlarmActionsCommand,
  EnableInsightRulesCommand,
  EvaluationState,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  GetMetricDataCommand,
  GetMetricStatisticsCommand,
  GetMetricStreamCommand,
  GetMetricWidgetImageCommand,
  HistoryItemType,
  InternalServiceFault,
  InvalidFormatFault,
  InvalidNextToken,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  LimitExceededException,
  LimitExceededFault,
  ListDashboardsCommand,
  ListManagedInsightRulesCommand,
  ListMetricStreamsCommand,
  ListMetricsCommand,
  ListTagsForResourceCommand,
  MetricStreamOutputFormat,
  MissingRequiredParameterException,
  PutAnomalyDetectorCommand,
  PutCompositeAlarmCommand,
  PutDashboardCommand,
  PutInsightRuleCommand,
  PutManagedInsightRulesCommand,
  PutMetricAlarmCommand,
  PutMetricDataCommand,
  PutMetricStreamCommand,
  RecentlyActive,
  ResourceNotFound,
  ResourceNotFoundException,
  ScanBy,
  SetAlarmStateCommand,
  StandardUnit,
  StartMetricStreamsCommand,
  StateValue,
  Statistic,
  StatusCode,
  StopMetricStreamsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateDescribeAlarmHistory,
  paginateDescribeAlarms,
  paginateDescribeAnomalyDetectors,
  paginateDescribeInsightRules,
  paginateGetMetricData,
  paginateListDashboards,
  paginateListManagedInsightRules,
  paginateListMetricStreams,
  paginateListMetrics,
  waitForAlarmExists,
  waitForCompositeAlarmExists,
  waitUntilAlarmExists,
  waitUntilCompositeAlarmExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudWatchClient === "function");
assert(typeof CloudWatch === "function");
// commands
assert(typeof DeleteAlarmsCommand === "function");
assert(typeof DeleteAnomalyDetectorCommand === "function");
assert(typeof DeleteDashboardsCommand === "function");
assert(typeof DeleteInsightRulesCommand === "function");
assert(typeof DeleteMetricStreamCommand === "function");
assert(typeof DescribeAlarmContributorsCommand === "function");
assert(typeof DescribeAlarmHistoryCommand === "function");
assert(typeof DescribeAlarmsCommand === "function");
assert(typeof DescribeAlarmsForMetricCommand === "function");
assert(typeof DescribeAnomalyDetectorsCommand === "function");
assert(typeof DescribeInsightRulesCommand === "function");
assert(typeof DisableAlarmActionsCommand === "function");
assert(typeof DisableInsightRulesCommand === "function");
assert(typeof EnableAlarmActionsCommand === "function");
assert(typeof EnableInsightRulesCommand === "function");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetInsightRuleReportCommand === "function");
assert(typeof GetMetricDataCommand === "function");
assert(typeof GetMetricStatisticsCommand === "function");
assert(typeof GetMetricStreamCommand === "function");
assert(typeof GetMetricWidgetImageCommand === "function");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListManagedInsightRulesCommand === "function");
assert(typeof ListMetricsCommand === "function");
assert(typeof ListMetricStreamsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAnomalyDetectorCommand === "function");
assert(typeof PutCompositeAlarmCommand === "function");
assert(typeof PutDashboardCommand === "function");
assert(typeof PutInsightRuleCommand === "function");
assert(typeof PutManagedInsightRulesCommand === "function");
assert(typeof PutMetricAlarmCommand === "function");
assert(typeof PutMetricDataCommand === "function");
assert(typeof PutMetricStreamCommand === "function");
assert(typeof SetAlarmStateCommand === "function");
assert(typeof StartMetricStreamsCommand === "function");
assert(typeof StopMetricStreamsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof ActionsSuppressedBy === "object");
assert(typeof AlarmType === "object");
assert(typeof AnomalyDetectorStateValue === "object");
assert(typeof AnomalyDetectorType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof EvaluationState === "object");
assert(typeof HistoryItemType === "object");
assert(typeof MetricStreamOutputFormat === "object");
assert(typeof RecentlyActive === "object");
assert(typeof ScanBy === "object");
assert(typeof StandardUnit === "object");
assert(typeof StateValue === "object");
assert(typeof Statistic === "object");
assert(typeof StatusCode === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof CloudWatchServiceException);
assert(ConflictException.prototype instanceof CloudWatchServiceException);
assert(DashboardInvalidInputError.prototype instanceof CloudWatchServiceException);
assert(DashboardNotFoundError.prototype instanceof CloudWatchServiceException);
assert(InternalServiceFault.prototype instanceof CloudWatchServiceException);
assert(InvalidFormatFault.prototype instanceof CloudWatchServiceException);
assert(InvalidNextToken.prototype instanceof CloudWatchServiceException);
assert(InvalidParameterCombinationException.prototype instanceof CloudWatchServiceException);
assert(InvalidParameterValueException.prototype instanceof CloudWatchServiceException);
assert(LimitExceededException.prototype instanceof CloudWatchServiceException);
assert(LimitExceededFault.prototype instanceof CloudWatchServiceException);
assert(MissingRequiredParameterException.prototype instanceof CloudWatchServiceException);
assert(ResourceNotFound.prototype instanceof CloudWatchServiceException);
assert(ResourceNotFoundException.prototype instanceof CloudWatchServiceException);
assert(CloudWatchServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAlarmExists === "function");
assert(typeof waitForCompositeAlarmExists === "function");
assert(typeof waitUntilAlarmExists === "function");
assert(typeof waitUntilCompositeAlarmExists === "function");
// paginators
assert(typeof paginateDescribeAlarmHistory === "function");
assert(typeof paginateDescribeAlarms === "function");
assert(typeof paginateDescribeAnomalyDetectors === "function");
assert(typeof paginateDescribeInsightRules === "function");
assert(typeof paginateGetMetricData === "function");
assert(typeof paginateListDashboards === "function");
assert(typeof paginateListManagedInsightRules === "function");
assert(typeof paginateListMetricStreams === "function");
assert(typeof paginateListMetrics === "function");
console.log(`CloudWatch index test passed.`);
