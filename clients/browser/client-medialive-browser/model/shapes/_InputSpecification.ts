import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Codec: {
      shape: {
        type: "string"
      },
      locationName: "codec"
    },
    MaximumBitrate: {
      shape: {
        type: "string"
      },
      locationName: "maximumBitrate"
    },
    Resolution: {
      shape: {
        type: "string"
      },
      locationName: "resolution"
    }
  }
};
