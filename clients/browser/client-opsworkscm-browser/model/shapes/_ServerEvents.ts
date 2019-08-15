import { List as _List_ } from "@aws-sdk/types";
import { _ServerEvent } from "./_ServerEvent";

export const _ServerEvents: _List_ = {
  type: "list",
  member: {
    shape: _ServerEvent
  }
};
