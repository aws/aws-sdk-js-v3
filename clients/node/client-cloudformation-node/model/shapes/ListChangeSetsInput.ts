import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChangeSetsInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
