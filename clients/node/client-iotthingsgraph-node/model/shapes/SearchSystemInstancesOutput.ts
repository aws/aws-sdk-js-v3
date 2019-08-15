import { _SystemInstanceSummaries } from "./_SystemInstanceSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchSystemInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summaries: {
      shape: _SystemInstanceSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
