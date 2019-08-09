import { _AudioCodecOptions } from "./_AudioCodecOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Codec: {
      shape: {
        type: "string"
      }
    },
    SampleRate: {
      shape: {
        type: "string"
      }
    },
    BitRate: {
      shape: {
        type: "string"
      }
    },
    Channels: {
      shape: {
        type: "string"
      }
    },
    AudioPackingMode: {
      shape: {
        type: "string"
      }
    },
    CodecOptions: {
      shape: _AudioCodecOptions
    }
  }
};
