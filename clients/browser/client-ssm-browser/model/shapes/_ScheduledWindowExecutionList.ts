import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledWindowExecution } from "./_ScheduledWindowExecution";

export const _ScheduledWindowExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledWindowExecution
  }
};
