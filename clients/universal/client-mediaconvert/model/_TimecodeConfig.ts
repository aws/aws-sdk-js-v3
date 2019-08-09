import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimecodeConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Anchor: {
      shape: {
        type: "string"
      },
      locationName: "anchor"
    },
    Source: {
      shape: {
        type: "string"
      },
      locationName: "source"
    },
    Start: {
      shape: {
        type: "string"
      },
      locationName: "start"
    },
    TimestampOffset: {
      shape: {
        type: "string"
      },
      locationName: "timestampOffset"
    }
  }
};
