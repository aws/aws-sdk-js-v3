import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectLabelsInput: _Structure_ = {
  type: "structure",
  required: ["Image"],
  members: {
    Image: {
      shape: _Image
    },
    MaxLabels: {
      shape: {
        type: "integer"
      }
    },
    MinConfidence: {
      shape: {
        type: "float"
      }
    }
  }
};
