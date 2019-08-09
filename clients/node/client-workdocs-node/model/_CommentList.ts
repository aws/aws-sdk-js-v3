import { List as _List_ } from "@aws-sdk/types";
import { _Comment } from "./_Comment";

export const _CommentList: _List_ = {
  type: "list",
  member: {
    shape: _Comment
  }
};
