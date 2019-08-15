import { _CurrentMetric } from "./_CurrentMetric";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CurrentMetricData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metric: {
      shape: _CurrentMetric
    },
    Value: {
      shape: {
        type: "float"
      }
    }
  }
};
