import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Threshold: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Comparison: {
      shape: {
        type: "string"
      }
    },
    ThresholdValue: {
      shape: {
        type: "float"
      }
    }
  }
};
