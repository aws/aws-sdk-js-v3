import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingConfiguration: _Structure_ = {
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
    },
    AutoPause: {
      shape: {
        type: "boolean"
      }
    },
    SecondsUntilAutoPause: {
      shape: {
        type: "integer"
      }
    },
    TimeoutAction: {
      shape: {
        type: "string"
      }
    }
  }
};
