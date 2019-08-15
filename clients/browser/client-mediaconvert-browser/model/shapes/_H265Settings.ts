import { _H265QvbrSettings } from "./_H265QvbrSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _H265Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "adaptiveQuantization"
    },
    AlternateTransferFunctionSei: {
      shape: {
        type: "string"
      },
      locationName: "alternateTransferFunctionSei"
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
    FlickerAdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "flickerAdaptiveQuantization"
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
    NumberReferenceFrames: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "numberReferenceFrames"
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
    QvbrSettings: {
      shape: _H265QvbrSettings,
      locationName: "qvbrSettings"
    },
    RateControlMode: {
      shape: {
        type: "string"
      },
      locationName: "rateControlMode"
    },
    SampleAdaptiveOffsetFilterMode: {
      shape: {
        type: "string"
      },
      locationName: "sampleAdaptiveOffsetFilterMode"
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
    SlowPal: {
      shape: {
        type: "string"
      },
      locationName: "slowPal"
    },
    SpatialAdaptiveQuantization: {
      shape: {
        type: "string"
      },
      locationName: "spatialAdaptiveQuantization"
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
    },
    TemporalIds: {
      shape: {
        type: "string"
      },
      locationName: "temporalIds"
    },
    Tiles: {
      shape: {
        type: "string"
      },
      locationName: "tiles"
    },
    UnregisteredSeiTimecode: {
      shape: {
        type: "string"
      },
      locationName: "unregisteredSeiTimecode"
    },
    WriteMp4PackagingType: {
      shape: {
        type: "string"
      },
      locationName: "writeMp4PackagingType"
    }
  }
};
