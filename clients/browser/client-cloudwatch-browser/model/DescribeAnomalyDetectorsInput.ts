import { _Dimensions } from "./_Dimensions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAnomalyDetectorsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
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
