import { _FailureDetails } from "./_FailureDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutThirdPartyJobFailureResultInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "clientToken", "failureDetails"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    clientToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    failureDetails: {
      shape: _FailureDetails
    }
  }
};
