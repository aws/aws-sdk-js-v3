import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalableTargetAction: _Structure_ = {
  type: "structure",
  required: [],
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
