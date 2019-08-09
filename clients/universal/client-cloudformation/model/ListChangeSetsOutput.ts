import { _ChangeSetSummaries } from "./_ChangeSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChangeSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Summaries: {
      shape: _ChangeSetSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
