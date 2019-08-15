import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAssumeRolePolicyInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "PolicyDocument"],
  members: {
    RoleName: {
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
