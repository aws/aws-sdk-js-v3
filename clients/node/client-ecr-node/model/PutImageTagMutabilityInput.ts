import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutImageTagMutabilityInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "imageTagMutability"],
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
    imageTagMutability: {
      shape: {
        type: "string"
      }
    }
  }
};
