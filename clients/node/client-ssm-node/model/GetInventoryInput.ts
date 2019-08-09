import { _InventoryFilterList } from "./_InventoryFilterList";
import { _InventoryAggregatorList } from "./_InventoryAggregatorList";
import { _ResultAttributeList } from "./_ResultAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInventoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _InventoryFilterList
    },
    Aggregators: {
      shape: _InventoryAggregatorList
    },
    ResultAttributes: {
      shape: _ResultAttributeList
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
