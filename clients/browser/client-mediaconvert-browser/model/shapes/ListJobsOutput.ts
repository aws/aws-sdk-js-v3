import { ___listOfJob } from "./___listOfJob";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jobs: {
      shape: ___listOfJob,
      locationName: "jobs"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
