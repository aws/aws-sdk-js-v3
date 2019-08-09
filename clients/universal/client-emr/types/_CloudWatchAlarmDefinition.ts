import {
  _MetricDimension,
  _UnmarshalledMetricDimension
} from "./_MetricDimension";

/**
 * <p>The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.</p>
 */
export interface _CloudWatchAlarmDefinition {
  /**
   * <p>Determines how the metric specified by <code>MetricName</code> is compared to the value specified by <code>Threshold</code>.</p>
   */
  ComparisonOperator:
    | "GREATER_THAN_OR_EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | string;

  /**
   * <p>The number of periods, expressed in seconds using <code>Period</code>, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is <code>1</code>.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The name of the CloudWatch metric that is watched to determine an alarm condition.</p>
   */
  MetricName: string;

  /**
   * <p>The namespace for the CloudWatch metric. The default is <code>AWS/ElasticMapReduce</code>.</p>
   */
  Namespace?: string;

  /**
   * <p>The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify <code>300</code>.</p>
   */
  Period: number;

  /**
   * <p>The statistic to apply to the metric associated with the alarm. The default is <code>AVERAGE</code>.</p>
   */
  Statistic?:
    | "SAMPLE_COUNT"
    | "AVERAGE"
    | "SUM"
    | "MINIMUM"
    | "MAXIMUM"
    | string;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  Threshold: number;

  /**
   * <p>The unit of measure associated with the CloudWatch metric being watched. The value specified for <code>Unit</code> must correspond to the units specified in the CloudWatch metric.</p>
   */
  Unit?:
    | "NONE"
    | "SECONDS"
    | "MICRO_SECONDS"
    | "MILLI_SECONDS"
    | "BYTES"
    | "KILO_BYTES"
    | "MEGA_BYTES"
    | "GIGA_BYTES"
    | "TERA_BYTES"
    | "BITS"
    | "KILO_BITS"
    | "MEGA_BITS"
    | "GIGA_BITS"
    | "TERA_BITS"
    | "PERCENT"
    | "COUNT"
    | "BYTES_PER_SECOND"
    | "KILO_BYTES_PER_SECOND"
    | "MEGA_BYTES_PER_SECOND"
    | "GIGA_BYTES_PER_SECOND"
    | "TERA_BYTES_PER_SECOND"
    | "BITS_PER_SECOND"
    | "KILO_BITS_PER_SECOND"
    | "MEGA_BITS_PER_SECOND"
    | "GIGA_BITS_PER_SECOND"
    | "TERA_BITS_PER_SECOND"
    | "COUNT_PER_SECOND"
    | string;

  /**
   * <p>A CloudWatch metric dimension.</p>
   */
  Dimensions?: Array<_MetricDimension> | Iterable<_MetricDimension>;
}

export interface _UnmarshalledCloudWatchAlarmDefinition
  extends _CloudWatchAlarmDefinition {
  /**
   * <p>A CloudWatch metric dimension.</p>
   */
  Dimensions?: Array<_UnmarshalledMetricDimension>;
}
