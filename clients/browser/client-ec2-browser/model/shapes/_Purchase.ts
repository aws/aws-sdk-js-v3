import { _ResponseHostIdSet } from "./_ResponseHostIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Purchase: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    Duration: {
      shape: {
        type: "integer"
      },
      locationName: "duration"
    },
    HostIdSet: {
      shape: _ResponseHostIdSet,
      locationName: "hostIdSet"
    },
    HostReservationId: {
      shape: {
        type: "string"
      },
      locationName: "hostReservationId"
    },
    HourlyPrice: {
      shape: {
        type: "string"
      },
      locationName: "hourlyPrice"
    },
    InstanceFamily: {
      shape: {
        type: "string"
      },
      locationName: "instanceFamily"
    },
    PaymentOption: {
      shape: {
        type: "string"
      },
      locationName: "paymentOption"
    },
    UpfrontPrice: {
      shape: {
        type: "string"
      },
      locationName: "upfrontPrice"
    }
  }
};
