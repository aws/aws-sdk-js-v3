import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PredefinedLoadMetricSpecification: _Structure_ = {
  type: "structure",
  required: ["PredefinedLoadMetricType"],
  members: {
    PredefinedLoadMetricType: {
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
