import {
  _MetricDimension,
  _UnmarshalledMetricDimension
} from "./_MetricDimension";

/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p>
 */
export interface _CustomizedMetricSpecification {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string;

  /**
   * <p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.</p>
   */
  Dimensions?: Array<_MetricDimension> | Iterable<_MetricDimension>;

  /**
   * <p>The statistic of the metric.</p>
   */
  Statistic: "Average" | "Minimum" | "Maximum" | "SampleCount" | "Sum" | string;

  /**
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

export interface _UnmarshalledCustomizedMetricSpecification
  extends _CustomizedMetricSpecification {
  /**
   * <p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.</p>
   */
  Dimensions?: Array<_UnmarshalledMetricDimension>;
}
