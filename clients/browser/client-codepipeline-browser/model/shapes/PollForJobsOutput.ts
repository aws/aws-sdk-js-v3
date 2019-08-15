import { _JobList } from "./_JobList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _JobList
    }
  }
};
