import { _RequestHostIdSet } from "./_RequestHostIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseHostReservationInput: _Structure_ = {
  type: "structure",
  required: ["HostIdSet", "OfferingId"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    },
    HostIdSet: {
      shape: _RequestHostIdSet
    },
    LimitPrice: {
      shape: {
        type: "string"
      }
    },
    OfferingId: {
      shape: {
        type: "string"
      }
    }
  }
};
