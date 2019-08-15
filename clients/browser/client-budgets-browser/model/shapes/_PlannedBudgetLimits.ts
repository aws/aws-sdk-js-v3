import { Map as _Map_ } from "@aws-sdk/types";
import { _Spend } from "./_Spend";

export const _PlannedBudgetLimits: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Spend
  }
};
