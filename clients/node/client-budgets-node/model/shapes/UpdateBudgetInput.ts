import { _Budget } from "./_Budget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBudgetInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "NewBudget"],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    NewBudget: {
      shape: _Budget
    }
  }
};
