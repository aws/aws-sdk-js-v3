import { _Dimensions } from "./_Dimensions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlarmsForMetricInput: _Structure_ = {
  type: "structure",
  required: ["MetricName", "Namespace"],
  members: {
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Namespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Statistic: {
      shape: {
        type: "string"
      }
    },
    ExtendedStatistic: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _Dimensions
    },
    Period: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
