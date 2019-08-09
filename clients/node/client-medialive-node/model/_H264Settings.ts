import { Structure as _Structure_ } from "@aws-sdk/types";

export const _H264Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "adaptiveQuantization"
    },
    AfdSignaling: {
      shape: {
        type: "string"
      },
      locationName: "afdSignaling"
    },
    Bitrate: {
      shape: {
        type: "integer",
        min: 1000
      },
      locationName: "bitrate"
    },
    BufFillPct: {
      shape: {
        type: "integer"
      },
      locationName: "bufFillPct"
    },
    BufSize: {
      shape: {
        type: "integer"
      },
      locationName: "bufSize"
    },
    ColorMetadata: {
      shape: {
        type: "string"
      },
      locationName: "colorMetadata"
    },
    EntropyEncoding: {
      shape: {
        type: "string"
      },
      locationName: "entropyEncoding"
    },
    FixedAfd: {
      shape: {
        type: "string"
      },
      locationName: "fixedAfd"
    },
    FlickerAq: {
      shape: {
        type: "string"
      },
      locationName: "flickerAq"
    },
    FramerateControl: {
      shape: {
        type: "string"
      },
      locationName: "framerateControl"
    },
    FramerateDenominator: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "framerateDenominator"
    },
    FramerateNumerator: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "framerateNumerator"
    },
    GopBReference: {
      shape: {
        type: "string"
      },
      locationName: "gopBReference"
    },
    GopClosedCadence: {
      shape: {
        type: "integer"
      },
      locationName: "gopClosedCadence"
    },
    GopNumBFrames: {
      shape: {
        type: "integer"
      },
      locationName: "gopNumBFrames"
    },
    GopSize: {
      shape: {
        type: "float"
      },
      locationName: "gopSize"
    },
    GopSizeUnits: {
      shape: {
        type: "string"
      },
      locationName: "gopSizeUnits"
    },
    Level: {
      shape: {
        type: "string"
      },
      locationName: "level"
    },
    LookAheadRateControl: {
      shape: {
        type: "string"
      },
      locationName: "lookAheadRateControl"
    },
    MaxBitrate: {
      shape: {
        type: "integer",
        min: 1000
      },
      locationName: "maxBitrate"
    },
    MinIInterval: {
      shape: {
        type: "integer"
      },
      locationName: "minIInterval"
    },
    NumRefFrames: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "numRefFrames"
    },
    ParControl: {
      shape: {
        type: "string"
      },
      locationName: "parControl"
    },
    ParDenominator: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "parDenominator"
    },
    ParNumerator: {
      shape: {
        type: "integer"
      },
      locationName: "parNumerator"
    },
    Profile: {
      shape: {
        type: "string"
      },
      locationName: "profile"
    },
    QvbrQualityLevel: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "qvbrQualityLevel"
    },
    RateControlMode: {
      shape: {
        type: "string"
      },
      locationName: "rateControlMode"
    },
    ScanType: {
      shape: {
        type: "string"
      },
      locationName: "scanType"
    },
    SceneChangeDetect: {
      shape: {
        type: "string"
      },
      locationName: "sceneChangeDetect"
    },
    Slices: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "slices"
    },
    Softness: {
      shape: {
        type: "integer"
      },
      locationName: "softness"
    },
    SpatialAq: {
      shape: {
        type: "string"
      },
      locationName: "spatialAq"
    },
    SubgopLength: {
      shape: {
        type: "string"
      },
      locationName: "subgopLength"
    },
    Syntax: {
      shape: {
        type: "string"
      },
      locationName: "syntax"
    },
    TemporalAq: {
      shape: {
        type: "string"
      },
      locationName: "temporalAq"
    },
    TimecodeInsertion: {
      shape: {
        type: "string"
      },
      locationName: "timecodeInsertion"
    }
  }
};
