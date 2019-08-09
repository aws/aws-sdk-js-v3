import { _PreferredAvailabilityZoneList } from "./_PreferredAvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigureShard: _Structure_ = {
  type: "structure",
  required: ["NodeGroupId", "NewReplicaCount"],
  members: {
    NodeGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewReplicaCount: {
      shape: {
        type: "integer"
      }
    },
    PreferredAvailabilityZones: {
      shape: _PreferredAvailabilityZoneList
    }
  }
};
