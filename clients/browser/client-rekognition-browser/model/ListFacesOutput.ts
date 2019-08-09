import { _FaceList } from "./_FaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Faces: {
      shape: _FaceList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    FaceModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
