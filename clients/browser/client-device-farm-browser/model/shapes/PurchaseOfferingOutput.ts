import { _OfferingTransaction } from "./_OfferingTransaction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offeringTransaction: {
      shape: _OfferingTransaction
    }
  }
};
