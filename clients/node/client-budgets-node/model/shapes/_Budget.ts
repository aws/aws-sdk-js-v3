import { _Spend } from "./_Spend";
import { _PlannedBudgetLimits } from "./_PlannedBudgetLimits";
import { _CostFilters } from "./_CostFilters";
import { _CostTypes } from "./_CostTypes";
import { _TimePeriod } from "./_TimePeriod";
import { _CalculatedSpend } from "./_CalculatedSpend";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Budget: _Structure_ = {
  type: "structure",
  required: ["BudgetName", "TimeUnit", "BudgetType"],
  members: {
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BudgetLimit: {
      shape: _Spend
    },
    PlannedBudgetLimits: {
      shape: _PlannedBudgetLimits
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
    TimePeriod: {
      shape: _TimePeriod
    },
    CalculatedSpend: {
      shape: _CalculatedSpend
    },
    BudgetType: {
      shape: {
        type: "string"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
