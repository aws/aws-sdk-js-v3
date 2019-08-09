import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRolePolicyInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "PolicyName"],
  members: {
    RoleName: {
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
