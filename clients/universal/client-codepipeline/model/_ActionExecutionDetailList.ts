import { List as _List_ } from "@aws-sdk/types";
import { _ActionExecutionDetail } from "./_ActionExecutionDetail";

export const _ActionExecutionDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ActionExecutionDetail
  }
};
