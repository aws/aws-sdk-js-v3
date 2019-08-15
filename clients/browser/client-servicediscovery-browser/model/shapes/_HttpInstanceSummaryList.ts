import { List as _List_ } from "@aws-sdk/types";
import { _HttpInstanceSummary } from "./_HttpInstanceSummary";

export const _HttpInstanceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _HttpInstanceSummary
  }
};
