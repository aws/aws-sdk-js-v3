import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStackPolicyInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    }
  }
};
