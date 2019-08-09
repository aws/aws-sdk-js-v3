import { _CurrentRevision } from "./_CurrentRevision";
import { _ExecutionDetails } from "./_ExecutionDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutThirdPartyJobSuccessResultInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "clientToken"],
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
    currentRevision: {
      shape: _CurrentRevision
    },
    continuationToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    executionDetails: {
      shape: _ExecutionDetails
    }
  }
};
