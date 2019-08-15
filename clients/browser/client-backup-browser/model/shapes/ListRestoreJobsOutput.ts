import { _RestoreJobsList } from "./_RestoreJobsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRestoreJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RestoreJobs: {
      shape: _RestoreJobsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
