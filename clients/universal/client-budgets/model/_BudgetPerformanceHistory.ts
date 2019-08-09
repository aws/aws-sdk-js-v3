import { _CostFilters } from "./_CostFilters";
import { _CostTypes } from "./_CostTypes";
import { _BudgetedAndActualAmountsList } from "./_BudgetedAndActualAmountsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BudgetPerformanceHistory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BudgetType: {
      shape: {
        type: "string"
      }
    },
    CostFilters: {
      shape: _CostFilters
    },
    CostTypes: {
      shape: _CostTypes
    },
    TimeUnit: {
      shape: {
        type: "string"
      }
    },
    BudgetedAndActualAmountsList: {
      shape: _BudgetedAndActualAmountsList
    }
  }
};
