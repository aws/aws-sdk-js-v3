import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateBudgetWithResourceInput: _Structure_ = {
  type: "structure",
  required: ["BudgetName", "ResourceId"],
  members: {
    BudgetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
