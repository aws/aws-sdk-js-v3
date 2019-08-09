import { _ClusterStateList } from "./_ClusterStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedAfter: {
      shape: {
        type: "timestamp"
      }
    },
    CreatedBefore: {
      shape: {
        type: "timestamp"
      }
    },
    ClusterStates: {
      shape: _ClusterStateList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
