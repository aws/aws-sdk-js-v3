import { _StackSetSummaries } from "./_StackSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Summaries: {
      shape: _StackSetSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
