import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledAction } from "./_ScheduledAction";

export const _ScheduledActions: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledAction
  }
};
