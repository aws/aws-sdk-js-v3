import { _OfferingStatus } from "./_OfferingStatus";
import { _MonetaryAmount } from "./_MonetaryAmount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OfferingTransaction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offeringStatus: {
      shape: _OfferingStatus
    },
    transactionId: {
      shape: {
        type: "string",
        min: 32
      }
    },
    offeringPromotionId: {
      shape: {
        type: "string",
        min: 4
      }
    },
    createdOn: {
      shape: {
        type: "timestamp"
      }
    },
    cost: {
      shape: _MonetaryAmount
    }
  }
};
