import { _StackSetOperationResultSummaries } from "./_StackSetOperationResultSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackSetOperationResultsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Summaries: {
      shape: _StackSetOperationResultSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
