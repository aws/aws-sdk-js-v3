import { _AvailabilityZonesList } from "./_AvailabilityZonesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeGroupConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Slots: {
      shape: {
        type: "string"
      }
    },
    ReplicaCount: {
      shape: {
        type: "integer"
      }
    },
    PrimaryAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    ReplicaAvailabilityZones: {
      shape: _AvailabilityZonesList
    }
  }
};
