import { _DetectorStateDefinition } from "./_DetectorStateDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateDetectorRequest: _Structure_ = {
  type: "structure",
  required: ["messageId", "detectorModelName", "state"],
  members: {
    messageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    state: {
      shape: _DetectorStateDefinition
    }
  }
};
