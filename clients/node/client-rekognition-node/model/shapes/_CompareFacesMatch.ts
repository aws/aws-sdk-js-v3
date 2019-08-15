import { _ComparedFace } from "./_ComparedFace";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompareFacesMatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Similarity: {
      shape: {
        type: "float"
      }
    },
    Face: {
      shape: _ComparedFace
    }
  }
};
