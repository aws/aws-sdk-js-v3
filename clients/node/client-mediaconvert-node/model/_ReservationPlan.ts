import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationPlan: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Commitment: {
      shape: {
        type: "string"
      },
      locationName: "commitment"
    },
    ExpiresAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "expiresAt"
    },
    PurchasedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "purchasedAt"
    },
    RenewalType: {
      shape: {
        type: "string"
      },
      locationName: "renewalType"
    },
    ReservedSlots: {
      shape: {
        type: "integer"
      },
      locationName: "reservedSlots"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
