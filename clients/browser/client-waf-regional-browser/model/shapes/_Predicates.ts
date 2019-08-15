import { List as _List_ } from "@aws-sdk/types";
import { _Predicate } from "./_Predicate";

export const _Predicates: _List_ = {
  type: "list",
  member: {
    shape: _Predicate
  }
};
