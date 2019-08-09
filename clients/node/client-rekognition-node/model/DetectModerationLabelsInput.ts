import { _Image } from "./_Image";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectModerationLabelsInput: _Structure_ = {
  type: "structure",
  required: ["Image"],
  members: {
    Image: {
      shape: _Image
    },
    MinConfidence: {
      shape: {
        type: "float"
      }
    }
  }
};
