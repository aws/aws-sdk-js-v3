import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderableClusterOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    ClusterType: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZoneList
    }
  }
};
