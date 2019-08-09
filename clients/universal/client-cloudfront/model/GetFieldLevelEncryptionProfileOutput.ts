import { _FieldLevelEncryptionProfile } from "./_FieldLevelEncryptionProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFieldLevelEncryptionProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionProfile: {
      shape: _FieldLevelEncryptionProfile
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "FieldLevelEncryptionProfile"
};
