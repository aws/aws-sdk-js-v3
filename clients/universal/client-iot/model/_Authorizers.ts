import { List as _List_ } from "@aws-sdk/types";
import { _AuthorizerSummary } from "./_AuthorizerSummary";

export const _Authorizers: _List_ = {
  type: "list",
  member: {
    shape: _AuthorizerSummary
  }
};
