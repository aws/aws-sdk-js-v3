/**
 * <p>The aggregated value for a metric.</p>
 */
export interface _MetricValue {
  /**
   * <p>The actual number that represents the metric.</p>
   */
  Amount?: string;

  /**
   * <p>The unit that the metric is given in.</p>
   */
  Unit?: string;
}

export type _UnmarshalledMetricValue = _MetricValue;
