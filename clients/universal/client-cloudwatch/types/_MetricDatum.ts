import { _Dimension, _UnmarshalledDimension } from "./_Dimension";
import { _StatisticSet, _UnmarshalledStatisticSet } from "./_StatisticSet";

/**
 * <p>Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.</p>
 */
export interface _MetricDatum {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string;

  /**
   * <p>The dimensions associated with the metric.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;

  /**
   * <p>The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The value for the metric.</p> <p>Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>
   */
  Value?: number;

  /**
   * <p>The statistical values for the metric.</p>
   */
  StatisticValues?: _StatisticSet;

  /**
   * <p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p> <p>Although the <code>Values</code> array accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>
   */
  Values?: Array<number> | Iterable<number>;

  /**
   * <p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p> <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>
   */
  Counts?: Array<number> | Iterable<number>;

  /**
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric. In a <code>Get</code> operation, this displays the unit that is used for the metric.</p>
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
   * <p>Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics">High-Resolution Metrics</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>This field is optional, if you do not specify it the default of 60 is used.</p>
   */
  StorageResolution?: number;
}

export interface _UnmarshalledMetricDatum extends _MetricDatum {
  /**
   * <p>The dimensions associated with the metric.</p>
   */
  Dimensions?: Array<_UnmarshalledDimension>;

  /**
   * <p>The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The statistical values for the metric.</p>
   */
  StatisticValues?: _UnmarshalledStatisticSet;

  /**
   * <p>Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the <code>Counts</code> array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each <code>PutMetricData</code> action that specifies a <code>Values</code> array.</p> <p>Although the <code>Values</code> array accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p>
   */
  Values?: Array<number>;

  /**
   * <p>Array of numbers that is used along with the <code>Values</code> array. Each number in the <code>Count</code> array is the number of times the corresponding value in the <code>Values</code> array occurred during the period. </p> <p>If you omit the <code>Counts</code> array, the default of 1 is used as the value for each count. If you include a <code>Counts</code> array, it must include the same amount of values as the <code>Values</code> array.</p>
   */
  Counts?: Array<number>;
}
