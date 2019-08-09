import { _ResponseHostIdSet } from "./_ResponseHostIdSet";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostReservation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Count: {
      shape: {
        type: "integer"
      },
      locationName: "count"
    },
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
    End: {
      shape: {
        type: "timestamp"
      },
      locationName: "end"
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
    Start: {
      shape: {
        type: "timestamp"
      },
      locationName: "start"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    UpfrontPrice: {
      shape: {
        type: "string"
      },
      locationName: "upfrontPrice"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
