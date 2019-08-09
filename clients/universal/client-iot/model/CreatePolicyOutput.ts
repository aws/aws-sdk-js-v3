import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    policyArn: {
      shape: {
        type: "string"
      }
    },
    policyDocument: {
      shape: {
        type: "string"
      }
    },
    policyVersionId: {
      shape: {
        type: "string"
      }
    }
  }
};
