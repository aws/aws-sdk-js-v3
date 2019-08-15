import { _InventoryFilterList } from "./_InventoryFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryGroup: _Structure_ = {
  type: "structure",
  required: ["Name", "Filters"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _InventoryFilterList
    }
  }
};
