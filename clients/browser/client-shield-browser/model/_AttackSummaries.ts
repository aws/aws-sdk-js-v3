import { List as _List_ } from "@aws-sdk/types";
import { _AttackSummary } from "./_AttackSummary";

export const _AttackSummaries: _List_ = {
  type: "list",
  member: {
    shape: _AttackSummary
  }
};
