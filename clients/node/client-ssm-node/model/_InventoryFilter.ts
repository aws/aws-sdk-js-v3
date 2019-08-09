import { _InventoryFilterValueList } from "./_InventoryFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _InventoryFilterValueList
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
