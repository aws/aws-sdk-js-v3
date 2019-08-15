import { List as _List_, Member as _Member_ } from "@aws-sdk/types";
import { _Value } from "./_Value";

export const _ArrayValueList: _List_ = {
  type: "list",
  get member(): _Member_ {
    Object.defineProperty(_ArrayValueList, "member", {
      value: {
        shape: _Value
      }
    });
    return {
      shape: _Value
    };
  }
};
