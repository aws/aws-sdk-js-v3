import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFacesByImageInput: _Structure_ = {
  type: "structure",
  required: ["CollectionId", "Image"],
  members: {
    CollectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Image: {
      shape: _Image
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
