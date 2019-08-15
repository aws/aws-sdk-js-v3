import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicKey: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "blob"
      }
    },
    ValidityStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    ValidityEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Fingerprint: {
      shape: {
        type: "string"
      }
    }
  }
};
