import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioCodecOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Profile: {
      shape: {
        type: "string"
      }
    },
    BitDepth: {
      shape: {
        type: "string"
      }
    },
    BitOrder: {
      shape: {
        type: "string"
      }
    },
    Signed: {
      shape: {
        type: "string"
      }
    }
  }
};
