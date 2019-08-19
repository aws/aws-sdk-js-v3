import { _MetricStatisticList } from "./_MetricStatisticList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoadBalancerMetricDataInput: _Structure_ = {
  type: "structure",
  required: [
    "loadBalancerName",
    "metricName",
    "period",
    "startTime",
    "endTime",
    "unit",
    "statistics"
  ],
  members: {
    loadBalancerName: {
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
