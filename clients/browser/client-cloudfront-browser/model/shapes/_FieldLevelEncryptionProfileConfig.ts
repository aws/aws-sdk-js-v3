import { _EncryptionEntities } from "./_EncryptionEntities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryptionProfileConfig: _Structure_ = {
  type: "structure",
  required: ["Name", "CallerReference", "EncryptionEntities"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CallerReference: {
      shape: {
        type: "string"
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    EncryptionEntities: {
      shape: _EncryptionEntities
    }
  }
};
