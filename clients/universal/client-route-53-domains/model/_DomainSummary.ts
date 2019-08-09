import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainSummary: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    AutoRenew: {
      shape: {
        type: "boolean"
      }
    },
    TransferLock: {
      shape: {
        type: "boolean"
      }
    },
    Expiry: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
