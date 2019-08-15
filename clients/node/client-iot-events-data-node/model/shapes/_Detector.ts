import { _DetectorState } from "./_DetectorState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Detector: _Structure_ = {
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
      shape: _DetectorState
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
