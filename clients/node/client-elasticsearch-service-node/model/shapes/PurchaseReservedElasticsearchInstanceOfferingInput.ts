import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedElasticsearchInstanceOfferingInput: _Structure_ = {
  type: "structure",
  required: ["ReservedElasticsearchInstanceOfferingId", "ReservationName"],
  members: {
    ReservedElasticsearchInstanceOfferingId: {
      shape: {
        type: "string"
      }
    },
    ReservationName: {
      shape: {
        type: "string",
        min: 5
      }
    },
    InstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
