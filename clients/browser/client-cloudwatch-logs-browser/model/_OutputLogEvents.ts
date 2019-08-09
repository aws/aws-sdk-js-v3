import { List as _List_ } from "@aws-sdk/types";
import { _OutputLogEvent } from "./_OutputLogEvent";

export const _OutputLogEvents: _List_ = {
  type: "list",
  member: {
    shape: _OutputLogEvent
  }
};
