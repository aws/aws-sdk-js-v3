import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingConstraints: _Structure_ = {
  type: "structure",
  required: ["MinCapacity", "MaxCapacity"],
  members: {
    MinCapacity: {
      shape: {
        type: "integer"
      }
    },
    MaxCapacity: {
      shape: {
        type: "integer"
      }
    }
  }
};
