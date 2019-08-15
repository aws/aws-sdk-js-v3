import { _OfferingTransactions } from "./_OfferingTransactions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOfferingTransactionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    offeringTransactions: {
      shape: _OfferingTransactions
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
