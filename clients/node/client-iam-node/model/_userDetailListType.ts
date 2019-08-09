import { List as _List_ } from "@aws-sdk/types";
import { _UserDetail } from "./_UserDetail";

export const _userDetailListType: _List_ = {
  type: "list",
  member: {
    shape: _UserDetail
  }
};
