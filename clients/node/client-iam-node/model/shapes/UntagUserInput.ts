import { _tagKeyListType } from "./_tagKeyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "TagKeys"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagKeys: {
      shape: _tagKeyListType
    }
  }
};
