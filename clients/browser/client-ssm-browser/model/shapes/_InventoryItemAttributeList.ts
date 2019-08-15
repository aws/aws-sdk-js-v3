import { List as _List_ } from "@aws-sdk/types";
import { _InventoryItemAttribute } from "./_InventoryItemAttribute";

export const _InventoryItemAttributeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InventoryItemAttribute
  }
};
