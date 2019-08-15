import { _Spend } from "./_Spend";
import { _TimePeriod } from "./_TimePeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BudgetedAndActualAmounts: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BudgetedAmount: {
      shape: _Spend
    },
    ActualAmount: {
      shape: _Spend
    },
    TimePeriod: {
      shape: _TimePeriod
    }
  }
};
