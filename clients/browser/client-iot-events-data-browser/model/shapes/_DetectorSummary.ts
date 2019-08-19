import { _DetectorStateSummary } from "./_DetectorStateSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    keyValue: {
      shape: {
        type: "string",
        min: 1
      }
    },
    detectorModelVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    state: {
      shape: _DetectorStateSummary
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
