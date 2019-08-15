import { List as _List_ } from "@aws-sdk/types";
import { _ResourceInventory } from "./_ResourceInventory";

export const _ResourceInventoryList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceInventory
  }
};
