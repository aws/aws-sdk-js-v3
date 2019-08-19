import { _CodecOptions } from "./_CodecOptions";
import { _PresetWatermarks } from "./_PresetWatermarks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Codec: {
      shape: {
        type: "string"
      }
    },
    CodecOptions: {
      shape: _CodecOptions
    },
    KeyframesMaxDist: {
      shape: {
        type: "string"
      }
    },
    FixedGOP: {
      shape: {
        type: "string"
      }
    },
    BitRate: {
      shape: {
        type: "string"
      }
    },
    FrameRate: {
      shape: {
        type: "string"
      }
    },
    MaxFrameRate: {
      shape: {
        type: "string"
      }
    },
    Resolution: {
      shape: {
        type: "string"
      }
    },
    AspectRatio: {
      shape: {
        type: "string"
      }
    },
    MaxWidth: {
      shape: {
        type: "string"
      }
    },
    MaxHeight: {
      shape: {
        type: "string"
      }
    },
    DisplayAspectRatio: {
      shape: {
        type: "string"
      }
    },
    SizingPolicy: {
      shape: {
        type: "string"
      }
    },
    PaddingPolicy: {
      shape: {
        type: "string"
      }
    },
    Watermarks: {
      shape: _PresetWatermarks
    }
  }
};
