/**
 * <p>A structure that uses CloudWatch metrics to gather data about the service quota.</p>
 */
export interface _MetricInfo {
  /**
   * <p>The namespace of the metric. The namespace is a container for CloudWatch metrics. You can specify a name for the namespace when you create a metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the CloudWatch metric that measures usage of a service quota. This is a required field.</p>
   */
  MetricName?: string;

  /**
   * <p>A dimension is a name/value pair that is part of the identity of a metric. Every metric has specific characteristics that describe it, and you can think of dimensions as categories for those characteristics. These dimensions are part of the CloudWatch Metric Identity that measures usage against a particular service quota.</p>
   */
  MetricDimensions?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Statistics are metric data aggregations over specified periods of time. This is the recommended statistic to use when comparing usage in the CloudWatch Metric against your Service Quota.</p>
   */
  MetricStatisticRecommendation?: string;
}

export interface _UnmarshalledMetricInfo extends _MetricInfo {
  /**
   * <p>A dimension is a name/value pair that is part of the identity of a metric. Every metric has specific characteristics that describe it, and you can think of dimensions as categories for those characteristics. These dimensions are part of the CloudWatch Metric Identity that measures usage against a particular service quota.</p>
   */
  MetricDimensions?: { [key: string]: string };
}
