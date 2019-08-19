import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaceSearchSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FaceMatchThreshold: {
      shape: {
        type: "float"
      }
    }
  }
};
