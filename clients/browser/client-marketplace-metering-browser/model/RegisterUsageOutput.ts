import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicKeyRotationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Signature: {
      shape: {
        type: "string"
      }
    }
  }
};
