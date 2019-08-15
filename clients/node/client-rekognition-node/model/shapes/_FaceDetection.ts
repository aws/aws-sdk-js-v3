import { _FaceDetail } from "./_FaceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaceDetection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    Face: {
      shape: _FaceDetail
    }
  }
};
