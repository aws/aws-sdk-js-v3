import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobWatermark: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PresetWatermarkId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputKey: {
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
