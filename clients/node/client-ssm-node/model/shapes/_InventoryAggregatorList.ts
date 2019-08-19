import { List as _List_ } from "@aws-sdk/types";
import { _InventoryAggregator } from "./_InventoryAggregator";

export const _InventoryAggregatorList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InventoryAggregator
  }
};
