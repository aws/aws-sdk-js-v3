import { _InstanceIds } from "./_InstanceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExitStandbyInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
  members: {
    InstanceIds: {
      shape: _InstanceIds
    },
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
