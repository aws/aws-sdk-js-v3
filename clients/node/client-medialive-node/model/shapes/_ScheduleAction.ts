import { _ScheduleActionSettings } from "./_ScheduleActionSettings";
import { _ScheduleActionStartSettings } from "./_ScheduleActionStartSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleAction: _Structure_ = {
  type: "structure",
  required: [
    "ActionName",
    "ScheduleActionStartSettings",
    "ScheduleActionSettings"
  ],
  members: {
    ActionName: {
      shape: {
        type: "string"
      },
      locationName: "actionName"
    },
    ScheduleActionSettings: {
      shape: _ScheduleActionSettings,
      locationName: "scheduleActionSettings"
    },
    ScheduleActionStartSettings: {
      shape: _ScheduleActionStartSettings,
      locationName: "scheduleActionStartSettings"
    }
  }
};
