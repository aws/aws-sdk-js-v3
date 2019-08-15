import { List as _List_ } from "@aws-sdk/types";
import { _Scope } from "./_Scope";

export const _ScopeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Scope
  }
};
