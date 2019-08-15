import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Beard: _Structure_ = {
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
