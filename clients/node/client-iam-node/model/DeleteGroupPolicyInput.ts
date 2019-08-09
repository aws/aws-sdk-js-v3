import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGroupPolicyInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "PolicyName"],
  members: {
    GroupName: {
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
