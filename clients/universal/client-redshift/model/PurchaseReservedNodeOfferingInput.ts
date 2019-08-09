import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedNodeOfferingInput: _Structure_ = {
  type: "structure",
  required: ["ReservedNodeOfferingId"],
  members: {
    ReservedNodeOfferingId: {
      shape: {
        type: "string"
      }
    },
    NodeCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
