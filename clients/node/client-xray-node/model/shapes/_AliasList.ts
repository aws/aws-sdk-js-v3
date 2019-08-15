import { List as _List_ } from "@aws-sdk/types";
import { _Alias } from "./_Alias";

export const _AliasList: _List_ = {
  type: "list",
  member: {
    shape: _Alias
  }
};
