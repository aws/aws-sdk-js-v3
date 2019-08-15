import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ac3Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bitrate: {
      shape: {
        type: "integer",
        min: 64000
      },
      locationName: "bitrate"
    },
    BitstreamMode: {
      shape: {
        type: "string"
      },
      locationName: "bitstreamMode"
    },
    CodingMode: {
      shape: {
        type: "string"
      },
      locationName: "codingMode"
    },
    Dialnorm: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "dialnorm"
    },
    DynamicRangeCompressionProfile: {
      shape: {
        type: "string"
      },
      locationName: "dynamicRangeCompressionProfile"
    },
    LfeFilter: {
      shape: {
        type: "string"
      },
      locationName: "lfeFilter"
    },
    MetadataControl: {
      shape: {
        type: "string"
      },
      locationName: "metadataControl"
    },
    SampleRate: {
      shape: {
        type: "integer",
        min: 48000
      },
      locationName: "sampleRate"
    }
  }
};
