import { List as _List_ } from "@aws-sdk/types";
import { _BudgetDetail } from "./_BudgetDetail";

export const _Budgets: _List_ = {
  type: "list",
  member: {
    shape: _BudgetDetail
  }
};
