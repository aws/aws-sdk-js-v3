import { List as _List_ } from "@aws-sdk/types";
import { _Budget } from "./_Budget";

export const _Budgets: _List_ = {
  type: "list",
  member: {
    shape: _Budget
  }
};
