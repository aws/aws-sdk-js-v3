import { _AutoScalingSettingsUpdate } from "./_AutoScalingSettingsUpdate";
import { _GlobalTableGlobalSecondaryIndexSettingsUpdateList } from "./_GlobalTableGlobalSecondaryIndexSettingsUpdateList";
import { _ReplicaSettingsUpdateList } from "./_ReplicaSettingsUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGlobalTableSettingsInput: _Structure_ = {
  type: "structure",
  required: ["GlobalTableName"],
  members: {
    GlobalTableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GlobalTableBillingMode: {
      shape: {
        type: "string"
      }
    },
    GlobalTableProvisionedWriteCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: {
      shape: _AutoScalingSettingsUpdate
    },
    GlobalTableGlobalSecondaryIndexSettingsUpdate: {
      shape: _GlobalTableGlobalSecondaryIndexSettingsUpdateList
    },
    ReplicaSettingsUpdate: {
      shape: _ReplicaSettingsUpdateList
    }
  }
};
