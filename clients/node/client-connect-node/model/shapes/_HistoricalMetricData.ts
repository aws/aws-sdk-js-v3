import { _HistoricalMetric } from "./_HistoricalMetric";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoricalMetricData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metric: {
      shape: _HistoricalMetric
    },
    Value: {
      shape: {
        type: "float"
      }
    }
  }
};
