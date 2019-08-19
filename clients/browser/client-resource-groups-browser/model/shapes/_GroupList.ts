import { List as _List_ } from "@aws-sdk/types";
import { _Group } from "./_Group";

export const _GroupList: _List_ = {
  type: "list",
  member: {
    shape: _Group
  }
};
