import { List as _List_ } from "@aws-sdk/types";
import { _InventoryFilter } from "./_InventoryFilter";

export const _InventoryFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InventoryFilter
  }
};
