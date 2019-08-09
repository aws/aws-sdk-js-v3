import { _ClusterStateChangeReason } from "./_ClusterStateChangeReason";
import { _ClusterTimeline } from "./_ClusterTimeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _ClusterStateChangeReason
    },
    Timeline: {
      shape: _ClusterTimeline
    }
  }
};
