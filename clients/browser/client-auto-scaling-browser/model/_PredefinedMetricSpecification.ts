import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PredefinedMetricSpecification: _Structure_ = {
  type: "structure",
  required: ["PredefinedMetricType"],
  members: {
    PredefinedMetricType: {
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
