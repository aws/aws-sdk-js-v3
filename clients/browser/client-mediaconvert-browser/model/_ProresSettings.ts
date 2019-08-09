import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProresSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CodecProfile: {
      shape: {
        type: "string"
      },
      locationName: "codecProfile"
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
    InterlaceMode: {
      shape: {
        type: "string"
      },
      locationName: "interlaceMode"
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
    SlowPal: {
      shape: {
        type: "string"
      },
      locationName: "slowPal"
    },
    Telecine: {
      shape: {
        type: "string"
      },
      locationName: "telecine"
    }
  }
};
