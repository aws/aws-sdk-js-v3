import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    isDefaultVersion: {
      shape: {
        type: "boolean"
      }
    }
  }
};
