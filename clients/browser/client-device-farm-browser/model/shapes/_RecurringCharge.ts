import { _MonetaryAmount } from "./_MonetaryAmount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecurringCharge: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cost: {
      shape: _MonetaryAmount
    },
    frequency: {
      shape: {
        type: "string"
      }
    }
  }
};
