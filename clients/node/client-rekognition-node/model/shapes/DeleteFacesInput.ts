import { _FaceIdList } from "./_FaceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFacesInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId", "FaceIds"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FaceIds: {
      shape: _FaceIdList
    }
  }
};
