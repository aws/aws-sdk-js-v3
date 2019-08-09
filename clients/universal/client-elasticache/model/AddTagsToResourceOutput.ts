import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TagList: {
      shape: _TagList
    }
  }
};
