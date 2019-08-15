import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContinuousParameterRangeSpecification: _Structure_ = {
  type: "structure",
  required: ["MinValue", "MaxValue"],
  members: {
    MinValue: {
      shape: {
        type: "string"
      }
    },
    MaxValue: {
      shape: {
        type: "string"
      }
    }
  }
};
