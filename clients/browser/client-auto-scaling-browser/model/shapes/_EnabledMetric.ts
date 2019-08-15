import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnabledMetric: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metric: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Granularity: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
