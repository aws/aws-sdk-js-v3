import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectedProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Width: {
      shape: {
        type: "integer"
      }
    },
    Height: {
      shape: {
        type: "integer"
      }
    },
    FrameRate: {
      shape: {
        type: "string"
      }
    },
    FileSize: {
      shape: {
        type: "integer"
      }
    },
    DurationMillis: {
      shape: {
        type: "integer"
      }
    }
  }
};
