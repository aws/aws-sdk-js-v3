import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModerationLabel: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Confidence: {
      shape: {
        type: "float"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    ParentName: {
      shape: {
        type: "string"
      }
    }
  }
};
