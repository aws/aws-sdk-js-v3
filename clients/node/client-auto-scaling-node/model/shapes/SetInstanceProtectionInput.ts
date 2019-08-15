import { _InstanceIds } from "./_InstanceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetInstanceProtectionInput: _Structure_ = {
  type: "structure",
  required: ["InstanceIds", "AutoScalingGroupName", "ProtectedFromScaleIn"],
  members: {
    InstanceIds: {
      shape: _InstanceIds
    },
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProtectedFromScaleIn: {
      shape: {
        type: "boolean"
      }
    }
  }
};
