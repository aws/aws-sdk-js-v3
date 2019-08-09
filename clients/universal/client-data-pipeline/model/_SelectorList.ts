import { List as _List_ } from "@aws-sdk/types";
import { _Selector } from "./_Selector";

export const _SelectorList: _List_ = {
  type: "list",
  member: {
    shape: _Selector
  }
};
