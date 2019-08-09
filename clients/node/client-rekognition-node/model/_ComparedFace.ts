import { _BoundingBox } from "./_BoundingBox";
import { _Landmarks } from "./_Landmarks";
import { _Pose } from "./_Pose";
import { _ImageQuality } from "./_ImageQuality";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComparedFace: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BoundingBox: {
      shape: _BoundingBox
    },
    Confidence: {
      shape: {
        type: "float"
      }
    },
    Landmarks: {
      shape: _Landmarks
    },
    Pose: {
      shape: _Pose
    },
    Quality: {
      shape: _ImageQuality
    }
  }
};
