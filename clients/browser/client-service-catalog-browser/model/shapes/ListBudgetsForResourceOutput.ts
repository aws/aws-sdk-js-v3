import { _Budgets } from "./_Budgets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBudgetsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Budgets: {
      shape: _Budgets
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
