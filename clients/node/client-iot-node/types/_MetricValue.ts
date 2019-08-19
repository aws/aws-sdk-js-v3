/**
 * <p>The value to be compared with the <code>metric</code>.</p>
 */
export interface _MetricValue {
  /**
   * <p>If the <code>comparisonOperator</code> calls for a numeric value, use this to specify that numeric value to be compared with the <code>metric</code>.</p>
   */
  count?: number;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this to specify that set to be compared with the <code>metric</code>.</p>
   */
  cidrs?: Array<string> | Iterable<string>;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of ports, use this to specify that set to be compared with the <code>metric</code>.</p>
   */
  ports?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledMetricValue extends _MetricValue {
  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this to specify that set to be compared with the <code>metric</code>.</p>
   */
  cidrs?: Array<string>;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of ports, use this to specify that set to be compared with the <code>metric</code>.</p>
   */
  ports?: Array<number>;
}
