import { _MetricFilterMatches } from "./_MetricFilterMatches";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestMetricFilterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    matches: {
      shape: _MetricFilterMatches
    }
  }
};
