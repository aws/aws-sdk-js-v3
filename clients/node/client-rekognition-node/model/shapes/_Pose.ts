import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Pose: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Roll: {
      shape: {
        type: "float",
        min: -180
      }
    },
    Yaw: {
      shape: {
        type: "float",
        min: -180
      }
    },
    Pitch: {
      shape: {
        type: "float",
        min: -180
      }
    }
  }
};
