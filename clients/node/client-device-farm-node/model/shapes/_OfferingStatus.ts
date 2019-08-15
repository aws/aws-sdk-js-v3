import { _Offering } from "./_Offering";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OfferingStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    offering: {
      shape: _Offering
    },
    quantity: {
      shape: {
        type: "integer"
      }
    },
    effectiveOn: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
