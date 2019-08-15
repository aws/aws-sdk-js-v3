import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecyclePolicyInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "lifecyclePolicyText"],
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
