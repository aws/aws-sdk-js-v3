import { List as _List_ } from "@aws-sdk/types";
import { _InventoryItemEntry } from "./_InventoryItemEntry";

export const _InventoryItemEntryList: _List_ = {
  type: "list",
  member: {
    shape: _InventoryItemEntry
  }
};
