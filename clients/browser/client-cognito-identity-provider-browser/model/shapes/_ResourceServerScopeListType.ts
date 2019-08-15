import { List as _List_ } from "@aws-sdk/types";
import { _ResourceServerScopeType } from "./_ResourceServerScopeType";

export const _ResourceServerScopeListType: _List_ = {
  type: "list",
  member: {
    shape: _ResourceServerScopeType
  }
};
