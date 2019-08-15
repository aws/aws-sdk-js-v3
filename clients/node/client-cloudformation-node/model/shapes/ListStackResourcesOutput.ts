import { _StackResourceSummaries } from "./_StackResourceSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackResourceSummaries: {
      shape: _StackResourceSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
