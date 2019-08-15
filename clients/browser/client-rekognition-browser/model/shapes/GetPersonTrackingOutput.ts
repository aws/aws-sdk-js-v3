import { _VideoMetadata } from "./_VideoMetadata";
import { _PersonDetections } from "./_PersonDetections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPersonTrackingOutput: _Structure_ = {
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
    Persons: {
      shape: _PersonDetections
    }
  }
};
