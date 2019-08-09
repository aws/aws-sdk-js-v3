import { _InstanceIds } from "./_InstanceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachInstancesInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "ShouldDecrementDesiredCapacity"],
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
    ShouldDecrementDesiredCapacity: {
      shape: {
        type: "boolean"
      }
    }
  }
};
