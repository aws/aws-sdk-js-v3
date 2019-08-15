import { _BoundingBox } from "./_BoundingBox";
import { _FaceMatchList } from "./_FaceMatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFacesByImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SearchedFaceBoundingBox: {
      shape: _BoundingBox
    },
    SearchedFaceConfidence: {
      shape: {
        type: "float"
      }
    },
    FaceMatches: {
      shape: _FaceMatchList
    },
    FaceModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
