import { List as _List_ } from "@aws-sdk/types";
import { _InventoryGroup } from "./_InventoryGroup";

export const _InventoryGroupList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InventoryGroup
  }
};
