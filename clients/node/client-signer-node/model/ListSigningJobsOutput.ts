import { _SigningJobs } from "./_SigningJobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _SigningJobs
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
