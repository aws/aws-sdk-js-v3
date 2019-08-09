import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FinalHyperParameterTuningJobObjectiveMetric: _Structure_ = {
  type: "structure",
  required: ["MetricName", "Value"],
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
    },
    Value: {
      shape: {
        type: "float"
      }
    }
  }
};
