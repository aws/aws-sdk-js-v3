// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudWatchServiceException as __BaseException } from "./CloudWatchServiceException";

/**
 * @public
 * @enum
 */
export const ActionsSuppressedBy = {
  Alarm: "Alarm",
  ExtensionPeriod: "ExtensionPeriod",
  WaitPeriod: "WaitPeriod",
} as const;

/**
 * @public
 */
export type ActionsSuppressedBy = (typeof ActionsSuppressedBy)[keyof typeof ActionsSuppressedBy];

/**
 * @public
 * @enum
 */
export const AlarmType = {
  CompositeAlarm: "CompositeAlarm",
  MetricAlarm: "MetricAlarm",
} as const;

/**
 * @public
 */
export type AlarmType = (typeof AlarmType)[keyof typeof AlarmType];

/**
 * @public
 * @enum
 */
export const HistoryItemType = {
  Action: "Action",
  ConfigurationUpdate: "ConfigurationUpdate",
  StateUpdate: "StateUpdate",
} as const;

/**
 * @public
 */
export type HistoryItemType = (typeof HistoryItemType)[keyof typeof HistoryItemType];

/**
 * @public
 * <p>Represents the history of a specific alarm.</p>
 */
export interface AlarmHistoryItem {
  /**
   * @public
   * <p>The descriptive name for the alarm.</p>
   */
  AlarmName?: string;

  /**
   * @public
   * <p>The type of alarm, either metric alarm or composite alarm.</p>
   */
  AlarmType?: AlarmType;

  /**
   * @public
   * <p>The time stamp for the alarm history item.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The type of alarm history item.</p>
   */
  HistoryItemType?: HistoryItemType;

  /**
   * @public
   * <p>A summary of the alarm history, in text format.</p>
   */
  HistorySummary?: string;

  /**
   * @public
   * <p>Data about the alarm, in JSON format.</p>
   */
  HistoryData?: string;
}

/**
 * @public
 * <p>Specifies one range of days or times to exclude from use for training an
 * 		anomaly detection model.</p>
 */
export interface Range {
  /**
   * @public
   * <p>The start time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end time of the range to exclude. The format is <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date | undefined;
}

/**
 * @public
 * <p>The configuration specifies details about how the anomaly detection model is to be trained,
 * 			including time ranges to exclude from use for training the model and the time zone to
 * 			use for the metric.</p>
 */
export interface AnomalyDetectorConfiguration {
  /**
   * @public
   * <p>An array of time ranges to exclude from use when the anomaly detection model is trained. Use
   * 			this to make sure that events that could cause unusual values for the metric, such as
   * 			deployments, aren't used when CloudWatch creates the model.</p>
   */
  ExcludedTimeRanges?: Range[];

  /**
   * @public
   * <p>The time zone to use for the metric. This is useful to enable the model to automatically
   * 			account for daylight savings time changes if the metric is sensitive to such time
   * 			changes.</p>
   *          <p>To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information,
   * 			see <a href="https://en.wikipedia.org/wiki/Tz_database">tz database</a>.</p>
   */
  MetricTimezone?: string;
}

/**
 * @public
 * <p>A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique
 * 			identifier for a metric, whenever you add a unique name/value pair to one of
 * 			your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish
 * 		<code>InstanceId</code> as a dimension name, and the actual instance ID as the value for that dimension.</p>
 *          <p>You
 * 		can assign up to 30 dimensions to a metric.</p>
 */
export interface Dimension {
  /**
   * @public
   * <p>The name of the dimension. Dimension names must contain only ASCII characters, must include
   * 			at least one non-whitespace character, and cannot start with a colon (<code>:</code>).
   * 			ASCII
   * 			control characters are not supported as part of dimension names.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the dimension. Dimension values must contain only ASCII characters and must include
   * 			at least one non-whitespace character. ASCII
   * 			control characters are not supported as part of dimension values.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Represents a specific metric.</p>
 */
export interface Metric {
  /**
   * @public
   * <p>The namespace of the metric.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the metric. This is a required field.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The dimensions for the metric.</p>
   */
  Dimensions?: Dimension[];
}

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  Bits: "Bits",
  Bits_Second: "Bits/Second",
  Bytes: "Bytes",
  Bytes_Second: "Bytes/Second",
  Count: "Count",
  Count_Second: "Count/Second",
  Gigabits: "Gigabits",
  Gigabits_Second: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  Gigabytes_Second: "Gigabytes/Second",
  Kilobits: "Kilobits",
  Kilobits_Second: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  Kilobytes_Second: "Kilobytes/Second",
  Megabits: "Megabits",
  Megabits_Second: "Megabits/Second",
  Megabytes: "Megabytes",
  Megabytes_Second: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  Terabits_Second: "Terabits/Second",
  Terabytes: "Terabytes",
  Terabytes_Second: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * @public
 * <p>This structure defines the metric to be returned, along with the statistics, period, and units.</p>
 */
export interface MetricStat {
  /**
   * @public
   * <p>The metric to return, including the metric name, namespace, and dimensions.</p>
   */
  Metric: Metric | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can
   * 			be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   * 			at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   * 			are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   *          <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than
   * 				3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p>
   *          <ul>
   *             <li>
   *                <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p>
   *             </li>
   *          </ul>
   */
  Period: number | undefined;

  /**
   * @public
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic.</p>
   */
  Stat: string | undefined;

  /**
   * @public
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p>
   *          <p>In a <code>Get</code> operation, if you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified
   * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   */
  Unit?: StandardUnit;
}

/**
 * @public
 * <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported
 * 			use of this structure is different for those two operations.</p>
 *          <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving
 * 			a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A
 * 			single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code>
 * 			structures.</p>
 *          <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a
 * 			metric math expression. Each <code>MetricDataQuery</code> in the array specifies either
 * 			a metric to retrieve, or a math expression to be performed on retrieved metrics. A
 * 			single <code>PutMetricAlarm</code> call can include up to 20
 * 				<code>MetricDataQuery</code> structures in the array. The 20 structures can include
 * 			as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a
 * 			metric, and as many as 10 structures that contain the <code>Expression</code> parameter
 * 			to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code>
 * 		as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p>
 *          <p>Any expression used in a <code>PutMetricAlarm</code>
 * 			operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
 * 				Guide</i>.</p>
 *          <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code>
 * 			operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>
 */
export interface MetricDataQuery {
  /**
   * @public
   * <p>A short name used to tie this object to the results in the response. This name must be
   * 			unique within a single call to <code>GetMetricData</code>. If you are performing math
   * 			expressions on this set of data, this name represents that data and can serve as a
   * 			variable in the mathematical expression. The valid characters are letters, numbers, and
   * 			underscore. The first character must be a lowercase letter.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric
   * 			and not performing a math expression on returned data.</p>
   *          <p>Within one MetricDataQuery object, you must specify either
   * 			<code>Expression</code> or <code>MetricStat</code> but not both.</p>
   */
  MetricStat?: MetricStat;

  /**
   * @public
   * <p>This field can contain either a Metrics Insights query, or a metric math expression to be performed on the
   * 			returned data. For more information about Metrics Insights queries, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage">Metrics Insights query components and syntax</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>A math expression
   * 			can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use
   * 			the <code>Id</code> of other
   * 			expressions to use the result of those expressions. For more information about metric math expressions, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>Within each MetricDataQuery object, you must specify either
   * 			<code>Expression</code> or <code>MetricStat</code> but not both.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>A human-readable label for this metric or expression. This is especially useful
   * 			if this is an expression, so that you know
   * 			what the value represents. If the metric or expression is shown in a
   * 			CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch
   * 			generates a default.</p>
   *          <p>You can put dynamic expressions into a label, so that it is more descriptive.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>When used in <code>GetMetricData</code>, this option indicates whether to return the
   * 			timestamps and raw data values of this metric. If you are performing this call just to
   * 			do math expressions and do not also need the raw data returned, you can specify
   * 				<code>false</code>. If you omit this, the default of <code>true</code> is
   * 			used.</p>
   *          <p>When used in <code>PutMetricAlarm</code>, specify <code>true</code> for the one expression result to use as the alarm. For all
   * 		other metrics and expressions in the same <code>PutMetricAlarm</code> operation, specify <code>ReturnData</code> as False.</p>
   */
  ReturnData?: boolean;

  /**
   * @public
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a
   * 			period can be as short as one minute (60 seconds) and must be a multiple of 60.
   * 			For high-resolution metrics that are collected at intervals of less than one minute,
   * 			the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics
   * 			stored by a <code>PutMetricData</code> operation that includes a <code>StorageResolution of 1 second</code>.</p>
   */
  Period?: number;

  /**
   * @public
   * <p>The ID of the account where the metrics are located.</p>
   *          <p>If you are performing a <code>GetMetricData</code> operation in a monitoring account, use this to specify
   * 			which account to retrieve this metric from.</p>
   *          <p>If you are performing a <code>PutMetricAlarm</code> operation, use this to specify
   * 			which account contains the metric that the alarm is watching.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>Indicates the CloudWatch math expression that provides the time series the anomaly detector
 * 			uses as input.
 * 			The designated math expression must return a single time series.</p>
 */
export interface MetricMathAnomalyDetector {
  /**
   * @public
   * <p>An array of metric data query structures
   * 			that enables you to create an anomaly detector
   * 			based on the result of a metric math expression.
   * 			Each item in <code>MetricDataQueries</code> gets a metric or performs a math expression.
   * 			One item in <code>MetricDataQueries</code> is the expression
   * 			that provides the time series
   * 			that the anomaly detector uses as input.
   * 			Designate the expression by setting <code>ReturnData</code> to <code>true</code>
   * 			for this object in the array.
   * 			For all other expressions and metrics, set <code>ReturnData</code> to <code>false</code>.
   * 			The designated expression must return
   * 			a single time series.</p>
   */
  MetricDataQueries?: MetricDataQuery[];
}

/**
 * @public
 * <p>Designates the CloudWatch metric and statistic that provides the time series the anomaly detector
 * 			uses as input.</p>
 */
export interface SingleMetricAnomalyDetector {
  /**
   * @public
   * <p>The namespace of the metric to create the anomaly detection model for.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the metric to create the anomaly detection model for.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The metric dimensions to create the anomaly detection model for.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The statistic to use for the metric and anomaly detection model.</p>
   */
  Stat?: string;
}

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStateValue = {
  PENDING_TRAINING: "PENDING_TRAINING",
  TRAINED: "TRAINED",
  TRAINED_INSUFFICIENT_DATA: "TRAINED_INSUFFICIENT_DATA",
} as const;

/**
 * @public
 */
export type AnomalyDetectorStateValue = (typeof AnomalyDetectorStateValue)[keyof typeof AnomalyDetectorStateValue];

/**
 * @public
 * <p>An anomaly detection model associated with a particular CloudWatch metric, statistic, or metric math expression.
 * 			You can use the model to display a band of expected, normal values
 * 			when the metric is graphed.</p>
 */
export interface AnomalyDetector {
  /**
   * @public
   * @deprecated
   *
   * <p>The namespace of the metric associated with the anomaly detection model.</p>
   */
  Namespace?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The name of the metric associated with the anomaly detection model.</p>
   */
  MetricName?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The metric dimensions associated with the anomaly detection model.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * @deprecated
   *
   * <p>The statistic associated with the anomaly detection model.</p>
   */
  Stat?: string;

