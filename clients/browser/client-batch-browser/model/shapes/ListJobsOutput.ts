import { _JobSummaryList } from "./_JobSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: ["jobSummaryList"],
  members: {
    jobSummaryList: {
      shape: _JobSummaryList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
