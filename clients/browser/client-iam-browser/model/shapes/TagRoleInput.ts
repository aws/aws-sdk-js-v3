import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "Tags"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _tagListType
    }
  }
};
