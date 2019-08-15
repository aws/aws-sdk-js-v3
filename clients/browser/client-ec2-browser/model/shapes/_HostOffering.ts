import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostOffering: _Structure_ = {
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
    OfferingId: {
      shape: {
        type: "string"
      },
      locationName: "offeringId"
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
