import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Mp2Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bitrate: {
      shape: {
        type: "float"
      },
      locationName: "bitrate"
    },
    CodingMode: {
      shape: {
        type: "string"
      },
      locationName: "codingMode"
    },
    SampleRate: {
      shape: {
        type: "float"
      },
      locationName: "sampleRate"
    }
  }
};
