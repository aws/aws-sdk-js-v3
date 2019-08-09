import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BudgetDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
