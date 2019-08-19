/**
 * <p>Specify criteria to restrict the results when listing custom platforms.</p> <p>The filter is evaluated as the expression:</p> <p> <code>Type</code> <code>Operator</code> <code>Values[i]</code> </p>
 */
export interface _PlatformFilter {
  /**
   * <p>The custom platform attribute to which the filter values are applied.</p> <p>Valid Values: <code>PlatformName</code> | <code>PlatformVersion</code> | <code>PlatformStatus</code> | <code>PlatformOwner</code> </p>
   */
  Type?: string;

  /**
   * <p>The operator to apply to the <code>Type</code> with each of the <code>Values</code>.</p> <p> Valid Values: <code>=</code> (equal to) | <code>!=</code> (not equal to) | <code>&lt;</code> (less than) | <code>&lt;=</code> (less than or equal to) | <code>&gt;</code> (greater than) | <code>&gt;=</code> (greater than or equal to) | <code>contains</code> | <code>begins_with</code> | <code>ends_with</code> </p>
   */
  Operator?: string;

  /**
   * <p>The list of values applied to the custom platform attribute.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPlatformFilter extends _PlatformFilter {
  /**
   * <p>The list of values applied to the custom platform attribute.</p>
   */
  Values?: Array<string>;
}
