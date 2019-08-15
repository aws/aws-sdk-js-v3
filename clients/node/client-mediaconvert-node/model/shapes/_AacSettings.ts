import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AacSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioDescriptionBroadcasterMix: {
      shape: {
        type: "string"
      },
      locationName: "audioDescriptionBroadcasterMix"
    },
    Bitrate: {
      shape: {
        type: "integer",
        min: 6000
      },
      locationName: "bitrate"
    },
    CodecProfile: {
      shape: {
        type: "string"
      },
      locationName: "codecProfile"
    },
    CodingMode: {
      shape: {
        type: "string"
      },
      locationName: "codingMode"
    },
    RateControlMode: {
      shape: {
        type: "string"
      },
      locationName: "rateControlMode"
    },
    RawFormat: {
      shape: {
        type: "string"
      },
      locationName: "rawFormat"
    },
    SampleRate: {
      shape: {
        type: "integer",
        min: 8000
      },
      locationName: "sampleRate"
    },
    Specification: {
      shape: {
        type: "string"
      },
      locationName: "specification"
    },
    VbrQuality: {
      shape: {
        type: "string"
      },
      locationName: "vbrQuality"
    }
  }
};
