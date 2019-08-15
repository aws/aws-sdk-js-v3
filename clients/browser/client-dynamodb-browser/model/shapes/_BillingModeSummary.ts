import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BillingModeSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BillingMode: {
      shape: {
        type: "string"
      }
    },
    LastUpdateToPayPerRequestDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
