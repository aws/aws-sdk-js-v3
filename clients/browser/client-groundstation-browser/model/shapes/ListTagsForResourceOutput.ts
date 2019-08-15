import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tags: {
      shape: _TagsMap
    }
  }
};
