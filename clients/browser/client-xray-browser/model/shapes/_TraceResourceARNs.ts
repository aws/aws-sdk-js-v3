import { List as _List_ } from "@aws-sdk/types";
import { _ResourceARNDetail } from "./_ResourceARNDetail";

export const _TraceResourceARNs: _List_ = {
  type: "list",
  member: {
    shape: _ResourceARNDetail
  }
};
