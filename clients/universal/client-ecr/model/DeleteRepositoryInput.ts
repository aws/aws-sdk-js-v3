import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
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
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
