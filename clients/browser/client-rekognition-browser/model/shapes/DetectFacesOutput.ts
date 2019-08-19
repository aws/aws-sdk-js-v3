import { _FaceDetailList } from "./_FaceDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FaceDetails: {
      shape: _FaceDetailList
    },
    OrientationCorrection: {
      shape: {
        type: "string"
      }
    }
  }
};
