import { _FieldLevelEncryptionProfile } from "./_FieldLevelEncryptionProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFieldLevelEncryptionProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionProfile: {
      shape: _FieldLevelEncryptionProfile
    },
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
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
