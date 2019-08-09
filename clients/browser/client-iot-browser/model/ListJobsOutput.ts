import { _JobSummaryList } from "./_JobSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _JobSummaryList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
