import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3InitiateRestoreObjectOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExpirationInDays: {
      shape: {
        type: "integer"
      }
    },
    GlacierJobTier: {
      shape: {
        type: "string"
      }
    }
  }
};
