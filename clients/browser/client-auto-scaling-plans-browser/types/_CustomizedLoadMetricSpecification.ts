import {
  _MetricDimension,
  _UnmarshalledMetricDimension
} from "./_MetricDimension";

/**
 * <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data. Statistics are calculations used to aggregate data over specified time periods.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group.</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface _CustomizedLoadMetricSpecification {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string;

  /**
   * <p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.</p>
   */
  Dimensions?: Array<_MetricDimension> | Iterable<_MetricDimension>;

  /**
   * <p>The statistic of the metric. Currently, the value must always be <code>Sum</code>. </p>
   */
  Statistic: "Average" | "Minimum" | "Maximum" | "SampleCount" | "Sum" | string;

  /**
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

export interface _UnmarshalledCustomizedLoadMetricSpecification
  extends _CustomizedLoadMetricSpecification {
  /**
   * <p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.</p>
   */
  Dimensions?: Array<_UnmarshalledMetricDimension>;
}
