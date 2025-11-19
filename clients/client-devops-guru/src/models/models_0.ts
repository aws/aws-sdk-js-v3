// smithy-typescript generated code
import {
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
 * <p> Information about the number of open reactive and proactive insights that can be used
 * 			to gauge the health of your system. </p>
 * @public
 */
export interface AccountInsightHealth {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  OpenReactiveInsights?: number | undefined;
}

/**
 * <p> Returns the number of open reactive insights, the number of open proactive insights,
 * 			and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
 * 			health of operations in your Amazon Web Services account. </p>
 * @public
 */
export interface AccountHealth {
  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p> Information about the health of the Amazon Web Services resources in your account, including the
   * 			number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   * 		</p>
   * @public
   */
  Insight?: AccountInsightHealth | undefined;
}

/**
 * <p>
 * 			The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for.
 * 			You can also choose to specify which severity levels to receive notifications for.
 * 		</p>
 * @public
 */
export interface NotificationFilterConfig {
  /**
   * <p>
   * 			The severity levels that you want to receive notifications for. For example, you can choose to receive notifications only for insights with <code>HIGH</code> and <code>MEDIUM</code> severity levels.
   * 			For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding insight severities</a>.
   * 		</p>
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * <p>
   * 			The events that you want to receive notifications for. For example, you can choose to receive notifications only when the severity level is upgraded or a new insight is created.
   * 		</p>
   * @public
   */
  MessageTypes?: NotificationMessageType[] | undefined;
}

/**
 * <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
 *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for Amazon SNS topics</a>.</p>
 *          <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 * @public
 */
export interface SnsChannelConfig {
  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * <p> Information about notification channels you have configured with DevOps Guru.
 * 			The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).</p>
 * @public
 */
export interface NotificationChannelConfig {
  /**
   * <p> Information about a notification channel configured in DevOps Guru to send notifications
   * 			when insights are created. </p>
   *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
   * 				to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
   * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
   * 				for Amazon SNS topics</a>.</p>
   *          <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
   * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
   * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
   * @public
   */
  Sns: SnsChannelConfig | undefined;

  /**
   * <p>
   * 			The filter configurations for the Amazon SNS notification topic you use with DevOps Guru.
   * 			If you do not provide filter configurations, the default configurations are to receive notifications for all message types of <code>High</code> or <code>Medium</code> severity.
   * 		</p>
   * @public
   */
  Filters?: NotificationFilterConfig | undefined;
}

/**
 * @public
 */
export interface AddNotificationChannelRequest {
  /**
   * <p> A <code>NotificationChannelConfig</code> object that specifies what type of
   * 			notification channel to add. The one
   *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
   * @public
   */
  Config: NotificationChannelConfig | undefined;
}

/**
 * @public
 */
export interface AddNotificationChannelResponse {
  /**
   * <p> The ID of the added notification channel. </p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p> The field associated with the validation exception. </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p> The name of the field. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The message associated with the validation exception with information to help
   * 			determine its cause. </p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Information about your account's integration with Amazon CodeGuru Profiler. This
 * 			returns whether DevOps Guru is configured to consume recommendations generated from Amazon
 * 			CodeGuru Profiler.</p>
 * @public
 */
export interface AmazonCodeGuruProfilerIntegration {
  /**
   * <p>The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to
   * 			consume recommendations that are generated from Amazon CodeGuru Profiler.</p>
   * @public
   */
  Status?: EventSourceOptInStatus | undefined;
}

/**
 * <p>
 * 			Information about an anomalous log event found within a log group.
 * 		</p>
 * @public
 */
export interface LogAnomalyClass {
  /**
   * <p>
   * 			The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log stream is a sequence of log events that share the same source.
   * 		</p>
   * @public
   */
  LogStreamName?: string | undefined;

  /**
   * <p>
   * 			The type of log anomaly that has been detected.
   * 		</p>
   * @public
   */
  LogAnomalyType?: LogAnomalyType | undefined;

  /**
   * <p>
   * 			The token where the anomaly was detected. This may refer to an exception or another location, or it may be blank for log anomalies such as format anomalies.
   * 		</p>
   * @public
   */
  LogAnomalyToken?: string | undefined;

  /**
   * <p>
   * 			The ID of the log event.
   * 		</p>
   * @public
   */
  LogEventId?: string | undefined;

  /**
   * <p>
   * 			The explanation for why the log event is considered an anomaly.
   * 		</p>
   * @public
   */
  Explanation?: string | undefined;

  /**
   * <p>
   * 			The number of log lines where this anomalous log event occurs.
   * 		</p>
   * @public
   */
  NumberOfLogLinesOccurrences?: number | undefined;

  /**
   * <p>
   * 			The time of the first occurrence of the anomalous log event.
   * 		</p>
   * @public
   */
  LogEventTimestamp?: Date | undefined;
}

/**
 * <p>
 * 			A cluster of similar anomalous log events found within a log group.
 * 		</p>
 * @public
 */
export interface LogAnomalyShowcase {
  /**
   * <p>
   * 			A list of anomalous log events that may be related.
   * 		</p>
   * @public
   */
  LogAnomalyClasses?: LogAnomalyClass[] | undefined;
}

/**
 * <p>
 * 			An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.
 * 		</p>
 * @public
 */
export interface AnomalousLogGroup {
  /**
   * <p>
   * 			The name of the CloudWatch log group.
   * 		</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>
   * 			The time the anomalous log events began. The impact start time indicates the time of the first log anomaly event that occurs.
   * 		</p>
   * @public
   */
  ImpactStartTime?: Date | undefined;

  /**
   * <p>
   * 			The time the anomalous log events stopped.
   * 		</p>
   * @public
   */
  ImpactEndTime?: Date | undefined;

  /**
   * <p>
   * 			The number of log lines that were scanned for anomalous log events.
   * 		</p>
   * @public
   */
  NumberOfLogLinesScanned?: number | undefined;

  /**
   * <p>
   * 			The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar anomalous log events.
   * 		</p>
   * @public
   */
  LogAnomalyShowcases?: LogAnomalyShowcase[] | undefined;
}

/**
 * <p> A time range that specifies when DevOps Guru opens and then closes an anomaly. This
 * 			is different from <code>AnomalyTimeRange</code>, which specifies the time range when
 * 			DevOps Guru actually observes the anomalous behavior. </p>
 * @public
 */
export interface AnomalyReportedTimeRange {
  /**
   * <p> The time when an anomaly is opened. </p>
   * @public
   */
  OpenTime: Date | undefined;

  /**
   * <p> The time when an anomaly is closed. </p>
   * @public
   */
  CloseTime?: Date | undefined;
}

/**
 * <p>The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the
 * 			generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and
 * 			insight with details about the anomalous behavior and suggestions about how to correct
 * 			the problem.</p>
 * @public
 */
export interface AnomalyResource {
  /**
   * <p>The name of the Amazon Web Services resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the Amazon Web Services resource.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p> The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in
 * 			your account for operational problems and anomalous behavior. A dimension is a
 * 			name/value pair that is part of the identity of a metric. A metric can have up to 10
 * 			dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 * @public
 */
export interface CloudWatchMetricsDimension {
  /**
   * <p> The name of the CloudWatch dimension. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The value of the CloudWatch dimension. </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A pair that contains metric values at the respective timestamp.</p>
 * @public
 */
export interface TimestampMetricValuePair {
  /**
   * <p>A <code>Timestamp</code> that specifies the time the event occurred. </p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>Value of the anomalous metric data point at respective Timestamp.</p>
   * @public
   */
  MetricValue?: number | undefined;
}

/**
 * <p>Contains information about the analyzed metrics that displayed anomalous behavior.
 * 		</p>
 * @public
 */
export interface CloudWatchMetricsDataSummary {
  /**
   * <p>This is a list of Amazon CloudWatch metric values at given timestamp.</p>
   * @public
   */
  TimestampMetricValuePairList?: TimestampMetricValuePair[] | undefined;

  /**
   * <p>This is an enum of the status showing whether the metric value pair list has partial
   * 			or complete data, or if there was an error.</p>
   * @public
   */
  StatusCode?: CloudWatchMetricDataStatusCode | undefined;
}

/**
 * <p> Information about an Amazon CloudWatch metric. </p>
 * @public
 */
export interface CloudWatchMetricsDetail {
  /**
   * <p> The name of the CloudWatch metric. </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p> The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
   * 		</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p> An array of CloudWatch dimensions associated with </p>
   * @public
   */
  Dimensions?: CloudWatchMetricsDimension[] | undefined;

  /**
   * <p> The type of statistic associated with the CloudWatch metric. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
   * @public
   */
  Stat?: CloudWatchMetricsStat | undefined;

  /**
   * <p> The unit of measure used for the CloudWatch metric. For example, <code>Bytes</code>,
   * 				<code>Seconds</code>, <code>Count</code>, and <code>Percent</code>. </p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p> The length of time associated with the CloudWatch metric in number of seconds. </p>
   * @public
   */
  Period?: number | undefined;

  /**
   * <p>This object returns anomaly metric data.</p>
   * @public
   */
  MetricDataSummary?: CloudWatchMetricsDataSummary | undefined;
}

/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the
 * 				<code>db.sql</code> dimension group consists of the following dimensions:
 * 				<code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>,
 * 			and <code>db.sql.tokenized_id</code>.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as
 * 				SQL statements, only the first 500 bytes are returned.</p>
 *          </note>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *          <ul>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *             </li>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PerformanceInsightsMetricDimensionGroup {
  /**
   * <p>The name of the dimension group. Its valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db</code> - The name of the database to which the client is connected
   * 					(only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.application</code> - The name of the application that is connected to
   * 					the database (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host</code> - The host name of the connected client (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL
   * 					and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql</code> - The SQL that is currently executing (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized</code> - The SQL digest (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event</code> - The event for which the database backend is waiting
   * 					(all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type</code> - The type of event for which the database
   * 					backend is waiting (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user</code> - The user logged in to the database (all engines)</p>
   *             </li>
   *          </ul>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not
   * 			present, then it signifies that all of the dimensions in the group were requested or are
   * 			present in the response.</p>
   *          <p>Valid values for elements in the <code>Dimensions</code> array are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.application.name</code> - The name of the application that is connected
   * 					to the database (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.id</code> - The host ID of the connected client (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.name</code> - The host name of the connected client (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.name</code> - The name of the database to which the client is connected
   * 					(only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type.name</code> - The type of the current session (only Aurora
   * 					PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.id</code> - The SQL ID generated by Performance Insights (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.db_id</code> - The SQL ID generated by the database (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.statement</code> - The SQL text that is being executed (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.tokenized_id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.id</code> - The SQL digest ID generated by Performance Insights (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.db_id</code> - SQL digest ID generated by the database
   * 					(all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.statement</code> - The SQL digest text (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.id</code> - The ID of the user logged in to the database (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.name</code> - The name of the user logged in to the database (all
   * 					engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.name</code> - The event for which the backend is waiting
   * 					(all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.type</code> - The type of event for which the backend is
   * 					waiting (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type.name</code> - The name of the event type for which the
   * 					backend is waiting (all engines)</p>
   *             </li>
   *          </ul>
   * @public
   */
  Dimensions?: string[] | undefined;

  /**
   * <p>The maximum number of items to fetch for this dimension group.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>A single query to be processed. Use these parameters to query the Performance Insights
 * 				<code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more
 * 			information, see <code>
 *                <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a>
 *             </code> in the <i>Amazon RDS Performance Insights API
 * 				Reference</i>.</p>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *          <ul>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *             </li>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PerformanceInsightsMetricQuery {
  /**
   * <p>The name of the meteric used used when querying an Performance Insights
   * 				<code>GetResourceMetrics</code> API for anomaly metrics.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions for the
   * 					database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the database
   * 					engine.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold,
   * 				<code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If
   * 			the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with
   * 				<code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code>
   * 			showing the raw values, and <code>db.sampledload.avg</code> less than
   * 				<code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code>
   * 			only. </p>
   * @public
   */
  Metric?: string | undefined;

  /**
   * <p>The specification for how to aggregate the data points from a Performance Insights
   * 				<code>GetResourceMetrics</code> API query. The Performance Insights query returns all of the
   * 			dimensions within that group, unless you provide the names of specific dimensions within
   * 			that group. You can also request that Performance Insights return a limited number of values for a
   * 			dimension.</p>
   * @public
   */
  GroupBy?: PerformanceInsightsMetricDimensionGroup | undefined;

  /**
   * <p>One or more filters to apply to a Performance Insights <code>GetResourceMetrics</code> API query.
   * 			Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Any number of filters by the same dimension, as specified in the
   * 						<code>GroupBy</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>A single filter for any other dimension in this dimension group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Record<string, string> | undefined;
}

/**
 * <p>Information about a reference metric used to evaluate Performance Insights.</p>
 * @public
 */
export interface PerformanceInsightsReferenceMetric {
  /**
   * <p>A query to be processed on the metric.</p>
   * @public
   */
  MetricQuery?: PerformanceInsightsMetricQuery | undefined;
}

/**
 * <p>A reference value to compare Performance Insights metrics against to determine if the metrics
 * 			demonstrate anomalous behavior.</p>
 * @public
 */
export interface PerformanceInsightsReferenceScalar {
  /**
   * <p>The reference value.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Reference scalar values and other metrics that DevOps Guru displays on a graph in its
 * 			console along with the actual metrics it analyzed. Compare these reference values to
 * 			your actual metrics to help you understand anomalous behavior that DevOps Guru
 * 			detected.</p>
 * @public
 */
export interface PerformanceInsightsReferenceComparisonValues {
  /**
   * <p>A scalar value DevOps Guru for a metric that DevOps Guru compares to actual metric values. This
   * 			reference value is used to determine if an actual metric value should be considered
   * 			anomalous.</p>
   * @public
   */
  ReferenceScalar?: PerformanceInsightsReferenceScalar | undefined;

  /**
   * <p>A metric that DevOps Guru compares to actual metric values. This reference metric is used to
   * 			determine if an actual metric should be considered anomalous.</p>
   * @public
   */
  ReferenceMetric?: PerformanceInsightsReferenceMetric | undefined;
}

/**
 * <p>Reference data used to evaluate Performance Insights to determine if its performance is anomalous or
 * 			not.</p>
 * @public
 */
export interface PerformanceInsightsReferenceData {
  /**
   * <p>The name of the reference data.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The specific reference values used to evaluate the Performance Insights. For more information, see
   * 					<code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceComparisonValues.html">PerformanceInsightsReferenceComparisonValues</a>
   *             </code>. </p>
   * @public
   */
  ComparisonValues?: PerformanceInsightsReferenceComparisonValues | undefined;
}

/**
 * <p>A statistic in a Performance Insights collection.</p>
 * @public
 */
export interface PerformanceInsightsStat {
  /**
   * <p>The statistic type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The value of the statistic.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Details about Performance Insights metrics.</p>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *          <ul>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *             </li>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PerformanceInsightsMetricsDetail {
  /**
   * <p>The name used for a specific Performance Insights metric.</p>
   * @public
   */
  MetricDisplayName?: string | undefined;

  /**
   * <p>The unit of measure for a metric. For example, a session or a process.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>A single query to be processed for the metric. For more information, see <code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsMetricQuery.html">PerformanceInsightsMetricQuery</a>
   *             </code>.</p>
   * @public
   */
  MetricQuery?: PerformanceInsightsMetricQuery | undefined;

  /**
   * <p> For more information, see <code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceData.html">PerformanceInsightsReferenceData</a>
   *             </code>. </p>
   * @public
   */
  ReferenceData?: PerformanceInsightsReferenceData[] | undefined;

  /**
   * <p>The metric statistics during the anomalous period detected by DevOps Guru;</p>
   * @public
   */
  StatsAtAnomaly?: PerformanceInsightsStat[] | undefined;

  /**
   * <p>Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes
   * 			metrics, it compares them to <code>StatsAtBaseline</code> to help determine if they are
   * 			anomalous.</p>
   * @public
   */
  StatsAtBaseline?: PerformanceInsightsStat[] | undefined;
}

/**
 * <p> Details about the source of the anomalous operational data that triggered the
 * 			anomaly.</p>
 * @public
 */
export interface AnomalySourceDetails {
  /**
   * <p>An array of <code>CloudWatchMetricsDetail</code> objects that contain information
   * 			about analyzed CloudWatch metrics that show anomalous behavior. </p>
   * @public
   */
  CloudWatchMetrics?: CloudWatchMetricsDetail[] | undefined;

  /**
   * <p>An array of <code>PerformanceInsightsMetricsDetail</code> objects that contain
   * 			information about analyzed Performance Insights metrics that show anomalous behavior.</p>
   * @public
   */
  PerformanceInsightsMetrics?: PerformanceInsightsMetricsDetail[] | undefined;
}

/**
 * <p>Metadata about the detection source that generates proactive anomalies. The anomaly is
 * 			detected using analysis of the metric data  over a period of time</p>
 * @public
 */
export interface AnomalySourceMetadata {
  /**
   * <p>The source of the anomaly.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The name of the anomaly's resource.</p>
   * @public
   */
  SourceResourceName?: string | undefined;

  /**
   * <p>The anomaly's resource type.</p>
   * @public
   */
  SourceResourceType?: string | undefined;
}

/**
 * <p> A time range that specifies when the observed unusual behavior in an anomaly started
 * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
 * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
 * @public
 */
export interface AnomalyTimeRange {
  /**
   * <p> The time when the anomalous behavior started. </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the anomalous behavior ended. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteInsightRequest {
  /**
   * <p>The ID of the insight.</p>
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
   * <p> An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   * 		</p>
   * @public
   */
  OpenReactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account. </p>
   * @public
   */
  OpenProactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of metrics that have been analyzed in your Amazon Web Services
   * 			account. </p>
   * @public
   */
  MetricsAnalyzed: number | undefined;

  /**
   * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in
   * 			the last hour. </p>
   * @public
   */
  ResourceHours: number | undefined;

  /**
   * <p>
   * 			Number of resources that DevOps Guru is monitoring in your Amazon Web Services account.
   * 		</p>
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountOverviewRequest {
  /**
   * <p> The start of the time range passed in. The start time granularity is at the day
   * 			level. The floor of the start time is used. Returned information occurred after this
   * 			day. </p>
   * @public
   */
  FromTime: Date | undefined;

  /**
   * <p> The end of the time range passed in. The start time granularity is at the day level.
   * 			The floor of the start time is used. Returned information occurred before this day. If
   * 			this is not specified, then the current day is used. </p>
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAccountOverviewResponse {
  /**
   * <p> An integer that specifies the number of open reactive insights in your Amazon Web Services account
   * 			that were created during the time range passed in. </p>
   * @public
   */
  ReactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of open proactive insights in your Amazon Web Services account
   * 			that were created during the time range passed in. </p>
   * @public
   */
  ProactiveInsights: number | undefined;

  /**
   * <p> The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in.
   * 		</p>
   * @public
   */
  MeanTimeToRecoverInMilliseconds: number | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyRequest {
  /**
   * <p> The ID of the anomaly. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the member account.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
 * 			is expected to occur. </p>
 * @public
 */
export interface PredictionTimeRange {
  /**
   * <p> The time range during which a metric limit is expected to be exceeded. This applies
   * 			to proactive insights only. </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the behavior in a proactive insight is expected to end. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
 * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
 * @public
 */
export interface CloudFormationCollection {
  /**
   * <p> An array of CloudFormation stack names. </p>
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * <p>A collection of Amazon Web Services tags.</p>
 *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
 *    		tagging, so you can assign the same tag to resources from different services to indicate
 *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
 *    		table resource that you assign to an Lambda function. For more information about
 *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
 *    			best practices</a> whitepaper. </p>
 *          <p>Each Amazon Web Services tag has two parts. </p>
 *          <ul>
 *             <li>
 *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
 *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
 *    				<i>keys</i> are case-sensitive.</p>
 *             </li>
 *             <li>
 *                <p>An optional field known as a tag <i>value</i> (for example,
 *    				<code>111122223333</code>, <code>Production</code>, or a team
 *    				name). Omitting the tag <i>value</i> is the same as using an empty
 *    				string. Like tag <i>keys</i>, tag <i>values</i> are
 *    				case-sensitive.</p>
 *             </li>
 *          </ul>
 *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
 *          <important>
 *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
 * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
 * 			<code>DevOps-Guru-deployment-application</code> or
 * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
 * 			 For example, DevOps Guru works with a
 * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
 * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
 * 			application might be <code>Devops-Guru-production-application/RDS</code> or
 * 			<code>Devops-Guru-production-application/containers</code>.</p>
 *          </important>
 * @public
 */
export interface TagCollection {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
 * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 * @public
 */
export interface ResourceCollection {
  /**
   * <p> An array of the names of Amazon Web Services CloudFormation stacks. The stacks define Amazon Web Services resources that
   * 			DevOps Guru analyzes. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  CloudFormation?: CloudFormationCollection | undefined;

  /**
   * <p>The Amazon Web Services tags that are used by resources in the resource collection.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: TagCollection[] | undefined;
}

/**
 * <p>Information about an anomaly. This object is returned by
 * 			<code>ListAnomalies</code>.</p>
 * @public
 */
export interface ProactiveAnomaly {
  /**
   * <p> The ID of a proactive anomaly. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * <p> The status of a proactive anomaly. </p>
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * <p> The time of the anomaly's most recent update. </p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p> A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The metadata for the anomaly.</p>
   * @public
   */
  SourceMetadata?: AnomalySourceMetadata | undefined;

  /**
   * <p>Information about a resource in which DevOps Guru detected anomalous behavior.</p>
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;

  /**
   * <p>
   * 			A description of the proactive anomaly.
   * 		</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 				<code>ListAnomalies</code>.</p>
 * @public
 */
export interface ReactiveAnomaly {
  /**
   * <p>The ID of the reactive anomaly. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * <p> The status of the anomaly. </p>
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>The type of the reactive anomaly. It can be one of the following types.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAUSAL</code> - the anomaly can cause a new insight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: AnomalyType | undefined;

  /**
   * <p>The name of the reactive anomaly.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the reactive anomaly.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the causal anomaly that is associated with this
   *       reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.</p>
   * @public
   */
  CausalAnomalyId?: string | undefined;

  /**
   * <p>The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.</p>
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyResponse {
  /**
   * <p> A <code>ProactiveAnomaly</code> object that represents the requested anomaly. </p>
   * @public
   */
  ProactiveAnomaly?: ProactiveAnomaly | undefined;

  /**
   * <p> A <code>ReactiveAnomaly</code> object that represents the requested anomaly. </p>
   * @public
   */
  ReactiveAnomaly?: ReactiveAnomaly | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourcesConfigRequest {}

/**
 * <p>Information about the integration of DevOps Guru as consumer with another AWS service, such
 * 			as AWS CodeGuru Profiler via EventBridge.</p>
 * @public
 */
export interface EventSourcesConfig {
  /**
   * <p>Information about whether DevOps Guru is configured to consume recommendations which
   * 			are generated from AWS CodeGuru Profiler.</p>
   * @public
   */
  AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourcesConfigResponse {
  /**
   * <p>Lists the event sources in the configuration.</p>
   * @public
   */
  EventSources?: EventSourcesConfig | undefined;
}

/**
 * @public
 */
export interface DescribeFeedbackRequest {
  /**
   * <p> The ID of the insight for which the feedback was provided. </p>
   * @public
   */
  InsightId?: string | undefined;
}

/**
 * <p> Information about insight feedback received from a customer. </p>
 * @public
 */
export interface InsightFeedback {
  /**
   * <p> The insight feedback ID. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The feedback provided by the customer. </p>
   * @public
   */
  Feedback?: InsightFeedbackOption | undefined;
}

/**
 * @public
 */
export interface DescribeFeedbackResponse {
  /**
   * <p> Information about insight feedback received from a customer. </p>
   * @public
   */
  InsightFeedback?: InsightFeedback | undefined;
}

/**
 * @public
 */
export interface DescribeInsightRequest {
  /**
   * <p> The ID of the insight. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID of the member account in the organization.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p> A time ranged that specifies when the observed behavior in an insight started and
 * 			ended. </p>
 * @public
 */
export interface InsightTimeRange {
  /**
   * <p> The time when the behavior described in an insight started. </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the behavior described in an insight ended. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>ListInsights</code>.</p>
 * @public
 */
export interface ProactiveInsight {
  /**
   * <p>The ID of the proactive insight. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the proactive insight. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p>The status of the proactive insight. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p> The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight. </p>
   * @public
   */
  SsmOpsItemId?: string | undefined;

  /**
   * <p>Describes the proactive insight.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p> Information about a reactive insight. This object is returned by
 * 				<code>ListInsights</code>. </p>
 * @public
 */
export interface ReactiveInsight {
  /**
   * <p> The ID of a reactive insight. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The name of a reactive insight. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p> The status of a reactive insight. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p> The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight. </p>
   * @public
   */
  SsmOpsItemId?: string | undefined;

  /**
   * <p>Describes the reactive insight.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInsightResponse {
  /**
   * <p> A <code>ProactiveInsight</code> object that represents the requested insight. </p>
   * @public
   */
  ProactiveInsight?: ProactiveInsight | undefined;

  /**
   * <p> A <code>ReactiveInsight</code> object that represents the requested insight. </p>
   * @public
   */
  ReactiveInsight?: ReactiveInsight | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationHealthRequest {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationHealthResponse {
  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  OpenReactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  OpenProactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of metrics that have been analyzed in your
   * 			organization.</p>
   * @public
   */
  MetricsAnalyzed: number | undefined;

  /**
   * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in
   * 			the last hour. </p>
   * @public
   */
  ResourceHours: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationOverviewRequest {
  /**
   * <p> The start of the time range passed in. The start time granularity is at the day
   * 			level. The floor of the start time is used. Returned information occurred after this
   * 			day. </p>
   * @public
   */
  FromTime: Date | undefined;

  /**
   * <p> The end of the time range passed in. The start time granularity is at the day level.
   * 			The floor of the start time is used. Returned information occurred before this day. If
   * 			this is not specified, then the current day is used. </p>
   * @public
   */
  ToTime?: Date | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationOverviewResponse {
  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ReactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ProactiveInsights: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResourceCollectionHealthRequest {
  /**
   * <p> An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
   * 			are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  OrganizationResourceCollectionType: OrganizationResourceCollectionType | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> Information about the number of open reactive and proactive insights that can be used
 * 			to gauge the health of your system. </p>
 * @public
 */
export interface InsightHealth {
  /**
   * <p> The number of open proactive insights. </p>
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * <p> The number of open reactive insights. </p>
   * @public
   */
  OpenReactiveInsights?: number | undefined;

  /**
   * <p> The Meant Time to Recover (MTTR) for the insight. </p>
   * @public
   */
  MeanTimeToRecoverInMilliseconds?: number | undefined;
}

/**
 * <p> Information about the health of Amazon Web Services resources in your account that are specified by
 * 			an Amazon Web Services CloudFormation stack. </p>
 * @public
 */
export interface CloudFormationHealth {
  /**
   * <p> The name of the CloudFormation stack. </p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p> Information about the health of the Amazon Web Services resources in your account that are
   * 			specified by an Amazon Web Services CloudFormation stack, including the number of open proactive, open reactive
   * 			insights, and the Mean Time to Recover (MTTR) of closed insights. </p>
   * @public
   */
  Insight?: InsightHealth | undefined;

  /**
   * <p>
   * 			Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services CloudFormation stack.
   * 		</p>
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * <p>Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services
 * 			service.</p>
 * @public
 */
export interface ServiceInsightHealth {
  /**
   * <p>The number of open proactive insights in the Amazon Web Services service</p>
   * @public
   */
  OpenProactiveInsights?: number | undefined;

  /**
   * <p>The number of open reactive insights in the Amazon Web Services service</p>
   * @public
   */
  OpenReactiveInsights?: number | undefined;
}

/**
 * <p>Represents the health of an Amazon Web Services service.</p>
 * @public
 */
export interface ServiceHealth {
  /**
   * <p>The name of the Amazon Web Services service.</p>
   * @public
   */
  ServiceName?: ServiceName | undefined;

  /**
   * <p>Represents the health of an Amazon Web Services service. This is a <code>ServiceInsightHealth</code>
   * 			that contains the number of open proactive and reactive insights for this
   * 			service.</p>
   * @public
   */
  Insight?: ServiceInsightHealth | undefined;

  /**
   * <p>
   * 			Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service.
   * 		</p>
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * <p> Information about the health of Amazon Web Services resources in your account that are specified by
 * 			an Amazon Web Services tag <i>key</i>. </p>
 * @public
 */
export interface TagHealth {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  AppBoundaryKey?: string | undefined;

  /**
   * <p>The value in an Amazon Web Services tag.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>Information about the health of the Amazon Web Services resources in your account that are specified
   * 			by an Amazon Web Services tag, including the number of open proactive, open reactive insights, and the
   * 			Mean Time to Recover (MTTR) of closed insights. </p>
   * @public
   */
  Insight?: InsightHealth | undefined;

  /**
   * <p>
   * 			Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services tag.
   * 		</p>
   * @public
   */
  AnalyzedResourceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResourceCollectionHealthResponse {
  /**
   * <p>The returned <code>CloudFormationHealthOverview</code> object that contains an
   * 				<code>InsightHealthOverview</code> object with the requested system health
   * 			information.</p>
   * @public
   */
  CloudFormation?: CloudFormationHealth[] | undefined;

  /**
   * <p>An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services
   * 			services associated with the resources in the collection.</p>
   * @public
   */
  Service?: ServiceHealth[] | undefined;

  /**
   * <p>The name of the organization's account.</p>
   * @public
   */
  Account?: AccountHealth[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: TagHealth[] | undefined;
}

/**
 * @public
 */
export interface DescribeResourceCollectionHealthRequest {
  /**
   * <p> An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
   * 			are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollectionType: ResourceCollectionType | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceCollectionHealthResponse {
  /**
   * <p> The returned <code>CloudFormationHealthOverview</code> object that contains an
   * 				<code>InsightHealthOverview</code> object with the requested system health
   * 			information. </p>
   * @public
   */
  CloudFormation?: CloudFormationHealth[] | undefined;

  /**
   * <p>An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services
   * 			services associated with the resources in the collection.</p>
   * @public
   */
  Service?: ServiceHealth[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Web Services tags that are used by resources in the resource collection.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: TagHealth[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceIntegrationRequest {}

/**
 * <p>
 * 			Information about the KMS encryption used with DevOps Guru.
 * 		</p>
 * @public
 */
export interface KMSServerSideEncryptionIntegration {
  /**
   * <p>
   * 			Describes the specified KMS key.
   * 		</p>
   *          <p>To specify a KMS key, use its key ID, key ARN,
   * 			alias name, or alias ARN. When using an alias name,
   * 			prefix it with "alias/". If you specify a predefined Amazon Web Services alias
   * 			(an Amazon Web Services alias with no key ID), Amazon Web Services KMS associates the alias with an
   * 			Amazon Web Services managed key and returns its KeyId and Arn in the response.
   * 			To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example: </p>
   *          <p>Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *          <p>Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *          <p>Alias name: alias/ExampleAlias</p>
   *          <p>Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>
   * 			Specifies if DevOps Guru is enabled for customer managed keys.
   * 		</p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * <p>
   * 			The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
   * 		</p>
   * @public
   */
  Type?: ServerSideEncryptionType | undefined;
}

/**
 * <p>
 * 			Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.
 * 		</p>
 * @public
 */
export interface LogsAnomalyDetectionIntegration {
  /**
   * <p>Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.</p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
 * 			OpsCenter for each created insight. </p>
 * @public
 */
export interface OpsCenterIntegration {
  /**
   * <p> Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
   * 			insight. </p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * <p> Information about the integration of DevOps Guru with another Amazon Web Services service, such as
 * 			Amazon Web Services Systems Manager. </p>
 * @public
 */
export interface ServiceIntegrationConfig {
  /**
   * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
   * 			OpsCenter for each created insight. </p>
   * @public
   */
  OpsCenter?: OpsCenterIntegration | undefined;

  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups.
   * 		</p>
   * @public
   */
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegration | undefined;

  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
   * 		</p>
   * @public
   */
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceIntegrationResponse {
  /**
   * <p> Information about the integration of DevOps Guru with another Amazon Web Services service, such as
   * 			Amazon Web Services Systems Manager. </p>
   * @public
   */
  ServiceIntegration?: ServiceIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface GetCostEstimationRequest {
  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object that contains information about the estimated monthly cost to analyze an
 * 			Amazon Web Services resource. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 * @public
 */
export interface ServiceResourceCost {
  /**
   * <p>The type of the Amazon Web Services resource.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The state of the resource. The resource is <code>ACTIVE</code> if it produces metrics,
   * 			events, or logs within an hour, otherwise it is <code>INACTIVE</code>. You pay for the
   * 			number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are
   * 			not charged. </p>
   * @public
   */
  State?: CostEstimationServiceResourceState | undefined;

  /**
   * <p>The number of active resources analyzed for this service to create a monthly cost
   * 			estimate.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The price per hour to analyze the resources in the service.
   * 			For more information,
   * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
   * 			Amazon DevOps Guru costs</a> and
   * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
   * @public
   */
  UnitCost?: number | undefined;

  /**
   * <p>The total estimated monthly cost to analyze the active resources for this
   * 			resource.</p>
   * @public
   */
  Cost?: number | undefined;
}

/**
 * <p>Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate
 * 			for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a
 * 			cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services
 * 			resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>.</p>
 * @public
 */
export interface CloudFormationCostEstimationResourceCollectionFilter {
  /**
   * <p>An array of CloudFormation stack names. Its size is fixed at 1 item.</p>
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * <p>Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag.
 * 			This collection of resources is used to create a monthly cost estimate for DevOps Guru to
 * 			analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate
 * 			is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by
 * 			the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>.</p>
 * @public
 */
export interface TagCostEstimationResourceCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p>Information about a filter used to specify which Amazon Web Services resources are analyzed to
 * 			create a monthly DevOps Guru cost estimate. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. </p>
 * @public
 */
export interface CostEstimationResourceCollectionFilter {
  /**
   * <p>An object that specifies the CloudFormation stack that defines the Amazon Web Services resources
   * 			used to create a monthly estimate for DevOps Guru.</p>
   * @public
   */
  CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter | undefined;

  /**
   * <p>The Amazon Web Services tags used to filter the resource collection that is used for a cost
   * 			estimate.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: TagCostEstimationResourceCollectionFilter[] | undefined;
}

/**
 * <p>The time range of a cost estimation.</p>
 * @public
 */
export interface CostEstimationTimeRange {
  /**
   * <p>The start time of the cost estimation.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the cost estimation.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCostEstimationResponse {
  /**
   * <p>The collection of the Amazon Web Services resources used to create your monthly DevOps Guru cost
   * 			estimate.</p>
   * @public
   */
  ResourceCollection?: CostEstimationResourceCollectionFilter | undefined;

  /**
   * <p>The status of creating this cost estimate. If it's still in progress, the status
   * 				<code>ONGOING</code> is returned. If it is finished, the status
   * 				<code>COMPLETED</code> is returned.</p>
   * @public
   */
  Status?: CostEstimationStatus | undefined;

  /**
   * <p>An array of <code>ResourceCost</code> objects that each contains details about the
   * 			monthly cost estimate to analyze one of your Amazon Web Services resources.</p>
   * @public
   */
  Costs?: ServiceResourceCost[] | undefined;

  /**
   * <p>The start and end time of the cost estimation.</p>
   * @public
   */
  TimeRange?: CostEstimationTimeRange | undefined;

  /**
   * <p>The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of
   * 			the estimated costs to analyze each resource in the <code>Costs</code> object in this
   * 			response.</p>
   * @public
   */
  TotalCost?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceCollectionRequest {
  /**
   * <p> The type of Amazon Web Services resource collections to return. The one valid value is
   * 				<code>CLOUD_FORMATION</code> for Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollectionType: ResourceCollectionType | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
 * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
 * @public
 */
export interface CloudFormationCollectionFilter {
  /**
   * <p> An array of CloudFormation stack names. </p>
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * <p>A collection of Amazon Web Services tags used to filter insights. This is used to return insights
 * 			generated from only resources that contain the tags in the tag collection.</p>
 * @public
 */
export interface TagCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p> Information about a filter used to specify which Amazon Web Services resources are analyzed for
 * 			anomalous behavior by DevOps Guru. </p>
 * @public
 */
export interface ResourceCollectionFilter {
  /**
   * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
   * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
   * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
   * @public
   */
  CloudFormation?: CloudFormationCollectionFilter | undefined;

  /**
   * <p>The Amazon Web Services tags used to filter the resources in the resource collection.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: TagCollectionFilter[] | undefined;
}

/**
 * @public
 */
export interface GetResourceCollectionResponse {
  /**
   * <p> The requested list of Amazon Web Services resource collections.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollectionFilter | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A collection of the names of Amazon Web Services services.</p>
 * @public
 */
export interface ServiceCollection {
  /**
   * <p>An array of strings that each specifies the name of an Amazon Web Services service.</p>
   * @public
   */
  ServiceNames?: ServiceName[] | undefined;
}

/**
 * <p>
 * 			Specifies one or more service names that are used to list anomalies.
 * 		</p>
 * @public
 */
export interface ListAnomaliesForInsightFilters {
  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * <p> A time range used to specify when the behavior of an insight or anomaly started.
 * 		</p>
 * @public
 */
export interface StartTimeRange {
  /**
   * <p> The start time of the time range. </p>
   * @public
   */
  FromTime?: Date | undefined;

  /**
   * <p> The end time of the time range. </p>
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesForInsightRequest {
  /**
   * <p> The ID of the insight. The returned anomalies belong to this insight. </p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p> A time range used to specify when the requested anomalies started. All returned
   * 			anomalies started during this time range. </p>
   * @public
   */
  StartTimeRange?: StartTimeRange | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * 			Specifies one or more service names that are used to list anomalies.
   * 		</p>
   * @public
   */
  Filters?: ListAnomaliesForInsightFilters | undefined;
}

/**
 * <p>Details about a proactive anomaly. This object is returned by
 * 				<code>DescribeAnomaly.</code>
 *          </p>
 * @public
 */
export interface ProactiveAnomalySummary {
  /**
   * <p>The ID of the anomaly.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * <p>The status of the anomaly.</p>
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * <p> The time of the anomaly's most recent update. </p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p> A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly. </p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The metadata of the source which detects proactive anomalies.</p>
   * @public
   */
  SourceMetadata?: AnomalySourceMetadata | undefined;

  /**
   * <p>Information about a resource in which DevOps Guru detected anomalous behavior.</p>
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;

  /**
   * <p>
   * 			A description of the proactive anomaly.
   * 		</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 				<code>DescribeAnomaly.</code>
 *          </p>
 * @public
 */
export interface ReactiveAnomalySummary {
  /**
   * <p> The ID of the reactive anomaly. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: AnomalySeverity | undefined;

  /**
   * <p> The status of the reactive anomaly. </p>
   * @public
   */
  Status?: AnomalyStatus | undefined;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   * @public
   */
  AnomalyTimeRange?: AnomalyTimeRange | undefined;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   * @public
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange | undefined;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   * @public
   */
  SourceDetails?: AnomalySourceDetails | undefined;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   * @public
   */
  AssociatedInsightId?: string | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>The type of the reactive anomaly. It can be one of the following types.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAUSAL</code> - the anomaly can cause a new insight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: AnomalyType | undefined;

  /**
   * <p>The name of the reactive anomaly.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the reactive anomaly.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the causal anomaly that is associated with this
   *       reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.</p>
   * @public
   */
  CausalAnomalyId?: string | undefined;

  /**
   * <p>The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.</p>
   * @public
   */
  AnomalyResources?: AnomalyResource[] | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesForInsightResponse {
  /**
   * <p> An array of <code>ProactiveAnomalySummary</code> objects that represent the requested
   * 			anomalies </p>
   * @public
   */
  ProactiveAnomalies?: ProactiveAnomalySummary[] | undefined;

  /**
   * <p> An array of <code>ReactiveAnomalySummary</code> objects that represent the requested
   * 			anomalies </p>
   * @public
   */
  ReactiveAnomalies?: ReactiveAnomalySummary[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalousLogGroupsRequest {
  /**
   * <p>
   * 			The ID of the insight containing the log groups.
   * 		</p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalousLogGroupsResponse {
  /**
   * <p>
   * 			The ID of the insight containing the log groups.
   * 		</p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p>
   * 			The list of Amazon CloudWatch log groups that are related to an insight.
   * 		</p>
   * @public
   */
  AnomalousLogGroups: AnomalousLogGroup[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and
 * 			metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to
 * 			improve your operational solutions. </p>
 * @public
 */
export interface EventTimeRange {
  /**
   * <p> The time when the event started. </p>
   * @public
   */
  FromTime: Date | undefined;

  /**
   * <p> The time when the event ended. </p>
   * @public
   */
  ToTime: Date | undefined;
}

/**
 * <p> Filters you can use to specify which events are returned when <code>ListEvents</code>
 * 			is called. </p>
 * @public
 */
export interface ListEventsFilters {
  /**
   * <p> An ID of an insight that is related to the events you want to filter for. </p>
   * @public
   */
  InsightId?: string | undefined;

  /**
   * <p> A time range during which you want the filtered events to have occurred. </p>
   * @public
   */
  EventTimeRange?: EventTimeRange | undefined;

  /**
   * <p> The class of the events you want to filter for, such as an infrastructure change, a
   * 			deployment, or a schema change. </p>
   * @public
   */
  EventClass?: EventClass | undefined;

  /**
   * <p> The Amazon Web Services source that emitted the events you want to filter for. </p>
   * @public
   */
  EventSource?: string | undefined;

  /**
   * <p> The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the
   * 			events you want returned. </p>
   * @public
   */
  DataSource?: EventDataSource | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;
}

/**
 * @public
 */
export interface ListEventsRequest {
  /**
   * <p> A <code>ListEventsFilters</code> object used to specify which events to return.
   * 		</p>
   * @public
   */
  Filters: ListEventsFilters | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p> The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are
 * 			analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your
 * 			operational solutions. </p>
 * @public
 */
export interface EventResource {
  /**
   * <p> The type of resource that emitted an event. </p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p> The name of the resource that emitted an event. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the resource that emitted an event. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p> An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to
 * 			find anomalous behavior and provide recommendations to improve your operational
 * 			solutions. </p>
 * @public
 */
export interface Event {
  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p> The ID of the event. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> A <code>Timestamp</code> that specifies the time the event occurred. </p>
   * @public
   */
  Time?: Date | undefined;

  /**
   * <p> The Amazon Web Services source that emitted the event. </p>
   * @public
   */
  EventSource?: string | undefined;

  /**
   * <p> The name of the event. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, where DevOps Guru
   * 			analysis found the event. </p>
   * @public
   */
  DataSource?: EventDataSource | undefined;

  /**
   * <p> The class of the event. The class specifies what the event is related to, such as an
   * 			infrastructure change, a deployment, or a schema change. </p>
   * @public
   */
  EventClass?: EventClass | undefined;

  /**
   * <p> An <code>EventResource</code> object that contains information about the resource
   * 			that emitted the event. </p>
   * @public
   */
  Resources?: EventResource[] | undefined;
}

/**
 * @public
 */
export interface ListEventsResponse {
  /**
   * <p> A list of the requested events. </p>
   * @public
   */
  Events: Event[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Used to filter for insights that have any status. </p>
 * @public
 */
export interface ListInsightsAnyStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   * @public
   */
  Type: InsightType | undefined;

  /**
   * <p> A time range used to specify when the behavior of the filtered insights started.
   * 		</p>
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;
}

/**
 * <p> A range of time that specifies when anomalous behavior in an anomaly or insight
 * 			ended. </p>
 * @public
 */
export interface EndTimeRange {
  /**
   * <p> The earliest end time in the time range. </p>
   * @public
   */
  FromTime?: Date | undefined;

  /**
   * <p> The latest end time in the time range. </p>
   * @public
   */
  ToTime?: Date | undefined;
}

/**
 * <p> Used to filter for insights that have the status <code>CLOSED</code>. </p>
 * @public
 */
export interface ListInsightsClosedStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   * @public
   */
  Type: InsightType | undefined;

  /**
   * <p> A time range used to specify when the behavior of the filtered insights ended.
   * 		</p>
   * @public
   */
  EndTimeRange: EndTimeRange | undefined;
}

/**
 * <p> Used to filter for insights that have the status <code>ONGOING</code>. </p>
 * @public
 */
export interface ListInsightsOngoingStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * <p> A filter used by <code>ListInsights</code> to specify which insights to return.
 * 		</p>
 * @public
 */
export interface ListInsightsStatusFilter {
  /**
   * <p> A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights that are
   * 			either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   * @public
   */
  Ongoing?: ListInsightsOngoingStatusFilter | undefined;

  /**
   * <p> A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are
   * 			either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   * @public
   */
  Closed?: ListInsightsClosedStatusFilter | undefined;

  /**
   * <p> A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status that
   * 			are either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   * @public
   */
  Any?: ListInsightsAnyStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListInsightsRequest {
  /**
   * <p> A filter used to filter the returned insights by their status. You can specify one
   * 			status filter. </p>
   * @public
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>DescribeInsight.</code>
 *          </p>
 * @public
 */
export interface ProactiveInsightSummary {
  /**
   * <p>The ID of the proactive insight. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the proactive insight. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p>The status of the proactive insight. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs)
   * 	of the Amazon Web Services resources that generated this insight.</p>
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;
}

/**
 * <p> Information about a reactive insight. This object is returned by
 * 				<code>DescribeInsight.</code>
 *          </p>
 * @public
 */
export interface ReactiveInsightSummary {
  /**
   * <p> The ID of a reactive summary. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The name of a reactive insight. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p> The status of a reactive insight. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs)
   * 	of the Amazon Web Services resources that generated this insight.</p>
   * @public
   */
  AssociatedResourceArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListInsightsResponse {
  /**
   * <p> The returned list of proactive insights. </p>
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * <p> The returned list of reactive insights. </p>
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 * 			Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
 * 		</p>
 * @public
 */
export interface ListMonitoredResourcesFilters {
  /**
   * <p>
   * 			The permission status of a resource.
   * 		</p>
   * @public
   */
  ResourcePermission: ResourcePermission | undefined;

  /**
   * <p>
   * 			The type of resource that you wish to retrieve, such as log groups.
   * 		</p>
   * @public
   */
  ResourceTypeFilters: ResourceTypeFilter[] | undefined;
}

/**
 * @public
 */
export interface ListMonitoredResourcesRequest {
  /**
   * <p>
   * 			Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.
   * 		</p>
   * @public
   */
  Filters?: ListMonitoredResourcesFilters | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 * 			Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.
 * 		</p>
 * @public
 */
export interface MonitoredResourceIdentifier {
  /**
   * <p>
   * 			The name of the resource being monitored.
   * 		</p>
   * @public
   */
  MonitoredResourceName?: string | undefined;

  /**
   * <p>
   * 			The type of resource being monitored.
   * 		</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>
   * 			The permission status of a resource.
   * 		</p>
   * @public
   */
  ResourcePermission?: ResourcePermission | undefined;

  /**
   * <p>
   * 			The time at which DevOps Guru last updated this resource.
   * 		</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;
}

/**
 * @public
 */
export interface ListMonitoredResourcesResponse {
  /**
   * <p>
   * 			Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.
   * 		</p>
   * @public
   */
  MonitoredResourceIdentifiers: MonitoredResourceIdentifier[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationChannelsRequest {
  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Information about a notification channel. A notification channel is used to notify
 * 			you when DevOps Guru creates an insight. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
 *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for Amazon SNS topics</a>.</p>
 *          <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 * @public
 */
export interface NotificationChannel {
  /**
   * <p> The ID of a notification channel. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> A <code>NotificationChannelConfig</code> object that contains information about
   * 			configured notification channels. </p>
   * @public
   */
  Config?: NotificationChannelConfig | undefined;
}

/**
 * @public
 */
export interface ListNotificationChannelsResponse {
  /**
   * <p> An array that contains the requested notification channels. </p>
   * @public
   */
  Channels?: NotificationChannel[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationInsightsRequest {
  /**
   * <p> A filter used by <code>ListInsights</code> to specify which insights to return.
   * 		</p>
   * @public
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>DescribeInsight</code>.</p>
 * @public
 */
export interface ProactiveOrganizationInsightSummary {
  /**
   * <p>The ID of the insight summary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * <p>The name of the insight summary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> An array of severity values used to search for insights.
   * 			For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p> An array of status values used to search for insights. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   * @public
   */
  PredictionTimeRange?: PredictionTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * <p>Information about a reactive insight. This object is returned by
 * 				<code>DescribeInsight</code>.</p>
 * @public
 */
export interface ReactiveOrganizationInsightSummary {
  /**
   * <p>The ID of the insight summary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the organizational unit.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * <p>The name of the insight summary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> An array of severity values used to search for insights.
   * 			For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   * @public
   */
  Severity?: InsightSeverity | undefined;

  /**
   * <p> An array of status values used to search for insights. </p>
   * @public
   */
  Status?: InsightStatus | undefined;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   * @public
   */
  InsightTimeRange?: InsightTimeRange | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface ListOrganizationInsightsResponse {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ProactiveInsights?: ProactiveOrganizationInsightSummary[] | undefined;

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ReactiveInsights?: ReactiveOrganizationInsightSummary[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p> The ID of the requested insight. </p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A locale that specifies the language to use for recommendations.</p>
   * @public
   */
  Locale?: Locale | undefined;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p> Information about a resource in which DevOps Guru detected anomalous behavior. </p>
 * @public
 */
export interface RecommendationRelatedAnomalyResource {
  /**
   * <p> The name of the resource. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation
   * 			resource type identifiers, <code>service-provider::service-name::data-type-name</code>.
   * 			For example, <code>AWS::RDS::DBCluster</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   * 				resource and property types reference</a> in the <i>Amazon Web Services CloudFormation User
   * 				Guide</i>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p> Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many
 * 			analyzed metrics that are used to generate insights. </p>
 * @public
 */
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  /**
   * <p>The name of the CloudWatch metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * <p> Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code>
 * 			objects that contain the name and namespace of an Amazon CloudWatch metric. </p>
 * @public
 */
export interface RecommendationRelatedAnomalySourceDetail {
  /**
   * <p> An array of <code>CloudWatchMetricsDetail</code> objects that contains information
   * 			about the analyzed metrics that displayed anomalous behavior. </p>
   * @public
   */
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[] | undefined;
}

/**
 * <p> Information about an anomaly that is related to a recommendation. </p>
 * @public
 */
export interface RecommendationRelatedAnomaly {
  /**
   * <p> An array of objects that represent resources in which DevOps Guru detected anomalous
   * 			behavior. Each object contains the name and type of the resource. </p>
   * @public
   */
  Resources?: RecommendationRelatedAnomalyResource[] | undefined;

  /**
   * <p> Information about where the anomalous behavior related the recommendation was found.
   * 			For example, details in Amazon CloudWatch metrics. </p>
   * @public
   */
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[] | undefined;

  /**
   * <p>The ID of an anomaly that generated the insight with this recommendation.</p>
   * @public
   */
  AnomalyId?: string | undefined;
}

/**
 * <p> Information about an Amazon Web Services resource that emitted and event that is related to a
 * 			recommendation in an insight. </p>
 * @public
 */
export interface RecommendationRelatedEventResource {
  /**
   * <p> The name of the resource that emitted the event. This corresponds to the
   * 				<code>Name</code> field in an <code>EventResource</code> object. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The type of the resource that emitted the event. This corresponds to the
   * 				<code>Type</code> field in an <code>EventResource</code> object. </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p> Information about an event that is related to a recommendation. </p>
 * @public
 */
export interface RecommendationRelatedEvent {
  /**
   * <p> The name of the event. This corresponds to the <code>Name</code> field in an
   * 				<code>Event</code> object. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> A <code>ResourceCollection</code> object that contains arrays of the names of Amazon Web Services
   * 			CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  Resources?: RecommendationRelatedEventResource[] | undefined;
}

/**
 * <p> Recommendation information to help you remediate detected anomalous behavior that
 * 			generated an insight. </p>
 * @public
 */
export interface Recommendation {
  /**
   * <p> A description of the problem. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A hyperlink to information to help you address the problem. </p>
   * @public
   */
  Link?: string | undefined;

  /**
   * <p> The name of the recommendation. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The reason DevOps Guru flagged the anomalous behavior as a problem. </p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p> Events that are related to the problem. Use these events to learn more about what's
   * 			happening and to help address the issue. </p>
   * @public
   */
  RelatedEvents?: RecommendationRelatedEvent[] | undefined;

  /**
   * <p> Anomalies that are related to the problem. Use these Anomalies to learn more about
   * 			what's happening and to help address the issue. </p>
   * @public
   */
  RelatedAnomalies?: RecommendationRelatedAnomaly[] | undefined;

  /**
   * <p>The category type of the recommendation.</p>
   * @public
   */
  Category?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p> An array of the requested recommendations. </p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * <p> The feedback from customers is about the recommendations in this insight. </p>
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
   * <p> The ID of the notification channel to be removed. </p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface RemoveNotificationChannelResponse {}

/**
 * <p>Specifies values used to filter responses when searching for insights.
 * 			You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values.
 * 			Each filter type contains one or more values to search for. If you specify multiple filter types,
 * 			the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 * @public
 */
export interface SearchInsightsFilters {
  /**
   * <p> An array of severity values used to search for insights. </p>
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * <p> An array of status values used to search for insights. </p>
   * @public
   */
  Statuses?: InsightStatus[] | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface SearchInsightsRequest {
  /**
   * <p> The start of the time range passed in. Returned insights occurred after this time.
   * 		</p>
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * <p> A <code>SearchInsightsFilters</code> object that is used to set the severity and
   * 			status filters on your insight search. </p>
   * @public
   */
  Filters?: SearchInsightsFilters | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The type of insights you are searching for (<code>REACTIVE</code> or
   * 				<code>PROACTIVE</code>). </p>
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * @public
 */
export interface SearchInsightsResponse {
  /**
   * <p> The returned proactive insights. </p>
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * <p> The returned reactive insights. </p>
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Filters you can use to specify which events are returned when <code>ListEvents</code>
 * 			is called. </p>
 * @public
 */
export interface SearchOrganizationInsightsFilters {
  /**
   * <p> An array of severity values used to search for insights. </p>
   * @public
   */
  Severities?: InsightSeverity[] | undefined;

  /**
   * <p> An array of status values used to search for insights. </p>
   * @public
   */
  Statuses?: InsightStatus[] | undefined;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  ResourceCollection?: ResourceCollection | undefined;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   * @public
   */
  ServiceCollection?: ServiceCollection | undefined;
}

/**
 * @public
 */
export interface SearchOrganizationInsightsRequest {
  /**
   * <p>The ID of the Amazon Web Services account. </p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p> A time range used to specify when the behavior of an insight or anomaly started.
   * 		</p>
   * @public
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * <p> A <code>SearchOrganizationInsightsFilters</code> object that is used to set the
   * 			severity and status filters on your insight search. </p>
   * @public
   */
  Filters?: SearchOrganizationInsightsFilters | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The type of insights you are searching for (<code>REACTIVE</code> or
   * 				<code>PROACTIVE</code>). </p>
   * @public
   */
  Type: InsightType | undefined;
}

/**
 * @public
 */
export interface SearchOrganizationInsightsResponse {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ProactiveInsights?: ProactiveInsightSummary[] | undefined;

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   * @public
   */
  ReactiveInsights?: ReactiveInsightSummary[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCostEstimationRequest {
  /**
   * <p>The collection of Amazon Web Services resources used to create a monthly DevOps Guru cost estimate.</p>
   * @public
   */
  ResourceCollection: CostEstimationResourceCollectionFilter | undefined;

  /**
   * <p>The idempotency token used to identify each cost estimate request.</p>
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
   * <p>Configuration information about the integration of DevOps Guru as the Consumer via
   * 			EventBridge with another AWS Service.</p>
   * @public
   */
  EventSources?: EventSourcesConfig | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourcesConfigResponse {}

/**
 * <p> Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks.
 * 			You can specify up to 500 Amazon Web Services CloudFormation stacks.</p>
 * @public
 */
export interface UpdateCloudFormationCollectionFilter {
  /**
   * <p> An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   * 		</p>
   * @public
   */
  StackNames?: string[] | undefined;
}

/**
 * <p>A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag
 * 			<i>key</i>/<i>value</i> pair.</p>
 * @public
 */
export interface UpdateTagCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p> Contains information used to update a collection of Amazon Web Services resources. </p>
 * @public
 */
export interface UpdateResourceCollectionFilter {
  /**
   * <p> A collection of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   * @public
   */
  CloudFormation?: UpdateCloudFormationCollectionFilter | undefined;

  /**
   * <p>The updated Amazon Web Services tags used to filter the resources in the resource collection.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
   *    			best practices</a> whitepaper. </p>
   *          <p>Each Amazon Web Services tag has two parts. </p>
   *          <ul>
   *             <li>
   *                <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *             </li>
   *          </ul>
   *          <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *          <important>
   *             <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>DevOps-Guru-deployment-application</code> or
   * 			<code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive.
   * 			 For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   *          </important>
   * @public
   */
  Tags?: UpdateTagCollectionFilter[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceCollectionRequest {
  /**
   * <p> Specifies if the resource collection in the request is added or deleted to the
   * 			resource collection. </p>
   * @public
   */
  Action: UpdateResourceCollectionAction | undefined;

  /**
   * <p> Contains information used to update a collection of Amazon Web Services resources. </p>
   * @public
   */
  ResourceCollection: UpdateResourceCollectionFilter | undefined;
}

/**
 * @public
 */
export interface UpdateResourceCollectionResponse {}

/**
 * <p>
 * 			Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
 * 		</p>
 * @public
 */
export interface KMSServerSideEncryptionIntegrationConfig {
  /**
   * <p>
   * 				Describes the specified KMS key.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN,
   * 				alias name, or alias ARN. When using an alias name,
   * 				prefix it with "alias/". If you specify a predefined Amazon Web Services alias
   * 				(an Amazon Web Services alias with no key ID), Amazon Web Services KMS associates the alias with an
   * 				Amazon Web Services managed key and returns its KeyId and Arn in the response.
   * 				To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example: </p>
   *          <p>Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *          <p>Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *          <p>Alias name: alias/ExampleAlias</p>
   *          <p>Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>
   * 			Specifies if DevOps Guru is enabled for KMS integration.
   * 		</p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * <p>
   * 			The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
   * 		</p>
   * @public
   */
  Type?: ServerSideEncryptionType | undefined;
}

/**
 * <p>
 * 			Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration.
 * 		</p>
 * @public
 */
export interface LogsAnomalyDetectionIntegrationConfig {
  /**
   * <p>Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.</p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
 * 			OpsCenter for each created insight. You can use this to update the configuration.</p>
 * @public
 */
export interface OpsCenterIntegrationConfig {
  /**
   * <p> Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
   * 			insight. </p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;
}

/**
 * <p> Information about updating the integration status of an Amazon Web Services service, such as
 * 			Amazon Web Services Systems Manager, with DevOps Guru. </p>
 * @public
 */
export interface UpdateServiceIntegrationConfig {
  /**
   * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
   * 			OpsCenter for each created insight. You can use this to update the configuration.</p>
   * @public
   */
  OpsCenter?: OpsCenterIntegrationConfig | undefined;

  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups.
   * 		</p>
   * @public
   */
  LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig | undefined;

  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to encrypt server-side data using KMS.
   * 		</p>
   * @public
   */
  KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceIntegrationRequest {
  /**
   * <p> An <code>IntegratedServiceConfig</code> object used to specify the integrated service
   * 			you want to update, and whether you want to update it to enabled or disabled. </p>
   * @public
   */
  ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateServiceIntegrationResponse {}
