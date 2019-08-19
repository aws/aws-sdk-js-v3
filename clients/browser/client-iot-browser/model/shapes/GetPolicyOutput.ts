import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPolicyOutput: _Structure_ = {
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
    defaultVersionId: {
      shape: {
        type: "string"
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
