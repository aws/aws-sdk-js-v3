import { _tagKeyListType } from "./_tagKeyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "TagKeys"],
  members: {
    RoleName: {
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
