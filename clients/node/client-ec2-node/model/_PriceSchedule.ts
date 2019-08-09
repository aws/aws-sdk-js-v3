import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PriceSchedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Active: {
      shape: {
        type: "boolean"
      },
      locationName: "active"
    },
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
