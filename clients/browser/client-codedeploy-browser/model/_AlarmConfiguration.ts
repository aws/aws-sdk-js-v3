import { _AlarmList } from "./_AlarmList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlarmConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    enabled: {
      shape: {
        type: "boolean"
      }
    },
    ignorePollAlarmFailure: {
      shape: {
        type: "boolean"
      }
    },
    alarms: {
      shape: _AlarmList
    }
  }
};
