import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
