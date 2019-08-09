/**
 * <p>Filters to use when listing TagOptions.</p>
 */
export interface _ListTagOptionsFilters {
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Value?: string;

  /**
   * <p>The active state.</p>
   */
  Active?: boolean;
}

export type _UnmarshalledListTagOptionsFilters = _ListTagOptionsFilters;
