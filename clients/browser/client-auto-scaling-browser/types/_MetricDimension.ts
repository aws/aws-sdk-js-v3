/**
 * <p>Describes the dimension of a metric.</p>
 */
export interface _MetricDimension {
  /**
   * <p>The name of the dimension.</p>
   */
  Name: string;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string;
}

export type _UnmarshalledMetricDimension = _MetricDimension;
