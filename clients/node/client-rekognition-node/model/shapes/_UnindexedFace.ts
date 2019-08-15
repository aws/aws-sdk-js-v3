import { _Reasons } from "./_Reasons";
import { _FaceDetail } from "./_FaceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnindexedFace: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Reasons: {
      shape: _Reasons
    },
    FaceDetail: {
      shape: _FaceDetail
    }
  }
};
