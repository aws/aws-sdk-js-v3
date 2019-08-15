import { _LayerDigestList } from "./_LayerDigestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompleteLayerUploadInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "uploadId", "layerDigests"],
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
    layerDigests: {
      shape: _LayerDigestList
    }
  }
};
