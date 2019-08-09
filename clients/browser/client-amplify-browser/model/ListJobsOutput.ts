import { _JobSummaries } from "./_JobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: ["jobSummaries"],
  members: {
    jobSummaries: {
      shape: _JobSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
