import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deinterlacer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Algorithm: {
      shape: {
        type: "string"
      },
      locationName: "algorithm"
    },
    Control: {
      shape: {
        type: "string"
      },
      locationName: "control"
    },
    Mode: {
      shape: {
        type: "string"
      },
      locationName: "mode"
    }
  }
};
