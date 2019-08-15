import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudwatchMetricAction: _Structure_ = {
  type: "structure",
  required: [
    "roleArn",
    "metricNamespace",
    "metricName",
    "metricValue",
    "metricUnit"
  ],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    metricNamespace: {
      shape: {
        type: "string"
      }
    },
    metricName: {
      shape: {
        type: "string"
      }
    },
    metricValue: {
      shape: {
        type: "string"
      }
    },
    metricUnit: {
      shape: {
        type: "string"
      }
    },
    metricTimestamp: {
      shape: {
        type: "string"
      }
    }
  }
};
