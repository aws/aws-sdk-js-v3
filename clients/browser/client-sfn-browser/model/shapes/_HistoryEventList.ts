import { List as _List_ } from "@aws-sdk/types";
import { _HistoryEvent } from "./_HistoryEvent";

export const _HistoryEventList: _List_ = {
  type: "list",
  member: {
    shape: _HistoryEvent
  }
};
