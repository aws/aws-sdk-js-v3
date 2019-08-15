import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadLayerPartInput: _Structure_ = {
  type: "structure",
  required: [
    "repositoryName",
    "uploadId",
    "partFirstByte",
    "partLastByte",
    "layerPartBlob"
  ],
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
    partFirstByte: {
      shape: {
        type: "integer"
      }
    },
    partLastByte: {
      shape: {
        type: "integer"
      }
    },
    layerPartBlob: {
      shape: {
        type: "blob"
      }
    }
  }
};
