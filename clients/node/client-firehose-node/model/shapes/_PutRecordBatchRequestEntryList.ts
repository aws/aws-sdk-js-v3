import { List as _List_ } from "@aws-sdk/types";
import { _Record } from "./_Record";

export const _PutRecordBatchRequestEntryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Record
  }
};
