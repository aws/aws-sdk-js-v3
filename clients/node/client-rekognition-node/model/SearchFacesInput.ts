import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFacesInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId", "FaceId"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FaceId: {
      shape: {
        type: "string"
      }
    },
    MaxFaces: {
      shape: {
        type: "integer",
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
