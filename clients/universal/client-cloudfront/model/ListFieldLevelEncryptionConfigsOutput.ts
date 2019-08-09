import { _FieldLevelEncryptionList } from "./_FieldLevelEncryptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFieldLevelEncryptionConfigsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FieldLevelEncryptionList: {
      shape: _FieldLevelEncryptionList
    }
  },
  payload: "FieldLevelEncryptionList"
};
