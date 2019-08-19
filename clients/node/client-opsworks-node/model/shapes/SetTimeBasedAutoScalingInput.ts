import { _WeeklyAutoScalingSchedule } from "./_WeeklyAutoScalingSchedule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetTimeBasedAutoScalingInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    AutoScalingSchedule: {
      shape: _WeeklyAutoScalingSchedule
    }
  }
};
