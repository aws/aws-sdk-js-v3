import { List as _List_ } from "@aws-sdk/types";
import { _ConstraintSummary } from "./_ConstraintSummary";

export const _ConstraintSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ConstraintSummary
  }
};
