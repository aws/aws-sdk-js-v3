import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Eac3Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttenuationControl: {
      shape: {
        type: "string"
      },
      locationName: "attenuationControl"
    },
    Bitrate: {
      shape: {
        type: "float"
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
    DcFilter: {
      shape: {
        type: "string"
      },
      locationName: "dcFilter"
    },
    Dialnorm: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "dialnorm"
    },
    DrcLine: {
      shape: {
        type: "string"
      },
      locationName: "drcLine"
    },
    DrcRf: {
      shape: {
        type: "string"
      },
      locationName: "drcRf"
    },
    LfeControl: {
      shape: {
        type: "string"
      },
      locationName: "lfeControl"
    },
    LfeFilter: {
      shape: {
        type: "string"
      },
      locationName: "lfeFilter"
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
    MetadataControl: {
      shape: {
        type: "string"
      },
      locationName: "metadataControl"
    },
    PassthroughControl: {
      shape: {
        type: "string"
      },
      locationName: "passthroughControl"
    },
    PhaseControl: {
      shape: {
        type: "string"
      },
      locationName: "phaseControl"
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
    },
    SurroundMode: {
      shape: {
        type: "string"
      },
      locationName: "surroundMode"
    }
  }
};
