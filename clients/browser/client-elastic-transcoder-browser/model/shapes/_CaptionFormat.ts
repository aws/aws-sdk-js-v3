import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionFormat: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    Pattern: {
      shape: {
        type: "string"
      }
    },
    Encryption: {
      shape: _Encryption
    }
  }
};
