import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CalculatedLifecycle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MoveToColdStorageAt: {
      shape: {
        type: "timestamp"
      }
    },
    DeleteAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
