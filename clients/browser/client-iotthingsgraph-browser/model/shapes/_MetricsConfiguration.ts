import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cloudMetricEnabled: {
      shape: {
        type: "boolean"
      }
    },
    metricRuleRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
