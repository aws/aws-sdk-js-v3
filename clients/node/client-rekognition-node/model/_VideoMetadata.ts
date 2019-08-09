import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Codec: {
      shape: {
        type: "string"
      }
    },
    DurationMillis: {
      shape: {
        type: "integer"
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    FrameRate: {
      shape: {
        type: "float"
      }
    },
    FrameHeight: {
      shape: {
        type: "integer"
      }
    },
    FrameWidth: {
      shape: {
        type: "integer"
      }
    }
  }
};
