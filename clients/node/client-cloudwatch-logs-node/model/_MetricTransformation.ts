import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricTransformation: _Structure_ = {
  type: "structure",
  required: ["metricName", "metricNamespace", "metricValue"],
  members: {
    metricName: {
      shape: {
        type: "string"
      }
    },
    metricNamespace: {
      shape: {
        type: "string"
      }
    },
    metricValue: {
      shape: {
        type: "string"
      }
    },
    defaultValue: {
      shape: {
        type: "float"
      }
    }
  }
};
