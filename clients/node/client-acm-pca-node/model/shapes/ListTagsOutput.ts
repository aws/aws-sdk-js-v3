import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _TagList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
