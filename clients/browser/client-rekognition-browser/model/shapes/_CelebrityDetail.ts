import { _Urls } from "./_Urls";
import { _BoundingBox } from "./_BoundingBox";
import { _FaceDetail } from "./_FaceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CelebrityDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Urls: {
      shape: _Urls
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Confidence: {
      shape: {
        type: "float"
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
