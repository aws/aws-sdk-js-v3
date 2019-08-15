import { List as _List_ } from "@aws-sdk/types";
import { _Event } from "./_Event";

export const _Events: _List_ = {
  type: "list",
  member: {
    shape: _Event
  }
};
