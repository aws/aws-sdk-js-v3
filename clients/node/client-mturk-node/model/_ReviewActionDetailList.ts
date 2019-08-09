import { List as _List_ } from "@aws-sdk/types";
import { _ReviewActionDetail } from "./_ReviewActionDetail";

export const _ReviewActionDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ReviewActionDetail
  }
};
