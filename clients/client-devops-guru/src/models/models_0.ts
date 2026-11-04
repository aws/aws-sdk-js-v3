// smithy-typescript generated code
import type {
  AnomalySeverity,
  AnomalyStatus,
  AnomalyType,
  CloudWatchMetricDataStatusCode,
  CloudWatchMetricsStat,
  CostEstimationServiceResourceState,
  CostEstimationStatus,
  EventClass,
  EventDataSource,
  EventSourceOptInStatus,
  InsightFeedbackOption,
  InsightSeverity,
  InsightStatus,
  InsightType,
  Locale,
  LogAnomalyType,
  NotificationMessageType,
  OptInStatus,
  OrganizationResourceCollectionType,
  ResourceCollectionType,
  ResourcePermission,
  ResourceTypeFilter,
  ServerSideEncryptionType,
  ServiceName,
  UpdateResourceCollectionAction,
} from "./enums";

/**
 * Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.
 *
 * @public
 */
export interface AccountInsightHealth {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenReactiveInsights?: number | undefined;
}

/**
 * Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
 *
 * @public
 */
export interface AccountHealth {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Information about the health of the Amazon Web Services resources in your account, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   *
   * @public
   */
  Insight?: AccountInsightHealth | undefined;
}

/**
 * The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for.
 *
 * @public
 */
export interface NotificationFilterConfig {
  /**
   * The severity levels that you want to receive notifications for. For example, you can choose to receive notifications only for insights with `HIGH` and `MEDIUM` severity levels. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities).
   *
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * The events that you want to receive notifications for. For example, you can choose to receive notifications only when the severity level is upgraded or a new insight is created.
   *
   * @public
   */
  MessageTypes?: NotificationMessageType[] | undefined;
}

/**
 * Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic.
 *
 * If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see [Permissions for Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html).
 *
 * If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see [Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html).
 *
 * @public
 */
export interface SnsChannelConfig {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic.
   *
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 *
 * @public
 */
export interface NotificationChannelConfig {
  /**
   * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
   *
   * If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see [Permissions for Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html).
   *
   * If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see [Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html).
   *
   * @public
   */
  Sns: SnsChannelConfig | undefined;

  /**
   * The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. If you do not provide filter configurations, the default configurations are to receive notifications for all message types of `High` or `Medium` severity.
   *
   * @public
   */
  Filters?: NotificationFilterConfig | undefined;
}

/**
 * @public
 */
export interface AddNotificationChannelRequest {
  /**
   * A `NotificationChannelConfig` object that specifies what type of notification channel to add. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
   *
   * @public
   */
  Config: NotificationChannelConfig | undefined;
}

/**
 * @public
 */
export interface AddNotificationChannelResponse {
  /**
   * The ID of the added notification channel.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The field associated with the validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The message associated with the validation exception with information to help determine its cause.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler.
 *
 * @public
 */
export interface AmazonCodeGuruProfilerIntegration {
  /**
   * The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to consume recommendations that are generated from Amazon CodeGuru Profiler.
   *
   * @public
   */
  Status?: EventSourceOptInStatus | undefined;
}

/**
 * Information about an anomalous log event found within a log group.
 *
 * @public
 */
export interface LogAnomalyClass {
  /**
   * The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log stream is a sequence of log events that share the same source.
   *
   * @public
   */
  LogStreamName?: string | undefined;

  /**
   * The type of log anomaly that has been detected.
   *
   * @public
   */
  LogAnomalyType?: LogAnomalyType | undefined;

  /**
   * The token where the anomaly was detected. This may refer to an exception or another location, or it may be blank for log anomalies such as format anomalies.
   *
   * @public
   */
  LogAnomalyToken?: string | undefined;

  /**
   * The ID of the log event.
   *
   * @public
   */
  LogEventId?: string | undefined;

  /**
   * The explanation for why the log event is considered an anomaly.
   *
   * @public
   */
  Explanation?: string | undefined;

  /**
   * The number of log lines where this anomalous log event occurs.
   *
   * @public
   */
  NumberOfLogLinesOccurrences?: number | undefined;

  /**
   * The time of the first occurrence of the anomalous log event.
   *
   * @public
   */
  LogEventTimestamp?: Date | undefined;
}

/**
 * A cluster of similar anomalous log events found within a log group.
 *
 * @public
 */
export interface LogAnomalyShowcase {
  /**
   * A list of anomalous log events that may be related.
   *
   * @public
   */
  LogAnomalyClasses?: LogAnomalyClass[] | undefined;
}

/**
 * An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.
 *
 * @public
 */
export interface AnomalousLogGroup {
  /**
   * The name of the CloudWatch log group.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The time the anomalous log events began. The impact start time indicates the time of the first log anomaly event that occurs.
   *
   * @public
   */
  ImpactStartTime?: Date | undefined;

  /**
   * The time the anomalous log events stopped.
   *
   * @public
   */
  ImpactEndTime?: Date | undefined;

  /**
   * The number of log lines that were scanned for anomalous log events.
   *
   * @public
   */
  NumberOfLogLinesScanned?: number | undefined;

  /**
   * The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar anomalous log events.
   *
   * @public
   */
  LogAnomalyShowcases?: LogAnomalyShowcase[] | undefined;
}

/**
 * A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from `AnomalyTimeRange`, which specifies the time range when DevOps Guru actually observes the anomalous behavior.
 *
 * @public
 */
export interface AnomalyReportedTimeRange {
  /**
   * The time when an anomaly is opened.
   *
   * @public
   */
  OpenTime: Date | undefined;

  /**
   * The time when an anomaly is closed.
   *
   * @public
   */
  CloseTime?: Date | undefined;
}

/**
 * The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and insight with details about the anomalous behavior and suggestions about how to correct the problem.
 *
 * @public
 */
export interface AnomalyResource {
  /**
   * The name of the Amazon Web Services resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the Amazon Web Services resource.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see [Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface CloudWatchMetricsDimension {
  /**
   * The name of the CloudWatch dimension.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the CloudWatch dimension.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A pair that contains metric values at the respective timestamp.
 *
 * @public
 */
export interface TimestampMetricValuePair {
  /**
   * A `Timestamp` that specifies the time the event occurred.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Value of the anomalous metric data point at respective Timestamp.
   *
   * @public
   */
  MetricValue?: number | undefined;
}

/**
 * Contains information about the analyzed metrics that displayed anomalous behavior.
 *
 * @public
 */
export interface CloudWatchMetricsDataSummary {
  /**
   * This is a list of Amazon CloudWatch metric values at given timestamp.
   *
   * @public
   */
  TimestampMetricValuePairList?: TimestampMetricValuePair[] | undefined;

