import { List as _List_ } from "@aws-sdk/types";
import { _AlarmHistoryItem } from "./_AlarmHistoryItem";

export const _AlarmHistoryItems: _List_ = {
  type: "list",
  member: {
    shape: _AlarmHistoryItem
  }
};
