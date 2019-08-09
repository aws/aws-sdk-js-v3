import { List as _List_ } from "@aws-sdk/types";
import { _PutTargetsResultEntry } from "./_PutTargetsResultEntry";

export const _PutTargetsResultEntryList: _List_ = {
  type: "list",
  member: {
    shape: _PutTargetsResultEntry
  }
};
