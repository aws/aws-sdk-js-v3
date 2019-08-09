import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AiffSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BitDepth: {
      shape: {
        type: "integer",
        min: 16
      },
      locationName: "bitDepth"
    },
    Channels: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "channels"
    },
    SampleRate: {
      shape: {
        type: "integer",
        min: 8000
      },
      locationName: "sampleRate"
    }
  }
};
