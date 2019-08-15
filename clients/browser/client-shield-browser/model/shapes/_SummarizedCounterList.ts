import { List as _List_ } from "@aws-sdk/types";
import { _SummarizedCounter } from "./_SummarizedCounter";

export const _SummarizedCounterList: _List_ = {
  type: "list",
  member: {
    shape: _SummarizedCounter
  }
};
