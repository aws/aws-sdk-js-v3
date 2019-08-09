import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Eac3AtmosSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bitrate: {
      shape: {
        type: "integer",
        min: 384000
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
    DialogueIntelligence: {
      shape: {
        type: "string"
      },
      locationName: "dialogueIntelligence"
    },
    DynamicRangeCompressionLine: {
      shape: {
        type: "string"
      },
      locationName: "dynamicRangeCompressionLine"
    },
    DynamicRangeCompressionRf: {
      shape: {
        type: "string"
      },
      locationName: "dynamicRangeCompressionRf"
    },
    LoRoCenterMixLevel: {
      shape: {
        type: "float"
      },
      locationName: "loRoCenterMixLevel"
    },
    LoRoSurroundMixLevel: {
      shape: {
        type: "float"
      },
      locationName: "loRoSurroundMixLevel"
    },
    LtRtCenterMixLevel: {
      shape: {
        type: "float"
      },
      locationName: "ltRtCenterMixLevel"
    },
    LtRtSurroundMixLevel: {
      shape: {
        type: "float"
      },
      locationName: "ltRtSurroundMixLevel"
    },
    MeteringMode: {
      shape: {
        type: "string"
      },
      locationName: "meteringMode"
    },
    SampleRate: {
      shape: {
        type: "integer",
        min: 48000
      },
      locationName: "sampleRate"
    },
    SpeechThreshold: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "speechThreshold"
    },
    StereoDownmix: {
      shape: {
        type: "string"
      },
      locationName: "stereoDownmix"
    },
    SurroundExMode: {
      shape: {
        type: "string"
      },
      locationName: "surroundExMode"
    }
  }
};
