/**
 * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.</p>
 */
export interface _StatisticalThreshold {
  /**
   * <p>The percentile which resolves to a threshold value by which compliance with a behavior is determined. Metrics are collected over the specified period (<code>durationSeconds</code>) from all reporting devices in your account and statistical ranks are calculated. Then, the measurements from a device are collected over the same period. If the accumulated measurements from the device fall above or below (<code>comparisonOperator</code>) the value associated with the percentile specified, then the device is considered to be in compliance with the behavior, otherwise a violation occurs.</p>
   */
  statistic?: string;
}

export type _UnmarshalledStatisticalThreshold = _StatisticalThreshold;
