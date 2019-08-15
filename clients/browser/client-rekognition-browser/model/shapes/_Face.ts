import { _BoundingBox } from "./_BoundingBox";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Face: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FaceId: {
      shape: {
        type: "string"
      }
    },
    BoundingBox: {
      shape: _BoundingBox
    },
    ImageId: {
      shape: {
        type: "string"
      }
    },
    ExternalImageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    }
  }
};
