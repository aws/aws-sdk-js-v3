import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MapFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    Comparison: {
      shape: {
        type: "string"
      }
    }
  }
};
