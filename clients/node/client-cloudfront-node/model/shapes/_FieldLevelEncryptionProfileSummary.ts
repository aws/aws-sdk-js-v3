import { _EncryptionEntities } from "./_EncryptionEntities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryptionProfileSummary: _Structure_ = {
  type: "structure",
  required: ["Id", "LastModifiedTime", "Name", "EncryptionEntities"],
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
    Name: {
      shape: {
        type: "string"
      }
    },
    EncryptionEntities: {
      shape: _EncryptionEntities
    },
    Comment: {
      shape: {
        type: "string"
      }
    }
  }
};
