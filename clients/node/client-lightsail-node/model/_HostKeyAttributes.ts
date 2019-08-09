import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostKeyAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    algorithm: {
      shape: {
        type: "string"
      }
    },
    publicKey: {
      shape: {
        type: "string"
      }
    },
    witnessedAt: {
      shape: {
        type: "timestamp"
      }
    },
    fingerprintSHA1: {
      shape: {
        type: "string"
      }
    },
    fingerprintSHA256: {
      shape: {
        type: "string"
      }
    },
    notValidBefore: {
      shape: {
        type: "timestamp"
      }
    },
    notValidAfter: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
