import { _Dimension, _UnmarshalledDimension } from "./_Dimension";

/**
 * <p>A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.</p>
 */
export interface _CloudWatchAlarmConfiguration {
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the number of periods that the metric is compared to the threshold.</p>
   */
  EvaluationPeriods: number;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the value the metric is compared with.</p>
   */
  Threshold: number;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the arithmetic operation that is used for the comparison.</p>
   */
  ComparisonOperator:
    | "GreaterThanOrEqualToThreshold"
    | "GreaterThanThreshold"
    | "LessThanThreshold"
    | "LessThanOrEqualToThreshold"
    | string;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the duration of one evaluation period in seconds.</p>
   */
  Period: number;

  /**
   * <p>The name of the CloudWatch metric that the alarm is associated with.</p>
   */
  MetricName: string;

  /**
   * <p>The namespace of the metric that the alarm is associated with. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Namespace: string;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, the statistic that is applied to the metric.</p>
   */
  Statistic: "Average" | "Sum" | "SampleCount" | "Maximum" | "Minimum" | string;

  /**
   * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric. For information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;
}

export interface _UnmarshalledCloudWatchAlarmConfiguration
  extends _CloudWatchAlarmConfiguration {
  /**
   * <p>For the metric that the CloudWatch alarm is associated with, a complex type that contains information about the dimensions for the metric. For information, see <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html">Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  Dimensions?: Array<_UnmarshalledDimension>;
}
