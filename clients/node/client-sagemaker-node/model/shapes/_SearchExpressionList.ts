import { List as _List_, Member as _Member_ } from "@aws-sdk/types";
import { _SearchExpression } from "./_SearchExpression";

export const _SearchExpressionList: _List_ = {
  type: "list",
  min: 1,
  get member(): _Member_ {
    Object.defineProperty(_SearchExpressionList, "member", {
      value: {
        shape: _SearchExpression
      }
    });
    return {
      shape: _SearchExpression
    };
  }
};
