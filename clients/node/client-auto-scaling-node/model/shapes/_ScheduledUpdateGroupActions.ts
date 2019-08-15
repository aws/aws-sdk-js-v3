import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledUpdateGroupAction } from "./_ScheduledUpdateGroupAction";

export const _ScheduledUpdateGroupActions: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledUpdateGroupAction
  }
};
