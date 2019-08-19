import { _StackInstanceSummaries } from "./_StackInstanceSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Summaries: {
      shape: _StackInstanceSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
