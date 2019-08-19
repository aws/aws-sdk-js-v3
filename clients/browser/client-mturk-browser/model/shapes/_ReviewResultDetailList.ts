import { List as _List_ } from "@aws-sdk/types";
import { _ReviewResultDetail } from "./_ReviewResultDetail";

export const _ReviewResultDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ReviewResultDetail
  }
};
