import { List as _List_ } from "@aws-sdk/types";
import { _CreateAssociationBatchRequestEntry } from "./_CreateAssociationBatchRequestEntry";

export const _CreateAssociationBatchRequestEntries: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _CreateAssociationBatchRequestEntry
  }
};
