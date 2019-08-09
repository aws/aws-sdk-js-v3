import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedElasticsearchInstanceOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedElasticsearchInstanceId: {
      shape: {
        type: "string"
      }
    },
    ReservationName: {
      shape: {
        type: "string",
        min: 5
      }
    }
  }
};
