import { List as _List_ } from "@aws-sdk/types";
import { _InventoryItem } from "./_InventoryItem";

export const _InventoryItemList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InventoryItem
  }
};
