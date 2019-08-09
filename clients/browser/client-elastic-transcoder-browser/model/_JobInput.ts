import { _Encryption } from "./_Encryption";
import { _TimeSpan } from "./_TimeSpan";
import { _InputCaptions } from "./_InputCaptions";
import { _DetectedProperties } from "./_DetectedProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FrameRate: {
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
    Interlaced: {
      shape: {
        type: "string"
      }
    },
    Container: {
      shape: {
        type: "string"
      }
    },
    Encryption: {
      shape: _Encryption
    },
    TimeSpan: {
      shape: _TimeSpan
    },
    InputCaptions: {
      shape: _InputCaptions
    },
    DetectedProperties: {
      shape: _DetectedProperties
    }
  }
};
