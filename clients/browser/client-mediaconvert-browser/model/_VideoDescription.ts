import { _VideoCodecSettings } from "./_VideoCodecSettings";
import { _Rectangle } from "./_Rectangle";
import { _VideoPreprocessor } from "./_VideoPreprocessor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AfdSignaling: {
      shape: {
        type: "string"
      },
      locationName: "afdSignaling"
    },
    AntiAlias: {
      shape: {
        type: "string"
      },
      locationName: "antiAlias"
    },
    CodecSettings: {
      shape: _VideoCodecSettings,
      locationName: "codecSettings"
    },
    ColorMetadata: {
      shape: {
        type: "string"
      },
      locationName: "colorMetadata"
    },
    Crop: {
      shape: _Rectangle,
      locationName: "crop"
    },
    DropFrameTimecode: {
      shape: {
        type: "string"
      },
      locationName: "dropFrameTimecode"
    },
    FixedAfd: {
      shape: {
        type: "integer"
      },
      locationName: "fixedAfd"
    },
    Height: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "height"
    },
    Position: {
      shape: _Rectangle,
      locationName: "position"
    },
    RespondToAfd: {
      shape: {
        type: "string"
      },
      locationName: "respondToAfd"
    },
    ScalingBehavior: {
      shape: {
        type: "string"
      },
      locationName: "scalingBehavior"
    },
    Sharpness: {
      shape: {
        type: "integer"
      },
      locationName: "sharpness"
    },
    TimecodeInsertion: {
      shape: {
        type: "string"
      },
      locationName: "timecodeInsertion"
    },
    VideoPreprocessors: {
      shape: _VideoPreprocessor,
      locationName: "videoPreprocessors"
    },
    Width: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "width"
    }
  }
};
