import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PredefinedScalingMetricSpecification: _Structure_ = {
  type: "structure",
  required: ["PredefinedScalingMetricType"],
  members: {
    PredefinedScalingMetricType: {
      shape: {
        type: "string"
      }
    },
    ResourceLabel: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
