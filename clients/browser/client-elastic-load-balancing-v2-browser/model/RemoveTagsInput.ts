import { _ResourceArns } from "./_ResourceArns";
import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArns", "TagKeys"],
  members: {
    ResourceArns: {
      shape: _ResourceArns
    },
    TagKeys: {
      shape: _TagKeys
    }
  }
};
