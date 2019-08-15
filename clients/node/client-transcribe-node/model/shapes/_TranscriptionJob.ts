import { _Media } from "./_Media";
import { _Transcript } from "./_Transcript";
import { _Settings } from "./_Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TranscriptionJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TranscriptionJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TranscriptionJobStatus: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    MediaSampleRateHertz: {
      shape: {
        type: "integer",
        min: 8000
      }
    },
    MediaFormat: {
      shape: {
        type: "string"
      }
    },
    Media: {
      shape: _Media
    },
    Transcript: {
      shape: _Transcript
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
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    Settings: {
      shape: _Settings
    }
  }
};
