import { List as _List_ } from "@aws-sdk/types";
import { _TaskExecutionListEntry } from "./_TaskExecutionListEntry";

export const _TaskExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _TaskExecutionListEntry
  }
};
