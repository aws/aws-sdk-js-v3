import { _MetricDataQueries } from "./_MetricDataQueries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricDataInput: _Structure_ = {
  type: "structure",
  required: ["MetricDataQueries", "StartTime", "EndTime"],
  members: {
    MetricDataQueries: {
      shape: _MetricDataQueries
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ScanBy: {
      shape: {
        type: "string"
      }
    },
    MaxDatapoints: {
      shape: {
        type: "integer"
      }
    }
  }
};
