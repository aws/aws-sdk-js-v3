import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetDesiredCapacityInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "DesiredCapacity"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DesiredCapacity: {
      shape: {
        type: "integer"
      }
    },
    HonorCooldown: {
      shape: {
        type: "boolean"
      }
    }
  }
};
