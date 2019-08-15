import { List as _List_ } from "@aws-sdk/types";
import { _PolicyDetail } from "./_PolicyDetail";

export const _policyDetailListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyDetail
  }
};
