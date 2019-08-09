import { _Face } from "./_Face";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaceMatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Similarity: {
      shape: {
        type: "float"
      }
    },
    Face: {
      shape: _Face
    }
  }
};
