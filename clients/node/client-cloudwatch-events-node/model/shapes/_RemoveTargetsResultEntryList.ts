import { List as _List_ } from "@aws-sdk/types";
import { _RemoveTargetsResultEntry } from "./_RemoveTargetsResultEntry";

export const _RemoveTargetsResultEntryList: _List_ = {
  type: "list",
  member: {
    shape: _RemoveTargetsResultEntry
  }
};
