import { _CelebrityDetail } from "./_CelebrityDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CelebrityRecognition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    Celebrity: {
      shape: _CelebrityDetail
    }
  }
};
