/**
 * <p>Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.</p>
 */
export interface _MetricDimension {
  /**
   * <p>The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.</p>
   */
  ComparisonOperator: string;

  /**
   * <p>The value to compare.</p>
   */
  Value: number;
}

export type _UnmarshalledMetricDimension = _MetricDimension;
