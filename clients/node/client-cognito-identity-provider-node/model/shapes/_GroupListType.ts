import { List as _List_ } from "@aws-sdk/types";
import { _GroupType } from "./_GroupType";

export const _GroupListType: _List_ = {
  type: "list",
  member: {
    shape: _GroupType
  }
};
