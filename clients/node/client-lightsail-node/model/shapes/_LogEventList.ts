import { List as _List_ } from "@aws-sdk/types";
import { _LogEvent } from "./_LogEvent";

export const _LogEventList: _List_ = {
  type: "list",
  member: {
    shape: _LogEvent
  }
};
