import { _MetricTransformations } from "./_MetricTransformations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    creationTime: {
      shape: {
        type: "integer"
      }
    },
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
