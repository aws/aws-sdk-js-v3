import { Structure as _Structure_ } from "@aws-sdk/types";

export const _H265QvbrSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxAverageBitrate: {
      shape: {
        type: "integer",
        min: 1000
      },
      locationName: "maxAverageBitrate"
    },
    QvbrQualityLevel: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "qvbrQualityLevel"
    }
  }
};
