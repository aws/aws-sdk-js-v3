import { _PublicKeySummaryList } from "./_PublicKeySummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicKeyList: _Structure_ = {
  type: "structure",
  required: ["MaxItems", "Quantity"],
  members: {
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    },
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _PublicKeySummaryList
    }
  }
};
