import { _AlarmNames } from "./_AlarmNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableAlarmActionsInput: _Structure_ = {
  type: "structure",
  required: ["AlarmNames"],
  members: {
    AlarmNames: {
      shape: _AlarmNames
    }
  }
};
