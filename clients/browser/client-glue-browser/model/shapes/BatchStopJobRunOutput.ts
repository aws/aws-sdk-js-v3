import { _BatchStopJobRunSuccessfulSubmissionList } from "./_BatchStopJobRunSuccessfulSubmissionList";
import { _BatchStopJobRunErrorList } from "./_BatchStopJobRunErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchStopJobRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulSubmissions: {
      shape: _BatchStopJobRunSuccessfulSubmissionList
    },
    Errors: {
      shape: _BatchStopJobRunErrorList
    }
  }
};
