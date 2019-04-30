import { _AutoScalingSettingsDescription } from "./_AutoScalingSettingsDescription";
import { _ReplicaGlobalSecondaryIndexSettingsDescriptionList } from "./_ReplicaGlobalSecondaryIndexSettingsDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicaSettingsDescription: _Structure_ = {
  type: "structure",
  required: ["RegionName"],
  members: {
    RegionName: {
      shape: {
        type: "string"
      }
    },
    ReplicaStatus: {
      shape: {
        type: "string"
      }
    },
    ReplicaProvisionedReadCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReplicaProvisionedReadCapacityAutoScalingSettings: {
      shape: _AutoScalingSettingsDescription
    },
    ReplicaProvisionedWriteCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReplicaProvisionedWriteCapacityAutoScalingSettings: {
      shape: _AutoScalingSettingsDescription
    },
    ReplicaGlobalSecondaryIndexSettings: {
      shape: _ReplicaGlobalSecondaryIndexSettingsDescriptionList
    }
  }
};
