import { _TagKeyListType } from "./_TagKeyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["SecretId", "TagKeys"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagKeys: {
      shape: _TagKeyListType
    }
  }
};
