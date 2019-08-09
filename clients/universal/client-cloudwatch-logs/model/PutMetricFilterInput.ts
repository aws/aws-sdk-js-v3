import { _MetricTransformations } from "./_MetricTransformations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMetricFilterInput: _Structure_ = {
  type: "structure",
  required: [
    "logGroupName",
    "filterName",
    "filterPattern",
    "metricTransformations"
  ],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterPattern: {
      shape: {
        type: "string"
      }
    },
    metricTransformations: {
      shape: _MetricTransformations
    }
  }
};
