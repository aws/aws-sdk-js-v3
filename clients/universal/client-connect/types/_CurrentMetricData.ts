import { _CurrentMetric, _UnmarshalledCurrentMetric } from "./_CurrentMetric";

/**
 * <p>A <code>CurrentMetricData</code> object.</p>
 */
export interface _CurrentMetricData {
  /**
   * <p>The metric in a <code>CurrentMetricData</code> object.</p>
   */
  Metric?: _CurrentMetric;

  /**
   * <p>The value of the metric in the CurrentMetricData object.</p>
   */
  Value?: number;
}

export interface _UnmarshalledCurrentMetricData extends _CurrentMetricData {
  /**
   * <p>The metric in a <code>CurrentMetricData</code> object.</p>
   */
  Metric?: _UnmarshalledCurrentMetric;
}
