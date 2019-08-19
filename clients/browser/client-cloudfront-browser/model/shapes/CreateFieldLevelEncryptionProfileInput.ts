import { _FieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFieldLevelEncryptionProfileInput: _Structure_ = {
  type: "structure",
  required: ["FieldLevelEncryptionProfileConfig"],
  members: {
    FieldLevelEncryptionProfileConfig: {
      shape: _FieldLevelEncryptionProfileConfig,
      locationName: "FieldLevelEncryptionProfileConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "FieldLevelEncryptionProfileConfig"
};
