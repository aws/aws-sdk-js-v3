import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorModelSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    detectorModelDescription: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
