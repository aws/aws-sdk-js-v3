import { _MetricStatisticList } from "./_MetricStatisticList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceMetricDataInput: _Structure_ = {
  type: "structure",
  required: [
    "instanceName",
    "metricName",
    "period",
    "startTime",
    "endTime",
    "unit",
    "statistics"
  ],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    },
    metricName: {
      shape: {
        type: "string"
      }
    },
    period: {
      shape: {
        type: "integer",
        min: 60
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    unit: {
      shape: {
        type: "string"
      }
    },
    statistics: {
      shape: _MetricStatisticList
    }
  }
};
