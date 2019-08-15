import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecyclePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    lifecyclePolicyText: {
      shape: {
        type: "string",
        min: 100
      }
    }
  }
};
