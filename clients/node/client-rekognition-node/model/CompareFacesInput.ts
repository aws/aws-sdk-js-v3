import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompareFacesInput: _Structure_ = {
  type: "structure",
  required: ["SourceImage", "TargetImage"],
  members: {
    SourceImage: {
      shape: _Image
    },
    TargetImage: {
      shape: _Image
    },
    SimilarityThreshold: {
      shape: {
        type: "float"
      }
    }
  }
};
