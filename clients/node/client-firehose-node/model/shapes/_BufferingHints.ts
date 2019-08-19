import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BufferingHints: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SizeInMBs: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    IntervalInSeconds: {
      shape: {
        type: "integer",
        min: 60
      }
    }
  }
};
