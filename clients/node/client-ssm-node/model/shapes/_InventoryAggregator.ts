import { _InventoryAggregatorList } from "./_InventoryAggregatorList";
import { _InventoryGroupList } from "./_InventoryGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";
import { Member as _Member_ } from "@aws-sdk/types";

export const _InventoryAggregator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Expression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    get Aggregators(): _Member_ {
      Object.defineProperty(_InventoryAggregator, "Aggregators", {
        value: {
          shape: _InventoryAggregatorList
        }
      });
      return {
        shape: _InventoryAggregatorList
      };
    },
    Groups: {
      shape: _InventoryGroupList
    }
  }
};
