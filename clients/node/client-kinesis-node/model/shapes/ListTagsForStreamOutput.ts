import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForStreamOutput: _Structure_ = {
  type: "structure",
  required: ["Tags", "HasMoreTags"],
  members: {
    Tags: {
      shape: _TagList
    },
    HasMoreTags: {
      shape: {
        type: "boolean"
      }
    }
  }
};
