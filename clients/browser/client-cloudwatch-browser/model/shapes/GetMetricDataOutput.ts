import { _MetricDataResults } from "./_MetricDataResults";
import { _MetricDataResultMessages } from "./_MetricDataResultMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricDataOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MetricDataResults: {
      shape: _MetricDataResults
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Messages: {
      shape: _MetricDataResultMessages
    }
  }
};
