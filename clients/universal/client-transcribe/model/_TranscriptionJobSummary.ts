import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TranscriptionJobSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TranscriptionJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompletionTime: {
      shape: {
        type: "timestamp"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    TranscriptionJobStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    OutputLocationType: {
      shape: {
        type: "string"
      }
    }
  }
};
