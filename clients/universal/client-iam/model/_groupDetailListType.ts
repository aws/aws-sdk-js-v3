import { List as _List_ } from "@aws-sdk/types";
import { _GroupDetail } from "./_GroupDetail";

export const _groupDetailListType: _List_ = {
  type: "list",
  member: {
    shape: _GroupDetail
  }
};
