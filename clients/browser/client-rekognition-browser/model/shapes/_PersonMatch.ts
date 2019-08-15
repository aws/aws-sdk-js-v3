import { _PersonDetail } from "./_PersonDetail";
import { _FaceMatchList } from "./_FaceMatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PersonMatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    Person: {
      shape: _PersonDetail
    },
    FaceMatches: {
      shape: _FaceMatchList
    }
  }
};