  /**
   * @public
   * <p>The configuration specifies details about how the
   * 		anomaly detection model is to be trained, including time ranges to
   * 		exclude from use for training the model, and the time zone to use for
   * 		the metric.</p>
   */
  Configuration?: AnomalyDetectorConfiguration;

  /**
   * @public
   * <p>The current status of the anomaly detector's training. The possible values are <code>TRAINED | PENDING_TRAINING | TRAINED_INSUFFICIENT_DATA</code>
   *          </p>
   */
  StateValue?: AnomalyDetectorStateValue;

  /**
   * @public
   * <p>The CloudWatch metric and statistic for this anomaly detector.</p>
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;

  /**
   * @public
   * <p>The CloudWatch metric math expression for this anomaly detector.</p>
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}

/**
 * @public
 * @enum
 */
export const AnomalyDetectorType = {
  METRIC_MATH: "METRIC_MATH",
  SINGLE_METRIC: "SINGLE_METRIC",
} as const;

/**
 * @public
 */
export type AnomalyDetectorType = (typeof AnomalyDetectorType)[keyof typeof AnomalyDetectorType];

/**
 * @public
 * <p>This array is empty if the API operation was successful for all the rules specified in the request. If the operation could
 * 		not process one of the rules, the following data is returned for each of those rules.</p>
 */
export interface PartialFailure {
  /**
   * @public
   * <p>The specified rule that could not be deleted.</p>
   */
  FailureResource?: string;

  /**
   * @public
   * <p>The type of error.</p>
   */
  ExceptionType?: string;

  /**
   * @public
   * <p>The code of the error.</p>
   */
  FailureCode?: string;

  /**
   * @public
   * <p>A description of the error.</p>
   */
  FailureDescription?: string;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  GreaterThanUpperThreshold: "GreaterThanUpperThreshold",
  LessThanLowerOrGreaterThanUpperThreshold: "LessThanLowerOrGreaterThanUpperThreshold",
  LessThanLowerThreshold: "LessThanLowerThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const StateValue = {
  ALARM: "ALARM",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;

/**
 * @public
 */
export type StateValue = (typeof StateValue)[keyof typeof StateValue];

/**
 * @public
 * <p>The details about a composite alarm.</p>
 */
export interface CompositeAlarm {
  /**
   * @public
   * <p>Indicates whether actions should be executed during any changes to the alarm state.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmArn?: string;

  /**
   * @public
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The description of the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * @public
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * @public
   * <p>The rule that this alarm uses to evaluate its alarm state.</p>
   */
  AlarmRule?: string;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: string[];

  /**
   * @public
   * <p>An explanation for the alarm state, in text format.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>An explanation for the alarm state, in JSON format.</p>
   */
  StateReasonData?: string;

  /**
   * @public
   * <p>Tracks the timestamp of any state update, even if <code>StateValue</code> doesn't change.</p>
   */
  StateUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The state value for the alarm.</p>
   */
  StateValue?: StateValue;

  /**
   * @public
   * <p>
   * 			The timestamp
   * 			of the last change
   * 			to the alarm's <code>StateValue</code>.
   * 		</p>
   */
  StateTransitionedTimestamp?: Date;

  /**
   * @public
   * <p>
   * 			When the value is <code>ALARM</code>,
   * 			it means
   * 			that the actions are suppressed
   * 			because the suppressor alarm is
   * 			in <code>ALARM</code>
   * 			When the value is <code>WaitPeriod</code>,
   * 			it means that
   * 			the actions are suppressed
   * 			because the composite alarm is waiting
   * 			for the suppressor alarm
   * 			to go
   * 			into
   * 			into the <code>ALARM</code> state.
   * 			The maximum waiting time is as specified
   * 			in <code>ActionsSuppressorWaitPeriod</code>.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 			When the value is <code>ExtensionPeriod</code>,
   * 			it means
   * 			that the actions are suppressed
   * 			because the composite alarm is waiting
   * 			after the suppressor alarm went out
   * 			of the <code>ALARM</code> state.
   * 			The maximum waiting time is as specified
   * 			in <code>ActionsSuppressorExtensionPeriod</code>.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 		</p>
   */
  ActionsSuppressedBy?: ActionsSuppressedBy;

  /**
   * @public
   * <p>
   * 			Captures the reason for action suppression.
   * 		</p>
   */
  ActionsSuppressedReason?: string;

  /**
   * @public
   * <p>
   * 			Actions will be suppressed
   * 			if the suppressor alarm is
   * 			in the <code>ALARM</code> state.
   * 			<code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN)
   * 			from an existing alarm.
   * 		</p>
   */
  ActionsSuppressor?: string;

  /**
   * @public
   * <p>
   * 			The maximum time
   * 			in seconds
   * 			that the composite alarm waits
   * 			for the suppressor alarm
   * 			to go
   * 			into the <code>ALARM</code> state.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 		</p>
   *          <important>
   *             <p>
   *                <code>WaitPeriod</code>
   * 				is required only
   * 				when <code>ActionsSuppressor</code> is specified.
   * 			</p>
   *          </important>
   */
  ActionsSuppressorWaitPeriod?: number;

  /**
   * @public
   * <p>
   * 			The maximum time
   * 			in seconds
   * 			that the composite alarm waits
   * 			after suppressor alarm goes out
   * 			of the <code>ALARM</code> state.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 		</p>
   *          <important>
   *             <p>
   *                <code>ExtensionPeriod</code>
   * 				is required only
   * 				when <code>ActionsSuppressor</code> is specified.
   * 			</p>
   *          </important>
   */
  ActionsSuppressorExtensionPeriod?: number;
}

/**
 * @public
 * <p>More than one process tried to modify a resource at the same time.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Represents a specific dashboard.</p>
 */
export interface DashboardEntry {
  /**
   * @public
   * <p>The name of the dashboard.</p>
   */
  DashboardName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * @public
   * <p>The time stamp of when the dashboard was last modified, either by an API call or
   * 			through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The size of the dashboard, in bytes.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>An error or warning for the operation.</p>
 */
export interface DashboardValidationMessage {
  /**
   * @public
   * <p>The data path related to the message.</p>
   */
  DataPath?: string;

