import { _InventoryFilterList } from "./_InventoryFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInventoryEntriesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "TypeName"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _InventoryFilterList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
