import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IntegerHyperParameterRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    minValue: {
      shape: {
        type: "integer",
        min: -1000000
      }
    },
    maxValue: {
      shape: {
        type: "integer"
      }
    }
  }
};
