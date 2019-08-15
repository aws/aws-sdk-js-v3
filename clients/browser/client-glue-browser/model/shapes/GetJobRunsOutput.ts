import { _JobRunList } from "./_JobRunList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobRunsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobRuns: {
      shape: _JobRunList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
