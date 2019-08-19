import { _Dimension, _UnmarshalledDimension } from "./_Dimension";
import {
  _MetricDataQuery,
  _UnmarshalledMetricDataQuery
} from "./_MetricDataQuery";

/**
 * <p>Represents an alarm.</p>
 */
export interface _MetricAlarm {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmArn?: string;

  /**
   * <p>The description of the alarm.</p>
   */
  AlarmDescription?: string;

  /**
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date | string | number;

  /**
   * <p>Indicates whether actions should be executed during any changes to the alarm state.</p>
   */
  ActionsEnabled?: boolean;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: Array<string> | Iterable<string>;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: Array<string> | Iterable<string>;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: Array<string> | Iterable<string>;

  /**
   * <p>The state value for the alarm.</p>
   */
  StateValue?: "OK" | "ALARM" | "INSUFFICIENT_DATA" | string;

  /**
   * <p>An explanation for the alarm state, in text format.</p>
   */
  StateReason?: string;

  /**
   * <p>An explanation for the alarm state, in JSON format.</p>
   */
  StateReasonData?: string;

  /**
   * <p>The time stamp of the last update to the alarm state.</p>
   */
  StateUpdatedTimestamp?: Date | string | number;

  /**
   * <p>The name of the metric associated with the alarm, if this is an alarm based on a single metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the metric associated with the alarm.</p>
   */
  Namespace?: string;

  /**
   * <p>The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>.</p>
   */
  Statistic?:
    | "SampleCount"
    | "Average"
    | "Sum"
    | "Minimum"
    | "Maximum"
    | string;

  /**
   * <p>The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.</p>
   */
  ExtendedStatistic?: string;

  /**
   * <p>The dimensions for the metric associated with the alarm.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;

  /**
   * <p>The period, in seconds, over which the statistic is applied.</p>
   */
  Period?: number;

  /**
   * <p>The unit of the metric associated with the alarm.</p>
   */
  Unit?:
    | "Seconds"
    | "Microseconds"
    | "Milliseconds"
    | "Bytes"
    | "Kilobytes"
    | "Megabytes"
    | "Gigabytes"
    | "Terabytes"
    | "Bits"
    | "Kilobits"
    | "Megabits"
    | "Gigabits"
    | "Terabits"
    | "Percent"
    | "Count"
    | "Bytes/Second"
    | "Kilobytes/Second"
    | "Megabytes/Second"
    | "Gigabytes/Second"
    | "Terabytes/Second"
    | "Bits/Second"
    | "Kilobits/Second"
    | "Megabits/Second"
    | "Gigabits/Second"
    | "Terabits/Second"
    | "Count/Second"
    | "None"
    | string;

  /**
   * <p>The number of periods over which data is compared to the specified threshold.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The number of datapoints that must be breaching to trigger the alarm.</p>
   */
  DatapointsToAlarm?: number;

  /**
   * <p>The value to compare with the specified statistic.</p>
   */
  Threshold?: number;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.</p>
   */
  ComparisonOperator?:
    | "GreaterThanOrEqualToThreshold"
    | "GreaterThanThreshold"
    | "LessThanThreshold"
    | "LessThanOrEqualToThreshold"
    | "LessThanLowerOrGreaterThanUpperThreshold"
    | "LessThanLowerThreshold"
    | "GreaterThanUpperThreshold"
    | string;

  /**
   * <p>Sets how this alarm is to handle missing data points. If this parameter is omitted, the default behavior of <code>missing</code> is used.</p>
   */
  TreatMissingData?: string;

  /**
   * <p>Used only for alarms based on percentiles. If <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If <code>evaluate</code> or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.</p>
   */
  EvaluateLowSampleCountPercentile?: string;

  /**
   * <p>An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having <code>ReturnValue</code> set to true.</p>
   */
  Metrics?: Array<_MetricDataQuery> | Iterable<_MetricDataQuery>;

  /**
   * <p>In an alarm based on an anomaly detection model, this is the ID of the <code>ANOMALY_DETECTION_BAND</code> function used as the threshold for the alarm.</p>
   */
  ThresholdMetricId?: string;
}

export interface _UnmarshalledMetricAlarm extends _MetricAlarm {
  /**
   * <p>The time stamp of the last update to the alarm configuration.</p>
   */
  AlarmConfigurationUpdatedTimestamp?: Date;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  OKActions?: Array<string>;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  AlarmActions?: Array<string>;

  /**
   * <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p>
   */
  InsufficientDataActions?: Array<string>;

  /**
   * <p>The time stamp of the last update to the alarm state.</p>
   */
  StateUpdatedTimestamp?: Date;

  /**
   * <p>The dimensions for the metric associated with the alarm.</p>
   */
  Dimensions?: Array<_UnmarshalledDimension>;

  /**
   * <p>An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having <code>ReturnValue</code> set to true.</p>
   */
  Metrics?: Array<_UnmarshalledMetricDataQuery>;
}
