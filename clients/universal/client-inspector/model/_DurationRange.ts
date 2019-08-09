import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DurationRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    minSeconds: {
      shape: {
        type: "integer",
        min: 180
      }
    },
    maxSeconds: {
      shape: {
        type: "integer",
        min: 180
      }
    }
  }
};
