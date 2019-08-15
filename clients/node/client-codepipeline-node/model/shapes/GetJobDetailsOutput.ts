import { _JobDetails } from "./_JobDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobDetails: {
      shape: _JobDetails
    }
  }
};
