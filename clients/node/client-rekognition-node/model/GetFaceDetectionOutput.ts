import { _VideoMetadata } from "./_VideoMetadata";
import { _FaceDetections } from "./_FaceDetections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFaceDetectionOutput: _Structure_ = {
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
    Faces: {
      shape: _FaceDetections
    }
  }
};
