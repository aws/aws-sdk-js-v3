import { _BonusPaymentList } from "./_BonusPaymentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBonusPaymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BonusPayments: {
      shape: _BonusPaymentList
    }
  }
};
