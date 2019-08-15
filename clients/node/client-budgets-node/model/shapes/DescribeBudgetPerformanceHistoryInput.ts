import { _TimePeriod } from "./_TimePeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBudgetPerformanceHistoryInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BudgetName"],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TimePeriod: {
      shape: _TimePeriod
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
