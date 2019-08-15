import { List as _List_ } from "@aws-sdk/types";
import { _InputLogEvent } from "./_InputLogEvent";

export const _InputLogEvents: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _InputLogEvent
  }
};
