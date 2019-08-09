import { _MetricFilters } from "./_MetricFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMetricFiltersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    metricFilters: {
      shape: _MetricFilters
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
