import { List as _List_ } from "@aws-sdk/types";
import { _PutPartnerEventsResultEntry } from "./_PutPartnerEventsResultEntry";

export const _PutPartnerEventsResultEntryList: _List_ = {
  type: "list",
  member: {
    shape: _PutPartnerEventsResultEntry
  }
};
