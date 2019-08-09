/**
 * <p>Indicates how to transform ingested log events to metric data in a CloudWatch metric.</p>
 */
export interface _MetricTransformation {
  /**
   * <p>The name of the CloudWatch metric.</p>
   */
  metricName: string;

  /**
   * <p>The namespace of the CloudWatch metric.</p>
   */
  metricNamespace: string;

  /**
   * <p>The value to publish to the CloudWatch metric when a filter pattern matches a log event.</p>
   */
  metricValue: string;

  /**
   * <p>(Optional) The value to emit when a filter pattern does not match a log event. This value can be null.</p>
   */
  defaultValue?: number;
}

export type _UnmarshalledMetricTransformation = _MetricTransformation;
