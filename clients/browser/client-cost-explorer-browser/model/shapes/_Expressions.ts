import { List as _List_, Member as _Member_ } from "@aws-sdk/types";
import { _Expression } from "./_Expression";

export const _Expressions: _List_ = {
  type: "list",
  get member(): _Member_ {
    Object.defineProperty(_Expressions, "member", {
      value: {
        shape: _Expression
      }
    });
    return {
      shape: _Expression
    };
  }
};
