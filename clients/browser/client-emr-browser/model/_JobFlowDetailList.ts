import { List as _List_ } from "@aws-sdk/types";
import { _JobFlowDetail } from "./_JobFlowDetail";

export const _JobFlowDetailList: _List_ = {
  type: "list",
  member: {
    shape: _JobFlowDetail
  }
};
