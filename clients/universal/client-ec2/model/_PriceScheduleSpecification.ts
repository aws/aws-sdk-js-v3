import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PriceScheduleSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    Price: {
      shape: {
        type: "float"
      },
      locationName: "price"
    },
    Term: {
      shape: {
        type: "integer"
      },
      locationName: "term"
    }
  }
};
