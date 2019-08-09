import { _AvailabilityZonesList } from "./_AvailabilityZonesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrderableReplicationInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceClass: {
      shape: {
        type: "string"
      }
    },
    StorageType: {
      shape: {
        type: "string"
      }
    },
    MinAllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    MaxAllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    DefaultAllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    IncludedAllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZonesList
    },
    ReleaseStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
