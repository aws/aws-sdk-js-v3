import { ___listOfScheduleAction } from "./___listOfScheduleAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchScheduleActionDeleteResult: _Structure_ = {
  type: "structure",
  required: ["ScheduleActions"],
  members: {
    ScheduleActions: {
      shape: ___listOfScheduleAction,
      locationName: "scheduleActions"
    }
  }
};
