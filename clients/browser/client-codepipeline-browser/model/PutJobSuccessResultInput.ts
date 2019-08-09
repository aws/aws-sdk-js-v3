import { _CurrentRevision } from "./_CurrentRevision";
import { _ExecutionDetails } from "./_ExecutionDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutJobSuccessResultInput: _Structure_ = {
  type: "structure",
  required: ["jobId"],
  members: {
    jobId: {
      shape: {
        type: "string"
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
