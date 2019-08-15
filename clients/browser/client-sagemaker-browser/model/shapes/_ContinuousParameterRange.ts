import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContinuousParameterRange: _Structure_ = {
  type: "structure",
  required: ["Name", "MinValue", "MaxValue"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    MinValue: {
      shape: {
        type: "string"
      }
    },
    MaxValue: {
      shape: {
        type: "string"
      }
    },
    ScalingType: {
      shape: {
        type: "string"
      }
    }
  }
};
