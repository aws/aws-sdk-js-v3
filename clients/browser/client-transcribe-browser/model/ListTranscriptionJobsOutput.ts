import { _TranscriptionJobSummaries } from "./_TranscriptionJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTranscriptionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    TranscriptionJobSummaries: {
      shape: _TranscriptionJobSummaries
    }
  }
};
