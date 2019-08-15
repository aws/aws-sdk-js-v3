import { _FieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryptionProfile: _Structure_ = {
  type: "structure",
  required: ["Id", "LastModifiedTime", "FieldLevelEncryptionProfileConfig"],
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
    FieldLevelEncryptionProfileConfig: {
      shape: _FieldLevelEncryptionProfileConfig
    }
  }
};
