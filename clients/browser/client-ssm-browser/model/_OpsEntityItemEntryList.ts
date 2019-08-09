import { List as _List_ } from "@aws-sdk/types";
import { _OpsEntityItemEntry } from "./_OpsEntityItemEntry";

export const _OpsEntityItemEntryList: _List_ = {
  type: "list",
  member: {
    shape: _OpsEntityItemEntry
  }
};
