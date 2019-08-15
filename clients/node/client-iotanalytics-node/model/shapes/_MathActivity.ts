import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MathActivity: _Structure_ = {
  type: "structure",
  required: ["name", "attribute", "math"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attribute: {
      shape: {
        type: "string",
        min: 1
      }
    },
    math: {
      shape: {
        type: "string",
        min: 1
      }
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
