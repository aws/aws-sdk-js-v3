import { _VideoMetadata } from "./_VideoMetadata";
import { _LabelDetections } from "./_LabelDetections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLabelDetectionOutput: _Structure_ = {
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
    Labels: {
      shape: _LabelDetections
    },
    LabelModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
