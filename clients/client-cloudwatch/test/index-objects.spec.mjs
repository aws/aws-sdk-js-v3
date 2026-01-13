import {
  ActionsSuppressedBy,
  AlarmContributor$,
  AlarmHistoryItem$,
  AlarmType,
  AnomalyDetector$,
  AnomalyDetectorConfiguration$,
  AnomalyDetectorStateValue,
  AnomalyDetectorType,
  CloudWatch,
  CloudWatchClient,
  CloudWatchServiceException,
  ComparisonOperator,
  CompositeAlarm$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  DashboardEntry$,
  DashboardInvalidInputError,
  DashboardInvalidInputError$,
  DashboardNotFoundError,
  DashboardNotFoundError$,
  DashboardValidationMessage$,
  Datapoint$,
  DeleteAlarms$,
  DeleteAlarmsCommand,
  DeleteAlarmsInput$,
  DeleteAnomalyDetector$,
  DeleteAnomalyDetectorCommand,
  DeleteAnomalyDetectorInput$,
  DeleteAnomalyDetectorOutput$,
  DeleteDashboards$,
  DeleteDashboardsCommand,
  DeleteDashboardsInput$,
  DeleteDashboardsOutput$,
  DeleteInsightRules$,
  DeleteInsightRulesCommand,
  DeleteInsightRulesInput$,
  DeleteInsightRulesOutput$,
  DeleteMetricStream$,
  DeleteMetricStreamCommand,
  DeleteMetricStreamInput$,
  DeleteMetricStreamOutput$,
  DescribeAlarmContributors$,
  DescribeAlarmContributorsCommand,
  DescribeAlarmContributorsInput$,
  DescribeAlarmContributorsOutput$,
  DescribeAlarmHistory$,
  DescribeAlarmHistoryCommand,
  DescribeAlarmHistoryInput$,
  DescribeAlarmHistoryOutput$,
  DescribeAlarms$,
  DescribeAlarmsCommand,
  DescribeAlarmsForMetric$,
  DescribeAlarmsForMetricCommand,
  DescribeAlarmsForMetricInput$,
  DescribeAlarmsForMetricOutput$,
  DescribeAlarmsInput$,
  DescribeAlarmsOutput$,
  DescribeAnomalyDetectors$,
  DescribeAnomalyDetectorsCommand,
  DescribeAnomalyDetectorsInput$,
  DescribeAnomalyDetectorsOutput$,
  DescribeInsightRules$,
  DescribeInsightRulesCommand,
  DescribeInsightRulesInput$,
  DescribeInsightRulesOutput$,
  Dimension$,
  DimensionFilter$,
  DisableAlarmActions$,
  DisableAlarmActionsCommand,
  DisableAlarmActionsInput$,
  DisableInsightRules$,
  DisableInsightRulesCommand,
  DisableInsightRulesInput$,
  DisableInsightRulesOutput$,
  EnableAlarmActions$,
  EnableAlarmActionsCommand,
  EnableAlarmActionsInput$,
  EnableInsightRules$,
  EnableInsightRulesCommand,
  EnableInsightRulesInput$,
  EnableInsightRulesOutput$,
  Entity$,
  EntityMetricData$,
  EvaluationState,
  GetDashboard$,
  GetDashboardCommand,
  GetDashboardInput$,
  GetDashboardOutput$,
  GetInsightRuleReport$,
  GetInsightRuleReportCommand,
  GetInsightRuleReportInput$,
  GetInsightRuleReportOutput$,
  GetMetricData$,
  GetMetricDataCommand,
  GetMetricDataInput$,
  GetMetricDataOutput$,
  GetMetricStatistics$,
  GetMetricStatisticsCommand,
  GetMetricStatisticsInput$,
  GetMetricStatisticsOutput$,
  GetMetricStream$,
  GetMetricStreamCommand,
  GetMetricStreamInput$,
  GetMetricStreamOutput$,
  GetMetricWidgetImage$,
  GetMetricWidgetImageCommand,
  GetMetricWidgetImageInput$,
  GetMetricWidgetImageOutput$,
  HistoryItemType,
  InsightRule$,
  InsightRuleContributor$,
  InsightRuleContributorDatapoint$,
  InsightRuleMetricDatapoint$,
  InternalServiceFault,
  InternalServiceFault$,
  InvalidFormatFault,
  InvalidFormatFault$,
  InvalidNextToken,
  InvalidNextToken$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  LabelOptions$,
  LimitExceededException,
  LimitExceededException$,
  LimitExceededFault,
  LimitExceededFault$,
  ListDashboards$,
  ListDashboardsCommand,
  ListDashboardsInput$,
  ListDashboardsOutput$,
  ListManagedInsightRules$,
  ListManagedInsightRulesCommand,
  ListManagedInsightRulesInput$,
  ListManagedInsightRulesOutput$,
  ListMetrics$,
  ListMetricsCommand,
  ListMetricsInput$,
  ListMetricsOutput$,
  ListMetricStreams$,
  ListMetricStreamsCommand,
  ListMetricStreamsInput$,
  ListMetricStreamsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ManagedRule$,
  ManagedRuleDescription$,
  ManagedRuleState$,
  MessageData$,
  Metric$,
  MetricAlarm$,
  MetricCharacteristics$,
  MetricDataQuery$,
  MetricDataResult$,
  MetricDatum$,
  MetricMathAnomalyDetector$,
  MetricStat$,
  MetricStreamEntry$,
  MetricStreamFilter$,
  MetricStreamOutputFormat,
  MetricStreamStatisticsConfiguration$,
  MetricStreamStatisticsMetric$,
  MissingRequiredParameterException,
  MissingRequiredParameterException$,
  paginateDescribeAlarmHistory,
  paginateDescribeAlarms,
  paginateDescribeAnomalyDetectors,
  paginateDescribeInsightRules,
  paginateGetMetricData,
  paginateListDashboards,
  paginateListManagedInsightRules,
  paginateListMetrics,
  paginateListMetricStreams,
  PartialFailure$,
  PutAnomalyDetector$,
  PutAnomalyDetectorCommand,
  PutAnomalyDetectorInput$,
  PutAnomalyDetectorOutput$,
  PutCompositeAlarm$,
  PutCompositeAlarmCommand,
  PutCompositeAlarmInput$,
  PutDashboard$,
  PutDashboardCommand,
  PutDashboardInput$,
  PutDashboardOutput$,
  PutInsightRule$,
  PutInsightRuleCommand,
  PutInsightRuleInput$,
  PutInsightRuleOutput$,
  PutManagedInsightRules$,
  PutManagedInsightRulesCommand,
  PutManagedInsightRulesInput$,
  PutManagedInsightRulesOutput$,
  PutMetricAlarm$,
  PutMetricAlarmCommand,
  PutMetricAlarmInput$,
  PutMetricData$,
  PutMetricDataCommand,
  PutMetricDataInput$,
  PutMetricStream$,
  PutMetricStreamCommand,
  PutMetricStreamInput$,
  PutMetricStreamOutput$,
  Range$,
  RecentlyActive,
  ResourceNotFound,
  ResourceNotFound$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScanBy,
  SetAlarmState$,
  SetAlarmStateCommand,
  SetAlarmStateInput$,
  SingleMetricAnomalyDetector$,
  StandardUnit,
  StartMetricStreams$,
  StartMetricStreamsCommand,
  StartMetricStreamsInput$,
  StartMetricStreamsOutput$,
  StateValue,
  Statistic,
  StatisticSet$,
  StatusCode,
  StopMetricStreams$,
  StopMetricStreamsCommand,
  StopMetricStreamsInput$,
  StopMetricStreamsOutput$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
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
assert(typeof DeleteAlarms$ === "object");
assert(typeof DeleteAnomalyDetectorCommand === "function");
assert(typeof DeleteAnomalyDetector$ === "object");
assert(typeof DeleteDashboardsCommand === "function");
assert(typeof DeleteDashboards$ === "object");
assert(typeof DeleteInsightRulesCommand === "function");
assert(typeof DeleteInsightRules$ === "object");
assert(typeof DeleteMetricStreamCommand === "function");
assert(typeof DeleteMetricStream$ === "object");
assert(typeof DescribeAlarmContributorsCommand === "function");
assert(typeof DescribeAlarmContributors$ === "object");
assert(typeof DescribeAlarmHistoryCommand === "function");
assert(typeof DescribeAlarmHistory$ === "object");
assert(typeof DescribeAlarmsCommand === "function");
assert(typeof DescribeAlarms$ === "object");
assert(typeof DescribeAlarmsForMetricCommand === "function");
assert(typeof DescribeAlarmsForMetric$ === "object");
assert(typeof DescribeAnomalyDetectorsCommand === "function");
assert(typeof DescribeAnomalyDetectors$ === "object");
assert(typeof DescribeInsightRulesCommand === "function");
assert(typeof DescribeInsightRules$ === "object");
assert(typeof DisableAlarmActionsCommand === "function");
assert(typeof DisableAlarmActions$ === "object");
assert(typeof DisableInsightRulesCommand === "function");
assert(typeof DisableInsightRules$ === "object");
assert(typeof EnableAlarmActionsCommand === "function");
assert(typeof EnableAlarmActions$ === "object");
assert(typeof EnableInsightRulesCommand === "function");
assert(typeof EnableInsightRules$ === "object");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetDashboard$ === "object");
assert(typeof GetInsightRuleReportCommand === "function");
assert(typeof GetInsightRuleReport$ === "object");
assert(typeof GetMetricDataCommand === "function");
assert(typeof GetMetricData$ === "object");
assert(typeof GetMetricStatisticsCommand === "function");
assert(typeof GetMetricStatistics$ === "object");
assert(typeof GetMetricStreamCommand === "function");
assert(typeof GetMetricStream$ === "object");
assert(typeof GetMetricWidgetImageCommand === "function");
assert(typeof GetMetricWidgetImage$ === "object");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListDashboards$ === "object");
assert(typeof ListManagedInsightRulesCommand === "function");
assert(typeof ListManagedInsightRules$ === "object");
assert(typeof ListMetricsCommand === "function");
assert(typeof ListMetrics$ === "object");
assert(typeof ListMetricStreamsCommand === "function");
assert(typeof ListMetricStreams$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAnomalyDetectorCommand === "function");
assert(typeof PutAnomalyDetector$ === "object");
assert(typeof PutCompositeAlarmCommand === "function");
assert(typeof PutCompositeAlarm$ === "object");
assert(typeof PutDashboardCommand === "function");
assert(typeof PutDashboard$ === "object");
assert(typeof PutInsightRuleCommand === "function");
assert(typeof PutInsightRule$ === "object");
assert(typeof PutManagedInsightRulesCommand === "function");
assert(typeof PutManagedInsightRules$ === "object");
assert(typeof PutMetricAlarmCommand === "function");
assert(typeof PutMetricAlarm$ === "object");
assert(typeof PutMetricDataCommand === "function");
assert(typeof PutMetricData$ === "object");
assert(typeof PutMetricStreamCommand === "function");
assert(typeof PutMetricStream$ === "object");
assert(typeof SetAlarmStateCommand === "function");
assert(typeof SetAlarmState$ === "object");
assert(typeof StartMetricStreamsCommand === "function");
assert(typeof StartMetricStreams$ === "object");
assert(typeof StopMetricStreamsCommand === "function");
assert(typeof StopMetricStreams$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AlarmContributor$ === "object");
assert(typeof AlarmHistoryItem$ === "object");
assert(typeof AnomalyDetector$ === "object");
assert(typeof AnomalyDetectorConfiguration$ === "object");
assert(typeof CompositeAlarm$ === "object");
assert(typeof DashboardEntry$ === "object");
assert(typeof DashboardValidationMessage$ === "object");
assert(typeof Datapoint$ === "object");
assert(typeof DeleteAlarmsInput$ === "object");
assert(typeof DeleteAnomalyDetectorInput$ === "object");
assert(typeof DeleteAnomalyDetectorOutput$ === "object");
assert(typeof DeleteDashboardsInput$ === "object");
assert(typeof DeleteDashboardsOutput$ === "object");
assert(typeof DeleteInsightRulesInput$ === "object");
assert(typeof DeleteInsightRulesOutput$ === "object");
assert(typeof DeleteMetricStreamInput$ === "object");
assert(typeof DeleteMetricStreamOutput$ === "object");
assert(typeof DescribeAlarmContributorsInput$ === "object");
assert(typeof DescribeAlarmContributorsOutput$ === "object");
assert(typeof DescribeAlarmHistoryInput$ === "object");
assert(typeof DescribeAlarmHistoryOutput$ === "object");
assert(typeof DescribeAlarmsForMetricInput$ === "object");
assert(typeof DescribeAlarmsForMetricOutput$ === "object");
assert(typeof DescribeAlarmsInput$ === "object");
assert(typeof DescribeAlarmsOutput$ === "object");
assert(typeof DescribeAnomalyDetectorsInput$ === "object");
assert(typeof DescribeAnomalyDetectorsOutput$ === "object");
assert(typeof DescribeInsightRulesInput$ === "object");
assert(typeof DescribeInsightRulesOutput$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DimensionFilter$ === "object");
assert(typeof DisableAlarmActionsInput$ === "object");
assert(typeof DisableInsightRulesInput$ === "object");
assert(typeof DisableInsightRulesOutput$ === "object");
assert(typeof EnableAlarmActionsInput$ === "object");
assert(typeof EnableInsightRulesInput$ === "object");
assert(typeof EnableInsightRulesOutput$ === "object");
assert(typeof Entity$ === "object");
assert(typeof EntityMetricData$ === "object");
assert(typeof GetDashboardInput$ === "object");
assert(typeof GetDashboardOutput$ === "object");
assert(typeof GetInsightRuleReportInput$ === "object");
assert(typeof GetInsightRuleReportOutput$ === "object");
assert(typeof GetMetricDataInput$ === "object");
assert(typeof GetMetricDataOutput$ === "object");
assert(typeof GetMetricStatisticsInput$ === "object");
assert(typeof GetMetricStatisticsOutput$ === "object");
assert(typeof GetMetricStreamInput$ === "object");
assert(typeof GetMetricStreamOutput$ === "object");
assert(typeof GetMetricWidgetImageInput$ === "object");
assert(typeof GetMetricWidgetImageOutput$ === "object");
assert(typeof InsightRule$ === "object");
assert(typeof InsightRuleContributor$ === "object");
assert(typeof InsightRuleContributorDatapoint$ === "object");
assert(typeof InsightRuleMetricDatapoint$ === "object");
assert(typeof LabelOptions$ === "object");
assert(typeof ListDashboardsInput$ === "object");
assert(typeof ListDashboardsOutput$ === "object");
assert(typeof ListManagedInsightRulesInput$ === "object");
assert(typeof ListManagedInsightRulesOutput$ === "object");
assert(typeof ListMetricsInput$ === "object");
assert(typeof ListMetricsOutput$ === "object");
assert(typeof ListMetricStreamsInput$ === "object");
assert(typeof ListMetricStreamsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ManagedRule$ === "object");
assert(typeof ManagedRuleDescription$ === "object");
assert(typeof ManagedRuleState$ === "object");
assert(typeof MessageData$ === "object");
assert(typeof Metric$ === "object");
assert(typeof MetricAlarm$ === "object");
assert(typeof MetricCharacteristics$ === "object");
assert(typeof MetricDataQuery$ === "object");
assert(typeof MetricDataResult$ === "object");
assert(typeof MetricDatum$ === "object");
assert(typeof MetricMathAnomalyDetector$ === "object");
assert(typeof MetricStat$ === "object");
assert(typeof MetricStreamEntry$ === "object");
assert(typeof MetricStreamFilter$ === "object");
assert(typeof MetricStreamStatisticsConfiguration$ === "object");
assert(typeof MetricStreamStatisticsMetric$ === "object");
assert(typeof PartialFailure$ === "object");
assert(typeof PutAnomalyDetectorInput$ === "object");
assert(typeof PutAnomalyDetectorOutput$ === "object");
assert(typeof PutCompositeAlarmInput$ === "object");
assert(typeof PutDashboardInput$ === "object");
assert(typeof PutDashboardOutput$ === "object");
assert(typeof PutInsightRuleInput$ === "object");
assert(typeof PutInsightRuleOutput$ === "object");
assert(typeof PutManagedInsightRulesInput$ === "object");
assert(typeof PutManagedInsightRulesOutput$ === "object");
assert(typeof PutMetricAlarmInput$ === "object");
assert(typeof PutMetricDataInput$ === "object");
assert(typeof PutMetricStreamInput$ === "object");
assert(typeof PutMetricStreamOutput$ === "object");
assert(typeof Range$ === "object");
assert(typeof SetAlarmStateInput$ === "object");
assert(typeof SingleMetricAnomalyDetector$ === "object");
assert(typeof StartMetricStreamsInput$ === "object");
assert(typeof StartMetricStreamsOutput$ === "object");
assert(typeof StatisticSet$ === "object");
assert(typeof StopMetricStreamsInput$ === "object");
assert(typeof StopMetricStreamsOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
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
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof CloudWatchServiceException);
assert(typeof ConflictException$ === "object");
assert(DashboardInvalidInputError.prototype instanceof CloudWatchServiceException);
assert(typeof DashboardInvalidInputError$ === "object");
assert(DashboardNotFoundError.prototype instanceof CloudWatchServiceException);
assert(typeof DashboardNotFoundError$ === "object");
assert(InternalServiceFault.prototype instanceof CloudWatchServiceException);
assert(typeof InternalServiceFault$ === "object");
assert(InvalidFormatFault.prototype instanceof CloudWatchServiceException);
assert(typeof InvalidFormatFault$ === "object");
assert(InvalidNextToken.prototype instanceof CloudWatchServiceException);
assert(typeof InvalidNextToken$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof CloudWatchServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterValueException.prototype instanceof CloudWatchServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(LimitExceededException.prototype instanceof CloudWatchServiceException);
assert(typeof LimitExceededException$ === "object");
assert(LimitExceededFault.prototype instanceof CloudWatchServiceException);
assert(typeof LimitExceededFault$ === "object");
assert(MissingRequiredParameterException.prototype instanceof CloudWatchServiceException);
assert(typeof MissingRequiredParameterException$ === "object");
assert(ResourceNotFound.prototype instanceof CloudWatchServiceException);
assert(typeof ResourceNotFound$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudWatchServiceException);
assert(typeof ResourceNotFoundException$ === "object");
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
