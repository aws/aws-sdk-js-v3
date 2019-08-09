import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsInput: _Structure_ = {
  type: "structure",
  required: ["ARN", "TagList"],
  members: {
    ARN: {
      shape: {
        type: "string"
      }
    },
    TagList: {
      shape: _TagList
    }
  }
};
