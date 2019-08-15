import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "Tags"],
  members: {
    UserName: {
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
