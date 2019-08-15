import { List as _List_ } from "@aws-sdk/types";
import { _Event } from "./_Event";

export const _EventList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Event
  }
};
