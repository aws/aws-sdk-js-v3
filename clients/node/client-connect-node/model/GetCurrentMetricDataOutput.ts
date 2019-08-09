import { _CurrentMetricResults } from "./_CurrentMetricResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCurrentMetricDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MetricResults: {
      shape: _CurrentMetricResults
    },
    DataSnapshotTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
