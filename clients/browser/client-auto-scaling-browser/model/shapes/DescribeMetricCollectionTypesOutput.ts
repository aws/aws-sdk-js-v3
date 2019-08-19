import { _MetricCollectionTypes } from "./_MetricCollectionTypes";
import { _MetricGranularityTypes } from "./_MetricGranularityTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMetricCollectionTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metrics: {
      shape: _MetricCollectionTypes
    },
    Granularities: {
      shape: _MetricGranularityTypes
    }
  }
};
