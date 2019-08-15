import { List as _List_ } from "@aws-sdk/types";
import { _NamedQuery } from "./_NamedQuery";

export const _NamedQueryList: _List_ = {
  type: "list",
  member: {
    shape: _NamedQuery
  }
};
