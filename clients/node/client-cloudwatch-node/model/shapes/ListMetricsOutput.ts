import { _Metrics } from "./_Metrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMetricsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metrics: {
      shape: _Metrics
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
