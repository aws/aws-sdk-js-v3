import { List as _List_ } from "@aws-sdk/types";
import { _SymbolicLink } from "./_SymbolicLink";

export const _SymbolicLinkList: _List_ = {
  type: "list",
  member: {
    shape: _SymbolicLink
  }
};
