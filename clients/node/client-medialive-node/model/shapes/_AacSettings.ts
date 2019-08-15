import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AacSettings: _Structure_ = {
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
    InputType: {
      shape: {
        type: "string"
      },
      locationName: "inputType"
    },
    Profile: {
      shape: {
        type: "string"
      },
      locationName: "profile"
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
        type: "float"
      },
      locationName: "sampleRate"
    },
    Spec: {
      shape: {
        type: "string"
      },
      locationName: "spec"
    },
    VbrQuality: {
      shape: {
        type: "string"
      },
      locationName: "vbrQuality"
    }
  }
};
