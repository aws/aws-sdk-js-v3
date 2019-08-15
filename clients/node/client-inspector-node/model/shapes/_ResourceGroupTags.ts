import { List as _List_ } from "@aws-sdk/types";
import { _ResourceGroupTag } from "./_ResourceGroupTag";

export const _ResourceGroupTags: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ResourceGroupTag
  }
};
