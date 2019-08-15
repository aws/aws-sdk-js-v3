import { List as _List_ } from "@aws-sdk/types";
import { _BusinessReportSchedule } from "./_BusinessReportSchedule";

export const _BusinessReportScheduleList: _List_ = {
  type: "list",
  member: {
    shape: _BusinessReportSchedule
  }
};
