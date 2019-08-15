import { List as _List_ } from "@aws-sdk/types";
import { _JobListEntry } from "./_JobListEntry";

export const _JobListEntryList: _List_ = {
  type: "list",
  member: {
    shape: _JobListEntry
  }
};
