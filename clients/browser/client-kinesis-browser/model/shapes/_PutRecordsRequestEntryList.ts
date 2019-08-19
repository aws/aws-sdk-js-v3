import { List as _List_ } from "@aws-sdk/types";
import { _PutRecordsRequestEntry } from "./_PutRecordsRequestEntry";

export const _PutRecordsRequestEntryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PutRecordsRequestEntry
  }
};
