import { _LifecycleHookNames } from "./_LifecycleHookNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLifecycleHooksInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LifecycleHookNames: {
      shape: _LifecycleHookNames
    }
  }
};
