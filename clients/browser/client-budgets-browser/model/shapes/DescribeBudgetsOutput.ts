import { _Budgets } from "./_Budgets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBudgetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Budgets: {
      shape: _Budgets
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
