import { List as _List_ } from "@aws-sdk/types";
import { _InventoryDeletionStatusItem } from "./_InventoryDeletionStatusItem";

export const _InventoryDeletionsList: _List_ = {
  type: "list",
  member: {
    shape: _InventoryDeletionStatusItem
  }
};
