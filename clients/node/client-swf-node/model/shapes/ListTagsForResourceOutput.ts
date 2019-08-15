import { _ResourceTagList } from "./_ResourceTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tags: {
      shape: _ResourceTagList
    }
  }
};
