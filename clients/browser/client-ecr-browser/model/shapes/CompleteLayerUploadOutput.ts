import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompleteLayerUploadOutput: _Structure_ = {
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
    uploadId: {
      shape: {
        type: "string"
      }
    },
    layerDigest: {
      shape: {
        type: "string"
      }
    }
  }
};
