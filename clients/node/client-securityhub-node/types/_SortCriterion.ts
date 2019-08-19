/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface _SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: "asc" | "desc" | string;
}

export type _UnmarshalledSortCriterion = _SortCriterion;
