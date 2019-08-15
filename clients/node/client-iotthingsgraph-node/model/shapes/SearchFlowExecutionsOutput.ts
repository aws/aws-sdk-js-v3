import { _FlowExecutionSummaries } from "./_FlowExecutionSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFlowExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summaries: {
      shape: _FlowExecutionSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
