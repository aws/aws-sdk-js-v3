import { _FieldLevelEncryptionConfig } from "./_FieldLevelEncryptionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFieldLevelEncryptionConfigInput: _Structure_ = {
  type: "structure",
  required: ["FieldLevelEncryptionConfig"],
  members: {
    FieldLevelEncryptionConfig: {
      shape: _FieldLevelEncryptionConfig,
      locationName: "FieldLevelEncryptionConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "FieldLevelEncryptionConfig"
};
