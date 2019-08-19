import { List as _List_ } from "@aws-sdk/types";
import { _PutPartnerEventsRequestEntry } from "./_PutPartnerEventsRequestEntry";

export const _PutPartnerEventsRequestEntryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PutPartnerEventsRequestEntry
  }
};
