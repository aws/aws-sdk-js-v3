import { _DimensionFilters } from "./_DimensionFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMetricsInput: _Structure_ = {
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
      shape: _DimensionFilters
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
