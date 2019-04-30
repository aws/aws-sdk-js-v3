import { _AutoScalingSettingsUpdate } from "./_AutoScalingSettingsUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicaGlobalSecondaryIndexSettingsUpdate: _Structure_ = {
  type: "structure",
  required: ["IndexName"],
  members: {
    IndexName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ProvisionedReadCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ProvisionedReadCapacityAutoScalingSettingsUpdate: {
      shape: _AutoScalingSettingsUpdate
    }
  }
};
