import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Emotion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    }
  }
};
