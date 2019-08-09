import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBudgetInput: _Structure_ = {
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
    }
  }
};
