import { _FixedModeScheduleActionStartSettings } from "./_FixedModeScheduleActionStartSettings";
import { _FollowModeScheduleActionStartSettings } from "./_FollowModeScheduleActionStartSettings";
import { _ImmediateModeScheduleActionStartSettings } from "./_ImmediateModeScheduleActionStartSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleActionStartSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FixedModeScheduleActionStartSettings: {
      shape: _FixedModeScheduleActionStartSettings,
      locationName: "fixedModeScheduleActionStartSettings"
    },
    FollowModeScheduleActionStartSettings: {
      shape: _FollowModeScheduleActionStartSettings,
      locationName: "followModeScheduleActionStartSettings"
    },
    ImmediateModeScheduleActionStartSettings: {
      shape: _ImmediateModeScheduleActionStartSettings,
      locationName: "immediateModeScheduleActionStartSettings"
    }
  }
};
