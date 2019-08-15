import { _FieldLevelEncryptionProfileList } from "./_FieldLevelEncryptionProfileList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFieldLevelEncryptionProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionProfileList: {
      shape: _FieldLevelEncryptionProfileList
    }
  },
  payload: "FieldLevelEncryptionProfileList"
};
