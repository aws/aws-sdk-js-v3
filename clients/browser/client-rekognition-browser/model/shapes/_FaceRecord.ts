import { _Face } from "./_Face";
import { _FaceDetail } from "./_FaceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaceRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Face: {
      shape: _Face
    },
    FaceDetail: {
      shape: _FaceDetail
    }
  }
};
