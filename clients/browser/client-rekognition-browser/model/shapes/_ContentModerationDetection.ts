import { _ModerationLabel } from "./_ModerationLabel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContentModerationDetection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    ModerationLabel: {
      shape: _ModerationLabel
    }
  }
};
