import { _StackSummaries } from "./_StackSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStacksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSummaries: {
      shape: _StackSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
