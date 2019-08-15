import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResourcePolicyInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policyName: {
      shape: {
        type: "string"
      }
    },
    policyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
