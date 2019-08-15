import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rectangle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Height: {
      shape: {
        type: "integer",
        min: 2
      },
      locationName: "height"
    },
    Width: {
      shape: {
        type: "integer",
        min: 2
      },
      locationName: "width"
    },
    X: {
      shape: {
        type: "integer"
      },
      locationName: "x"
    },
    Y: {
      shape: {
        type: "integer"
      },
      locationName: "y"
    }
  }
};
