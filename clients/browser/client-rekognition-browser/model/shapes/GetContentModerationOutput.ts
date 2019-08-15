import { _VideoMetadata } from "./_VideoMetadata";
import { _ContentModerationDetections } from "./_ContentModerationDetections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContentModerationOutput: _Structure_ = {
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
    ModerationLabels: {
      shape: _ContentModerationDetections
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ModerationModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
