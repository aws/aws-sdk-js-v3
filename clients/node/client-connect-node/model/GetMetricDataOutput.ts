import { _HistoricalMetricResults } from "./_HistoricalMetricResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MetricResults: {
      shape: _HistoricalMetricResults
    }
  }
};
