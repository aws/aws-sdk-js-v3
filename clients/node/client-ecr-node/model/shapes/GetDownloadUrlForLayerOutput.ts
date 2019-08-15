import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDownloadUrlForLayerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    downloadUrl: {
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