  /**
   * @public
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Some part of the dashboard data is invalid.</p>
 */
export class DashboardInvalidInputError extends __BaseException {
  readonly name: "DashboardInvalidInputError" = "DashboardInvalidInputError";
  readonly $fault: "client" = "client";
  dashboardValidationMessages?: DashboardValidationMessage[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DashboardInvalidInputError, __BaseException>) {
    super({
      name: "DashboardInvalidInputError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DashboardInvalidInputError.prototype);
    this.dashboardValidationMessages = opts.dashboardValidationMessages;
  }
}

/**
 * @public
 * <p>The specified dashboard does not exist.</p>
 */
export class DashboardNotFoundError extends __BaseException {
  readonly name: "DashboardNotFoundError" = "DashboardNotFoundError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DashboardNotFoundError, __BaseException>) {
    super({
      name: "DashboardNotFoundError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DashboardNotFoundError.prototype);
  }
}

/**
 * @public
 * <p>Encapsulates the statistical data that CloudWatch computes from metric data.</p>
 */
export interface Datapoint {
  /**
   * @public
   * <p>The time stamp used for the data point.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The number of metric values that contributed to the aggregate value of this
   * 			data point.</p>
   */
  SampleCount?: number;

  /**
   * @public
   * <p>The average of the metric values that correspond to the data point.</p>
   */
  Average?: number;

  /**
   * @public
   * <p>The sum of the metric values for the data point.</p>
   */
  Sum?: number;

  /**
   * @public
   * <p>The minimum metric value for the data point.</p>
   */
  Minimum?: number;

  /**
   * @public
   * <p>The maximum metric value for the data point.</p>
   */
  Maximum?: number;

  /**
   * @public
   * <p>The standard unit for the data point.</p>
   */
  Unit?: StandardUnit;

  /**
   * @public
   * <p>The percentile statistic for the data point.</p>
   */
  ExtendedStatistics?: Record<string, number>;
}

/**
 * @public
 */
export interface DeleteAlarmsInput {
  /**
   * @public
   * <p>The alarms to be deleted. Do not enclose the alarm names in quote marks.</p>
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 * <p>The named resource does not exist.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
  }
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorInput {
  /**
   * @public
   * @deprecated
   *
   * <p>The namespace associated with the anomaly detection model to delete.</p>
   */
  Namespace?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The metric name associated with the anomaly detection model to delete.</p>
   */
  MetricName?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The metric dimensions associated with the anomaly detection model to delete.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * @deprecated
   *
   * <p>The statistic associated with the anomaly detection model to delete.</p>
   */
  Stat?: string;

  /**
   * @public
   * <p>A single metric anomaly detector to be deleted.</p>
   *          <p>When using <code>SingleMetricAnomalyDetector</code>,
   * 			you cannot include the following parameters in the same operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Dimensions</code>,</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MetricName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Namespace</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stat</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>the <code>MetricMathAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Instead, specify the single metric anomaly detector attributes
   * 			as part of the <code>SingleMetricAnomalyDetector</code> property.</p>
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;

  /**
   * @public
   * <p>The metric math anomaly detector to be deleted.</p>
   *          <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include following parameters in the same operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Dimensions</code>,</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MetricName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Namespace</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stat</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Instead, specify the metric math anomaly detector attributes as part of the
   * 			<code>MetricMathAnomalyDetector</code> property.</p>
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorOutput {}

/**
 * @public
 * <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 */
export class InternalServiceFault extends __BaseException {
  readonly name: "InternalServiceFault" = "InternalServiceFault";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p></p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceFault, __BaseException>) {
    super({
      name: "InternalServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Parameters were used together that cannot be used together.</p>
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * @public
 * <p>The value of an input parameter is bad or out-of-range.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * @public
 * <p>An input parameter that is required is missing.</p>
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name: "MissingRequiredParameterException" = "MissingRequiredParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
  }
}

/**
 * @public
 * <p>The named resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  ResourceType?: string;
  ResourceId?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteDashboardsInput {
  /**
   * @public
   * <p>The dashboards to be deleted. This parameter is required.</p>
   */
  DashboardNames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardsOutput {}

/**
 * @public
 */
export interface DeleteInsightRulesInput {
  /**
   * @public
   * <p>An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInsightRulesOutput {
  /**
   * @public
   * <p>An array listing the rules that could not be deleted. You cannot delete built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

/**
 * @public
 */
export interface DeleteMetricStreamInput {
  /**
   * @public
   * <p>The name of the metric stream to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricStreamOutput {}

/**
 * @public
 * @enum
 */
export const ScanBy = {
  TIMESTAMP_ASCENDING: "TimestampAscending",
  TIMESTAMP_DESCENDING: "TimestampDescending",
} as const;

/**
 * @public
 */
export type ScanBy = (typeof ScanBy)[keyof typeof ScanBy];

/**
 * @public
 */
export interface DescribeAlarmHistoryInput {
  /**
   * @public
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * @public
   * <p>Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter,
   * 			only metric alarms are returned.</p>
   */
  AlarmTypes?: AlarmType[];

  /**
   * @public
   * <p>The type of alarm histories to retrieve.</p>
   */
  HistoryItemType?: HistoryItemType;

  /**
   * @public
   * <p>The starting date to retrieve alarm history.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The ending date to retrieve alarm history.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>The maximum number of alarm history records to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest
   * 		event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.</p>
   */
  ScanBy?: ScanBy;
}

/**
 * @public
 */
export interface DescribeAlarmHistoryOutput {
  /**
   * @public
   * <p>The alarm histories, in JSON format.</p>
   */
  AlarmHistoryItems?: AlarmHistoryItem[];

  /**
   * @public
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The next token specified is invalid.</p>
 */
export class InvalidNextToken extends __BaseException {
  readonly name: "InvalidNextToken" = "InvalidNextToken";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
  }
}

/**
 * @public
 */
export interface DescribeAlarmsInput {
  /**
   * @public
   * <p>The names of the alarms to retrieve information about.</p>
   */
  AlarmNames?: string[];

  /**
   * @public
   * <p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names
   * 			that start with this prefix.</p>
   *          <p>If this parameter
   * 			is specified, you cannot specify <code>AlarmNames</code>.</p>
   */
  AlarmNamePrefix?: string;

  /**
   * @public
   * <p>Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you
   * 			omit this parameter,
   * 		only metric alarms are returned, even if composite alarms exist in the account.</p>
   *          <p>For example, if you omit this parameter or specify <code>MetricAlarms</code>, the operation returns only a list of metric
   * 		alarms. It does not return any composite alarms, even if composite alarms exist in the account.</p>
   *          <p>If you specify <code>CompositeAlarms</code>, the operation returns only a list of composite
   * 			alarms, and does not return any metric alarms.</p>
   */
  AlarmTypes?: AlarmType[];

  /**
   * @public
   * <p>If you use this parameter and specify the name of a composite alarm, the operation returns
   * 			information about the "children" alarms
   * 			of the alarm you specify. These are the metric alarms and composite alarms referenced in the
   * 			<code>AlarmRule</code> field of the composite alarm that you specify in
   * 			<code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in
   * 			<code>ChildrenOfAlarmName</code> is not returned.</p>
   *          <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except
   * 			for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you
   * 			receive a validation
   * 			error.</p>
   *          <note>
   *             <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code>
   * 			information are returned by this operation
   * 			when you use this parameter. To get complete information about
   * 			these alarms, perform another <code>DescribeAlarms</code> operation and specify
   * 			the parent alarm names in the <code>AlarmNames</code> parameter.</p>
   *          </note>
   */
  ChildrenOfAlarmName?: string;

  /**
   * @public
   * <p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns
   * 			information about the "parent" alarms
   * 			of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code>
   * 			parameters that reference
   * 			the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in
   * 			<code>ParentsOfAlarmName</code> is not returned.</p>
   *          <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except
   * 			for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation
   * 			error.</p>
   *          <note>
   *             <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about
   * 			these alarms, perform another <code>DescribeAlarms</code> operation and specify
   * 			the parent alarm names in the <code>AlarmNames</code> parameter.</p>
   *          </note>
   */
  ParentsOfAlarmName?: string;

  /**
   * @public
   * <p>Specify this parameter to receive information only about alarms that are currently in the state that you specify.</p>
   */
  StateValue?: StateValue;

  /**
   * @public
   * <p>Use this parameter to filter the results of the operation to only those alarms that
   * 		use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all
   * 		alarms that send notifications to that topic.</p>
   */
  ActionPrefix?: string;

  /**
   * @public
   * <p>The maximum number of alarm descriptions to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EvaluationState = {
  PARTIAL_DATA: "PARTIAL_DATA",
} as const;

/**
 * @public
 */
export type EvaluationState = (typeof EvaluationState)[keyof typeof EvaluationState];

/**
 * @public
 * @enum
 */
export const Statistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * <p>The details about a metric alarm.</p>
 */
export interface MetricAlarm {
  /**
   * @public
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmArn?: string;

  /**
   * @public
   * <p>The description of the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * @public
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Indicates whether actions should be executed during any changes to the alarm state.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: string[];

  /**
   * @public
   * <p>The state value for the alarm.</p>
   */
  StateValue?: StateValue;

  /**
   * @public
   * <p>An explanation for the alarm state, in text format.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>An explanation for the alarm state, in JSON format.</p>
   */
  StateReasonData?: string;

  /**
   * @public
   * <p>The time stamp of the last update to the value of either the
   * 			<code>StateValue</code> or <code>EvaluationState</code> parameters.</p>
   */
  StateUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The name of the metric associated with the alarm, if this is an alarm
   * 		based on a single metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The namespace of the metric associated with the alarm.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The statistic for the metric associated with the alarm, other than percentile.
   * 		    For percentile statistics, use <code>ExtendedStatistic</code>.</p>
   */
  Statistic?: Statistic;

  /**
   * @public
   * <p>The percentile statistic for the metric associated with the alarm. Specify a value between
   * 			p0.0 and p100.</p>
   */
  ExtendedStatistic?: string;

  /**
   * @public
   * <p>The dimensions for the metric associated with the alarm.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  Period?: number;

  /**
   * @public
   * <p>The unit of the metric associated with the alarm.</p>
   */
  Unit?: StandardUnit;

  /**
   * @public
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  EvaluationPeriods?: number;

  /**
   * @public
   * <p>The number of data points that must be breaching to trigger the alarm.</p>
   */
  DatapointsToAlarm?: number;

  /**
   * @public
   * <p>The value to compare with the specified statistic.</p>
   */
  Threshold?: number;

  /**
   * @public
   * <p>The arithmetic operation to use when comparing the specified
   * 			statistic and threshold. The specified statistic value is used as the first operand.</p>
   */
  ComparisonOperator?: ComparisonOperator;

  /**
   * @public
   * <p>Sets how this alarm is to handle missing data points. The valid values
   *         	are <code>breaching</code>, <code>notBreaching</code>, <code>ignore</code>, and
   *         	<code>missing</code>. For more information, see
   *         	<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring how CloudWatch alarms treat missing data</a>.</p>
   *          <p>If this parameter is omitted, the default
   *         	behavior of <code>missing</code> is used.</p>
   */
  TreatMissingData?: string;

  /**
   * @public
   * <p>Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change
   * 			during periods with too few data points to be statistically significant. If <code>evaluate</code> or this
   * 			parameter is not used, the alarm is always evaluated and possibly changes state no matter
   * 			how many data points are available.</p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * @public
   * <p>An array of MetricDataQuery structures, used in an alarm based on a
   * 			metric math expression. Each structure either retrieves a
   * 			metric or performs a math expression.
   *
   * 			One item in the Metrics array is the math expression that the alarm watches.
   * 			This expression by designated by having <code>ReturnData</code> set to
   * 			true.</p>
   */
  Metrics?: MetricDataQuery[];

  /**
   * @public
   * <p>In an alarm based on an anomaly detection model, this is the ID of the
   * 			<code>ANOMALY_DETECTION_BAND</code> function
   * 			used as the threshold for the alarm.</p>
   */
  ThresholdMetricId?: string;

  /**
   * @public
   * <p>If the value of this field is
   * 	<code>PARTIAL_DATA</code>, the alarm is being evaluated based on only partial data. This happens if the
   * 	query used for the alarm returns more than 10,000 metrics. For
   * 	more information, see
   * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p>
   */
  EvaluationState?: EvaluationState;

  /**
   * @public
   * <p>The date and time that the alarm's <code>StateValue</code> most recently changed.</p>
   */
  StateTransitionedTimestamp?: Date;
}

/**
 * @public
 */
export interface DescribeAlarmsOutput {
  /**
   * @public
   * <p>The information about any composite alarms returned by the operation.</p>
   */
  CompositeAlarms?: CompositeAlarm[];

  /**
   * @public
   * <p>The information about any metric alarms returned by the operation.</p>
   */
  MetricAlarms?: MetricAlarm[];

  /**
   * @public
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAlarmsForMetricInput {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The statistic for the metric, other than percentiles.
   * 		    For percentile statistics, use <code>ExtendedStatistics</code>.</p>
   */
  Statistic?: Statistic;

  /**
   * @public
   * <p>The percentile statistic for the metric. Specify a value between
   * 		    p0.0 and p100.</p>
   */
  ExtendedStatistic?: string;

  /**
   * @public
   * <p>The dimensions associated with the metric. If the metric has any associated
   * 			dimensions, you must specify them in order for the call to succeed.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  Period?: number;

  /**
   * @public
   * <p>The unit for the metric.</p>
   */
  Unit?: StandardUnit;
}

/**
 * @public
 */
export interface DescribeAlarmsForMetricOutput {
  /**
   * @public
   * <p>The information for each alarm with the specified metric.</p>
   */
  MetricAlarms?: MetricAlarm[];
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorsInput {
  /**
   * @public
   * <p>Use the token returned by the previous operation to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in one operation. The maximum
   * 			value that you can specify is 100.</p>
   *          <p>To retrieve the remaining results, make another call with the returned
   * 			<code>NextToken</code> value. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Limits the results to only the anomaly detection models that
   * 			are associated with the specified namespace.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>Limits the results to only the anomaly detection models that are associated with the
   * 			specified metric name. If there are multiple metrics with this name in different
   * 			namespaces that have anomaly detection models, they're all returned.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>Limits the results to only the anomaly detection models that are associated with the
   * 			specified metric dimensions. If there are multiple metrics that have these dimensions
   * 			and have anomaly detection models associated, they're all returned.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The anomaly detector types to request when using <code>DescribeAnomalyDetectorsInput</code>.
   * 			If empty, defaults to <code>SINGLE_METRIC</code>.</p>
   */
  AnomalyDetectorTypes?: AnomalyDetectorType[];
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorsOutput {
  /**
   * @public
   * <p>The list of anomaly detection models returned by the operation.</p>
   */
  AnomalyDetectors?: AnomalyDetector[];

  /**
   * @public
   * <p>A token that you can use in a subsequent operation to
   * 		retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInsightRulesInput {
  /**
   * @public
   * <p>Include this value, if it was returned by the previous operation, to get the next set of rules.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in one operation. If you omit this
   * 		parameter, the default of 500 is used.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>This structure contains the definition
 * 			for a Contributor Insights rule.
 * 			For more information about this rule,
 * 			see<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">
 * 				Using Constributor Insights to analyze high-cardinality data</a>
 * 			in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export interface InsightRule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State: string | undefined;

  /**
   * @public
   * <p>For rules that you create, this is always <code>\{"Name": "CloudWatchLogRule", "Version": 1\}</code>. For managed rules,
   * 			this is <code>\{"Name": "ServiceLogRule", "Version": 1\}</code>
   *          </p>
   */
  Schema: string | undefined;

  /**
   * @public
   * <p>The definition of the rule, as a JSON object. The definition contains the keywords used to define contributors,
   * 			the value to aggregate on if this rule returns a sum instead of a count, and the filters. For details on the valid syntax, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights
   * 				Rule Syntax</a>.</p>
   */
  Definition: string | undefined;

  /**
   * @public
   * <p>
   * 			An optional built-in rule that Amazon Web Services manages.
   * 		</p>
   */
  ManagedRule?: boolean;
}

/**
 * @public
 */
export interface DescribeInsightRulesOutput {
  /**
   * @public
   * <p>If this parameter is present, it is a token that marks the start of the next batch of returned results.      </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The rules returned by the operation.</p>
   */
  InsightRules?: InsightRule[];
}

/**
 * @public
 * <p>Represents filters for a dimension.</p>
 */
export interface DimensionFilter {
  /**
   * @public
   * <p>The dimension name to be matched.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the dimension to be matched.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DisableAlarmActionsInput {
  /**
   * @public
   * <p>The names of the alarms.</p>
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisableInsightRulesInput {
  /**
   * @public
   * <p>An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisableInsightRulesOutput {
  /**
   * @public
   * <p>An array listing the rules that could not be disabled. You cannot disable built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

/**
 * @public
 */
export interface EnableAlarmActionsInput {
  /**
   * @public
   * <p>The names of the alarms.</p>
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 */
export interface EnableInsightRulesInput {
  /**
   * @public
   * <p>An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.</p>
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface EnableInsightRulesOutput {
  /**
   * @public
   * <p>An array listing the rules that could not be enabled. You cannot disable or enable built-in rules.</p>
   */
  Failures?: PartialFailure[];
}

/**
 * @public
 * <p>The operation exceeded one or more limits.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetDashboardInput {
  /**
   * @public
   * <p>The name of the dashboard to be described.</p>
   */
  DashboardName: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * @public
   * <p>The detailed information about the dashboard, including what widgets are included and their location
   * 			on the dashboard. For more information about the <code>DashboardBody</code> syntax,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>. </p>
   */
  DashboardBody?: string;

  /**
   * @public
   * <p>The name of the dashboard.</p>
   */
  DashboardName?: string;
}

/**
 * @public
 */
export interface GetInsightRuleReportInput {
  /**
   * @public
   * <p>The name of the rule that you want to see data from.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as
   * 			<code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as
   * 			<code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   * 			<code>2019-07-01T23:59:59</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.</p>
   */
  Period: number | undefined;

  /**
   * @public
   * <p>The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.</p>
   */
  MaxContributorCount?: number;

  /**
   * @public
   * <p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more
   * 		of the following metrics:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
   * 					contributor might change for each data point in the graph.</p>
   *                <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
   * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
   * 					by the rule's <code>Value</code>, during that period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
   *             </li>
   *          </ul>
   */
  Metrics?: string[];

  /**
   * @public
   * <p>Determines what statistic to use to rank the contributors. Valid values are <code>Sum</code> and <code>Maximum</code>.</p>
   */
  OrderBy?: string;
}

/**
 * @public
 * <p>One data point related to one contributor.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>
 */
export interface InsightRuleContributorDatapoint {
  /**
   * @public
   * <p>The timestamp of the data point.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The approximate value that this contributor added during this timestamp.</p>
   */
  ApproximateValue: number | undefined;
}

/**
 * @public
 * <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then
 * 			a unique contributor is a unique combination of values from all the keys in the rule.</p>
 *          <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
 */
export interface InsightRuleContributor {
  /**
   * @public
   * <p>One of the log entry field keywords that is used to define contributors for this rule.</p>
   */
  Keys: string[] | undefined;

  /**
   * @public
   * <p>An approximation of the aggregate value that comes from this contributor.</p>
   */
  ApproximateAggregateValue: number | undefined;

  /**
   * @public
   * <p>An array of the data points where this contributor is present. Only the data points when this contributor appeared are included in the array.</p>
   */
  Datapoints: InsightRuleContributorDatapoint[] | undefined;
}

/**
 * @public
 * <p>One data point from the metric time series returned in a Contributor Insights rule report.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>
 */
export interface InsightRuleMetricDatapoint {
  /**
   * @public
   * <p>The timestamp of the data point.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The number of unique contributors who published data during this timestamp.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  UniqueContributors?: number;

  /**
   * @public
   * <p>The maximum value provided by one contributor during this timestamp. Each timestamp is evaluated separately,
   * 			so the identity of the max contributor
   * 		could be different for each timestamp.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  MaxContributorValue?: number;

  /**
   * @public
   * <p>The number of occurrences that matched the rule during this data point.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  SampleCount?: number;

  /**
   * @public
   * <p>The average value from all contributors during the time period represented by that data point.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Average?: number;

  /**
   * @public
   * <p>The sum of the values from all contributors during the time period represented by that data point.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Sum?: number;

  /**
   * @public
   * <p>The minimum value from a single contributor during the time period represented by that data point.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Minimum?: number;

  /**
   * @public
   * <p>The maximum value from a single occurence from a single contributor during the time period represented by that data point.</p>
   *          <p>This statistic is returned only if you included it in the <code>Metrics</code> array in your request.</p>
   */
  Maximum?: number;
}

/**
 * @public
 */
export interface GetInsightRuleReportOutput {
  /**
   * @public
   * <p>An array of the strings used as the keys for this rule. The keys are the dimensions used to classify contributors.
   * 			If the rule contains more than one key, then each unique combination of values for the keys is counted as a unique contributor.</p>
   */
  KeyLabels?: string[];

  /**
   * @public
   * <p>Specifies whether this rule aggregates contributor data by COUNT or SUM.</p>
   */
  AggregationStatistic?: string;

  /**
   * @public
   * <p>The sum of the values from all individual contributors that match the rule.</p>
   */
  AggregateValue?: number;

  /**
   * @public
   * <p>An approximate count of the unique contributors found by this rule in this time period.</p>
   */
  ApproximateUniqueCount?: number;

  /**
   * @public
   * <p>An array of the unique contributors found by this rule in this time period. If the rule contains multiple keys, each combination of values
   * 		for the keys counts as a unique contributor.</p>
   */
  Contributors?: InsightRuleContributor[];

  /**
   * @public
   * <p>A time series of metric data points that matches the time period in the rule request.</p>
   */
  MetricDatapoints?: InsightRuleMetricDatapoint[];
}

/**
 * @public
 * <p>This structure includes the <code>Timezone</code> parameter, which you can use
 * 			to specify your time zone so that the labels that are associated with returned metrics display the
 * 			correct time
 * 			for your time zone. </p>
 *          <p>The <code>Timezone</code> value affects a label only if you have a time-based
 * 		dynamic expression in the label. For more information about dynamic expressions in labels,
 * 		see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
 */
export interface LabelOptions {
  /**
   * @public
   * <p>The time zone to use for metric data return in this operation.
   * 			The format is <code>+</code> or <code>-</code> followed by four digits.
   * 			The first two digits indicate the number of hours ahead or behind of UTC, and
   * 			the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour
   * 			and 30 minutes ahead of UTC. The default is +0000. </p>
   */
  Timezone?: string;
}

/**
 * @public
 */
export interface GetMetricDataInput {
  /**
   * @public
   * <p>The metric queries to be returned. A single <code>GetMetricData</code> call can
   * 			include as many as 500 <code>MetricDataQuery</code>
   * 		structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query,
   * 		or a math expression to perform on retrieved data. </p>
   */
  MetricDataQueries: MetricDataQuery[] | undefined;

  /**
   * @public
   * <p>The time stamp indicating the earliest data to be returned.</p>
   *          <p>The value specified is inclusive; results include data points with the specified time stamp. </p>
   *          <p>CloudWatch rounds the specified time stamp as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Start time less than 15 days ago - Round down to the nearest whole minute.
   * 				For example, 12:32:34 is rounded down to 12:32:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval.
   * 				For example, 12:32:34 is rounded down to 12:30:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval.
   * 				For example, 12:32:34 is rounded down to 12:00:00.</p>
   *             </li>
   *          </ul>
   *          <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is
   * 			rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions
   * 			of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous
   * 			10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to
   * 			01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a
   * 			period of 5 seconds, you receive data
   * 			timestamped between 15:02:15 and 15:07:15.
   * 		</p>
   *          <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code>
   * 		values that align with the value of the metric's <code>Period</code> and sync up with
   * 		the beginning and end of an hour. For example, if the <code>Period</code> of a metric
   * 		is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response
   * 			from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The time stamp indicating the latest data to be returned.</p>
   *          <p>The value specified is exclusive; results include data points up to the specified time stamp.</p>
   *          <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code>
   * 			values that align with the value of the metric's <code>Period</code> and sync up with
   * 			the beginning and end of an hour. For example, if the <code>Period</code> of a metric
   * 			is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response
   * 			from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>Include this value, if it was returned by the previous <code>GetMetricData</code> operation,
   * 			to get the next set of data points.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates
   * 			when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates
   * 			when the <code>MaxDatapoints</code> limit is reached.</p>
   */
  ScanBy?: ScanBy;

  /**
   * @public
   * <p>The maximum number of data points the request should return before paginating. If you omit
   * 			this, the default of 100,800 is used.</p>
   */
  MaxDatapoints?: number;

  /**
   * @public
   * <p>This structure includes the <code>Timezone</code> parameter, which you can use
   * 			to specify your time zone so that the labels of returned data display the
   * 			correct time
   * 			for your time zone. </p>
   */
  LabelOptions?: LabelOptions;
}

/**
 * @public
 * <p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p>
 *          <p>If a cross-Region <code>GetMetricData</code> operation fails with a code of <code>Forbidden</code> and a
 * 			value of <code>Authentication too complex to
 * 			retrieve cross region data</code>, you can correct the problem by running the <code>GetMetricData</code>
 * 		operation in the same Region where the metric data is.</p>
 */
export interface MessageData {
  /**
   * @public
   * <p>The error code or status code associated with the message.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The message text.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const StatusCode = {
  COMPLETE: "Complete",
  FORBIDDEN: "Forbidden",
  INTERNAL_ERROR: "InternalError",
  PARTIAL_DATA: "PartialData",
} as const;

/**
 * @public
 */
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode];

/**
 * @public
 * <p>A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code>
 * 			structures. Each of these structures includes the data points for that metric, along
 * 			with the timestamps of those data points and other identifying information.</p>
 */
export interface MetricDataResult {
  /**
   * @public
   * <p>The short name you specified to represent this metric.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The human-readable label associated with the data.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The timestamps for the data points, formatted in Unix timestamp format. The number of
   * 			timestamps always matches the number of values and the value for Timestamps[x] is
   * 			Values[x].</p>
   */
  Timestamps?: Date[];

  /**
   * @public
   * <p>The data points for the metric corresponding to <code>Timestamps</code>. The number of
   * 			values always matches the number of timestamps and the timestamp for Values[x] is
   * 			Timestamps[x].</p>
   */
  Values?: number[];

  /**
   * @public
   * <p>The status of the returned data. <code>Complete</code> indicates that all data points in the requested time range were returned.
   * 			<code>PartialData</code> means that an incomplete set of data points were returned.
   * 					You can use the <code>NextToken</code> value that was returned and repeat your request to get more data points.
   * 			<code>NextToken</code> is not returned if you are performing a math expression. <code>InternalError</code>
   * 			indicates that an error occurred. Retry your request using <code>NextToken</code>, if present.</p>
   */
  StatusCode?: StatusCode;

  /**
   * @public
   * <p>A list of messages with additional information about the data returned.</p>
   */
  Messages?: MessageData[];
}

/**
 * @public
 */
export interface GetMetricDataOutput {
  /**
   * @public
   * <p>The metrics that are returned, including the metric name, namespace, and dimensions.</p>
   */
  MetricDataResults?: MetricDataResult[];

  /**
   * @public
   * <p>A token that marks the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Contains a message about this <code>GetMetricData</code> operation, if the operation results in such a message.
   * 			An example of a message that
   * 			might be returned is <code>Maximum number of allowed metrics exceeded</code>. If there is a message, as much of the
   * 			operation as possible is still executed.</p>
   *          <p>A message appears here only if it is related to the global <code>GetMetricData</code> operation. Any message
   * 			about a specific metric returned by the operation appears in the <code>MetricDataResult</code> object returned for that metric.</p>
   */
  Messages?: MessageData[];
}

/**
 * @public
 */
export interface GetMetricStatisticsInput {
  /**
   * @public
   * <p>The namespace of the metric, with or without spaces.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The name of the metric, with or without spaces.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension.
   * 			CloudWatch treats each unique combination of dimensions as a separate metric.
   * 		    If a specific combination of dimensions was not published, you can't retrieve statistics for it.
   * 		    You must specify the same dimensions that were used when the metrics were created. For an example,
   * 		    see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The time stamp that determines the first data point to return. Start times are
   * 			evaluated relative to the time that CloudWatch receives the request.</p>
   *          <p>The value specified is inclusive; results include data points with the specified time stamp.
   * 	    	In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p>
   *          <p>CloudWatch rounds the specified time stamp as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Start time less than 15 days ago - Round down to the nearest whole minute.
   * 			    For example, 12:32:34 is rounded down to 12:32:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval.
   * 			    For example, 12:32:34 is rounded down to 12:30:00.</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval.
   * 			    For example, 12:32:34 is rounded down to 12:00:00.</p>
   *             </li>
   *          </ul>
   *          <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is
   * 			rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions
   * 			of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous
   * 			10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to
   * 			01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a
   * 			period of 5 seconds, you receive data
   * 			timestamped between 15:02:15 and 15:07:15.
   * 		</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The time stamp that determines the last data point to return.</p>
   *          <p>The value specified is exclusive; results include data points up to the specified time stamp.
   * 			In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can
   * 			be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   * 			at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   * 		are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   *          <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than
   * 		    3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p>
   *          <ul>
   *             <li>
   *                <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p>
   *             </li>
   *          </ul>
   */
  Period: number | undefined;

  /**
   * @public
   * <p>The metric statistics, other than percentile. For percentile statistics,
   * 		    use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must
   * 		specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.</p>
   */
  Statistics?: Statistic[];

  /**
   * @public
   * <p>The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must
   * 			specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not
   * 			available for metrics when any of the metric values are negative numbers.</p>
   */
  ExtendedStatistics?: string[];

  /**
   * @public
   * <p>The unit for a given metric.
   * 			If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified
   * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   */
  Unit?: StandardUnit;
}

/**
 * @public
 */
export interface GetMetricStatisticsOutput {
  /**
   * @public
   * <p>A label for the specified metric.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The data points for the specified metric.</p>
   */
  Datapoints?: Datapoint[];
}

/**
 * @public
 */
export interface GetMetricStreamInput {
  /**
   * @public
   * <p>The name of the metric stream to retrieve information about.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>This structure contains a metric namespace and optionally, a list of metric names,
 * 			to either include in a metric stream or exclude from
 * 			a metric stream.</p>
 *          <p>A metric stream's filters can include up to 1000 total names. This limit
 * 			applies to the sum of namespace names and metric names in the filters. For example,
 * 		this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters
 * 		with 49 metrics specified in each filter.</p>
 */
export interface MetricStreamFilter {
  /**
   * @public
   * <p>The name of the metric namespace for this filter.</p>
   *          <p>The namespace can contain only ASCII printable characters (ASCII range 32 through 126). It must
   * 			contain at least one non-whitespace character.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The names of the metrics to either include or exclude from the metric stream. </p>
   *          <p>If you omit this parameter, all metrics in the namespace are included or excluded,
   * 		depending on whether this filter is specified as an exclude filter or an include filter.</p>
   *          <p>Each metric name can contain only ASCII printable characters (ASCII range 32 through 126).
   * 			Each metric name must contain at least one non-whitespace character.</p>
   */
  MetricNames?: string[];
}

/**
 * @public
 * @enum
 */
export const MetricStreamOutputFormat = {
  JSON: "json",
  OPEN_TELEMETRY_0_7: "opentelemetry0.7",
  OPEN_TELEMETRY_1_0: "opentelemetry1.0",
} as const;

/**
 * @public
 */
export type MetricStreamOutputFormat = (typeof MetricStreamOutputFormat)[keyof typeof MetricStreamOutputFormat];

/**
 * @public
 * <p>This object contains the information for one metric that is to be streamed with
 * 			additional statistics.</p>
 */
export interface MetricStreamStatisticsMetric {
  /**
   * @public
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;
}

/**
 * @public
 * <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>,
 * 			and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. This structure contains information for
 * 			one metric that includes additional statistics in the stream. For more information about statistics,
 * 			see CloudWatch, listed in
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html">
 * 				CloudWatch statistics definitions</a>.</p>
 */
export interface MetricStreamStatisticsConfiguration {
  /**
   * @public
   * <p>An array of metric name and namespace pairs that stream the additional statistics listed
   * 			in the value of the <code>AdditionalStatistics</code> parameter. There can be as many as
   * 			100 pairs in the array.</p>
   *          <p>All metrics that match the combination of metric name and namespace will be streamed
   * 			with the additional statistics, no matter their dimensions.</p>
   */
  IncludeMetrics: MetricStreamStatisticsMetric[] | undefined;

  /**
   * @public
   * <p>The list of additional statistics that are to be streamed for the metrics listed
   * 			in the <code>IncludeMetrics</code> array in this structure. This list can include as many as 20 statistics.</p>
   *          <p>If the <code>OutputFormat</code> for the stream is <code>opentelemetry1.0</code> or <code>opentelemetry0.7</code>, the only
   * 			valid values are <code>p<i>??</i>
   *             </code> percentile statistics such as <code>p90</code>, <code>p99</code> and so on.</p>
   *          <p>If the <code>OutputFormat</code> for the stream is <code>json</code>,
   * 			the valid values include the abbreviations for all of the statistics listed in
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html">
   * 				CloudWatch statistics definitions</a>. For example, this includes
   * 			<code>tm98, </code>
   *             <code>wm90</code>, <code>PR(:300)</code>, and so on.</p>
   */
  AdditionalStatistics: string[] | undefined;
}

/**
 * @public
 */
export interface GetMetricStreamOutput {
  /**
   * @public
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the metric stream.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>If this array of metric namespaces is present, then these
   * 			namespaces are the only
   * 		metric namespaces that are streamed by this metric stream.</p>
   */
  IncludeFilters?: MetricStreamFilter[];

  /**
   * @public
   * <p>If this array of metric namespaces is present, then these namespaces are the only
   * 			metric namespaces that are not streamed by this metric stream. In this case, all other metric namespaces in
   * 		the account are streamed by this metric stream.</p>
   */
  ExcludeFilters?: MetricStreamFilter[];

  /**
   * @public
   * <p>The ARN of the Amazon Kinesis Data Firehose delivery stream that is used by this metric
   * 			stream.</p>
   */
  FirehoseArn?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that is used by this metric stream.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The state of the metric stream. The possible values are <code>running</code>
   * 		and <code>stopped</code>.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The date that the metric stream was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date of the most recent update to the metric stream's configuration.</p>
   */
  LastUpdateDate?: Date;

  /**
   * @public
   * <p>The output format for the stream.
   * 			Valid values are <code>json</code>, <code>opentelemetry1.0</code>, and <code>opentelemetry0.7</code>.
   * 			For more information about metric stream output formats,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html">Metric streams output formats</a>.</p>
   */
  OutputFormat?: MetricStreamOutputFormat;

  /**
   * @public
   * <p>Each entry in this array displays information about one or more metrics that include additional statistics
   * 			in the metric stream. For more information about the additional statistics, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html">
   * 				CloudWatch statistics definitions</a>. </p>
   */
  StatisticsConfigurations?: MetricStreamStatisticsConfiguration[];

  /**
   * @public
   * <p>If this is <code>true</code> and this metric stream is in a monitoring account, then the stream includes
   * 			metrics from source accounts that the monitoring account is linked to.</p>
   */
  IncludeLinkedAccountsMetrics?: boolean;
}

/**
 * @public
 */
export interface GetMetricWidgetImageInput {
  /**
   * @public
   * <p>A JSON string that defines the bitmap graph to be retrieved. The string includes the
   * 			metrics to include in the graph, statistics, annotations, title, axis limits, and so on.
   * 			You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p>
   *          <p>For more information about the syntax of <code>MetricWidget</code> see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p>
   *          <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation
   * 			point appears next to the graph legend.</p>
   */
  MetricWidget: string | undefined;

  /**
   * @public
   * <p>The format of the resulting image. Only PNG images are supported.</p>
   *          <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the
   * 			content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code>
   * 			field. For example:</p>
   *          <p>
   *             <code>
   * 			<GetMetricWidgetImageResponse xmlns=<URLstring>></code>
   *          </p>
   *          <p>
   *             <code>  <GetMetricWidgetImageResult></code>
   *          </p>
   *          <p>
   *             <code>    <MetricWidgetImage></code>
   *          </p>
   *          <p>
   *             <code>       iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code>
   *          </p>
   *          <p>
   *             <code>    </MetricWidgetImage></code>
   *          </p>
   *          <p>
   *             <code>  </GetMetricWidgetImageResult></code>
   *          </p>
   *          <p>
   *             <code>  <ResponseMetadata></code>
   *          </p>
   *          <p>
   *             <code>    <RequestId>6f0d4192-4d42-11e8-82c1-f539a07e0e3b</RequestId></code>
   *          </p>
   *          <p>
   *             <code>  </ResponseMetadata></code>
   *          </p>
   *          <p>
   *             <code></GetMetricWidgetImageResponse></code>
   *          </p>
   *          <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most
   * 			use cases, and all actions using an Amazon Web Services SDK, you should use <code>png</code>. If you specify
   * 			<code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>,
   * 			and the body of the response is a PNG image. </p>
   */
  OutputFormat?: string;
}

/**
 * @public
 */
export interface GetMetricWidgetImageOutput {
  /**
   * @public
   * <p>The image of the graph, in the output format specified. The output is base64-encoded.</p>
   */
  MetricWidgetImage?: Uint8Array;
}

/**
 * @public
 */
export interface ListDashboardsInput {
  /**
   * @public
   * <p>If you specify this parameter, only
   * 			the dashboards with names starting with the specified string are listed. The maximum length is 255, and
   * 			valid characters are A-Z, a-z, 0-9, ".", "-", and "_".
   *
   * 		</p>
   */
  DashboardNamePrefix?: string;

  /**
   * @public
   * <p>The token returned by a previous call to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDashboardsOutput {
  /**
   * @public
   * <p>The list of matching dashboards.</p>
   */
  DashboardEntries?: DashboardEntry[];

  /**
   * @public
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListManagedInsightRulesInput {
  /**
   * @public
   * <p>
   * 			The ARN
   * 			of an Amazon Web Services resource
   * 			that has managed Contributor Insights rules.
   * 		</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>
   * 			Include this value
   * 			to get
   * 			the next set
   * 			of rules
   * 			if the value was returned
   * 			by the previous operation.
   * 		</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   * 			The maximum number
   * 			of results
   * 			to return
   * 			in one operation.
   * 			If you omit this parameter,
   * 			the default number is used.
   * 			The default number is <code>100</code>.
   * 		</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>
 * 			The status
 * 			of a managed Contributor Insights rule.
 * 		</p>
 */
export interface ManagedRuleState {
  /**
   * @public
   * <p>
   * 			The name
   * 			of the Contributor Insights rule
   * 			that contains data
   * 			for the specified Amazon Web Services resource.
   * 		</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>
   * 			Indicates whether the rule is enabled or disabled.
   * 		</p>
   */
  State: string | undefined;
}

/**
 * @public
 * <p>
 * 			Contains information
 * 			about managed Contributor Insights rules,
 * 			as returned
 * 			by <code>ListManagedInsightRules</code>.
 *
 * 		</p>
 */
export interface ManagedRuleDescription {
  /**
   * @public
   * <p>
   * 			The template name
   * 			for the managed rule.
   * 			Used
   * 			to enable managed rules using <code>PutManagedInsightRules</code>.
   * 		</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>
   * 			If a managed rule is enabled,
   * 			this is the ARN
   * 			for the related Amazon Web Services resource.
   * 		</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>
   * 			Describes the state
   * 			of a managed rule.
   * 			If present,
   * 			it contains information
   * 			about the Contributor Insights rule
   * 			that contains information
   * 			about the related Amazon Web Services resource.
   * 		</p>
   */
  RuleState?: ManagedRuleState;
}

/**
 * @public
 */
export interface ListManagedInsightRulesOutput {
  /**
   * @public
   * <p>
   * 			The managed rules
   * 			that are available
   * 			for the specified Amazon Web Services resource.
   * 		</p>
   */
  ManagedRules?: ManagedRuleDescription[];

  /**
   * @public
   * <p>
   * 			Include this value
   * 			to get
   * 			the next set
   * 			of rules
   * 			if the value was returned
   * 			by the previous operation.
   * 		</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RecentlyActive = {
  PT3H: "PT3H",
} as const;

/**
 * @public
 */
export type RecentlyActive = (typeof RecentlyActive)[keyof typeof RecentlyActive];

/**
 * @public
 */
export interface ListMetricsInput {
  /**
   * @public
   * <p>The metric namespace to filter against. Only the namespace that matches exactly
   * 		will be returned.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the metric to filter against. Only the metrics with names that match exactly
   * 			will be returned.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The dimensions to filter against.  Only the dimensions that match exactly
   * 			will be returned.</p>
   */
  Dimensions?: DimensionFilter[];

  /**
   * @public
   * <p>The token returned by a previous call to indicate that there is more data
   * 			available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>To filter the results to show only metrics that have had data points published
   * 			in the past three hours, specify this parameter
   * 			with a value of <code>PT3H</code>. This is the only valid value
   * 			for this parameter.</p>
   *          <p>The results that are returned are an approximation of the value you specify. There
   * 		is a low probability that the returned results include metrics with last published
   * 		data as much as 40 minutes more than the specified time interval.</p>
   */
  RecentlyActive?: RecentlyActive;

  /**
   * @public
   * <p>If you are using this operation in a monitoring account,
   * 			specify <code>true</code> to include metrics from source accounts in the returned data.</p>
   *          <p>The default is <code>false</code>.</p>
   */
  IncludeLinkedAccounts?: boolean;

  /**
   * @public
   * <p>When you use this operation in a monitoring account, use this field to return metrics only from one source account.
   * 			To do so, specify that source account ID in this field, and also
   * 		specify <code>true</code> for <code>IncludeLinkedAccounts</code>.</p>
   */
  OwningAccount?: string;
}

/**
 * @public
 */
export interface ListMetricsOutput {
  /**
   * @public
   * <p>The metrics that match your request. </p>
   */
  Metrics?: Metric[];

  /**
   * @public
   * <p>The token that marks the start of the next batch of returned results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>If you are using this operation in a monitoring account, this array contains the account IDs of the source
   * 			accounts where the metrics in the returned data
   * 		are from.</p>
   *          <p>This field is a 1:1 mapping between each metric that is returned and the ID of the owning account.</p>
   */
  OwningAccounts?: string[];
}

/**
 * @public
 */
export interface ListMetricStreamsInput {
  /**
   * @public
   * <p>Include this value, if it was returned by the previous call, to get the next set of metric streams.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in one operation.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>This structure contains the configuration information about one metric stream.</p>
 */
export interface MetricStreamEntry {
  /**
   * @public
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date that the metric stream was originally created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date that the configuration of this metric stream was most recently updated.</p>
   */
  LastUpdateDate?: Date;

  /**
   * @public
   * <p>The name of the metric stream.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the Kinesis Firehose devlivery stream that is used for this metric stream.</p>
   */
  FirehoseArn?: string;

  /**
   * @public
   * <p>The current state of this stream. Valid values are <code>running</code> and <code>stopped</code>.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The output format of this metric stream. Valid values are
   * 			<code>json</code>, <code>opentelemetry1.0</code>,
   * 			and <code>opentelemetry0.7</code>.</p>
   */
  OutputFormat?: MetricStreamOutputFormat;
}

/**
 * @public
 */
export interface ListMetricStreamsOutput {
  /**
   * @public
   * <p>The token that marks the start of the next batch of returned results. You can use this
   * 		token in a subsequent operation to get the next batch of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The array of metric stream information.</p>
   */
  Entries?: MetricStreamEntry[];
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The ARN of the CloudWatch resource that you want to view tags for.</p>
   *          <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule/<i>insight-rule-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>A key-value pair associated with a CloudWatch resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your
   * 		resources.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutAnomalyDetectorInput {
  /**
   * @public
   * @deprecated
   *
   * <p>The namespace of the metric to create the anomaly detection model for.</p>
   */
  Namespace?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The name of the metric to create the anomaly detection model for.</p>
   */
  MetricName?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The metric dimensions to create the anomaly detection model for.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * @deprecated
   *
   * <p>The statistic to use for the metric and the anomaly detection model.</p>
   */
  Stat?: string;

  /**
   * @public
   * <p>The configuration specifies details about how the
   * 			anomaly detection model is to be trained, including
   * 			time ranges to exclude when training and updating the model.
   * 			You can specify as many as 10 time ranges.</p>
   *          <p>The configuration can also include the time zone to use for
   * 			the metric.</p>
   */
  Configuration?: AnomalyDetectorConfiguration;

  /**
   * @public
   * <p>A single metric anomaly detector to be created.</p>
   *          <p>When using <code>SingleMetricAnomalyDetector</code>,
   * 			you cannot include the following parameters in the same operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Dimensions</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MetricName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Namespace</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stat</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>the <code>MetricMatchAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Instead, specify the single metric anomaly detector attributes
   * 			as part of the property <code>SingleMetricAnomalyDetector</code>.</p>
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;

  /**
   * @public
   * <p>The metric math anomaly detector to be created.</p>
   *          <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Dimensions</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MetricName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Namespace</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stat</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Instead, specify the metric math anomaly detector attributes
   * 			as part of the property <code>MetricMathAnomalyDetector</code>.</p>
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
}

/**
 * @public
 */
export interface PutAnomalyDetectorOutput {}

/**
 * @public
 * <p>The quota for alarms for this customer has already been reached.</p>
 */
export class LimitExceededFault extends __BaseException {
  readonly name: "LimitExceededFault" = "LimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface PutCompositeAlarmInput {
  /**
   * @public
   * <p>Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is
   * 			<code>TRUE</code>.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *          <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   * 			| <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>
   *             </code>
   *          </p>
   */
  AlarmActions?: string[];

  /**
   * @public
   * <p>The description for the composite alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * @public
   * <p>The name for the composite alarm. This name must be unique within the Region.</p>
   */
  AlarmName: string | undefined;

  /**
   * @public
   * <p>An expression that specifies which other alarms are to be evaluated to determine this
   * 			composite alarm's state. For each alarm that you reference, you
   * 			designate a function that
   * 			specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You
   * 			can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the
   * 			functions in your expression.</p>
   *          <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p>
   *          <p>Functions can include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 			alarm is in ALARM state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 				alarm is in OK state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named
   * 				alarm is in INSUFFICIENT_DATA state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE</code> always evaluates to TRUE.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE</code> always evaluates to FALSE.</p>
   *             </li>
   *          </ul>
   *          <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and
   * 		for testing your alarm actions.</p>
   *          <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p>
   *          <p>The following
   * 			are some examples of <code>AlarmRule</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only
   * 				if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code>
   * 					specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state
   * 					and DeploymentInProgress is not in ALARM state. This example reduces
   * 					alarm noise during a known deployment window.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM
   * 				state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state.
   * 				This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an
   * 				alarm action on high CPU or disk usage if a known network problem is also occurring.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>AlarmRule</code> can specify as many as 100
   * 			"children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements
   * 			are child alarms, TRUE or FALSE statements, and
   * 			parentheses.</p>
   */
  AlarmRule: string | undefined;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN).</p>
   *          <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   *          </p>
   */
  InsufficientDataActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to an <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   *          <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>
   *             </code>
   *          </p>
   */
  OKActions?: string[];

  /**
   * @public
   * <p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p>
   *          <p>Tags can help you organize and categorize your
   * 			resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with
   * 			certain tag values.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>
   * 			Actions will be suppressed
   * 			if the suppressor alarm is
   * 			in the <code>ALARM</code> state.
   * 			<code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN)
   * 			from an existing alarm.
   * 		</p>
   */
  ActionsSuppressor?: string;

  /**
   * @public
   * <p>
   * 			The maximum time
   * 			in seconds
   * 			that the composite alarm waits
   * 			for the suppressor alarm
   * 			to go
   * 			into the <code>ALARM</code> state.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 		</p>
   *          <important>
   *             <p>
   *                <code>WaitPeriod</code>
   * 				is required only
   * 				when <code>ActionsSuppressor</code> is specified.
   * 			</p>
   *          </important>
   */
  ActionsSuppressorWaitPeriod?: number;

  /**
   * @public
   * <p>
   * 			The maximum time
   * 			in seconds
   * 			that the composite alarm waits
   * 			after suppressor alarm goes out
   * 			of the <code>ALARM</code> state.
   * 			After this time,
   * 			the composite alarm performs its actions.
   * 		</p>
   *          <important>
   *             <p>
   *                <code>ExtensionPeriod</code>
   * 				is required only
   * 				when <code>ActionsSuppressor</code> is specified.
   * 			</p>
   *          </important>
   */
  ActionsSuppressorExtensionPeriod?: number;
}

/**
 * @public
 */
export interface PutDashboardInput {
  /**
   * @public
   * <p>The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing
   * 			its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are
   * 			A-Z, a-z, 0-9, "-", and "_".  This parameter is required.</p>
   */
  DashboardName: string | undefined;

  /**
   * @public
   * <p>The detailed information about the dashboard in JSON format, including the widgets to include and their location
   * 			on the dashboard.  This parameter is required.</p>
   *          <p>For more information about the syntax,
   * 			see  <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>
   */
  DashboardBody: string | undefined;
}

/**
 * @public
 */
export interface PutDashboardOutput {
  /**
   * @public
   * <p>If the input for <code>PutDashboard</code> was correct and the dashboard was successfully created or modified, this result is empty.</p>
   *          <p>If this result includes only warning messages, then the input was valid enough for the dashboard to be
   * 			created or modified, but some elements of the dashboard
   * 			might not render.</p>
   *          <p>If this result includes error messages, the input was not valid and the operation failed.</p>
   */
  DashboardValidationMessages?: DashboardValidationMessage[];
}

/**
 * @public
 */
export interface PutInsightRuleInput {
  /**
   * @public
   * <p>A unique name for the rule.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The state of the rule. Valid values are ENABLED and DISABLED.</p>
   */
  RuleState?: string;

  /**
   * @public
   * <p>The definition of the rule, as a JSON object. For details on the valid syntax, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights
   * 			Rule Syntax</a>.</p>
   */
  RuleDefinition: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs to associate with the Contributor Insights rule.
   * 			You can associate as many as 50 tags with a rule.</p>
   *          <p>Tags can help you organize and categorize your
   * 			resources. You can also use them to scope user permissions, by
   * 			granting a user permission to access or change only the resources that have
   * 			certain tag values.</p>
   *          <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code>
   * 		permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p>
   *          <p>If you are using this operation to update an existing Contributor Insights rule, any tags
   * 		you specify in this parameter are ignored. To change the tags of an existing rule, use
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutInsightRuleOutput {}

/**
 * @public
 * <p>
 * 			Contains the information
 * 			that's required
 * 			to enable a managed Contributor Insights rule
 * 			for an Amazon Web Services resource.
 *
 * 		</p>
 */
export interface ManagedRule {
  /**
   * @public
   * <p>
   * 			The template name
   * 			for the managed Contributor Insights rule,
   * 			as returned
   * 			by <code>ListManagedInsightRules</code>.
   * 		</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>
   * 			The ARN
   * 			of an Amazon Web Services resource
   * 			that has managed Contributor Insights rules.
   * 		</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>
   * 			A list
   * 			of key-value pairs
   * 			that you can associate
   * 			with a managed Contributor Insights rule.
   * 			You can associate as many as 50 tags
   * 			with a rule.
   * 			Tags can help you organize and categorize your resources.
   * 			You also can use them
   * 			to scope user permissions
   * 			by granting a user permission
   * 			to access or change only the resources
   * 			that have certain tag values.
   * 			To associate tags
   * 			with a rule,
   * 			you must have the <code>cloudwatch:TagResource</code> permission
   * 			in addition
   * 			to the <code>cloudwatch:PutInsightRule</code> permission.
   * 			If you are using this operation
   * 			to update an existing Contributor Insights rule,
   * 			any tags
   * 			that you specify
   * 			in this parameter are ignored.
   * 			To change the tags
   * 			of an existing rule,
   * 			use <code>TagResource</code>.
   * 		</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutManagedInsightRulesInput {
  /**
   * @public
   * <p>
   * 			A list
   * 			of <code>ManagedRules</code>
   * 			to enable.
   * 		</p>
   */
  ManagedRules: ManagedRule[] | undefined;
}

/**
 * @public
 */
export interface PutManagedInsightRulesOutput {
  /**
   * @public
   * <p>
   * 			An array
   * 			that lists the rules
   * 			that could not be enabled.
   * 		</p>
   */
  Failures?: PartialFailure[];
}

/**
 * @public
 */
export interface PutMetricAlarmInput {
  /**
   * @public
   * <p>The name for the alarm. This name must be unique within the Region.</p>
   *          <p>The name must contain only UTF-8
   * 			characters, and can't contain ASCII control characters</p>
   */
  AlarmName: string | undefined;

  /**
   * @public
   * <p>The description for the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * @public
   * <p>Indicates whether actions should be executed during any changes to the alarm state. The default is
   * 			<code>TRUE</code>.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to an <code>OK</code> state
   * 			from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p>
   *          <p>
   *             <b>EC2 actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:stop</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:terminate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:reboot</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:recover</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Autoscaling action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SNS notification action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SSM integration actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  OKActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN). Valid values:</p>
   *          <p>
   *             <b>EC2 actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:stop</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:terminate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:reboot</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:recover</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Autoscaling action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SNS notification action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SSM integration actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  AlarmActions?: string[];

  /**
   * @public
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state.
   * 			Each action is specified as an Amazon Resource Name (ARN). Valid values:</p>
   *          <p>
   *             <b>EC2 actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:stop</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:terminate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:reboot</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:automate:<i>region</i>:ec2:recover</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Autoscaling action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SNS notification action:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SSM integration actions:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  InsufficientDataActions?: string[];

  /**
   * @public
   * <p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code>
   * 		operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p>
   *          <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the
   * 			<code>Namespace</code>, <code>Dimensions</code>, <code>Period</code>,
   * 			<code>Unit</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify
   * 		all this information in the <code>Metrics</code> array.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The namespace for the metric associated specified in <code>MetricName</code>.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The statistic for the metric specified in <code>MetricName</code>, other than percentile.
   * 		    For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify
   * 			a <code>MetricName</code>, you must
   * 		specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.</p>
   */
  Statistic?: Statistic;

  /**
   * @public
   * <p>The extended statistic for the metric specified in <code>MetricName</code>. When you
   * 			call <code>PutMetricAlarm</code> and specify
   * 			a <code>MetricName</code>, you must
   * 			specify either <code>Statistic</code> or <code>ExtendedStatistic</code> but not both.</p>
   *          <p>If you specify <code>ExtendedStatistic</code>, the following are valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>p90</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tm90</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tc90</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ts90</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>wm90</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IQM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PR(<i>n</i>:<i>m</i>)</code> where n and m are values
   * 			of the metric</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TC(<i>X</i>%:<i>X</i>%)</code> where X is between
   * 				10 and 90 inclusive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TM(<i>X</i>%:<i>X</i>%)</code> where X is between
   * 				10 and 90 inclusive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TS(<i>X</i>%:<i>X</i>%)</code> where X is between
   * 				10 and 90 inclusive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WM(<i>X</i>%:<i>X</i>%)</code> where X is between
   * 				10 and 90 inclusive.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about these extended statistics, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html">CloudWatch statistics definitions</a>.</p>
   */
  ExtendedStatistic?: string;

  /**
   * @public
   * <p>The dimensions for the metric specified in <code>MetricName</code>.</p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is
   * 			evaluated. Valid values are 10, 30, and any multiple of 60.</p>
   *          <p>
   *             <code>Period</code> is required for alarms based on static thresholds. If
   * 		you are creating an alarm based on a metric math expression, you specify the
   * 		period for each metric within the objects in the <code>Metrics</code> array.</p>
   *          <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a
   * 				<code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have
   * 			sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case,
   * 			it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm
   * 			might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm,
   * 			which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *          <p>An alarm's total current evaluation period can
   * 		be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>
   */
  Period?: number;

  /**
   * @public
   * <p>The unit of measure for the statistic. For example, the units for the Amazon EC2
   * 			NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance
   * 			receives on all network interfaces. You can also specify a unit when you create a custom
   * 			metric. Units help provide conceptual meaning to your data. Metric data points that
   * 			specify a unit of measure, such as Percent, are aggregated separately.
   * 			If you are creating an alarm based on a metric math expression, you can specify the unit for each
   * 			metric (if needed) within the objects in the <code>Metrics</code> array.</p>
   *          <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the
   * 			metric and attempts to evaluate the alarm.
   * 			Usually, metrics are
   * 			published with only one unit, so the alarm
   * 			works as intended.</p>
   *          <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's
   * 			behavior is not defined and
   * 			it behaves unpredictably.</p>
   *          <p>We recommend omitting <code>Unit</code> so that you don't inadvertently
   * 			specify an incorrect unit that is not published for this metric. Doing so
   * 			causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>
   */
  Unit?: StandardUnit;

  /**
   * @public
   * <p>The number of periods over which data is compared to the specified threshold. If you are
   * 			setting an alarm that requires that a number of consecutive data points be breaching to
   * 			trigger the alarm, this value specifies that number. If you are setting an "M out of N"
   * 			alarm, this value is the N.</p>
   *          <p>An alarm's total current evaluation period can
   * 			be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>
   */
  EvaluationPeriods: number | undefined;

  /**
   * @public
   * <p>The number of data points that must be breaching to trigger the alarm. This is used only if you are setting
   * 			an "M out of N" alarm. In that case, this value is the M. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.</p>
   */
  DatapointsToAlarm?: number;

  /**
   * @public
   * <p>The value against which the specified statistic is compared.</p>
   *          <p>This parameter is required for alarms based on static thresholds, but should
   * 		not be used for alarms based on anomaly detection models.</p>
   */
  Threshold?: number;

  /**
   * @public
   * <p> The arithmetic operation to use when comparing the specified statistic and
   * 			threshold. The specified statistic value is used as the first operand.</p>
   *          <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>,
   * 			<code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code>
   * 		are used only for alarms based on anomaly detection models.</p>
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * @public
   * <p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch
   * 				Alarms Treats Missing Data</a>.</p>
   *          <p>Valid Values: <code>breaching | notBreaching | ignore | missing</code>
   *          </p>
   *          <note>
   *             <p>Alarms that evaluate metrics in the <code>AWS/DynamoDB</code> namespace always <code>ignore</code>
   * 			missing data even if you choose a different option for <code>TreatMissingData</code>. When an
   * 			<code>AWS/DynamoDB</code> metric has missing data, alarms that evaluate that metric remain in their current state.</p>
   *          </note>
   */
  TreatMissingData?: string;

  /**
   * @public
   * <p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be
   * 			statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state
   * 			no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p>
   *          <p>Valid Values: <code>evaluate | ignore</code>
   *          </p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * @public
   * <p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a
   * 			metric math expression. For each <code>PutMetricAlarm</code>
   * 			operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p>
   *          <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p>
   *          <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression
   * 			by setting <code>ReturnData</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p>
   *          <p>If you use the <code>Metrics</code> parameter, you cannot include the
   * 			<code>Namespace</code>, <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>,
   * 			<code>Unit</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation.
   * 			Instead, you retrieve
   * 		the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>
   */
  Metrics?: MetricDataQuery[];

  /**
   * @public
   * <p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.
   * 		To be able to associate tags with the alarm when you create the alarm, you must
   * 		have the <code>cloudwatch:TagResource</code> permission.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   * 			permissions by granting a user
   * 			permission to access or change only resources with certain tag values.</p>
   *          <p>If you are using this operation to update an existing alarm, any tags
   * 			you specify in this parameter are ignored. To change the tags of an existing alarm, use
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>
   * 			or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If this is an alarm based on an anomaly detection model, make this value match
   * 			the ID of
   * 			the <code>ANOMALY_DETECTION_BAND</code> function.</p>
   *          <p>For an example of how to use this parameter, see the
   * 			<b>Anomaly Detection
   * 		Model Alarm</b> example on this page.</p>
   *          <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>
   */
  ThresholdMetricId?: string;
}

/**
 * @public
 * <p>Represents a set of statistics that describes a specific metric. </p>
 */
export interface StatisticSet {
  /**
   * @public
   * <p>The number of samples used for the statistic set.</p>
   */
  SampleCount: number | undefined;

  /**
   * @public
   * <p>The sum of values for the sample set.</p>
   */
  Sum: number | undefined;

  /**
   * @public
   * <p>The minimum value of the sample set.</p>
   */
  Minimum: number | undefined;

  /**
   * @public
   * <p>The maximum value of the sample set.</p>
   */
  Maximum: number | undefined;
}

/**
 * @public
 * <p>Encapsulates the information sent to either create a metric or add new values
 * 			to be aggregated into an existing metric.</p>
 */
export interface MetricDatum {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The dimensions associated with the metric. </p>
   */
  Dimensions?: Dimension[];

  /**
   * @public
   * <p>The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The value for the metric.</p>
   *          <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or
   * 			too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity)
   * 			are not supported.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The statistical values for the metric.</p>
   */
  StatisticValues?: StatisticSet;

  /**
   * @public
   * <p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once
   * 		in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period.
   * 		You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p>
   *          <p>Although the <code>Values</code> array accepts numbers of type
   * 			<code>Double</code>, CloudWatch rejects values that are either too small
   * 			or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
   * 			-Infinity) are not supported.</p>
   */
  Values?: number[];

  /**
   * @public
   * <p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array
   * 			is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p>
   *          <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you
   * 		include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>
   */
  Counts?: number[];

  /**
   * @public
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric.</p>
   *          <p>In
   * 		a <code>Get</code> operation, this displays the unit that is used for the metric.</p>
   */
  Unit?: StandardUnit;

  /**
   * @public
   * <p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with
   * 			sub-minute resolution down to one second.
   * 		Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available
   * 		only for custom metrics. For more information about high-resolution metrics,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.
   * 		</p>
   *          <p>This field is optional, if you do not specify it the default of 60 is used.</p>
   */
  StorageResolution?: number;
}

/**
 * @public
 */
export interface PutMetricDataInput {
  /**
   * @public
   * <p>The namespace for the metric data. You can use ASCII characters for the namespace, except for
   * 		control characters which are not supported.</p>
   *          <p>To avoid conflicts
   * 			with Amazon Web Services service namespaces, you should not specify a namespace that begins with <code>AWS/</code>
   *          </p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The data for the metric. The array can include no more than 1000 metrics per call.</p>
   */
  MetricData: MetricDatum[] | undefined;
}

/**
 * @public
 */
export interface PutMetricStreamInput {
  /**
   * @public
   * <p>If you are creating a new metric stream, this is the name for the new stream. The name
   * 		must be different than the names of other metric streams in this account and Region.</p>
   *          <p>If you are updating a metric stream, specify the name of that stream here.</p>
   *          <p>Valid characters are A-Z, a-z, 0-9, "-" and "_".</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If you specify this parameter, the stream sends only the
   * 		metrics from the metric namespaces that you specify here.</p>
   *          <p>You cannot include <code>IncludeFilters</code> and <code>ExcludeFilters</code>
   * 		in the same operation.</p>
   */
  IncludeFilters?: MetricStreamFilter[];

  /**
   * @public
   * <p>If you specify this parameter, the stream sends metrics from all
   * 			metric namespaces except for the namespaces that you specify here.</p>
   *          <p>You cannot include <code>ExcludeFilters</code> and <code>IncludeFilters</code> in
   * 			the same operation.</p>
   */
  ExcludeFilters?: MetricStreamFilter[];

  /**
   * @public
   * <p>The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream.
   * 			This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the
   * 			same account as the metric stream.</p>
   */
  FirehoseArn: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data
   * 			Firehose resources. This IAM role must already exist and must be in the same account as
   * 			the metric stream. This IAM role must include the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>firehose:PutRecord</p>
   *             </li>
   *             <li>
   *                <p>firehose:PutRecordBatch</p>
   *             </li>
   *          </ul>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The output format for the stream. Valid values are <code>json</code>, <code>opentelemetry1.0</code>,
   * 			and <code>opentelemetry0.7</code>. For more information about metric stream
   * 		output formats, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html">
   * 				Metric streams output formats</a>.</p>
   */
  OutputFormat: MetricStreamOutputFormat | undefined;

  /**
   * @public
   * <p>A list of key-value pairs to associate with the metric stream. You can associate as
   * 			many as 50 tags with a metric stream.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   * 			permissions by granting a user
   * 			permission to access or change only resources with certain tag values.</p>
   *          <p>You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags
   * 			you specify in this parameter are ignored. To change the tags of an existing metric stream, use
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>
   * 			or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>,
   * 			and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use this parameter to have
   * 			the metric stream also send additional statistics in the stream. This
   * 			array can have up to 100 members.</p>
   *          <p>For each entry in this array, you specify one or more metrics and the list of additional
   * 			statistics to stream for those metrics. The additional statistics that you can stream
   * 			depend on the stream's <code>OutputFormat</code>. If the <code>OutputFormat</code> is
   * 				<code>json</code>, you can stream any additional statistic that is supported by
   * 				CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html">
   * 				CloudWatch statistics definitions</a>. If the <code>OutputFormat</code>
   * 			is <code>opentelemetry1.0</code> or <code>opentelemetry0.7</code>, you can stream percentile statistics such as p95,
   * 			p99.9, and so on.</p>
   */
  StatisticsConfigurations?: MetricStreamStatisticsConfiguration[];

  /**
   * @public
   * <p>If you are creating a metric stream in a monitoring account,
   * 			specify <code>true</code> to include metrics from source accounts in the metric stream.</p>
   */
  IncludeLinkedAccountsMetrics?: boolean;
}

/**
 * @public
 */
export interface PutMetricStreamOutput {
  /**
   * @public
   * <p>The ARN of the metric stream.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Data was not syntactically valid JSON.</p>
 */
export class InvalidFormatFault extends __BaseException {
  readonly name: "InvalidFormatFault" = "InvalidFormatFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFormatFault, __BaseException>) {
    super({
      name: "InvalidFormatFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFormatFault.prototype);
  }
}

/**
 * @public
 */
export interface SetAlarmStateInput {
  /**
   * @public
   * <p>The name of the alarm.</p>
   */
  AlarmName: string | undefined;

  /**
   * @public
   * <p>The value of the state.</p>
   */
  StateValue: StateValue | undefined;

  /**
   * @public
   * <p>The reason that this alarm is set to this specific state, in text format.</p>
   */
  StateReason: string | undefined;

  /**
   * @public
   * <p>The reason that this alarm is set to this specific state, in JSON format.</p>
   *          <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling
   * 		alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>
   */
  StateReasonData?: string;
}

/**
 * @public
 */
export interface StartMetricStreamsInput {
  /**
   * @public
   * <p>The array of the names of metric streams to start streaming.</p>
   *          <p>This is an "all or nothing" operation. If you do not have
   * 		permission to access all of the metric streams that you list here, then none of the streams that you list
   * 		in the operation will start streaming.</p>
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface StartMetricStreamsOutput {}

/**
 * @public
 */
export interface StopMetricStreamsInput {
  /**
   * @public
   * <p>The array of the names of metric streams to stop streaming.</p>
   *          <p>This is an "all or nothing" operation. If you do not have
   * 			permission to access all of the metric streams that you list here, then none of the streams that you list
   * 			in the operation will stop streaming.</p>
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface StopMetricStreamsOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The ARN of the CloudWatch resource that you're adding tags to.</p>
   *          <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule/<i>insight-rule-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the alarm.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The ARN of the CloudWatch resource that you're removing tags from.</p>
   *          <p>The ARN format of an alarm is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a Contributor Insights rule is
   * 			<code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule/<i>insight-rule-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   * 				Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   * 			Reference</i>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
