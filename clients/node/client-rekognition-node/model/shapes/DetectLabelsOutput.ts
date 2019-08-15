import { _Labels } from "./_Labels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectLabelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Labels: {
      shape: _Labels
    },
    OrientationCorrection: {
      shape: {
        type: "string"
      }
    },
    LabelModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
