/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface _MetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date | string | number;
}

export interface _UnmarshalledMetricData extends _MetricData {
  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}
