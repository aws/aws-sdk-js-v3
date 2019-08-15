import { _StackSetOperationSummaries } from "./_StackSetOperationSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackSetOperationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Summaries: {
      shape: _StackSetOperationSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
