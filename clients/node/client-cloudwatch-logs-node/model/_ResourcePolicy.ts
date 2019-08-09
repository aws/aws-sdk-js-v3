import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourcePolicy: _Structure_ = {
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
    },
    lastUpdatedTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
