import { _FieldLevelEncryptionConfig } from "./_FieldLevelEncryptionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryption: _Structure_ = {
  type: "structure",
  required: ["Id", "LastModifiedTime", "FieldLevelEncryptionConfig"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    FieldLevelEncryptionConfig: {
      shape: _FieldLevelEncryptionConfig
    }
  }
};
