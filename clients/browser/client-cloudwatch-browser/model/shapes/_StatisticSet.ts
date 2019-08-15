import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StatisticSet: _Structure_ = {
  type: "structure",
  required: ["SampleCount", "Sum", "Minimum", "Maximum"],
  members: {
    SampleCount: {
      shape: {
        type: "float"
      }
    },
    Sum: {
      shape: {
        type: "float"
      }
    },
    Minimum: {
      shape: {
        type: "float"
      }
    },
    Maximum: {
      shape: {
        type: "float"
      }
    }
  }
};
