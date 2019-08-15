import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackSetOperationsInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
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
