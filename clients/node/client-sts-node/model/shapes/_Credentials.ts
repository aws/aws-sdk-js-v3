import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Credentials: _Structure_ = {
  type: "structure",
  required: ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"],
  members: {
    AccessKeyId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    SecretAccessKey: {
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
