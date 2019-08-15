import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMetricFiltersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    metricName: {
      shape: {
        type: "string"
      }
    },
    metricNamespace: {
      shape: {
        type: "string"
      }
    }
  }
};
