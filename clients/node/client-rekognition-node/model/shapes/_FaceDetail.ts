import { _BoundingBox } from "./_BoundingBox";
import { _AgeRange } from "./_AgeRange";
import { _Smile } from "./_Smile";
import { _Eyeglasses } from "./_Eyeglasses";
import { _Sunglasses } from "./_Sunglasses";
import { _Gender } from "./_Gender";
import { _Beard } from "./_Beard";
import { _Mustache } from "./_Mustache";
import { _EyeOpen } from "./_EyeOpen";
import { _MouthOpen } from "./_MouthOpen";
import { _Emotions } from "./_Emotions";
import { _Landmarks } from "./_Landmarks";
import { _Pose } from "./_Pose";
import { _ImageQuality } from "./_ImageQuality";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaceDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BoundingBox: {
      shape: _BoundingBox
    },
    AgeRange: {
      shape: _AgeRange
    },
    Smile: {
      shape: _Smile
    },
    Eyeglasses: {
      shape: _Eyeglasses
    },
    Sunglasses: {
      shape: _Sunglasses
    },
    Gender: {
      shape: _Gender
    },
    Beard: {
      shape: _Beard
    },
    Mustache: {
      shape: _Mustache
    },
    EyesOpen: {
      shape: _EyeOpen
    },
    MouthOpen: {
      shape: _MouthOpen
    },
    Emotions: {
      shape: _Emotions
    },
    Landmarks: {
      shape: _Landmarks
    },
    Pose: {
      shape: _Pose
    },
    Quality: {
      shape: _ImageQuality
    },
    Confidence: {
      shape: {
        type: "float"
      }
    }
  }
};
