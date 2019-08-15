import { _MetricDimensions } from "./_MetricDimensions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomizedMetricSpecification: _Structure_ = {
  type: "structure",
  required: ["MetricName", "Namespace", "Statistic"],
  members: {
    MetricName: {
      shape: {
        type: "string"
      }
    },
    Namespace: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _MetricDimensions
    },
    Statistic: {
      shape: {
        type: "string"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
