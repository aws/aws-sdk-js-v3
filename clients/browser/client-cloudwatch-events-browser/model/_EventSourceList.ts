import { List as _List_ } from "@aws-sdk/types";
import { _EventSource } from "./_EventSource";

export const _EventSourceList: _List_ = {
  type: "list",
  member: {
    shape: _EventSource
  }
};
