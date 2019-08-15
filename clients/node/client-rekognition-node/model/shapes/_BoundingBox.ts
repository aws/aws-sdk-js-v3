import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BoundingBox: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Width: {
      shape: {
        type: "float"
      }
    },
    Height: {
      shape: {
        type: "float"
      }
    },
    Left: {
      shape: {
        type: "float"
      }
    },
    Top: {
      shape: {
        type: "float"
      }
    }
  }
};
