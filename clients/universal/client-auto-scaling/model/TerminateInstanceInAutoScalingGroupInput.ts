import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateInstanceInAutoScalingGroupInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "ShouldDecrementDesiredCapacity"],
  members: {
    InstanceId: {
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
