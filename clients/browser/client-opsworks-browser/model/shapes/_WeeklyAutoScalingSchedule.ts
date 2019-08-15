import { _DailyAutoScalingSchedule } from "./_DailyAutoScalingSchedule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WeeklyAutoScalingSchedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Monday: {
      shape: _DailyAutoScalingSchedule
    },
    Tuesday: {
      shape: _DailyAutoScalingSchedule
    },
    Wednesday: {
      shape: _DailyAutoScalingSchedule
    },
    Thursday: {
      shape: _DailyAutoScalingSchedule
    },
    Friday: {
      shape: _DailyAutoScalingSchedule
    },
    Saturday: {
      shape: _DailyAutoScalingSchedule
    },
    Sunday: {
      shape: _DailyAutoScalingSchedule
    }
  }
};
