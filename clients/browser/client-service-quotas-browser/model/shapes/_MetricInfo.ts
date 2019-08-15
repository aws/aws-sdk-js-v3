import { _MetricDimensionsMapDefinition } from "./_MetricDimensionsMapDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MetricNamespace: {
      shape: {
        type: "string"
      }
    },
    MetricName: {
      shape: {
        type: "string"
      }
    },
    MetricDimensions: {
      shape: _MetricDimensionsMapDefinition
    },
    MetricStatisticRecommendation: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
