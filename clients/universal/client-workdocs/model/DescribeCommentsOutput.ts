import { _CommentList } from "./_CommentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCommentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Comments: {
      shape: _CommentList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
