/**
 * <p>Specifies the sort order of a sorted column.</p>
 */
export interface _Order {
  /**
   * <p>The name of the column.</p>
   */
  Column: string;

  /**
   * <p>Indicates that the column is sorted in ascending order (<code>== 1</code>), or in descending order (<code>==0</code>).</p>
   */
  SortOrder: number;
}

export type _UnmarshalledOrder = _Order;
