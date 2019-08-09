import { _Dimension, _UnmarshalledDimension } from "./_Dimension";

/**
 * <p>Represents a specific metric.</p>
 */
export interface _Metric {
  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric. This is a required field.</p>
   */
  MetricName?: string;

  /**
   * <p>The dimensions for the metric.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;
}

export interface _UnmarshalledMetric extends _Metric {
  /**
   * <p>The dimensions for the metric.</p>
   */
  Dimensions?: Array<_UnmarshalledDimension>;
}
