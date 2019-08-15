import { List as _List_ } from "@aws-sdk/types";
import { _ManagedActionHistoryItem } from "./_ManagedActionHistoryItem";

export const _ManagedActionHistoryItems: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ManagedActionHistoryItem
  }
};
