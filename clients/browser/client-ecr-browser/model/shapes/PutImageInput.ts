import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutImageInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "imageManifest"],
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
    imageManifest: {
      shape: {
        type: "string"
      }
    },
    imageTag: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
