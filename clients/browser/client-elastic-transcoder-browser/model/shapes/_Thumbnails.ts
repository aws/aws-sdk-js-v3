import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Thumbnails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    Interval: {
      shape: {
        type: "string"
      }
    },
    Resolution: {
      shape: {
        type: "string"
      }
    },
    AspectRatio: {
      shape: {
        type: "string"
      }
    },
    MaxWidth: {
      shape: {
        type: "string"
      }
    },
    MaxHeight: {
      shape: {
        type: "string"
      }
    },
    SizingPolicy: {
      shape: {
        type: "string"
      }
    },
    PaddingPolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
