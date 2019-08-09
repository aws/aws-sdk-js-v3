import { _InstanceGroupStateChangeReason } from "./_InstanceGroupStateChangeReason";
import { _InstanceGroupTimeline } from "./_InstanceGroupTimeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _InstanceGroupStateChangeReason
    },
    Timeline: {
      shape: _InstanceGroupTimeline
    }
  }
};
