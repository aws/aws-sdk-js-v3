import { _BoundingBox } from "./_BoundingBox";
import { _FaceDetail } from "./_FaceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PersonDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    BoundingBox: {
      shape: _BoundingBox
    },
    Face: {
      shape: _FaceDetail
    }
  }
};
