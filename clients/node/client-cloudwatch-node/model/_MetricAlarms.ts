import { List as _List_ } from "@aws-sdk/types";
import { _MetricAlarm } from "./_MetricAlarm";

export const _MetricAlarms: _List_ = {
  type: "list",
  member: {
    shape: _MetricAlarm
  }
};
