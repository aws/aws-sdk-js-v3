import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StringFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
