import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutGroupPolicyInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "PolicyName", "PolicyDocument"],
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
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
