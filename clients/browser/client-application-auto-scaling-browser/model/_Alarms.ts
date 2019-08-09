import { List as _List_ } from "@aws-sdk/types";
import { _Alarm } from "./_Alarm";

export const _Alarms: _List_ = {
  type: "list",
  member: {
    shape: _Alarm
  }
};
