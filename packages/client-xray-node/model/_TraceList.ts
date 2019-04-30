import { List as _List_ } from "@aws-sdk/types";
import { _Trace } from "./_Trace";

export const _TraceList: _List_ = {
  type: "list",
  member: {
    shape: _Trace
  }
};
