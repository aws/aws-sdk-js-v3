import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MouthOpen: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "boolean"
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    }
  }
};
