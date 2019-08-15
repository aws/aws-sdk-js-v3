import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageQuality: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Brightness: {
      shape: {
        type: "float"
      }
    },
    Sharpness: {
      shape: {
        type: "float"
      }
    }
  }
};
