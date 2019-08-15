import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstanceLimitPrice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Amount: {
      shape: {
        type: "float"
      },
      locationName: "amount"
    },
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    }
  }
};
