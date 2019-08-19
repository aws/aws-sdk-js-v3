/**
 * <p>The map filter for querying findings.</p>
 */
export interface _MapFilter {
  /**
   * <p>The key of the map filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a key value when querying for findings with a map filter.</p>
   */
  Comparison?: "EQUALS" | string;
}

export type _UnmarshalledMapFilter = _MapFilter;
