import { _ResourceArns } from "./_ResourceArns";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArns", "Tags"],
  members: {
    ResourceArns: {
      shape: _ResourceArns
    },
    Tags: {
      shape: _TagList
    }
  }
};
