/**
 * <p>Either a count, remaining count, or a version number in a delete inventory summary.</p>
 */
export interface _InventoryDeletionSummaryItem {
  /**
   * <p>The inventory type version.</p>
   */
  Version?: string;

  /**
   * <p>A count of the number of deleted items.</p>
   */
  Count?: number;

  /**
   * <p>The remaining number of items to delete.</p>
   */
  RemainingCount?: number;
}

export type _UnmarshalledInventoryDeletionSummaryItem = _InventoryDeletionSummaryItem;
