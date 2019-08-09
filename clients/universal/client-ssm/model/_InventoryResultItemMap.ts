import { Map as _Map_ } from "@aws-sdk/types";
import { _InventoryResultItem } from "./_InventoryResultItem";

export const _InventoryResultItemMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _InventoryResultItem
  }
};
