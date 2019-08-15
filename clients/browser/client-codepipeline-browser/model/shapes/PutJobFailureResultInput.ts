import { _FailureDetails } from "./_FailureDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutJobFailureResultInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "failureDetails"],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    failureDetails: {
      shape: _FailureDetails
    }
  }
};
