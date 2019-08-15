import { _RecipientsList } from "./_RecipientsList";
import { _ReceiptActionsList } from "./_ReceiptActionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReceiptRule: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    TlsPolicy: {
      shape: {
        type: "string"
      }
    },
    Recipients: {
      shape: _RecipientsList
    },
    Actions: {
      shape: _ReceiptActionsList
    },
    ScanEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
