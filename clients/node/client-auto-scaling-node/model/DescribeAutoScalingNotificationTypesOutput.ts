import { _AutoScalingNotificationTypes } from "./_AutoScalingNotificationTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutoScalingNotificationTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingNotificationTypes: {
      shape: _AutoScalingNotificationTypes
    }
  }
};
