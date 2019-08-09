/**
 * <p>A string filter for querying findings.</p>
 */
export interface _StringFilter {
  /**
   * <p>The string filter value.</p>
   */
  Value?: string;

  /**
   * <p>The condition to be applied to a string value when querying for findings. </p>
   */
  Comparison?: "EQUALS" | "PREFIX" | string;
}

export type _UnmarshalledStringFilter = _StringFilter;
