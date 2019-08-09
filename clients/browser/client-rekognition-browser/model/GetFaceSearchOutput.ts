import { _VideoMetadata } from "./_VideoMetadata";
import { _PersonMatches } from "./_PersonMatches";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFaceSearchOutput: _Structure_ = {
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
    NextToken: {
      shape: {
        type: "string"
      }
    },
    VideoMetadata: {
      shape: _VideoMetadata
    },
    Persons: {
      shape: _PersonMatches
    }
  }
};
