import { _InstanceFleetStateChangeReason } from "./_InstanceFleetStateChangeReason";
import { _InstanceFleetTimeline } from "./_InstanceFleetTimeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceFleetStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _InstanceFleetStateChangeReason
    },
    Timeline: {
      shape: _InstanceFleetTimeline
    }
  }
};
