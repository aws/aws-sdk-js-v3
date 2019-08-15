import { _FieldPatterns } from "./_FieldPatterns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionEntity: _Structure_ = {
  type: "structure",
  required: ["PublicKeyId", "ProviderId", "FieldPatterns"],
  members: {
    PublicKeyId: {
      shape: {
        type: "string"
      }
    },
    ProviderId: {
      shape: {
        type: "string"
      }
    },
    FieldPatterns: {
      shape: _FieldPatterns
    }
  }
};
