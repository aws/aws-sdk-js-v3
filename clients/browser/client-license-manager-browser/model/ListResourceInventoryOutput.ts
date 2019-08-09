import { _ResourceInventoryList } from "./_ResourceInventoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceInventoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceInventoryList: {
      shape: _ResourceInventoryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
