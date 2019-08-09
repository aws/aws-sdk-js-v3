import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDownloadUrlForLayerInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "layerDigest"],
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
    layerDigest: {
      shape: {
        type: "string"
      }
    }
  }
};
