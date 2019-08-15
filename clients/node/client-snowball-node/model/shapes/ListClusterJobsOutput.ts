import { _JobListEntryList } from "./_JobListEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClusterJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobListEntries: {
      shape: _JobListEntryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
