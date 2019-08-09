import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRolePolicyInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "PolicyName", "PolicyDocument"],
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
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
