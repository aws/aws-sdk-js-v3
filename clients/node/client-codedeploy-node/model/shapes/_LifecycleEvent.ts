import { _Diagnostics } from "./_Diagnostics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    lifecycleEventName: {
      shape: {
        type: "string"
      }
    },
    diagnostics: {
      shape: _Diagnostics
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
