import { _JobRun } from "./_JobRun";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobRun: {
      shape: _JobRun
    }
  }
};
