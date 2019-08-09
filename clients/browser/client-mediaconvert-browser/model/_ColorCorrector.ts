import { _Hdr10Metadata } from "./_Hdr10Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ColorCorrector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Brightness: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "brightness"
    },
    ColorSpaceConversion: {
      shape: {
        type: "string"
      },
      locationName: "colorSpaceConversion"
    },
    Contrast: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "contrast"
    },
    Hdr10Metadata: {
      shape: _Hdr10Metadata,
      locationName: "hdr10Metadata"
    },
    Hue: {
      shape: {
        type: "integer",
        min: -180
      },
      locationName: "hue"
    },
    Saturation: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "saturation"
    }
  }
};
