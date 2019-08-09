import { _JobList } from "./_JobList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jobs: {
      shape: _JobList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
