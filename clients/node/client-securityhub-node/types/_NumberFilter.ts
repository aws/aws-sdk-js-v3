/**
 * <p>A number filter for querying findings.</p>
 */
export interface _NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for findings.</p>
   */
  Eq?: number;
}

export type _UnmarshalledNumberFilter = _NumberFilter;
