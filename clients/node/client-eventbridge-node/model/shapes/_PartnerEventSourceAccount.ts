import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PartnerEventSourceAccount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Account: {
      shape: {
        type: "string",
        min: 12
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    ExpirationTime: {
      shape: {
        type: "timestamp"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
