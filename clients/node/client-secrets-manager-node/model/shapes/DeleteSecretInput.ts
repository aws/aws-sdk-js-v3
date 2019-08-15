import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSecretInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RecoveryWindowInDays: {
      shape: {
        type: "integer"
      }
    },
    ForceDeleteWithoutRecovery: {
      shape: {
        type: "boolean"
      }
    }
  }
};
