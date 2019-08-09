import { List as _List_ } from "@aws-sdk/types";
import { _InventoryDeletionSummaryItem } from "./_InventoryDeletionSummaryItem";

export const _InventoryDeletionSummaryItems: _List_ = {
  type: "list",
  member: {
    shape: _InventoryDeletionSummaryItem
  }
};
