import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetRepositoryPolicyInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "policyText"],
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
    policyText: {
      shape: {
        type: "string"
      }
    },
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
