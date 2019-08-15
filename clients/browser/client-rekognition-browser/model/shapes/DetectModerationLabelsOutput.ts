import { _ModerationLabels } from "./_ModerationLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectModerationLabelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ModerationLabels: {
      shape: _ModerationLabels
    },
    ModerationModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
