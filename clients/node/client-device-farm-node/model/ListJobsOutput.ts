import { _Jobs } from "./_Jobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _Jobs
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
