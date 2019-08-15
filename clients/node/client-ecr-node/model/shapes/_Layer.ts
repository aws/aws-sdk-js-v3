import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Layer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    layerDigest: {
      shape: {
        type: "string"
      }
    },
    layerAvailability: {
      shape: {
        type: "string"
      }
    },
    layerSize: {
      shape: {
        type: "integer"
      }
    },
    mediaType: {
      shape: {
        type: "string"
      }
    }
  }
};
