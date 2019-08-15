import { _GroupSummaryList } from "./_GroupSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
