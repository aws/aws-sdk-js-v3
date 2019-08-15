import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPolicyVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policyArn: {
      shape: {
        type: "string"
      }
    },
    policyName: {
      shape: {
        type: "string",
        min: 1
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
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    generationId: {
      shape: {
        type: "string"
      }
    }
  }
};
