import { List as _List_ } from "@aws-sdk/types";
import { _FilteredLogEvent } from "./_FilteredLogEvent";

export const _FilteredLogEvents: _List_ = {
  type: "list",
  member: {
    shape: _FilteredLogEvent
  }
};
