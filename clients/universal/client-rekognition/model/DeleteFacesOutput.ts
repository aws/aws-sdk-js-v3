import { _FaceIdList } from "./_FaceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeletedFaces: {
      shape: _FaceIdList
    }
  }
};
