import { List as _List_ } from "@aws-sdk/types";
import { _PutEventsRequestEntry } from "./_PutEventsRequestEntry";

export const _PutEventsRequestEntryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PutEventsRequestEntry
  }
};
