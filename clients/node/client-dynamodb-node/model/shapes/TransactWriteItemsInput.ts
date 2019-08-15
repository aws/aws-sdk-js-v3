import { _TransactWriteItemList } from "./_TransactWriteItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransactWriteItemsInput: _Structure_ = {
  type: "structure",
  required: ["TransactItems"],
  members: {
    TransactItems: {
      shape: _TransactWriteItemList
    },
    ReturnConsumedCapacity: {
      shape: {
        type: "string"
      }
    },
    ReturnItemCollectionMetrics: {
      shape: {
        type: "string"
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