  /**
   * This is an enum of the status showing whether the metric value pair list has partial or complete data, or if there was an error.
   *
   * @public
   */
  StatusCode?: CloudWatchMetricDataStatusCode | undefined;
}

/**
 * Information about an Amazon CloudWatch metric.
 *
 * @public
 */
export interface CloudWatchMetricsDetail {
  /**
   * The name of the CloudWatch metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * An array of CloudWatch dimensions associated with
   *
   * @public
   */
  Dimensions?: CloudWatchMetricsDimension[] | undefined;

  /**
   * The type of statistic associated with the CloudWatch metric. For more information, see [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  Stat?: CloudWatchMetricsStat | undefined;

  /**
   * The unit of measure used for the CloudWatch metric. For example, `Bytes`, `Seconds`, `Count`, and `Percent`.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The length of time associated with the CloudWatch metric in number of seconds.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * This object returns anomaly metric data.
   *
   * @public
   */
  MetricDataSummary?: CloudWatchMetricsDataSummary | undefined;
}

/**
 * A logical grouping of Performance Insights metrics for a related subject area. For example, the `db.sql` dimension group consists of the following dimensions: `db.sql.id`, `db.sql.db_id`, `db.sql.statement`, and `db.sql.tokenized_id`.
 *
 * > **Note:** Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.
 *
 * Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.
 *
 * - To learn more about Performance Insights and Amazon Aurora DB instances, go to the [Amazon Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html).
 * - To learn more about Performance Insights and Amazon RDS DB instances, go to the [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html).
 *
 * @public
 */
export interface PerformanceInsightsMetricDimensionGroup {
  /**
   * The name of the dimension group. Its valid values are:
   *
   * - `db` - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)
   * - `db.application` - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)
   * - `db.host` - The host name of the connected client (all engines)
   * - `db.session_type` - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)
   * - `db.sql` - The SQL that is currently executing (all engines)
   * - `db.sql_tokenized` - The SQL digest (all engines)
   * - `db.wait_event` - The event for which the database backend is waiting (all engines)
   * - `db.wait_event_type` - The type of event for which the database backend is waiting (all engines)
   * - `db.user` - The user logged in to the database (all engines)
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested or are present in the response.
   *
   * Valid values for elements in the `Dimensions` array are:
   *
   * - `db.application.name` - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)
   * - `db.host.id` - The host ID of the connected client (all engines)
   * - `db.host.name` - The host name of the connected client (all engines)
   * - `db.name` - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)
   * - `db.session_type.name` - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)
   * - `db.sql.id` - The SQL ID generated by Performance Insights (all engines)
   * - `db.sql.db_id` - The SQL ID generated by the database (all engines)
   * - `db.sql.statement` - The SQL text that is being executed (all engines)
   * - `db.sql.tokenized_id`
   * - `db.sql_tokenized.id` - The SQL digest ID generated by Performance Insights (all engines)
   * - `db.sql_tokenized.db_id` - SQL digest ID generated by the database (all engines)
   * - `db.sql_tokenized.statement` - The SQL digest text (all engines)
   * - `db.user.id` - The ID of the user logged in to the database (all engines)
   * - `db.user.name` - The name of the user logged in to the database (all engines)
   * - `db.wait_event.name` - The event for which the backend is waiting (all engines)
   * - `db.wait_event.type` - The type of event for which the backend is waiting (all engines)
   * - `db.wait_event_type.name` - The name of the event type for which the backend is waiting (all engines)
   *
   * @public
   */
  Dimensions?: string[] | undefined;

  /**
   * The maximum number of items to fetch for this dimension group.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * A single query to be processed. Use these parameters to query the Performance Insights `GetResourceMetrics` API to retrieve the metrics for an anomaly. For more information, see `GetResourceMetrics` in the *Amazon RDS Performance Insights API Reference*.
 *
 * Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.
 *
 * - To learn more about Performance Insights and Amazon Aurora DB instances, go to the [Amazon Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html).
 * - To learn more about Performance Insights and Amazon RDS DB instances, go to the [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html).
 *
 * @public
 */
export interface PerformanceInsightsMetricQuery {
  /**
   * The name of the meteric used used when querying an Performance Insights `GetResourceMetrics` API for anomaly metrics.
   *
   * Valid values for `Metric` are:
   *
   * - `db.load.avg` - a scaled representation of the number of active sessions for the database engine.
   * - `db.sampledload.avg` - the raw number of active sessions for the database engine.
   *
   * If the number of active sessions is less than an internal Performance Insights threshold, `db.load.avg` and `db.sampledload.avg` are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with `db.load.avg` showing the scaled values, `db.sampledload.avg` showing the raw values, and `db.sampledload.avg` less than `db.load.avg`. For most use cases, you can query `db.load.avg` only.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The specification for how to aggregate the data points from a Performance Insights `GetResourceMetrics` API query. The Performance Insights query returns all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
   *
   * @public
   */
  GroupBy?: PerformanceInsightsMetricDimensionGroup | undefined;

  /**
   * One or more filters to apply to a Performance Insights `GetResourceMetrics` API query. Restrictions:
   *
   * - Any number of filters by the same dimension, as specified in the `GroupBy` parameter.
   * - A single filter for any other dimension in this dimension group.
   *
   * @public
   */
  Filter?: Record<string, string> | undefined;
}

/**
 * Information about a reference metric used to evaluate Performance Insights.
 *
 * @public
 */
export interface PerformanceInsightsReferenceMetric {
  /**
   * A query to be processed on the metric.
   *
   * @public
   */
  MetricQuery?: PerformanceInsightsMetricQuery | undefined;
}

/**
 * A reference value to compare Performance Insights metrics against to determine if the metrics demonstrate anomalous behavior.
 *
 * @public
 */
export interface PerformanceInsightsReferenceScalar {
  /**
   * The reference value.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected.
 *
 * @public
 */
export interface PerformanceInsightsReferenceComparisonValues {
  /**
   * A scalar value DevOps Guru for a metric that DevOps Guru compares to actual metric values. This reference value is used to determine if an actual metric value should be considered anomalous.
   *
   * @public
   */
  ReferenceScalar?: PerformanceInsightsReferenceScalar | undefined;

  /**
   * A metric that DevOps Guru compares to actual metric values. This reference metric is used to determine if an actual metric should be considered anomalous.
   *
   * @public
   */
  ReferenceMetric?: PerformanceInsightsReferenceMetric | undefined;
}

/**
 * Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not.
 *
 * @public
 */
export interface PerformanceInsightsReferenceData {
  /**
   * The name of the reference data.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The specific reference values used to evaluate the Performance Insights. For more information, see `PerformanceInsightsReferenceComparisonValues`.
   *
   * @public
   */
  ComparisonValues?: PerformanceInsightsReferenceComparisonValues | undefined;
}

/**
 * A statistic in a Performance Insights collection.
 *
 * @public
 */
export interface PerformanceInsightsStat {
  /**
   * The statistic type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The value of the statistic.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Details about Performance Insights metrics.
 *
 * Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.
 *
 * - To learn more about Performance Insights and Amazon Aurora DB instances, go to the [Amazon Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html).
 * - To learn more about Performance Insights and Amazon RDS DB instances, go to the [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html).
 *
 * @public
 */
export interface PerformanceInsightsMetricsDetail {
  /**
   * The name used for a specific Performance Insights metric.
   *
   * @public
   */
  MetricDisplayName?: string | undefined;

