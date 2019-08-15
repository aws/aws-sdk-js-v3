import { _ResourceTags } from "./_ResourceTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _ResourceTags
    }
  }
};
