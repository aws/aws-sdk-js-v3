import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserPolicyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "PolicyName"],
  members: {
    UserName: {
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
