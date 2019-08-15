import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Repository: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    repositoryArn: {
      shape: {
        type: "string"
      }
    },
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
    repositoryUri: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    imageTagMutability: {
      shape: {
        type: "string"
      }
    }
  }
};
