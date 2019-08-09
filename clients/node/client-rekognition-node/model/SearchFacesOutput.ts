import { _FaceMatchList } from "./_FaceMatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SearchedFaceId: {
      shape: {
        type: "string"
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
