import { _InstanceStateChangeReason } from "./_InstanceStateChangeReason";
import { _InstanceTimeline } from "./_InstanceTimeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _InstanceStateChangeReason
    },
    Timeline: {
      shape: _InstanceTimeline
    }
  }
};
