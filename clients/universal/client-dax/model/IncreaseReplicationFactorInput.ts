import { _AvailabilityZoneList } from "./_AvailabilityZoneList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IncreaseReplicationFactorInput: _Structure_ = {
  type: "structure",
  required: ["ClusterName", "NewReplicationFactor"],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    },
    NewReplicationFactor: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZoneList
    }
  }
};
