import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetStackPolicyInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    StackPolicyBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackPolicyURL: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
