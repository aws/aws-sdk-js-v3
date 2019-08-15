import { _FieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFieldLevelEncryptionProfileConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionProfileConfig: {
      shape: _FieldLevelEncryptionProfileConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "FieldLevelEncryptionProfileConfig"
};
