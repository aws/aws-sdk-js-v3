import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Credentials: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessKeyId: {
      shape: {
        type: "string"
      }
    },
    SecretKey: {
      shape: {
        type: "string"
      }
    },
    SessionToken: {
      shape: {
        type: "string"
      }
    },
    Expiration: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
