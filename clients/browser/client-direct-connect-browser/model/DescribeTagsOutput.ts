import { _ResourceTagList } from "./_ResourceTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceTags: {
      shape: _ResourceTagList
    }
  }
};
