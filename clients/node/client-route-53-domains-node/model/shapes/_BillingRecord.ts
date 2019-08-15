import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BillingRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string"
      }
    },
    Operation: {
      shape: {
        type: "string"
      }
    },
    InvoiceId: {
      shape: {
        type: "string"
      }
    },
    BillDate: {
      shape: {
        type: "timestamp"
      }
    },
    Price: {
      shape: {
        type: "float"
      }
    }
  }
};
