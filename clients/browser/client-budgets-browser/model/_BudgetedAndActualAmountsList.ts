import { List as _List_ } from "@aws-sdk/types";
import { _BudgetedAndActualAmounts } from "./_BudgetedAndActualAmounts";

export const _BudgetedAndActualAmountsList: _List_ = {
  type: "list",
  member: {
    shape: _BudgetedAndActualAmounts
  }
};
