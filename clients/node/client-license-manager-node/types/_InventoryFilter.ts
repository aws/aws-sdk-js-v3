/**
 * <p>An inventory filter object.</p>
 */
export interface _InventoryFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string;

  /**
   * <p>The condition of the filter.</p>
   */
  Condition: "EQUALS" | "NOT_EQUALS" | "BEGINS_WITH" | "CONTAINS" | string;

  /**
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

export type _UnmarshalledInventoryFilter = _InventoryFilter;
