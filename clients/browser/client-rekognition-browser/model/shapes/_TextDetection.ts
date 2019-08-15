import { _Geometry } from "./_Geometry";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TextDetection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DetectedText: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "integer"
      }
    },
    ParentId: {
      shape: {
        type: "integer"
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    },
    Geometry: {
      shape: _Geometry
    }
  }
};
