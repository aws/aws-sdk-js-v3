import { List as _List_ } from "@aws-sdk/types";
import { _TaskListEntry } from "./_TaskListEntry";

export const _TaskList: _List_ = {
  type: "list",
  member: {
    shape: _TaskListEntry
  }
};
