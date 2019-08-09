import { _ScheduledActionNames } from "./_ScheduledActionNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteScheduledActionInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "ScheduledActionNames"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionNames: {
      shape: _ScheduledActionNames
    }
  }
};
