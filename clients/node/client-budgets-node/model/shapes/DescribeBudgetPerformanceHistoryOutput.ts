import { _BudgetPerformanceHistory } from "./_BudgetPerformanceHistory";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBudgetPerformanceHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BudgetPerformanceHistory: {
      shape: _BudgetPerformanceHistory
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
