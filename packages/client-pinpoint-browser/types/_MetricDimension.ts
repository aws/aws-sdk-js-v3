/**
 * Custom metric dimension
 */
export interface _MetricDimension {
  /**
   * The operator that you're using to compare metric values. Possible values: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, or EQUAL
   */
  ComparisonOperator?: string;

  /**
   * Value to be compared.
   */
  Value?: number;
}

export type _UnmarshalledMetricDimension = _MetricDimension;
