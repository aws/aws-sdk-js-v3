/**
 * _SortCriteria shape
 */
export interface _SortCriteria {
  /**
   * <p>Represents the finding attribute (for example, accountId) by which to sort findings.</p>
   */
  AttributeName?: string;

  /**
   * <p>Order by which the sorted findings are to be displayed.</p>
   */
  OrderBy?: "ASC" | "DESC" | string;
}

export type _UnmarshalledSortCriteria = _SortCriteria;
