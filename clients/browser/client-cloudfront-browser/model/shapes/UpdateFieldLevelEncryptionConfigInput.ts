import { _FieldLevelEncryptionConfig } from "./_FieldLevelEncryptionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFieldLevelEncryptionConfigInput: _Structure_ = {
  type: "structure",
  required: ["FieldLevelEncryptionConfig", "Id"],
  members: {
    FieldLevelEncryptionConfig: {
      shape: _FieldLevelEncryptionConfig,
      locationName: "FieldLevelEncryptionConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    IfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "If-Match"
    }
  },
  payload: "FieldLevelEncryptionConfig"
};
