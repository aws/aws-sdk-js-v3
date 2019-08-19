import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutUserPolicyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "PolicyName", "PolicyDocument"],
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
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
