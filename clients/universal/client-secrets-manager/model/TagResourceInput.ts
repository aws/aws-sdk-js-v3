import { _TagListType } from "./_TagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["SecretId", "Tags"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagListType
    }
  }
};
