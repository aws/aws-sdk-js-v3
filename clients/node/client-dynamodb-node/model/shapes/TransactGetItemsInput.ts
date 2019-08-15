import { _TransactGetItemList } from "./_TransactGetItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransactGetItemsInput: _Structure_ = {
  type: "structure",
  required: ["TransactItems"],
  members: {
    TransactItems: {
      shape: _TransactGetItemList
    },
    ReturnConsumedCapacity: {
      shape: {
        type: "string"
      }
    }
  }
};
