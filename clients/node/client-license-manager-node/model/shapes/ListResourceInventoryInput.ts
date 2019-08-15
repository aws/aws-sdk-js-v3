import { _InventoryFilterList } from "./_InventoryFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceInventoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _InventoryFilterList
    }
  }
};
