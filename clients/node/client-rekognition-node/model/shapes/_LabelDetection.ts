import { _Label } from "./_Label";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelDetection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    Label: {
      shape: _Label
    }
  }
};
