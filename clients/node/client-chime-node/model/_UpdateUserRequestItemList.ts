import { List as _List_ } from "@aws-sdk/types";
import { _UpdateUserRequestItem } from "./_UpdateUserRequestItem";

export const _UpdateUserRequestItemList: _List_ = {
  type: "list",
  member: {
    shape: _UpdateUserRequestItem
  }
};
