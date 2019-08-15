import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTuningJobObjective: _Structure_ = {
  type: "structure",
  required: ["Type", "MetricName"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
