import { _JobSummary } from "./_JobSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopJobOutput: _Structure_ = {
  type: "structure",
  required: ["jobSummary"],
  members: {
    jobSummary: {
      shape: _JobSummary
    }
  }
};
