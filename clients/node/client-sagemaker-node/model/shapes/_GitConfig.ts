import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GitConfig: _Structure_ = {
  type: "structure",
  required: ["RepositoryUrl"],
  members: {
    RepositoryUrl: {
      shape: {
        type: "string"
      }
    },
    Branch: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecretArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
