import { _JobList } from "./_JobList";
import { _JobNameList } from "./_JobNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jobs: {
      shape: _JobList
    },
    JobsNotFound: {
      shape: _JobNameList
    }
  }
};
