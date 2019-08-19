import { _ResourceTagList } from "./_ResourceTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceTagList: {
      shape: _ResourceTagList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