  /**
   * The unit of measure for a metric. For example, a session or a process.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * A single query to be processed for the metric. For more information, see `PerformanceInsightsMetricQuery`.
   *
   * @public
   */
  MetricQuery?: PerformanceInsightsMetricQuery | undefined;

  /**
   * For more information, see `PerformanceInsightsReferenceData`.
   *
   * @public
   */
  ReferenceData?: PerformanceInsightsReferenceData[] | undefined;

  /**
   * The metric statistics during the anomalous period detected by DevOps Guru;
   *
   * @public
   */
  StatsAtAnomaly?: PerformanceInsightsStat[] | undefined;

  /**
   * Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes metrics, it compares them to `StatsAtBaseline` to help determine if they are anomalous.
   *
   * @public
   */
  StatsAtBaseline?: PerformanceInsightsStat[] | undefined;
}

/**
 * Details about the source of the anomalous operational data that triggered the anomaly.
 *
 * @public
 */
export interface AnomalySourceDetails {
  /**
   * An array of `CloudWatchMetricsDetail` objects that contain information about analyzed CloudWatch metrics that show anomalous behavior.
   *
   * @public
   */
  CloudWatchMetrics?: CloudWatchMetricsDetail[] | undefined;

  /**
   * An array of `PerformanceInsightsMetricsDetail` objects that contain information about analyzed Performance Insights metrics that show anomalous behavior.
   *
   * @public
   */
  PerformanceInsightsMetrics?: PerformanceInsightsMetricsDetail[] | undefined;
}

/**
 * Metadata about the detection source that generates proactive anomalies. The anomaly is detected using analysis of the metric data  over a period of time
 *
 * @public
 */
export interface AnomalySourceMetadata {
  /**
   * The source of the anomaly.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The name of the anomaly's resource.
   *
   * @public
   */
  SourceResourceName?: string | undefined;

  /**
   * The anomaly's resource type.
   *
   * @public
   */
  SourceResourceType?: string | undefined;
}

/**
 * A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from `AnomalyReportedTimeRange`, which specifies the time range when DevOps Guru opens and then closes an anomaly.
 *
 * @public
 */
export interface AnomalyTimeRange {
  /**
   * The time when the anomalous behavior started.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time when the anomalous behavior ended.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteInsightRequest {
  /**
   * The ID of the insight.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteInsightResponse {}

/**
 * @public
 */
export interface DescribeAccountHealthRequest {}

/**
 * @public
 */
export interface DescribeAccountHealthResponse {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenReactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenProactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of metrics that have been analyzed in your Amazon Web Services account.
   *
   * @public
   */
  MetricsAnalyzed: number | undefined;

  /**
   * The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour.
   *
   * @public
   */
  ResourceHours: number | undefined;

  /**
   * Number of resources that DevOps Guru is monitoring in your Amazon Web Services account.
   *
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountOverviewRequest {
  /**
   * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
   *
   * @public
   */
  FromTime: Date | undefined;

  /**
   * The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
   *
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAccountOverviewResponse {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account that were created during the time range passed in.
   *
   * @public
   */
  ReactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account that were created during the time range passed in.
   *
   * @public
   */
  ProactiveInsights: number | undefined;

