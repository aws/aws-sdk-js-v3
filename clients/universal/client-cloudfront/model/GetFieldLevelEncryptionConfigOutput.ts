import { _FieldLevelEncryptionConfig } from "./_FieldLevelEncryptionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFieldLevelEncryptionConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionConfig: {
      shape: _FieldLevelEncryptionConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "FieldLevelEncryptionConfig"
};
