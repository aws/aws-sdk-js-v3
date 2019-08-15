import { _CelebrityList } from "./_CelebrityList";
import { _ComparedFaceList } from "./_ComparedFaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RecognizeCelebritiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CelebrityFaces: {
      shape: _CelebrityList
    },
    UnrecognizedFaces: {
      shape: _ComparedFaceList
    },
    OrientationCorrection: {
      shape: {
        type: "string"
      }
    }
  }
};
