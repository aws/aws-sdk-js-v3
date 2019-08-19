import { List as _List_ } from "@aws-sdk/types";
import { _SendMessageBatchResultEntry } from "./_SendMessageBatchResultEntry";

export const _SendMessageBatchResultEntryList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _SendMessageBatchResultEntry,
    locationName: "SendMessageBatchResultEntry"
  }
};
