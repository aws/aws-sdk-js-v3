import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Language: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TimeOffset: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Encryption: {
      shape: _Encryption
    }
  }
};
