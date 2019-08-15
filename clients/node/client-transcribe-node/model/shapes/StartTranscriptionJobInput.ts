import { _Media } from "./_Media";
import { _Settings } from "./_Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartTranscriptionJobInput: _Structure_ = {
  type: "structure",
  required: ["TranscriptionJobName", "LanguageCode", "MediaFormat", "Media"],
  members: {
    TranscriptionJobName: {
      shape: {
        type: "string",
        min: 1
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
    OutputBucketName: {
      shape: {
        type: "string"
      }
    },
    Settings: {
      shape: _Settings
    }
  }
};
