import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationsForBudgetInput: _Structure_ = {
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
