import { _AutoScalingNotificationTypes } from "./_AutoScalingNotificationTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLifecycleHookTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LifecycleHookTypes: {
      shape: _AutoScalingNotificationTypes
    }
  }
};
