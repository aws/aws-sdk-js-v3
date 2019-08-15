import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MonetaryAmount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    amount: {
      shape: {
        type: "float"
      }
    },
    currencyCode: {
      shape: {
        type: "string"
      }
    }
  }
};
