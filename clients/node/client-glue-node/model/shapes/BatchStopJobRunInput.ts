import { _BatchStopJobRunJobRunIdList } from "./_BatchStopJobRunJobRunIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchStopJobRunInput: _Structure_ = {
  type: "structure",
  required: ["JobName", "JobRunIds"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobRunIds: {
      shape: _BatchStopJobRunJobRunIdList
    }
  }
};
