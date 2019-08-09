import {
  _HistoricalMetric,
  _UnmarshalledHistoricalMetric
} from "./_HistoricalMetric";

/**
 * <p>A <code>HistoricalMetricData</code> object than contains a <code>Metric</code> and a <code>Value</code>.</p>
 */
export interface _HistoricalMetricData {
  /**
   * <p>A <code>HistoricalMetric</code> object.</p>
   */
  Metric?: _HistoricalMetric;

  /**
   * <p>The <code>Value</code> of the metric.</p>
   */
  Value?: number;
}

export interface _UnmarshalledHistoricalMetricData
  extends _HistoricalMetricData {
  /**
   * <p>A <code>HistoricalMetric</code> object.</p>
   */
  Metric?: _UnmarshalledHistoricalMetric;
}
