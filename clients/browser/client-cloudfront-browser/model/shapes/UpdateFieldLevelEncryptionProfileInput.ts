import { _FieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFieldLevelEncryptionProfileInput: _Structure_ = {
  type: "structure",
  required: ["FieldLevelEncryptionProfileConfig", "Id"],
  members: {
    FieldLevelEncryptionProfileConfig: {
      shape: _FieldLevelEncryptionProfileConfig,
      locationName: "FieldLevelEncryptionProfileConfig",
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
  payload: "FieldLevelEncryptionProfileConfig"
};
