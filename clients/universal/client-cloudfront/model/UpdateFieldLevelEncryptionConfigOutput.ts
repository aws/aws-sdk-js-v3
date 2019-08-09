import { _FieldLevelEncryption } from "./_FieldLevelEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFieldLevelEncryptionConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryption: {
      shape: _FieldLevelEncryption
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "FieldLevelEncryption"
};
