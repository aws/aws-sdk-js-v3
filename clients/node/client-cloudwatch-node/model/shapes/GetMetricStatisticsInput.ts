import { _Dimensions } from "./_Dimensions";
import { _Statistics } from "./_Statistics";
import { _ExtendedStatistics } from "./_ExtendedStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricStatisticsInput: _Structure_ = {
  type: "structure",
  required: ["Namespace", "MetricName", "StartTime", "EndTime", "Period"],
  members: {
    Namespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Dimensions: {
      shape: _Dimensions
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
    Period: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Statistics: {
      shape: _Statistics
    },
    ExtendedStatistics: {
      shape: _ExtendedStatistics
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
