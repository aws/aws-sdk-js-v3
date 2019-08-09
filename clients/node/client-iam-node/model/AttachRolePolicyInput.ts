import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachRolePolicyInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "PolicyArn"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
