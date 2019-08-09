import {
  _InventoryDeletionSummaryItem,
  _UnmarshalledInventoryDeletionSummaryItem
} from "./_InventoryDeletionSummaryItem";

/**
 * <p>Information about the delete operation.</p>
 */
export interface _InventoryDeletionSummary {
  /**
   * <p>The total number of items to delete. This count does not change during the delete operation.</p>
   */
  TotalCount?: number;

  /**
   * <p>Remaining number of items to delete.</p>
   */
  RemainingCount?: number;

  /**
   * <p>A list of counts and versions for deleted items.</p>
   */
  SummaryItems?:
    | Array<_InventoryDeletionSummaryItem>
    | Iterable<_InventoryDeletionSummaryItem>;
}

export interface _UnmarshalledInventoryDeletionSummary
  extends _InventoryDeletionSummary {
  /**
   * <p>A list of counts and versions for deleted items.</p>
   */
  SummaryItems?: Array<_UnmarshalledInventoryDeletionSummaryItem>;
}
