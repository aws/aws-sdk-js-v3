import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Mpeg2Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "adaptiveQuantization"
    },
    Bitrate: {
      shape: {
        type: "integer",
        min: 1000
      },
      locationName: "bitrate"
    },
    CodecLevel: {
      shape: {
        type: "string"
      },
      locationName: "codecLevel"
    },
    CodecProfile: {
      shape: {
        type: "string"
      },
      locationName: "codecProfile"
    },
    DynamicSubGop: {
      shape: {
        type: "string"
      },
      locationName: "dynamicSubGop"
    },
    FramerateControl: {
      shape: {
        type: "string"
      },
      locationName: "framerateControl"
    },
    FramerateConversionAlgorithm: {
      shape: {
        type: "string"
      },
      locationName: "framerateConversionAlgorithm"
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
        min: 24
      },
      locationName: "framerateNumerator"
    },
    GopClosedCadence: {
      shape: {
        type: "integer"
      },
      locationName: "gopClosedCadence"
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
    HrdBufferInitialFillPercentage: {
      shape: {
        type: "integer"
      },
      locationName: "hrdBufferInitialFillPercentage"
    },
    HrdBufferSize: {
      shape: {
        type: "integer"
      },
      locationName: "hrdBufferSize"
    },
    InterlaceMode: {
      shape: {
        type: "string"
      },
      locationName: "interlaceMode"
    },
    IntraDcPrecision: {
      shape: {
        type: "string"
      },
      locationName: "intraDcPrecision"
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
    NumberBFramesBetweenReferenceFrames: {
      shape: {
        type: "integer"
      },
      locationName: "numberBFramesBetweenReferenceFrames"
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
        type: "integer",
        min: 1
      },
      locationName: "parNumerator"
    },
    QualityTuningLevel: {
      shape: {
        type: "string"
      },
      locationName: "qualityTuningLevel"
    },
    RateControlMode: {
      shape: {
        type: "string"
      },
      locationName: "rateControlMode"
    },
    SceneChangeDetect: {
      shape: {
        type: "string"
      },
      locationName: "sceneChangeDetect"
    },
    SlowPal: {
      shape: {
        type: "string"
      },
      locationName: "slowPal"
    },
    Softness: {
      shape: {
        type: "integer"
      },
      locationName: "softness"
    },
    SpatialAdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "spatialAdaptiveQuantization"
    },
    Syntax: {
      shape: {
        type: "string"
      },
      locationName: "syntax"
    },
    Telecine: {
      shape: {
        type: "string"
      },
      locationName: "telecine"
    },
    TemporalAdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "temporalAdaptiveQuantization"
    }
  }
};
