import { _VideoMetadata } from "./_VideoMetadata";
import { _CelebrityRecognitions } from "./_CelebrityRecognitions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCelebrityRecognitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    VideoMetadata: {
      shape: _VideoMetadata
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Celebrities: {
      shape: _CelebrityRecognitions
    }
  }
};