  /**
   * The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in.
   *
   * @public
   */
  MeanTimeToRecoverInMilliseconds: number | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyRequest {
  /**
   * The ID of the anomaly.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the member account.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
 *
 * @public
 */
export interface PredictionTimeRange {
  /**
   * The time range during which a metric limit is expected to be exceeded. This applies to proactive insights only.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time when the behavior in a proactive insight is expected to end.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *Amazon Web Services CloudFormation User Guide*.
 *
 * @public
 */
export interface CloudFormationCollection {
  /**
   * An array of CloudFormation stack names.
   *
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * A collection of Amazon Web Services tags.
 *
 * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
 *
 * Each Amazon Web Services tag has two parts.
 *
 * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
 * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
 *
 * Together these are known as *key*-*value* pairs.
 *
 * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
 *
 * @public
 */
export interface TagCollection {
  /**
   * An Amazon Web Services tag *key* that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this *key* make up your DevOps Guru application and analysis boundary.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * The values in an Amazon Web Services tag collection.
   *
   * The tag's *value* is an optional field used to associate a string with the tag *key* (for example, `111122223333`, `Production`, or a team name). The *key* and *value* are the tag's *key* pair. Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 *
 * @public
 */
export interface ResourceCollection {
  /**
   * An array of the names of Amazon Web Services CloudFormation stacks. The stacks define Amazon Web Services resources that DevOps Guru analyzes. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  CloudFormation?: CloudFormationCollection | undefined;

  /**
   * The Amazon Web Services tags that are used by resources in the resource collection.
   *
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: TagCollection[] | undefined;
}

/**
 * Information about an anomaly. This object is returned by `ListAnomalies`.
 *
 * @public
 */
export interface ProactiveAnomaly {
  /**
   * The ID of a proactive anomaly.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * The status of a proactive anomaly.
   *
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * The time of the anomaly's most recent update.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from `AnomalyReportedTimeRange`, which specifies the time range when DevOps Guru opens and then closes an anomaly.
   *
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * An `AnomalyReportedTimeRange` object that specifies the time range between when the anomaly is opened and the time when it is closed.
   *
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   *
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   *
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   *
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the anomalous behavior that generated this anomaly.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The metadata for the anomaly.
   *
   * @public
   */
  SourceMetadata?: AnomalySourceMetadata | undefined;

  /**
   * Information about a resource in which DevOps Guru detected anomalous behavior.
   *
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;

  /**
   * A description of the proactive anomaly.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Details about a reactive anomaly. This object is returned by `ListAnomalies`.
 *
 * @public
 */
export interface ReactiveAnomaly {
  /**
   * The ID of the reactive anomaly.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * The status of the anomaly.
   *
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from `AnomalyReportedTimeRange`, which specifies the time range when DevOps Guru opens and then closes an anomaly.
   *
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * An `AnomalyReportedTimeRange` object that specifies the time range between when the anomaly is opened and the time when it is closed.
   *
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   *
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   *
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * The type of the reactive anomaly. It can be one of the following types.
   *
   * - `CAUSAL` - the anomaly can cause a new insight.
   * - `CONTEXTUAL` - the anomaly contains additional information about an insight or its causal anomaly.
   *
   * @public
   */
  Type?: AnomalyType | undefined;

  /**
   * The name of the reactive anomaly.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the reactive anomaly.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.
   *
   * @public
   */
  CausalAnomalyId?: string | undefined;

  /**
   * The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.
   *
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyResponse {
  /**
   * A `ProactiveAnomaly` object that represents the requested anomaly.
   *
   * @public
   */
  ProactiveAnomaly?: ProactiveAnomaly | undefined;

  /**
   * A `ReactiveAnomaly` object that represents the requested anomaly.
   *
   * @public
   */
  ReactiveAnomaly?: ReactiveAnomaly | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourcesConfigRequest {}

/**
 * Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.
 *
 * @public
 */
export interface EventSourcesConfig {
  /**
   * Information about whether DevOps Guru is configured to consume recommendations which are generated from AWS CodeGuru Profiler.
   *
   * @public
   */
  AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourcesConfigResponse {
  /**
   * Lists the event sources in the configuration.
   *
   * @public
   */
  EventSources?: EventSourcesConfig | undefined;
}

/**
 * @public
 */
export interface DescribeFeedbackRequest {
  /**
   * The ID of the insight for which the feedback was provided.
   *
   * @public
   */
  InsightId?: string | undefined;
}

/**
 * Information about insight feedback received from a customer.
 *
 * @public
 */
export interface InsightFeedback {
  /**
   * The insight feedback ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The feedback provided by the customer.
   *
   * @public
   */
  Feedback?: InsightFeedbackOption | undefined;
}

/**
 * @public
 */
export interface DescribeFeedbackResponse {
  /**
   * Information about insight feedback received from a customer.
   *
   * @public
   */
  InsightFeedback?: InsightFeedback | undefined;
}

/**
 * @public
 */
export interface DescribeInsightRequest {
  /**
   * The ID of the insight.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the member account in the organization.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * A time ranged that specifies when the observed behavior in an insight started and ended.
 *
 * @public
 */
export interface InsightTimeRange {
  /**
   * The time when the behavior described in an insight started.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time when the behavior described in an insight ended.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * Details about a proactive insight. This object is returned by `ListInsights`.
 *
 * @public
 */
export interface ProactiveInsight {
  /**
   * The ID of the proactive insight.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the proactive insight.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The severity of the insight. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * The status of the proactive insight.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   *
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation of OpstItems insights before they are created for each insight.
   *
   * @public
   */
  SsmOpsItemId?: string | undefined;

  /**
   * Describes the proactive insight.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Information about a reactive insight. This object is returned by `ListInsights`.
 *
 * @public
 */
export interface ReactiveInsight {
  /**
   * The ID of a reactive insight.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of a reactive insight.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The severity of the insight. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * The status of a reactive insight.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation of OpstItems insights before they are created for each insight.
   *
   * @public
   */
  SsmOpsItemId?: string | undefined;

  /**
   * Describes the reactive insight.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInsightResponse {
  /**
   * A `ProactiveInsight` object that represents the requested insight.
   *
   * @public
   */
  ProactiveInsight?: ProactiveInsight | undefined;

  /**
   * A `ReactiveInsight` object that represents the requested insight.
   *
   * @public
   */
  ReactiveInsight?: ReactiveInsight | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationHealthRequest {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationHealthResponse {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenReactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  OpenProactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of metrics that have been analyzed in your organization.
   *
   * @public
   */
  MetricsAnalyzed: number | undefined;

  /**
   * The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour.
   *
   * @public
   */
  ResourceHours: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationOverviewRequest {
  /**
   * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
   *
   * @public
   */
  FromTime: Date | undefined;

  /**
   * The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
   *
   * @public
   */
  ToTime?: Date | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationOverviewResponse {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ReactiveInsights: number | undefined;

  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ProactiveInsights: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResourceCollectionHealthRequest {
  /**
   * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  OrganizationResourceCollectionType: OrganizationResourceCollectionType | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.
 *
 * @public
 */
export interface InsightHealth {
  /**
   * The number of open proactive insights.
   *
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * The number of open reactive insights.
   *
   * @public
   */
  OpenReactiveInsights?: number | undefined;

  /**
   * The Meant Time to Recover (MTTR) for the insight.
   *
   * @public
   */
  MeanTimeToRecoverInMilliseconds?: number | undefined;
}

/**
 * Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack.
 *
 * @public
 */
export interface CloudFormationHealth {
  /**
   * The name of the CloudFormation stack.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * Information about the health of the Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   *
   * @public
   */
  Insight?: InsightHealth | undefined;

  /**
   * Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services CloudFormation stack.
   *
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services service.
 *
 * @public
 */
export interface ServiceInsightHealth {
  /**
   * The number of open proactive insights in the Amazon Web Services service
   *
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * The number of open reactive insights in the Amazon Web Services service
   *
   * @public
   */
  OpenReactiveInsights?: number | undefined;
}

/**
 * Represents the health of an Amazon Web Services service.
 *
 * @public
 */
export interface ServiceHealth {
  /**
   * The name of the Amazon Web Services service.
   *
   * @public
   */
  ServiceName?: ServiceName | undefined;

  /**
   * Represents the health of an Amazon Web Services service. This is a `ServiceInsightHealth` that contains the number of open proactive and reactive insights for this service.
   *
   * @public
   */
  Insight?: ServiceInsightHealth | undefined;

  /**
   * Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service.
   *
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag *key*.
 *
 * @public
 */
export interface TagHealth {
  /**
   * An Amazon Web Services tag *key* that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this *key* make up your DevOps Guru application and analysis boundary.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  AppBoundaryKey?: string | undefined;

  /**
   * The value in an Amazon Web Services tag.
   *
   * The tag's *value* is an optional field used to associate a string with the tag *key* (for example, `111122223333`, `Production`, or a team name). The *key* and *value* are the tag's *key* pair. Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * Information about the health of the Amazon Web Services resources in your account that are specified by an Amazon Web Services tag, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   *
   * @public
   */
  Insight?: InsightHealth | undefined;

  /**
   * Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services tag.
   *
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResourceCollectionHealthResponse {
  /**
   * The returned `CloudFormationHealthOverview` object that contains an `InsightHealthOverview` object with the requested system health information.
   *
   * @public
   */
  CloudFormation?: CloudFormationHealth[] | undefined;

  /**
   * An array of `ServiceHealth` objects that describes the health of the Amazon Web Services services associated with the resources in the collection.
   *
   * @public
   */
  Service?: ServiceHealth[] | undefined;

  /**
   * The name of the organization's account.
   *
   * @public
   */
  Account?: AccountHealth[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: TagHealth[] | undefined;
}

/**
 * @public
 */
export interface DescribeResourceCollectionHealthRequest {
  /**
   * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollectionType: ResourceCollectionType | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceCollectionHealthResponse {
  /**
   * The returned `CloudFormationHealthOverview` object that contains an `InsightHealthOverview` object with the requested system health information.
   *
   * @public
   */
  CloudFormation?: CloudFormationHealth[] | undefined;

  /**
   * An array of `ServiceHealth` objects that describes the health of the Amazon Web Services services associated with the resources in the collection.
   *
   * @public
   */
  Service?: ServiceHealth[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services tags that are used by resources in the resource collection.
   *
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: TagHealth[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceIntegrationRequest {}

/**
 * Information about the KMS encryption used with DevOps Guru.
 *
 * @public
 */
export interface KMSServerSideEncryptionIntegration {
  /**
   * Describes the specified KMS key.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), Amazon Web Services KMS associates the alias with an Amazon Web Services managed key and returns its KeyId and Arn in the response. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab
   *
   * Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab
   *
   * Alias name: alias/ExampleAlias
   *
   * Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * Specifies if DevOps Guru is enabled for customer managed keys.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
   *
   * @public
   */
  Type?: ServerSideEncryptionType | undefined;
}

/**
 * Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.
 *
 * @public
 */
export interface LogsAnomalyDetectionIntegration {
  /**
   * Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.
 *
 * @public
 */
export interface OpsCenterIntegration {
  /**
   * Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.
 *
 * @public
 */
export interface ServiceIntegrationConfig {
  /**
   * Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.
   *
   * @public
   */
  OpsCenter?: OpsCenterIntegration | undefined;

  /**
   * Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups.
   *
   * @public
   */
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegration | undefined;

  /**
   * Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
   *
   * @public
   */
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceIntegrationResponse {
  /**
   * Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.
   *
   * @public
   */
  ServiceIntegration?: ServiceIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface GetCostEstimationRequest {
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that contains information about the estimated monthly cost to analyze an Amazon Web Services resource. For more information, see [Estimate your Amazon DevOps Guru costs](https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html) and [Amazon DevOps Guru pricing](http://aws.amazon.com/devops-guru/pricing/).
 *
 * @public
 */
export interface ServiceResourceCost {
  /**
   * The type of the Amazon Web Services resource.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The state of the resource. The resource is `ACTIVE` if it produces metrics, events, or logs within an hour, otherwise it is `INACTIVE`. You pay for the number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are not charged.
   *
   * @public
   */
  State?: CostEstimationServiceResourceState | undefined;

  /**
   * The number of active resources analyzed for this service to create a monthly cost estimate.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The price per hour to analyze the resources in the service. For more information, see [Estimate your Amazon DevOps Guru costs](https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html) and [Amazon DevOps Guru pricing](http://aws.amazon.com/devops-guru/pricing/).
   *
   * @public
   */
  UnitCost?: number | undefined;

  /**
   * The total estimated monthly cost to analyze the active resources for this resource.
   *
   * @public
   */
  Cost?: number | undefined;
}

/**
 * Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the stack. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *Amazon Web Services CloudFormation User Guide*.
 *
 * @public
 */
export interface CloudFormationCostEstimationResourceCollectionFilter {
  /**
   * An array of CloudFormation stack names. Its size is fixed at 1 item.
   *
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag. This collection of resources is used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the tag. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *Amazon Web Services CloudFormation User Guide*.
 *
 * @public
 */
export interface TagCostEstimationResourceCollectionFilter {
  /**
   * An Amazon Web Services tag *key* that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this *key* make up your DevOps Guru application and analysis boundary.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * The values in an Amazon Web Services tag collection.
   *
   * The tag's *value* is an optional field used to associate a string with the tag *key* (for example, `111122223333`, `Production`, or a team name). The *key* and *value* are the tag's *key* pair. Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see [Estimate your Amazon DevOps Guru costs](https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html) and [Amazon DevOps Guru pricing](http://aws.amazon.com/devops-guru/pricing/).
 *
 * @public
 */
export interface CostEstimationResourceCollectionFilter {
  /**
   * An object that specifies the CloudFormation stack that defines the Amazon Web Services resources used to create a monthly estimate for DevOps Guru.
   *
   * @public
   */
  CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter | undefined;

  /**
   * The Amazon Web Services tags used to filter the resource collection that is used for a cost estimate.
   *
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: TagCostEstimationResourceCollectionFilter[] | undefined;
}

/**
 * The time range of a cost estimation.
 *
 * @public
 */
export interface CostEstimationTimeRange {
  /**
   * The start time of the cost estimation.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the cost estimation.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCostEstimationResponse {
  /**
   * The collection of the Amazon Web Services resources used to create your monthly DevOps Guru cost estimate.
   *
   * @public
   */
  ResourceCollection?: CostEstimationResourceCollectionFilter | undefined;

  /**
   * The status of creating this cost estimate. If it's still in progress, the status `ONGOING` is returned. If it is finished, the status `COMPLETED` is returned.
   *
   * @public
   */
  Status?: CostEstimationStatus | undefined;

  /**
   * An array of `ResourceCost` objects that each contains details about the monthly cost estimate to analyze one of your Amazon Web Services resources.
   *
   * @public
   */
  Costs?: ServiceResourceCost[] | undefined;

  /**
   * The start and end time of the cost estimation.
   *
   * @public
   */
  TimeRange?: CostEstimationTimeRange | undefined;

  /**
   * The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of the estimated costs to analyze each resource in the `Costs` object in this response.
   *
   * @public
   */
  TotalCost?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceCollectionRequest {
  /**
   * The type of Amazon Web Services resource collections to return. The one valid value is `CLOUD_FORMATION` for Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollectionType: ResourceCollectionType | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *Amazon Web Services CloudFormation User Guide*.
 *
 * @public
 */
export interface CloudFormationCollectionFilter {
  /**
   * An array of CloudFormation stack names.
   *
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection.
 *
 * @public
 */
export interface TagCollectionFilter {
  /**
   * An Amazon Web Services tag *key* that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this *key* make up your DevOps Guru application and analysis boundary.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * The values in an Amazon Web Services tag collection.
   *
   * The tag's *value* is an optional field used to associate a string with the tag *key* (for example, `111122223333`, `Production`, or a team name). The *key* and *value* are the tag's *key* pair. Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru.
 *
 * @public
 */
export interface ResourceCollectionFilter {
  /**
   * Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *Amazon Web Services CloudFormation User Guide*.
   *
   * @public
   */
  CloudFormation?: CloudFormationCollectionFilter | undefined;

  /**
   * The Amazon Web Services tags used to filter the resources in the resource collection.
   *
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: TagCollectionFilter[] | undefined;
}

/**
 * @public
 */
export interface GetResourceCollectionResponse {
  /**
   * The requested list of Amazon Web Services resource collections. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollectionFilter | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A collection of the names of Amazon Web Services services.
 *
 * @public
 */
export interface ServiceCollection {
  /**
   * An array of strings that each specifies the name of an Amazon Web Services service.
   *
   * @public
   */
  ServiceNames?: ServiceName[] | undefined;
}

/**
 * Specifies one or more service names that are used to list anomalies.
 *
 * @public
 */
export interface ListAnomaliesForInsightFilters {
  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * A time range used to specify when the behavior of an insight or anomaly started.
 *
 * @public
 */
export interface StartTimeRange {
  /**
   * The start time of the time range.
   *
   * @public
   */
  FromTime?: Date | undefined;

  /**
   * The end time of the time range.
   *
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesForInsightRequest {
  /**
   * The ID of the insight. The returned anomalies belong to this insight.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * A time range used to specify when the requested anomalies started. All returned anomalies started during this time range.
   *
   * @public
   */
  StartTimeRange?: StartTimeRange | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies one or more service names that are used to list anomalies.
   *
   * @public
   */
  Filters?: ListAnomaliesForInsightFilters | undefined;
}

/**
 * Details about a proactive anomaly. This object is returned by `DescribeAnomaly.`
 *
 * @public
 */
export interface ProactiveAnomalySummary {
  /**
   * The ID of the anomaly.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * The status of the anomaly.
   *
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * The time of the anomaly's most recent update.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from `AnomalyReportedTimeRange`, which specifies the time range when DevOps Guru opens and then closes an anomaly.
   *
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * An `AnomalyReportedTimeRange` object that specifies the time range between when the anomaly is opened and the time when it is closed.
   *
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   *
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   *
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   *
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the anomalous behavior that generated this anomaly.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The metadata of the source which detects proactive anomalies.
   *
   * @public
   */
  SourceMetadata?: AnomalySourceMetadata | undefined;

  /**
   * Information about a resource in which DevOps Guru detected anomalous behavior.
   *
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;

  /**
   * A description of the proactive anomaly.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Details about a reactive anomaly. This object is returned by `DescribeAnomaly.`
 *
 * @public
 */
export interface ReactiveAnomalySummary {
  /**
   * The ID of the reactive anomaly.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * The status of the reactive anomaly.
   *
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from `AnomalyReportedTimeRange`, which specifies the time range when DevOps Guru opens and then closes an anomaly.
   *
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * An `AnomalyReportedTimeRange` object that specifies the time range between when the anomaly is opened and the time when it is closed.
   *
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   *
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   *
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * The type of the reactive anomaly. It can be one of the following types.
   *
   * - `CAUSAL` - the anomaly can cause a new insight.
   * - `CONTEXTUAL` - the anomaly contains additional information about an insight or its causal anomaly.
   *
   * @public
   */
  Type?: AnomalyType | undefined;

  /**
   * The name of the reactive anomaly.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the reactive anomaly.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.
   *
   * @public
   */
  CausalAnomalyId?: string | undefined;

  /**
   * The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.
   *
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesForInsightResponse {
  /**
   * An array of `ProactiveAnomalySummary` objects that represent the requested anomalies
   *
   * @public
   */
  ProactiveAnomalies?: ProactiveAnomalySummary[] | undefined;

  /**
   * An array of `ReactiveAnomalySummary` objects that represent the requested anomalies
   *
   * @public
   */
  ReactiveAnomalies?: ReactiveAnomalySummary[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalousLogGroupsRequest {
  /**
   * The ID of the insight containing the log groups.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalousLogGroupsResponse {
  /**
   * The ID of the insight containing the log groups.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The list of Amazon CloudWatch log groups that are related to an insight.
   *
   * @public
   */
  AnomalousLogGroups: AnomalousLogGroup[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
 *
 * @public
 */
export interface EventTimeRange {
  /**
   * The time when the event started.
   *
   * @public
   */
  FromTime: Date | undefined;

  /**
   * The time when the event ended.
   *
   * @public
   */
  ToTime: Date | undefined;
}

/**
 * Filters you can use to specify which events are returned when `ListEvents` is called.
 *
 * @public
 */
export interface ListEventsFilters {
  /**
   * An ID of an insight that is related to the events you want to filter for.
   *
   * @public
   */
  InsightId?: string | undefined;

  /**
   * A time range during which you want the filtered events to have occurred.
   *
   * @public
   */
  EventTimeRange?: EventTimeRange | undefined;

  /**
   * The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change.
   *
   * @public
   */
  EventClass?: EventClass | undefined;

  /**
   * The Amazon Web Services source that emitted the events you want to filter for.
   *
   * @public
   */
  EventSource?: string | undefined;

  /**
   * The source, `AWS_CLOUD_TRAIL` or `AWS_CODE_DEPLOY`, of the events you want returned.
   *
   * @public
   */
  DataSource?: EventDataSource | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;
}

/**
 * @public
 */
export interface ListEventsRequest {
  /**
   * A `ListEventsFilters` object used to specify which events to return.
   *
   * @public
   */
  Filters: ListEventsFilters | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
 *
 * @public
 */
export interface EventResource {
  /**
   * The type of resource that emitted an event.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The name of the resource that emitted an event.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that emitted an event.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
 *
 * @public
 */
export interface Event {
  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * The ID of the event.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A `Timestamp` that specifies the time the event occurred.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * The Amazon Web Services source that emitted the event.
   *
   * @public
   */
  EventSource?: string | undefined;

  /**
   * The name of the event.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The source, `AWS_CLOUD_TRAIL` or `AWS_CODE_DEPLOY`, where DevOps Guru analysis found the event.
   *
   * @public
   */
  DataSource?: EventDataSource | undefined;

  /**
   * The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change.
   *
   * @public
   */
  EventClass?: EventClass | undefined;

  /**
   * An `EventResource` object that contains information about the resource that emitted the event.
   *
   * @public
   */
  Resources?: EventResource[] | undefined;
}

/**
 * @public
 */
export interface ListEventsResponse {
  /**
   * A list of the requested events.
   *
   * @public
   */
  Events: Event[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Used to filter for insights that have any status.
 *
 * @public
 */
export interface ListInsightsAnyStatusFilter {
  /**
   * Use to filter for either `REACTIVE` or `PROACTIVE` insights.
   *
   * @public
   */
  Type: InsightType | undefined;

  /**
   * A time range used to specify when the behavior of the filtered insights started.
   *
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;
}

/**
 * A range of time that specifies when anomalous behavior in an anomaly or insight ended.
 *
 * @public
 */
export interface EndTimeRange {
  /**
   * The earliest end time in the time range.
   *
   * @public
   */
  FromTime?: Date | undefined;

  /**
   * The latest end time in the time range.
   *
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * Used to filter for insights that have the status `CLOSED`.
 *
 * @public
 */
export interface ListInsightsClosedStatusFilter {
  /**
   * Use to filter for either `REACTIVE` or `PROACTIVE` insights.
   *
   * @public
   */
  Type: InsightType | undefined;

  /**
   * A time range used to specify when the behavior of the filtered insights ended.
   *
   * @public
   */
  EndTimeRange: EndTimeRange | undefined;
}

/**
 * Used to filter for insights that have the status `ONGOING`.
 *
 * @public
 */
export interface ListInsightsOngoingStatusFilter {
  /**
   * Use to filter for either `REACTIVE` or `PROACTIVE` insights.
   *
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * A filter used by `ListInsights` to specify which insights to return.
 *
 * @public
 */
export interface ListInsightsStatusFilter {
  /**
   * A `ListInsightsAnyStatusFilter` that specifies ongoing insights that are either `REACTIVE` or `PROACTIVE`.
   *
   * @public
   */
  Ongoing?: ListInsightsOngoingStatusFilter | undefined;

  /**
   * A `ListInsightsClosedStatusFilter` that specifies closed insights that are either `REACTIVE` or `PROACTIVE`.
   *
   * @public
   */
  Closed?: ListInsightsClosedStatusFilter | undefined;

  /**
   * A `ListInsightsAnyStatusFilter` that specifies insights of any status that are either `REACTIVE` or `PROACTIVE`.
   *
   * @public
   */
  Any?: ListInsightsAnyStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListInsightsRequest {
  /**
   * A filter used to filter the returned insights by their status. You can specify one status filter.
   *
   * @public
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about a proactive insight. This object is returned by `DescribeInsight.`
 *
 * @public
 */
export interface ProactiveInsightSummary {
  /**
   * The ID of the proactive insight.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the proactive insight.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The severity of the insight. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * The status of the proactive insight.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   *
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.
   *
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;
}

/**
 * Information about a reactive insight. This object is returned by `DescribeInsight.`
 *
 * @public
 */
export interface ReactiveInsightSummary {
  /**
   * The ID of a reactive summary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of a reactive insight.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The severity of the insight. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * The status of a reactive insight.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight.
   *
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListInsightsResponse {
  /**
   * The returned list of proactive insights.
   *
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * The returned list of reactive insights.
   *
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
 *
 * @public
 */
export interface ListMonitoredResourcesFilters {
  /**
   * The permission status of a resource.
   *
   * @public
   */
  ResourcePermission: ResourcePermission | undefined;

  /**
   * The type of resource that you wish to retrieve, such as log groups.
   *
   * @public
   */
  ResourceTypeFilters: ResourceTypeFilter[] | undefined;
}

/**
 * @public
 */
export interface ListMonitoredResourcesRequest {
  /**
   * Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
   *
   * @public
   */
  Filters?: ListMonitoredResourcesFilters | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.
 *
 * @public
 */
export interface MonitoredResourceIdentifier {
  /**
   * The name of the resource being monitored.
   *
   * @public
   */
  MonitoredResourceName?: string | undefined;

  /**
   * The type of resource being monitored.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The permission status of a resource.
   *
   * @public
   */
  ResourcePermission?: ResourcePermission | undefined;

  /**
   * The time at which DevOps Guru last updated this resource.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;
}

/**
 * @public
 */
export interface ListMonitoredResourcesResponse {
  /**
   * Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.
   *
   * @public
   */
  MonitoredResourceIdentifiers: MonitoredResourceIdentifier[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationChannelsRequest {
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 *
 * If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see [Permissions for Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html).
 *
 * If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see [Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html).
 *
 * @public
 */
export interface NotificationChannel {
  /**
   * The ID of a notification channel.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A `NotificationChannelConfig` object that contains information about configured notification channels.
   *
   * @public
   */
  Config?: NotificationChannelConfig | undefined;
}

/**
 * @public
 */
export interface ListNotificationChannelsResponse {
  /**
   * An array that contains the requested notification channels.
   *
   * @public
   */
  Channels?: NotificationChannel[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationInsightsRequest {
  /**
   * A filter used by `ListInsights` to specify which insights to return.
   *
   * @public
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details about a proactive insight. This object is returned by `DescribeInsight`.
 *
 * @public
 */
export interface ProactiveOrganizationInsightSummary {
  /**
   * The ID of the insight summary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * The name of the insight summary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of severity values used to search for insights. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * An array of status values used to search for insights.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   *
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * Information about a reactive insight. This object is returned by `DescribeInsight`.
 *
 * @public
 */
export interface ReactiveOrganizationInsightSummary {
  /**
   * The ID of the insight summary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the organizational unit.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * The name of the insight summary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of severity values used to search for insights. For more information, see [Understanding insight severities](https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities) in the *Amazon DevOps Guru User Guide*.
   *
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * An array of status values used to search for insights.
   *
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * A time ranged that specifies when the observed behavior in an insight started and ended.
   *
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface ListOrganizationInsightsResponse {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ProactiveInsights?: ProactiveOrganizationInsightSummary[] | undefined;

  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ReactiveInsights?: ReactiveOrganizationInsightSummary[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * The ID of the requested insight.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A locale that specifies the language to use for recommendations.
   *
   * @public
   */
  Locale?: Locale | undefined;

  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Information about a resource in which DevOps Guru detected anomalous behavior.
 *
 * @public
 */
export interface RecommendationRelatedAnomalyResource {
  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation resource type identifiers, `service-provider::service-name::data-type-name`. For example, `AWS::RDS::DBCluster`. For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *Amazon Web Services CloudFormation User Guide*.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights.
 *
 * @public
 */
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  /**
   * The name of the CloudWatch metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
   *
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * Contains an array of `RecommendationRelatedCloudWatchMetricsSourceDetail` objects that contain the name and namespace of an Amazon CloudWatch metric.
 *
 * @public
 */
export interface RecommendationRelatedAnomalySourceDetail {
  /**
   * An array of `CloudWatchMetricsDetail` objects that contains information about the analyzed metrics that displayed anomalous behavior.
   *
   * @public
   */
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[] | undefined;
}

/**
 * Information about an anomaly that is related to a recommendation.
 *
 * @public
 */
export interface RecommendationRelatedAnomaly {
  /**
   * An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object contains the name and type of the resource.
   *
   * @public
   */
  Resources?: RecommendationRelatedAnomalyResource[] | undefined;

  /**
   * Information about where the anomalous behavior related the recommendation was found. For example, details in Amazon CloudWatch metrics.
   *
   * @public
   */
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[] | undefined;

  /**
   * The ID of an anomaly that generated the insight with this recommendation.
   *
   * @public
   */
  AnomalyId?: string | undefined;
}

/**
 * Information about an Amazon Web Services resource that emitted and event that is related to a recommendation in an insight.
 *
 * @public
 */
export interface RecommendationRelatedEventResource {
  /**
   * The name of the resource that emitted the event. This corresponds to the `Name` field in an `EventResource` object.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the resource that emitted the event. This corresponds to the `Type` field in an `EventResource` object.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about an event that is related to a recommendation.
 *
 * @public
 */
export interface RecommendationRelatedEvent {
  /**
   * The name of the event. This corresponds to the `Name` field in an `Event` object.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A `ResourceCollection` object that contains arrays of the names of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  Resources?: RecommendationRelatedEventResource[] | undefined;
}

/**
 * Recommendation information to help you remediate detected anomalous behavior that generated an insight.
 *
 * @public
 */
export interface Recommendation {
  /**
   * A description of the problem.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A hyperlink to information to help you address the problem.
   *
   * @public
   */
  Link?: string | undefined;

  /**
   * The name of the recommendation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The reason DevOps Guru flagged the anomalous behavior as a problem.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue.
   *
   * @public
   */
  RelatedEvents?: RecommendationRelatedEvent[] | undefined;

  /**
   * Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue.
   *
   * @public
   */
  RelatedAnomalies?: RecommendationRelatedAnomaly[] | undefined;

  /**
   * The category type of the recommendation.
   *
   * @public
   */
  Category?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * An array of the requested recommendations.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * The feedback from customers is about the recommendations in this insight.
   *
   * @public
   */
  InsightFeedback?: InsightFeedback | undefined;
}

/**
 * @public
 */
export interface PutFeedbackResponse {}

/**
 * @public
 */
export interface RemoveNotificationChannelRequest {
  /**
   * The ID of the notification channel to be removed.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface RemoveNotificationChannelResponse {}

/**
 * Specifies values used to filter responses when searching for insights. You can use a `ResourceCollection`, `ServiceCollection`, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an `AND`, and the request returns only results that match all of the specified filters.
 *
 * @public
 */
export interface SearchInsightsFilters {
  /**
   * An array of severity values used to search for insights.
   *
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * An array of status values used to search for insights.
   *
   * @public
   */
  Statuses?: InsightStatus[] | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface SearchInsightsRequest {
  /**
   * The start of the time range passed in. Returned insights occurred after this time.
   *
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * A `SearchInsightsFilters` object that is used to set the severity and status filters on your insight search.
   *
   * @public
   */
  Filters?: SearchInsightsFilters | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The type of insights you are searching for (`REACTIVE` or `PROACTIVE`).
   *
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * @public
 */
export interface SearchInsightsResponse {
  /**
   * The returned proactive insights.
   *
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * The returned reactive insights.
   *
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters you can use to specify which events are returned when `ListEvents` is called.
 *
 * @public
 */
export interface SearchOrganizationInsightsFilters {
  /**
   * An array of severity values used to search for insights.
   *
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * An array of status values used to search for insights.
   *
   * @public
   */
  Statuses?: InsightStatus[] | undefined;

  /**
   * A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * A collection of the names of Amazon Web Services services.
   *
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface SearchOrganizationInsightsRequest {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * A time range used to specify when the behavior of an insight or anomaly started.
   *
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * A `SearchOrganizationInsightsFilters` object that is used to set the severity and status filters on your insight search.
   *
   * @public
   */
  Filters?: SearchOrganizationInsightsFilters | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The type of insights you are searching for (`REACTIVE` or `PROACTIVE`).
   *
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * @public
 */
export interface SearchOrganizationInsightsResponse {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   *
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCostEstimationRequest {
  /**
   * The collection of Amazon Web Services resources used to create a monthly DevOps Guru cost estimate.
   *
   * @public
   */
  ResourceCollection: CostEstimationResourceCollectionFilter | undefined;

  /**
   * The idempotency token used to identify each cost estimate request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCostEstimationResponse {}

/**
 * @public
 */
export interface UpdateEventSourcesConfigRequest {
  /**
   * Configuration information about the integration of DevOps Guru as the Consumer via EventBridge with another AWS Service.
   *
   * @public
   */
  EventSources?: EventSourcesConfig | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourcesConfigResponse {}

/**
 * Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 *
 * @public
 */
export interface UpdateCloudFormationCollectionFilter {
  /**
   * An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag *key*\/*value* pair.
 *
 * @public
 */
export interface UpdateTagCollectionFilter {
  /**
   * An Amazon Web Services tag *key* that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this *key* make up your DevOps Guru application and analysis boundary.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * The values in an Amazon Web Services tag collection.
   *
   * The tag's *value* is an optional field used to associate a string with the tag *key* (for example, `111122223333`, `Production`, or a team name). The *key* and *value* are the tag's *key* pair. Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * Contains information used to update a collection of Amazon Web Services resources.
 *
 * @public
 */
export interface UpdateResourceCollectionFilter {
  /**
   * A collection of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @public
   */
  CloudFormation?: UpdateCloudFormationCollectionFilter | undefined;

  /**
   * The updated Amazon Web Services tags used to filter the resources in the resource collection.
   *
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each Amazon Web Services tag has two parts.
   *
   * - A tag *key* (for example, `CostCenter`, `Environment`, `Project`, or `Secret`). Tag *keys* are case-sensitive.
   * - An optional field known as a tag *value* (for example, `111122223333`, `Production`, or a team name). Omitting the tag *value* is the same as using an empty string. Like tag *keys*, tag *values* are case-sensitive.
   *
   * Together these are known as *key*-*value* pairs.
   *
   * > **Important:** The string used for a *key* in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag *key* might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a *key*, the case of characters in the *key* can be whatever you choose. After you create a *key*, it is case-sensitive. For example, DevOps Guru works with a *key* named `devops-guru-rds` and a *key* named `DevOps-Guru-RDS`, and these act as two different *keys*. Possible *key*\/*value* pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * @public
   */
  Tags?: UpdateTagCollectionFilter[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceCollectionRequest {
  /**
   * Specifies if the resource collection in the request is added or deleted to the resource collection.
   *
   * @public
   */
  Action: UpdateResourceCollectionAction | undefined;

  /**
   * Contains information used to update a collection of Amazon Web Services resources.
   *
   * @public
   */
  ResourceCollection: UpdateResourceCollectionFilter | undefined;
}

/**
 * @public
 */
export interface UpdateResourceCollectionResponse {}

/**
 * Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
 *
 * @public
 */
export interface KMSServerSideEncryptionIntegrationConfig {
  /**
   * Describes the specified KMS key.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with "alias/". If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), Amazon Web Services KMS associates the alias with an Amazon Web Services managed key and returns its KeyId and Arn in the response. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab
   *
   * Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab
   *
   * Alias name: alias/ExampleAlias
   *
   * Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * Specifies if DevOps Guru is enabled for KMS integration.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
   *
   * @public
   */
  Type?: ServerSideEncryptionType | undefined;
}

/**
 * Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration.
 *
 * @public
 */
export interface LogsAnomalyDetectionIntegrationConfig {
  /**
   * Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.
 *
 * @public
 */
export interface OpsCenterIntegrationConfig {
  /**
   * Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.
 *
 * @public
 */
export interface UpdateServiceIntegrationConfig {
  /**
   * Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.
   *
   * @public
   */
  OpsCenter?: OpsCenterIntegrationConfig | undefined;

  /**
   * Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups.
   *
   * @public
   */
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig | undefined;

  /**
   * Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
   *
   * @public
   */
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceIntegrationRequest {
  /**
   * An `IntegratedServiceConfig` object used to specify the integrated service you want to update, and whether you want to update it to enabled or disabled.
   *
   * @public
   */
  ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceIntegrationResponse {}
