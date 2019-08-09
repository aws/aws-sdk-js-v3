import { List as _List_ } from "@aws-sdk/types";
import { _StepDetail } from "./_StepDetail";

export const _StepDetailList: _List_ = {
  type: "list",
  member: {
    shape: _StepDetail
  }
};
