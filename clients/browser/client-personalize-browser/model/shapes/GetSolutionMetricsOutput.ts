import { _Metrics } from "./_Metrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSolutionMetricsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutionVersionArn: {
      shape: {
        type: "string"
      }
    },
    metrics: {
      shape: _Metrics
    }
  }
};
