import { List as _List_ } from "@aws-sdk/types";
import { _Schedule } from "./_Schedule";

export const _ScheduleList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Schedule
  }
};
