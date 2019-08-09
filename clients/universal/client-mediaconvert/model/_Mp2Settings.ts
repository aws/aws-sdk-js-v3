import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Mp2Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bitrate: {
      shape: {
        type: "integer",
        min: 32000
      },
      locationName: "bitrate"
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
        min: 32000
      },
      locationName: "sampleRate"
    }
  }
};
