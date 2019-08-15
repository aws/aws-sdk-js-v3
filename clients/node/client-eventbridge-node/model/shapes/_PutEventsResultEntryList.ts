import { List as _List_ } from "@aws-sdk/types";
import { _PutEventsResultEntry } from "./_PutEventsResultEntry";

export const _PutEventsResultEntryList: _List_ = {
  type: "list",
  member: {
    shape: _PutEventsResultEntry
  }
};
