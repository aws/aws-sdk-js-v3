import { List as _List_ } from "@aws-sdk/types";
import { _ChangeMessageVisibilityBatchRequestEntry } from "./_ChangeMessageVisibilityBatchRequestEntry";

export const _ChangeMessageVisibilityBatchRequestEntryList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _ChangeMessageVisibilityBatchRequestEntry,
    locationName: "ChangeMessageVisibilityBatchRequestEntry"
  }
};
