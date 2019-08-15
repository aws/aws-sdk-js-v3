import { _Dimensions } from "./_Dimensions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Metric: _Structure_ = {
  type: "structure",
  required: [],
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
    }
  }
};
