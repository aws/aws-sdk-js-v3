import { List as _List_ } from "@aws-sdk/types";
import { _ResourceServerType } from "./_ResourceServerType";

export const _ResourceServersListType: _List_ = {
  type: "list",
  member: {
    shape: _ResourceServerType
  }
};
