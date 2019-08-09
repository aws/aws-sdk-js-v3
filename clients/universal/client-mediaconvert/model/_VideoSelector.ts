import { _Hdr10Metadata } from "./_Hdr10Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ColorSpace: {
      shape: {
        type: "string"
      },
      locationName: "colorSpace"
    },
    ColorSpaceUsage: {
      shape: {
        type: "string"
      },
      locationName: "colorSpaceUsage"
    },
    Hdr10Metadata: {
      shape: _Hdr10Metadata,
      locationName: "hdr10Metadata"
    },
    Pid: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "pid"
    },
    ProgramNumber: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "programNumber"
    },
    Rotate: {
      shape: {
        type: "string"
      },
      locationName: "rotate"
    }
  }
};
