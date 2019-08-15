import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelUpdateStackInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
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
