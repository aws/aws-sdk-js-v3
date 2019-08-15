import { _PurchaseSet } from "./_PurchaseSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseHostReservationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    Purchase: {
      shape: _PurchaseSet,
      locationName: "purchase"
    },
    TotalHourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "totalHourlyPrice"
    },
    TotalUpfrontPrice: {
      shape: {
        type: "string"
      },
      locationName: "totalUpfrontPrice"
    }
  }
};
