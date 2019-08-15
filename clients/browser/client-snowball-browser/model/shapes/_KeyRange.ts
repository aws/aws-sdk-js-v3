import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BeginMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EndMarker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
