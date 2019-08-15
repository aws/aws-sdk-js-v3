import { List as _List_ } from "@aws-sdk/types";
import { _RecordDetail } from "./_RecordDetail";

export const _RecordDetails: _List_ = {
  type: "list",
  member: {
    shape: _RecordDetail
  }
};
