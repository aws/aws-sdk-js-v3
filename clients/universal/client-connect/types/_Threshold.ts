/**
 * <p>A <code>Threshold</code> object that includes a comparison and <code>ThresholdValue</code> to compare to. Used with service level metrics.</p>
 */
export interface _Threshold {
  /**
   * <p>The Threshold to use to compare service level metrics to. Only "Less than" (LT) comparisons are supported.</p>
   */
  Comparison?: "LT" | string;

  /**
   * <p>The value of the threshold to compare the metric to. Only "Less than" (LT) comparisons are supported.</p>
   */
  ThresholdValue?: number;
}

export type _UnmarshalledThreshold = _Threshold;
