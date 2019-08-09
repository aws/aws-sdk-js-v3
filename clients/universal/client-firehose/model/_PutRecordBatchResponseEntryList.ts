import { List as _List_ } from "@aws-sdk/types";
import { _PutRecordBatchResponseEntry } from "./_PutRecordBatchResponseEntry";

export const _PutRecordBatchResponseEntryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PutRecordBatchResponseEntry
  }
};
